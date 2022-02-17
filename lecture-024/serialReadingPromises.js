const fs = require("fs");
const log = console.log;

log("Before");

// let f1p = fs.promises.readFile("f1.txt"); // read file f1.txt (pending)
// f1p.then(cb); // callback
// function cb(data) {
//   log("File data : " + data); // File data : text from f1 (resolved)
//   let f2p = fs.promises.readFile("f2.txt"); // read file f2.txt (pending)
//   f2p.then(cb2); // callback
// }

// function cb2(data) {
//   log("File data : " + data); // File data : text from f2 (resolved)
//   let f3p = fs.promises.readFile("f3.txt"); // read file f3.txt (pending)
//   f3p.then(cb3); // callback
// }

// function cb3(data) {
//   log("File data : " + data); // File data : text from f3 (resolved)
// }

// improment

let f1p = fs.promises.readFile("f1.txt"); // read file f1.txt (pending)

function cb(data) {
  log("File data : " + data); // File data : text from f1 (resolved)
  let f2p = fs.promises.readFile("f2.txt"); // read file f2.txt (pending)
  return f2p;
}

function cb2(data) {
  log("File data : " + data); // File data : text from f2 (resolved)
  let f3p = fs.promises.readFile("f3.txt"); // read file f3.txt (pending)
  return f3p;
}

function cb3(data) {
  log("File data : " + data); // File data : text from f3 (resolved)
}

f1p
  .then(cb)
  .then(cb2)
  .then(cb3)
  .catch(function (err) {
    log(err);
  });

log("After");
