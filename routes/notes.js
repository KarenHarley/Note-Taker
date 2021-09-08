const express = require("express");
var uniqid = require('uniqid'); 
const router = express.Router();
const { readFromFile, readAndAppend } = require("../helpers/helper");
//const data = require("./db/db.json");

router.get("/", (req, res) => {
  //res.json(JSON.parse(data));
  //console.log("hello "+ req.method)
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  
  
});
//"title":"Test Title",
//"text":"Test text"

router.post("/", (req, res) => {
  //res.json(JSON.parse(data));
  //  res.json("hello "+ req.method)
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
  //res.json(JSON.parse(data));
  //console.info("Hi");
  //res.json("hello " + req.method);
  //readFromFile("./db/db.json").then((data) => {
 //   if(data.id === res.id){
  //    console.log("worked")
   //  } else {
   //     console.log("didint")
   //   }
 // });
  
});

module.exports = router;


/*
readFromFile("./db/db.json").then((data) => {

    res.json(JSON.parse(data))
    console.log(JSON.parse(data))
  });
*/