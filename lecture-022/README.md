# Lecture 22 | Higher Order Functions

## Quick Revision of `map()` and `filter()`

- map() iterates over each element of the array and returns a new array with the results of the callback function
- filter() returns true false for each element of the array and returns a new array with the elements that return true

```js
// map filter example
```

## Question 01

- Get the number of products whose price is atleast 100.

```js
const products = [
  { name: "T-Shirt", price: 25 },
  { name: "Headphones", price: 125 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 200 },
];
// hint : chaining map and filter
```

> Answer:

```js
let productsAbove100 = products
  .map(function (product) {
    return product.price;
  })
  .filter(function (price) {
    return price >= 100;
  });
console.log(productsAbove100.length); // 2
```

## Question 02

- Get the movie Names from this Array of Objects method and only get the movie name which has rating higher than or equal to 8
- Hint : Use Filter and map chaining to achaive the objective

```js
var newReleases = [
  {
    id: 1,
    title: "Die Hard",
    rating: 9,
  },
  {
    id: 2,
    title: "Bad Boys",
    rating: 7,
  },
  {
    id: 3,
    title: "The Chamber",
    rating: 10,
  },
];
```

> Solution using filter and map chaining

```js
let highRatedMovies = newReleases
  .filter(function (newRelease) {
    return newRelease.rating >= 8;
  })
  .map(function (movie) {
    return movie.title;
  });
console.log(highRatedMovies);
```

> Output:

```bash
[ 'Die Hard', 'The Chamber' ]
```

## Question 03

- Map Question
  - 1. You have to use map function and have to get all the students name in upperCase
- Use filter method to approach the problem
  - 2. Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord

```js
let studentRecords = [
  { name: "Abhishek", id: 123, marks: 98 },
  { name: "Udai", id: 101, marks: 90 },
  { name: "Himanshu", id: 200, marks: 96 },
  { name: "Mrinal", id: 115, marks: 75 },
];
```

- Solution 1

```js
let upperStudents = studentRecords.map(function (student) {
  return student.name.toUpperCase();
});
console.log(upperStudents);
```

> Output :

```bash
[ 'ABHISHEK', 'UDAI', 'HIMANSHU', 'MRINAL' ]
```

- Solution 2

```js
let highScoreStudents = studentRecords.filter(function (student) {
  return student.marks > 50 && student.id > 120;
});
console.log(highScoreStudents);
```

> Output :

```bash
[
  { name: 'Abhishek', id: 123, marks: 98 },
  { name: 'Himanshu', id: 200, marks: 96 }
]
```
