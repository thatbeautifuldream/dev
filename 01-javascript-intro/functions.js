 // Non-Primitive Data types: Array, Object, Function, Date, RegExp
// function defination
function sayHi(param) {
  console.log("Hello from sayHi");
  console.log("Param recieved", param);
  return "returned from a function";
}
// function call
sayHi();
sayHi(10);
sayHi("Hello");
sayHi([1, 2, 3]);
let rVal = sayHi([1, 2, 3, 4]);
console.log("Returned value", rVal);
