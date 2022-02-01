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

// map() takes a callback function as an argument
// map() is an array function that expects a callback function as an argument
// map() will return a new array with the results of the callback function for each element in the original array

let cubed = arr.map((x) => x * x * x);
console.log(cubed);

// Question : Use map() to create a new array of strings of the names

let names = ["John", "Mary", "Mike", "Suzy"];
let nameStrings = names.map(function (x) {
  return x;
});
console.log(nameStrings);
