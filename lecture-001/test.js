console.log("Hello from the console!");
// alert('Hello from the alert!');
// prompt('What is your name?');
// confirm('Are you sure?');
// document.write('Hello from the document!');
// document.write('<h1>Hello from the document!</h1>');

// Variables :
var a; // variable initialised with undefined
console.log(a);
a = "I am a String"; // possible to reassign a variable with diffrent data types
console.log(a);
var a = true; // possible to redeclare here boolean : true or false
// not good to be able to redeclare a variable with the same name! leads to lot of missunderstanding
// shortcomming of var keyword!

// Js is a dynamically typed language
// A language is dynamically-typed if the type of a variable is checked during run-time.
// Common examples of dynamically-typed languages includes JavaScript, Objective-C, PHP, Python, Ruby, Lisp, and Tcl.

a = 3;
console.log(a);

a = "I am a String";
console.log(a);

a = true;
console.log(a);

a = null;
console.log(a);

// Data types in JavaScript - primitive types
// String
// Number
// Boolean
// Null
// Undefined

// Var has some problems  - Redeclaration
var b = "hello";
var b = "bye";
console.log(b);

// overcomming redeclaration : we use let keyword

let b = "hello";
let b = "bye";
console.log(a); // this will not work! Identifier 'b' has already been declared

// multiple redeclarations not allowed in let

let b = "hello";
b = "bye";
console.log(b);
// reassignment is allowed in let

// Diffrence in var and let
// var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
// var variables can be redeclared whereas let variables cannot.
// It can be said that a variable declared with var is defined throughout the program as compared to let.

// Loops in Js (Iterative Statements)

for (var i = 0; i < 5; i++) {
  console.log(i);
}

// program to check if a number is prime or not
var flag = true;
var num = 13;
for (var i = 2; i * i < num; i++) {
  if (num % i == 0) {
    flag = false;
    break;
  }
}
if (flag) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}

// The second problem with var - scoping problem

if (true) {
  var x = 5;
  console.log(x); // var keyword is function scoped!
}
console.log(x); // this can be accessed outside the if block as well!
// this is problamatic!

if (true) {
  let x = 5;
  console.log(x); // let keyword is block scoped!
}
console.log(x); // this will not work! Identifier 'x' has not been declared

// const

const a = 5;
console.log(a);
a = 10; // this will not work!

// functions in Js

function sayHello() {
  console.log("Hello");
} // function declaration

sayHello(); // function invocation

// pass parameters in a function

function add(a, b) {
  console.log(a + b);
}
add(3, 4);

function mult(a, b) {
  return a * b;
}
console.log(mult(3, 4));

// functions as first class citizens
// js does not diffrentiate between functions and variables
// functions can be passed as parameters to other functions
// functions can be returned from other functions
// functions can be assigned to variables

let sayHi = function () {
  // anonymous function
  console.log("Hi"); // in js functions are first class citizens
}; // function expression
sayHi(); // is being called later on

// IIFE (Immediately Invoked Function Expression)

let add = (function (a, b) {
  return a + b;
})(3, 4); // this is called immediately invoked function expression
console.log(add);

let substract = (function (a, b) {
  return a - b;
})(200, 40);
console.log(substract);

// IIFE can be used in web automation
// IIFE is used when we want to execute a function as soon as the page is loaded
// IIFE is used when we want to execute a function once and then we don't want to use it again

// "Its a sin to use var keyword in the global scope if you're a Js Developer"
// var keyword is function scoped
// let keyword is block scoped
// const keyword is block scoped

// side note : `if java is car js is carpet` all in all js and java are unrelated
