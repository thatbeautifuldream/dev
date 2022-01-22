let arr = [1, 2, 3];

console.log(arr, typeof arr);

let obj = {
  name: "John",
  age: 30,
};

console.log(obj, typeof obj);

function greet(name) {
  console.log("Hello", name);
}

console.log(greet, typeof greet);

// > ~/D/g/pepcoding-webdev on main ⨯ node lecture-014/refrenceDataType.js
// [ 1, 2, 3 ] object
// { name: 'John', age: 30 } object
// [Function: greet] function

