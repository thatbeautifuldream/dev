console.log('Hello from the console!');
// alert('Hello from the alert!');
// prompt('What is your name?');
// confirm('Are you sure?');
// document.write('Hello from the document!');
// document.write('<h1>Hello from the document!</h1>');

// Variables : 
var a; // variable initialised with undefined
console.log(a);
a = 'I am a String'; // possible to reassign a variable with diffrent data types
console.log(a);
var a = true; // possible to redeclare here boolean : true or false
// not good to be able to redeclare a variable with the same name! leads to lot of missunderstanding
// shortcomming of var keyword!

// Js is a dynamically typed language
// A language is dynamically-typed if the type of a variable is checked during run-time.
// Common examples of dynamically-typed languages includes JavaScript, Objective-C, PHP, Python, Ruby, Lisp, and Tcl.

a = 3
console.log(a);

a = 'I am a String';
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
var b = 'hello';
var b = 'bye';
console.log(b);

// overcomming redeclaration : we use let keyword

let b = 'hello';
let b = 'bye';
console.log(a); // this will not work! Identifier 'b' has already been declared

// multiple redeclarations not allowed in let

let b = 'hello';
b = 'bye';
console.log(b);
// reassignment is allowed in let