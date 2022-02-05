const log = console.log;

log(a); // but it is undefined, since it is not valued yet
var a = 2; // gets memory location

var x;
log(x); // undefined

function test() {
  // returns nothing
}

log(test()); // undefined

function test2() {
  return null; // explicitly assigned null
}

log(test2()); // returns null

let b = global.x; // using a global objects x which is non existent
log(b); // undefined

let person = {
  name: "Adam",
  age: null,
};

let p1 = person.name; // p1 is a string
let p2 = person.age; // p2 is a number
let p3 = person.address; // p3 is undefined

log(`${p1} is ${p2} years old from ${p3}`);
// Adam is 30 years old from undefined

// whenever we dont assign value to a variable, it is undefined
// null is passed as a value explicitly

// Null vs undefined
// Null is a value that is explicitly assigned
// undefined is a value that is not assigned

let formObj = {
  firstName: "Milind",
  middleName: null, // explicitly assigned null
  lastName: "Mishra",
};

log(formObj.middleName); // null : explicit assignment
log(formObj.age); // undefined : not assigned

// Null explicitly tells that the value is empty
// undefined tells that the value is not assigned
