# Theory Class | JavaScript Interviews

## :octocat: Higher Order Functions | `map` , `filter` , `reduce`

- A higher order function is a function that takes a function as an argument or returns a function as a result.
- Few other functions : `find`, `findIndex`, `forEach`, `some` and `every`.
- `Arrow functions` are also higher-order functions.

## Map function | `map()`

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squarer(x) {
  return x * x;
}

let squared = arr.map(squarer);
console.log(squared);
```
