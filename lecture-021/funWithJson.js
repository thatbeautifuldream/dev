const log = console.log;
const fs = require("fs");

// whenever a file is read it gets read as a buffer data
let buffer = fs.readFileSync("example.json");
log(buffer);
// to parse the buffer we need to convert it to a string
let json = buffer.toString();
log(json);
