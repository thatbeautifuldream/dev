// fileSystem
// files -> create, read, update, delete
let fs = require("fs");
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data " + buffer);
// create
// fs.openSync("abc.txt", "w");
fs.writeFileSync("abc.txt", "This is a text file.");
// update
fs.appendFileSync("abc.txt", "Are you happy now ?");
