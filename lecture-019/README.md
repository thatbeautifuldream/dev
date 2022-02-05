# Lecture 18 | JavaScript Interview Series

## Agenda for today

- [Null vs Undefined vs Not defined](https://youtu.be/KP85Ys4GLu8)
- [Comparison Operators and Truthy Falsy Values](https://youtu.be/-Mnaj-GaJro)
- [Shallow Copy and Deep Copy from every methord possible](https://youtu.be/nohXAwhw-mY)
- [Array.isArray() Methord](https://youtu.be/hPNOeEH4X9k)

## Undefined and Null in JavaScript

```js
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
// Adam is null years old from undefined
```

> Output : `undefined`

```bash
> node undefined.js
undefined
undefined
undefined
null
undefined
Adam is null years old from undefined
```

> Footnotes : whenever we dont assign value to a variable, it is `undefined` whereas `null` is passed as a value explicitly.

## Null vs undefined

- Null is a value that is explicitly assigned
- undefined is a value that is not assigned

```js
const log = console.log;

let formObj = {
  firstName: "Milind",
  middleName: null, // explicitly assigned null
  lastName: "Mishra",
};

log(formObj.middleName); // null : explicit assignment
log(formObj.age); // undefined : not assigned
```

> Output :

```bash
> node undefined.js
null
undefined
```

- `Null` explicitly tells that the value is empty
- `undefined` tells that the value is not assigned

## Comparison Operators `==` & `===`

## Use of `==` and `===`

- == is used to compare two values. It is a loose comparison. Where we can compare any type of values.
- === is used to compare two values. It is a strict comparison. Where we can compare only the same type of values.

```js
const log = console.log;
// Conditional Operators : == and  ===

// Double equals (==) is used to compare two values. Its a loose comparison.

let check = 2 == 2;
let check1 = 2 == "2";
log(check); // true
log(check1); // true

// Triple equals (===) is used to compare two values. Its a strict comparison.

let check2 = 2 === "2";
let check3 = 2 === 2;
log(check2); // false (Strict comparison, compares the type of the values)
log(check3); // true
```

> Output :

```bash
> node truthyFalsy.js
true
true
false
true
```

## Truthy and Falsy

- all variables, array, objects, functions, etc. have boolean values in JavaScript.
- if the value is true, it is truthy.
- if the value is false, it is falsy.

```js
const log = console.log;

function testTruthyFalsy(value) {
  return value ? log("Truthy") : log("Falsy");
}

testTruthyFalsy(0); // Falsy (0 is falsy) +- 0 is falsy in JavaScript
testTruthyFalsy(1); // Truthy (1 is truthy) Any + - number except 0 is truthy in JavaScript
testTruthyFalsy(false); // Falsy (false is falsy) obviously
testTruthyFalsy(true); // Truthy (true is truthy) obviously
testTruthyFalsy(""); // Falsy (empty string is falsy)
testTruthyFalsy(" "); // Truthy (space is truthy)
testTruthyFalsy([]); // Truthy (Array is truthy)
testTruthyFalsy({}); // Truthy (Object is truthy)
testTruthyFalsy(function () {}); // Truthy (function is a type of object)
testTruthyFalsy(undefined); // Falsy (undefined is falsy)
testTruthyFalsy(null); // Falsy (null is falsy)
testTruthyFalsy(NaN); // Falsy (NaN is falsy) NaN : Not a Number its a special value that is not equal to any other value.
testTruthyFalsy(Infinity); // Falsy (Infinity is falsy) Infinity : Infinity is a special value that is greater than any other value.
testTruthyFalsy(-Infinity); // Falsy (-Infinity is falsy) -Infinity : -Infinity is a special value that is less than any other value.
testTruthyFalsy(new Date()); // Truthy (Date is a type of object)
testTruthyFalsy(new Error()); // Truthy (Error is a type of object)
testTruthyFalsy(new RegExp()); // Truthy (RegExp is a type of object)
```

> Output :

```bash
> node truthyFalsy.js
Falsy
Truthy
Falsy
Truthy
Falsy
Truthy
Truthy
Truthy
Truthy
Falsy
Falsy
Falsy
Truthy
Truthy
Truthy
Truthy
Truthy
```

## List of Truthy and Falsy Values in Js

- List of Truthy values in Js

  > 1, true, " ", [], {}, function () {}, new Date(), new Error(), new RegExp()
  >
  > 1. Any Number other than 0
  > 1. Any String other than empty string
  > 1. New Object

- List of Falsey values in Js

  > 0, false, null, undefined, NaN, Infinity, -Infinity

```js
const log = console.log;
function homeWork() {
  if ((-100 && 100 && "0") || [] === true || 0) {
    log(1);
    if ([] || (0 && false)) {
      log(2);
    }
    if (Infinity && NaN && "false") {
      log(3);
      if ("") {
        log(4);
      }
    } else {
      log(5);
      if (({} || false === "") && !(null && undefined)) {
        log(6);
      }
    }
  }
}

homeWork();
```

> Output : (**Understanding is Important**)

```bash
> node homeWorkProblem.js
1
2
5
6
```
