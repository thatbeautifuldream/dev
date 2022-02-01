let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squarer(x) {
  return x * x;
}

// spit out the square of each number in the array

// for (let i = 0; i < arr.length; i++) {
//   console.log(squarer(arr[i]));
// }

// alternatively, without using a for loop we can use the map function

let squared = arr.map(squarer);
console.log(squared);
