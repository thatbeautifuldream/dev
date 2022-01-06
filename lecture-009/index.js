// prime numbers till 100 in js
for (var i = 2; i <= 100; i++) {
  var flag = 0;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    console.log(i);
  }
}
