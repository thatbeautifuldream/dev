# Theory Class | JavaScript Interviews

## :bowtie: Higher Order Functions | `map` , `filter` , `reduce`

- A higher order function is a function that takes a function as an argument or returns a function as a result.
- Few other functions : `find`, `findIndex`, `forEach`, `some` and `every`.
- `Arrow functions` are also higher-order functions.

## Map function | `map()`

> Example to illustrate the concept of `higher-order function : map()`

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squarer(x) {
  // callback function
  return x * x;
}

let squared = arr.map(squarer);
console.log(squared);
```

> Output :

```bash
$ node lecture-017/map.js
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
```

- map() takes a callback function as an argument
- map() is an array function that expects a callback function as an argument
- map() will return a new array with the results of the callback function for each element in the original array

> Example :

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cubed = arr.map((x) => x * x * x);
console.log(cubed);
```

- operator `=>` is called the arrow operator

> Output:

```bash
$ node lecture-017/map.js
[
    1,    8,  27,  64,
  125,  216, 343, 512,
  729, 1000
]
```

- When we write a self defined higher-order function, we call it as `polyfill`.
- map() is a polyfill for `Array.prototype.map()`
- map() `does not tamper the original array`
- map() `returns a new array`

> Quick Task : Use map() to create a new array of strings of the names

```js
let names = ["John", "Mary", "Mike", "Suzy"];
let nameStrings = names.map((x) => x.toString());
console.log(nameStrings);
```

> Output :

```bash
$ node lecture-017/map.js
[ 'John', 'Mary', 'Mike', 'Suzy' ]
```
