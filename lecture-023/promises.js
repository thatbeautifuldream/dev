const fs = require("fs");
const log = console.log;

log("Before");

// fs.readFile("file1.txt", function (err, data) {
//   if (err) {
//     log(err);
//   }
//   log("File 1: " + data.toString());
// });

let promise = fs.promises.readFile("file1.txt"); // handles the callback function mechanism as default (got the token here ⚡️)
// log("Promise: " + promise); // Promise { <pending> }
// The two dedicated methords : then and catch, are used to fulfill the promise
// in order to fulfill the promise, we need to call the then() method
// in order to handle rejection, we need to call the catch() method

promise
  .then(function (data) {
    log("File 1: " + data); // handles the fulfillment of the promise
  })
  .catch(function (err) {
    log(err); // handles the rejection of the promise
  });

log("Promise: " + promise); // promise settled

log("After");
