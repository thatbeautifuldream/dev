console.log(a); // but it is undefined, since it is not valued yet
var a = 2; // gets memory location

var x;
console.log(x); // undefined

function test() {
  // returns nothing
}

console.log(test()); // undefined

function test2() {
  return null; // explicitly assigned null
}

console.log(test2()); // returns null

let b = global.x; // using a global objects x which is non existent
console.log(b); // undefined

let person = {
  name: "Adam",
  age: null,
};

let p1 = person.name; // p1 is a string
let p2 = person.age; // p2 is a number
let p3 = person.address; // p3 is undefined

console.log(`${p1} is ${p2} years old from ${p3}`);
// Adam is 30 years old from undefined

// whenever we dont assign value to a variable, it is undefined
// null is passed as a value explicitly
