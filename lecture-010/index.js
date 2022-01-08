// !Agenda for today:
// Node.js
// Copying Files and Directories using fs module

// importing the required modules
const fs = require("fs"); // fs module : file system
const path = require("path"); // path module : to get the path of the file
// fs.copyFile(src, dest, callback) : copies the file from src to dest
// fs.copyFileSync(src, dest) : copies the file from src to dest
// fs.mkdirSync("./test"); // creates the directory
// let srcFile = path.join(__dirname, "./index.js"); // gets the path of the file
// let destFolder = path.join(__dirname, "./test"); // gets the path of the folder
// fs.copyFileSync(srcFile, destFolder); // copies the file from src to dest

// Copying File Illustration :

let srcFilePath = "./test.txt";
let destFolderPath = "./test/";
let toCopy = path.basename(srcFilePath); // gets the file name
console.log(toCopy);
let destFilePath = path.join(destFolderPath, toCopy); // gets the path of the file
console.log(destFilePath);
fs.copyFileSync(srcFilePath, destFilePath); // copies the file from src to dest
console.log("File Copied");

// finding out extension of the file
let ext = path.extname(srcFilePath);
console.log(ext);

// getting the basename of the file
let base = path.basename(srcFilePath);
console.log("Base Name : " + base);

console.log(__dirname); // gets the path of the current directory
console.log(__filename); // gets the path of the current file
