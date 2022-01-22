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

## Hoisting : `Hoisting is JavaScript's default behavior of moving declarations to the top.`

> 1. Hoisting is the process of moving declarations to the top of the current scope.
> 2. Its is relative to the current execution context.
> 3. It is a JavaScript feature that allows you to declare a variable before you use it.

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

![Screenshot 2022-01-22 at 10 34 02 PM](https://user-images.githubusercontent.com/28717686/150648413-5c558c6f-47ce-4408-9df2-7a3d4c2e9221.png)

## Temporal Dead Zone | Good Practices

> 1. Good practice is to avoid using the temporal dead zone. (Scoping rules, accessablity, etc.)
> 2. Temporal dead zone is a feature of JavaScript that allows you to declare a variable before you use it.
> 3. `let` and `const` are not hoisted and when accessed before declaration, it throws an error.

```javascript
console.log(a); // undefined -> a is not defined (not hoisted)
const a = 2;
```

![Screenshot 2022-01-22 at 10 49 15 PM](https://user-images.githubusercontent.com/28717686/150648980-b05d8314-2821-4c0d-a825-38d08d8acbfd.png)

> The thing with `var` is that it is hoisted. It was introduced in `ES5`, which was before `let` and `const`.

## Resources to read about Temporal Dead Zone

[Temporal Dead Zone](https://medium.com/@Esakkimuthu/temporal-dead-zone-3dd6d3fbcbda)

## Data Types in JavaScript

> There are 2 categories of data types in JavaScript
>
> Primitive and Reference types.
>
> Primitive types are:
>
> 1. Number : `1`, `1.5`, `0`, `-1`, `-1.5`, `Infinity`, `-Infinity`, `NaN`
> 2. String : `"Hello"`, `'Hello'`, `"1"`, `'1'`
> 3. Boolean : `true`, `false`
> 4. Symbol : `Symbol()`
> 5. Undefined : `undefined`
> 6. Null : `null`
> 7. NaN : `NaN`

> Reference types are:
>
> 1. Object : `{}`, `new Object()`
> 2. Array : `[]`, `new Array()`
> 3. Function : `function() {}`
> 4. Date : `new Date()`
> 5. RegExp : `/\w+/`
> 6. Error : `new Error()`
> 7. Map : `new Map()`
> 8. Set : `new Set()`
> 9. WeakMap : `new WeakMap()`
> 10. WeakSet : `new WeakSet()`
