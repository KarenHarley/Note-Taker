const fs = require("fs");
const util = require("util");

const readFromFile = util.promisify(fs.readFile);

/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {object} content The content you want to write to the file.
 *  @param {string} destination The file you want to write to.
 *  @returns {void} Nothing
 */

const writeToFile = (content, destination) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)//if error log it else log some text
  );

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {//reading it first
    if (err) {
      console.error(err);//logging the error
    } else {
      const parsedData = JSON.parse(data);//parsing the data 
      parsedData.push(content);
      writeToFile(parsedData, file); //calling the writeToFile function
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };
