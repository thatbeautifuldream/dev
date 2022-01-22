// execution context in js
var a = 2;
var b = 3;
function add(m, n) {
  var sum = m + n;
  return sum;
}
var sum1 = add(1, 2);
var sum2 = add(a, b);
console.log(sum1);
console.log(sum2);
