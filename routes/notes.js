const router = require("express").Router();
const uniqid = require("uniqid");
const { readFromFile, readAndAppend } = require("../helpers");
//const notes = require("")
const notes = require("../db/db.json");

router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uniqid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error("Error in adding tip");
  }
});

router.delete("/:id", (req, res) => {
  const requestedId = req.params.id.toLowerCase();
  console.log(requestedId)

  notes.forEach((each)=>{
    if (each.id.toLocaleLowerCase() === requestedId){
      console.log("right id")
    //each.slice(each,each);
    }
  })
});

module.exports = router;


