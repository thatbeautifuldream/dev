const log = console.log;

let str = "Hello";

let obj = {
  name: "John",
  age: 30,
};

let num = 20;

let arr = [1, 2, 3, 4, 5];

log(typeof str); // string
log(typeof obj); // object
log(typeof num); // number
log(typeof arr); // object! Refrence types are all objects

// the catch here is that all references are objects and since array is an Reference type, it is also an object
// so `arr.isArray()` method used to check if the variable is an array

log(Array.isArray(str)); // false // string is not an array
log(Array.isArray(obj)); // false (object is not an array)
log(Array.isArray(num)); // false - number is not an array
log(Array.isArray(arr)); // true (arr is an array)
