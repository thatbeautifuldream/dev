# Lecture 013 | JavaScript Interview Prepration

## Note : `JavaScript is a Synchronous Single Threaded Language`

## Execution Context in Js

> Execution context is the environment in which the JavaScript code is executed.
> It is the place where all the variables and functions are defined.

## Global Execution Context

> The global execution context is the execution context in which the code is executed when it is loaded in the browser.
> The global execution context is also called the global object.

## Phases in Execution Context (Code Execution)

> 1. Creation of Execution Context - Memory allocation and initialization of variables and functions.
> 2. Execution of Code - Execution of the code.
> 3. Destruction of Execution Context - Memory deallocation (Garbage Collection)

## Execution Context explained w/ Code

```javascript
var a = 2;
var b = 3;
function add(m, n) {
  var sum = m + n;
  return sum;
}
var sum1 = add(1, 2);
var sum2 = add(a, b);
console.log(sum1);
console.log(sum2);
```

## Execution Context explained w/o Code

![Screenshot 2022-01-22 at 9 58 44 PM](https://user-images.githubusercontent.com/28717686/150647134-4c7c1065-7a35-4a76-848b-c4c9b29e5662.png)

## Example of Execution Context : `Square Function`

```javascript
var n = 2;
function square(n) {
  return n * n;
}
var sq1 = square(n);
var sq2 = square(2);
console.log(sq1);
console.log(sq2);
```

## Flow in Execution Context

```text
first the global execution context is created
then the function is executed
then the local execution context is created
then the local execution context is destroyed
then the global execution context is destroyed
```

## Resources to read about Execution Context

[Blog 1](https://medium.com/innovation-incubator/javascript-execution-context-c5d807d206f5)

## Hoisting

> Hoisting is the process of moving declarations to the top of the current scope.

## Hoisting in JavaScript

```javascript
console.log(a);
var a = 2;
greet();
function greet() {
  console.log("Hello!");
}

// ⋊> ~/D/g/pepcoding-webdev on main ⨯ node lecture-014/hoisting.js
// undefined
// Hello!
```

## Understanding Hoisting | Example (Illustrated with Execution Context in Phase 1 and Phase 2)
