const log = console.log;
const fs = require("fs");
const xlsx = require("xlsx");

// all the buffer data conversion to string and all strings conversion to JSON is now not required
const jsonFile = require("./example.json");
// all data is now an array of objects stored in jsonFile variable

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

// flow : workbook -> worksheet (convert into rows and cols) expects a JSON data -> excel file

// writing to excel file

let newWB = xlsx.utils.book_new(); // create a new workbook file
let newWS = xlsx.utils.json_to_sheet(jsonFile); // convert the json data to a worksheet (sheet format)
xlsx.utils.book_append_sheet(newWB, newWS, "persons"); // append the worksheet to the workbook
xlsx.writeFile(newWB, "file.xlsx"); // write the workbook to a file

// reading the excel file

let wb = xlsx.readFile("./file.xlsx"); // read the file
let excelData = wb.Sheets["persons"]; // get the sheet
let ans = xlsx.utils.sheet_to_json(excelData); // convert the sheet to json
console.log(ans); // print the json data
