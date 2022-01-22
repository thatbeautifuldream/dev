// let arr = [1, 2, 3];

// console.log(arr, typeof arr);

// let obj = {
//   name: "John",
//   age: 30,
// };

// console.log(obj, typeof obj);

// function greet(name) {
//   console.log("Hello", name);
// }

// console.log(greet, typeof greet);

// // > ~/D/g/pepcoding-webdev on main ⨯ node lecture-014/refrenceDataType.js
// // [ 1, 2, 3 ] object
// // { name: 'John', age: 30 } object
// // [Function: greet] function

let firstPerson = "Hitesh";
let secondPerson = firstPerson; // copy
firstPerson = "Arshad"; // change
console.log(firstPerson, secondPerson); // Arshad Hitesh

// ⋊> ~/D/g/pepcoding-webdev on main ⨯ node lecture-014/refrenceDataType.js
// Arshad Hitesh

// access by reference
let fp = {
  name: "Hitesh",
  age: 30,
};
let sp = fp; // copy
fp.name = "Arshad"; // change
console.log(fp, sp); // { name: 'Arshad', age: 30 } { name: 'Arshad', age: 30 }

// ⋊> ~/D/g/pepcoding-webdev on main ◦ node lecture-014/refrenceDataType.js
// { name: 'Arshad', age: 30 } { name: 'Arshad', age: 30 }
