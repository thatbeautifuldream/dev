// all the buffer data conversion to string and all strings conversion to JSON is now not required
const jsonFile = require("./example.json");
// all data is now an array of objects stored in jsonFile variable

const log = console.log;

jsonFile.push({
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

log(jsonFile);
