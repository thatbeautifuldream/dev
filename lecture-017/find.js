// find() method
// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// find() expects a callback function as its argument
// The callback function is called for each element of the array, and the element is passed as the first argument to the callback function.
// The callback function should return a boolean value.
// If the callback function returns true, find() returns the value of the element. Otherwise, it returns undefined.

let arr = [-1, -2, -3, -4, -5, -6, -7, -8, -9, 10];

let firstPositive = arr.find(function (x) {
  return x > 0;
});

console.log(firstPositive); // 10

// it just returns the first element that satisfies the condition, a value and not an array
// used to look up a value in an array or anything else that is iterable
