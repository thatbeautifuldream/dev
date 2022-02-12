// `reduce()` reduces the array to a single value

const array1 = [1, 2, 3, 4];

let addition = array1.reduce(function (sum, value) {
  let updatedSum = sum + value;
  return updatedSum;
});
console.log(addition); // expected output: 10

let multiplication = array1.reduce(function (product, value) {
  let updatedProduct = product * value;
  return updatedProduct;
});
console.log(multiplication); // expected output: 24

// Question 01 for Reduce

//From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve this

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let totalPositiveTransactions = transactions
  .filter(function (transaction) {
    return transaction > 0;
  })
  .reduce(function (sum, value) {
    return sum + value;
  });
console.log(totalPositiveTransactions); // expected output: 13800
