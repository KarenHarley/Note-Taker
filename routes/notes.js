const router = require("express").Router();
const uniqid = require("uniqid");
const { readFromFile, readAndAppend, writeToFile } = require("../helpers");
const notes = require("../db/db.json");
//GET route for api/notes

router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//POST route for api/notes
router.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body; //deconstructing

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uniqid(),
    };

    readAndAppend(newNote, "./db/db.json"); //adding the
    res.json(`Note added successfully!`);
  } else {
    res.error("Error in adding Note");
  }
});

//DELETE route for api/notes/:id
router.delete("/:id", (req, res) => {
  const requestedId = req.params.id.toLowerCase();
  console.log(requestedId);

  const newNotes = notes.filter(function (each) {
    return each.id !== requestedId;
  });

  writeToFile(newNotes, "./db/db.json");

  location.reload();
});

module.exports = router;
