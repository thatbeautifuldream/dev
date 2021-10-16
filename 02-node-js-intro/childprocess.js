let cp = require("child_process");
cp.execSync("calc");
console.log("tried to open calculator");
cp.execSync("notepad");
console.log("tried to open notepad");
