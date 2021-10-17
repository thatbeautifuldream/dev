let cp = require("child_process");
console.log("Trying to open calculator.");
cp.execSync("calc");
console.log("Trying to open notepad.");
cp.execSync("notepad");
