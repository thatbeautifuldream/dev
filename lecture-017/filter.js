// filter() method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// filter() expects an array and a callback function as arguments.
// The callback function is called for each element in the array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// we need to filter out all the even numbers

let evenNumbers = arr.filter(function (n) {
  return n % 2 === 0;
});
console.log(evenNumbers);

// whenever filter() spots a true value in the callback function, it will add that element to the new array.
// filter() works in boolean values.

// Task : to filter out all profit transactions from the transactions array

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let profitTransactions = transactions.filter((x) => x > 0);
console.log(profitTransactions);
