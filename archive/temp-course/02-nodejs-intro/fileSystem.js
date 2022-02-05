// fileSystem
// files -> create, read,               update,          delete
// open -w          readfileSync        appendfile       unlinkSync
// writefileSync

let fs = require("fs");
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data " + buffer);
// create
// fs.openSync("abc.txt", "w");
// no file -> create and file exist -> content replaced
// create write
// fs.writeFileSync("abc.txt", "This is a text file.");
// update
// fs.appendFileSync("abc.txt", "Are you happy now ?");

// folder
// create       read                     delete
// mkdirSync    readdirSync             rmdirSync
// fs.mkdirSync("myDirectory");

// fs.writeFileSync("myDirectory/myFile.txt", "My content");
// let content = fs.readFileSync("myDirectory"); // all files listed inside directory
// console.log(content);
// for (let i = 0; i < content.length; i++) {
//   console.log("file " + content[i] + " is removed");
//   // remove file
//   fs.unlinkSync("myDirectory/" + content[i]);
// }
// removes folder
// fs.rmdirSync("myDirectory");
// fs.exixstsSync("myDirectory");-> true or false
// let doesPathExist = fs.existsSync("myDirectory");
// console.log(doesPathExist);
// // fs.lstatSync("myDirectory"); -> stats
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();

// C:\Users\Milind Mishra\Documents\git-repos\pepcoding-webdev\02-nodejs-intro

