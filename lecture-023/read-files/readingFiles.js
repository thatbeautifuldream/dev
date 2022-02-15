const fs = require("fs");
const log = console.log;

let f1p = fs.promises.readFile("f1.txt");
let f2p = fs.promises.readFile("f2.txt");
let f3p = fs.promises.readFile("f3.txt");

function cb(data) {
  log("File data :" + data);
}

f1p.then(cb);
f2p.then(cb);
f3p.then(cb);

// micro task queue : it is a queue of micro tasks that are executed in the order they are added to the queue.
