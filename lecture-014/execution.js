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

var n = 2;
function square(n) {
  return n * n;
}
var sq1 = square(n);
var sq2 = square(2);
console.log(sq1);
console.log(sq2);

// execution context in js
// first the global execution context is created
// then the function is executed
// then the local execution context is created
// then the local execution context is destroyed
// then the global execution context is destroyed
