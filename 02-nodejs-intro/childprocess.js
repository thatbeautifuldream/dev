let cp = require("child_process");
// cp.execSync("calc");
// console.log("tried to open calculator");
// cp.execSync("notepad");
// console.log("tried to open notepad");
// cp.execSync("code");
// console.log("tried to open VS Code");
console.log("tried to open my bio.link");
cp.execSync("start firefox https://milind.bio.link");
console.log("opened my bio.link on firefox");
let output = cp.execSync("node abc.js");
console.log("output " + output)
