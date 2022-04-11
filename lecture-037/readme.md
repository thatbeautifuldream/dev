# Prerequisites for React Js - Topics from Js

## Flow of topics

- [Spread Operator](https://www.programiz.com/javascript/spread-operator)
- Destructuring
- Arrow Functions
- Higher Order Functions (map, filter, reduce)
- this keyword

## Spread operator

- The spread operator is used to expand the elements of an array into a list of arguments.
- It is used in function calls and in array literals.

## Example

```js
var a = [1, 2, 3];
var b = [4, 5, 6];
b = a; // shallow copy
a.push(4);
console.log(b); // [1, 2, 3, 4] since b was passed by reference
// using spread operator
console.log(...a); // 1 2 3 4 -> string form of array
b = [..a];
a.push(5);
console.log(b); // [1, 2, 3, 4] does not get affected as it is a shallow copy and it got a separate memory in the heap
```

## Using spread operator with objects

```js
var a = {
  name: "John",
  age: 30,
};
var b = {
  name: "Mary",
  age: 25,
};
b = a; // shallow copy
a.name = "Bob";
console.log(b); // {name: 'John', age: 30} since b was passed by reference
// using spread operator
console.log(...a); // {name: 'Bob', age: 30} -> string form of object
b = { ...a };
a.name = "Alice";
console.log(b); // {name: 'Bob', age: 30} does not get affected as it is a shallow copy and it got a separate memory in the heap
```

- The problem with shallow copy using spread is that 1 level only gets copied and the rest of the object is not copied.
- Object of the object is not copied.
- Inorder to copy the object of the object, we need to use the spread operator inside object parameters.

## Example for nested object copy

```js
var a = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};
var b = { ...a, address: { ...a.address } }; // deep copy
a.address.city = "Boston";
console.log(a); // {name: 'John', age: 30, address: {city: 'Boston', state: 'NY'}}
console.log(b); // {name: 'John', age: 30, address: {city: 'New York', state: 'NY'}} deep copy
```

## Destructuring

- Destructuring is a JavaScript feature that allows you to extract data from arrays, or properties from objects, into distinct variables.

```js
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [...a, ...b]; // this is the spread operator working as destructuring
console.log(c); // [1, 2, 3, 4, 5, 6]
```
