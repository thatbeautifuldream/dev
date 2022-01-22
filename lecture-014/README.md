# Lecture 013 | JavaScript Interview Prepration

## Note : `Java Script is a Synchronous Single Threaded Language`

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

![Screenshot 2022-01-22 at 9 58 44 PM](https://user-images.githubusercontent.com/28717686/150647134-4c7c1065-7a35-4a76-848b-c4c9b29e5662.png)
