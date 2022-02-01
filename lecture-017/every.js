// every() methord
// every() method checks if all elements in an array pass a test.
// it returns true if all elements pass the test, otherwise it returns false.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let allPositive = a.every(function (x) {
  return x > 0;
});
console.log(allPositive); // true
