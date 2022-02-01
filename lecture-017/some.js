// some() function
// some() function is used to check if any of the elements in an array passes a condition.
// some() expects a callback function as its argument
// The callback function is called for each element of the array, and the element is passed as the first argument to the callback function.
// The callback function should return a boolean value.
// If the callback function returns true, some() returns true. Otherwise, it returns false.

let arr = [-1, -2, -3, -4, -5, -6, -7, -8, -9, 10];

let firstPositive = arr.some(function (x) {
  return x > 0;
});

console.log(firstPositive); // true

// if even one value satisfies the condition, it returns true
