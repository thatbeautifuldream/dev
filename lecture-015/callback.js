const { log } = require("console");
const fs = require("fs");

// Callback functions in Js

// Callback functions are functions that are passed to other functions as arguments.
// They are used to execute code after the function that calls them is finished executing.
// They are also used to execute code in response to events.
// They are used to execute code in response to asynchronous events.

function printFirstName(firstName, cb, cb2) {
  // cb is a callback function parameter
  console.log(firstName);
  cb("Doe"); // cb is passed to printLastName
  cb2(23);
}

function printLastName(lastName) {
  // function that is passed to printFirstName as a callback
  console.log(lastName);
}

function printAge(age) {
  // function that is passed to printFirstName as second callback parameter
  console.log(age);
}

printFirstName("John", printLastName, printAge); // prints "John" and "Doe" and "23"

// Syncronous way of reading a file

console.log("before"); // before file reading starts
const text = fs.readFileSync("./lecture-015/file.txt", "utf8");
console.log(text);
console.log("after"); // after file reading ends

// Asyncronous way of reading a file
// readFile() expects a callback function as a parameter

console.log("before"); // before file reading starts
fs.readFile("./lecture-015/file.txt", "utf8", cb);
fs.readFile("./lecture-015/file2.txt", "utf8", cb2);
function cb(err, text) {
  if (err) {
    console.log("error");
  } else {
    console.log(text);
  }
}

console.log("after"); // after file reading ends

// error first callbacks : error first callbacks are functions that are passed to handle error events

function cb2(err, text) {
  if (err) {
    console.log("error");
  } else {
    console.log(text);
  }
}

// The nature of these async functions is that they are not executed immediately.
// And the order can vary depending on the order of the events. The order of the events is not guaranteed.
