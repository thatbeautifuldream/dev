// Child Process Module : It is used to run a command in the background.
// it used to create subprocesses with script
const cp = require("child_process"); // module is imported

// console.log("Trying to open Calculator");
// cp.execSync("calc"); // execSync is used to run a command in the background.
// :p installed a c style calculator before running this code on linux

// console.log("Making a new folder here");
// cp.execSync("mkdir newFolder");

// console.log("Trying to make a new js file");
// cp.execSync("touch newFile.js");

// console.log("Trying to open VS Code from current directory");
// cp.execSync("code .");

console.log("Opening browser with google.com");
// cp.execSync("start chrome google.com"); // start is used to open browser in Windows
cp.execSync("xdg-open https://google.com"); // for linux
