const log = console.log;
const fs = require("fs");

// whenever a file is read it gets read as a buffer data
let buffer = fs.readFileSync("example.json");
// log(buffer);
// to parse the buffer we need to convert it to a string
// let data = buffer.toString();
// to parse JSON we use the JSON.parse() method
let data = JSON.parse(buffer);
// log(data);

// since data is now an array of objects we can manupulate it using array methords

data.push({
  name: "Manish Malhotra",
  age: "28",
  height: "5.8",
  weight: "65",
  isAvenger: true,
  isCaptain: false,
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
});

log(data);

// to convert the data back to a buffer we use the JSON.stringify() method
let stringData = JSON.stringify(data);
log(stringData);

// the purpose to stringify was to use fs.writeFileSync() since fs.writeFileSync() only accepts strings
fs.writeFileSync("example.json", stringData);
log("File written successfully");
