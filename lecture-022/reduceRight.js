// reduceRight() - it just like reduce() but it goes from right to left

const arr = [1, 2, 3, 4];
let sum = arr.reduceRight(function (sum, value) {
  let updatedSum = sum + value;
  console.log(updatedSum); // 7, 9, 10
  return updatedSum;
});
console.log(sum); // expected output: 10
