# Lecture 18 | JavaScript Interview Series

## Agenda for today

- [Null vs Undefined vs Not defined](https://youtu.be/KP85Ys4GLu8)
- [Comparison Operators and Truthy Falsy Values](https://youtu.be/-Mnaj-GaJro)
- [Shallow Copy and Deep Copy from every methord possible](https://youtu.be/nohXAwhw-mY)
- [Array.isArray() Methord](https://youtu.be/hPNOeEH4X9k)

## Undefined in JavaScript

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

```js
// Null vs undefined
// Null is a value that is explicitly assigned
// undefined is a value that is not assigned

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
