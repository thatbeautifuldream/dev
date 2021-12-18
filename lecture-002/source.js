// ! Lecture 2

// Arrays provides an ordered collection of values/elements

let arr = []; // *array declaration* dynamically sized array
let cars = ["Ferrari", "Tesla", "BMW", "Jaguar", 2, true, null]; // *array initialisation
// in Js there's no restriction on types of data types you can store in an array
// console.log(cars);
let cars2 = new Array("Ferrari", "Tesla", "BMW", "Jaguar", 2, true, null); // *array initialisation
console.log(cars2[0]); // *accessing array element at index 0* (arrays are 0-based indexed)
console.log(cars2[1]); // *accessing array element at index 1*
console.log(cars2[2]); // *accessing array element at index 2*
console.log(cars2[3]); // *accessing array element at index 3*
console.log(cars2[4]); // *accessing array element at index 4*
console.log(cars2[5]); // *accessing array element at index 5*
console.log(cars2[6]); // *accessing array element at index 6*
console.log(cars2[7]); // *accessing array element at index 7* (does not exist, so => undefined)
console.log(cars2.length); // *array length

// *replacing an element in an array
cars2[0] = "Porsche";
console.log(cars2[0]);

// *adding an element to an array
cars2.push("Lamborghini"); // *adds an element to the end of an array
// or
cars2[cars2.length] = "Lamborghini"; // *adds an element to the end of an array
cars2[cars2.length + 2] = "Swift"; // *adds an element 2 right to the end of an array <2 empty elements>
console.log(cars2);

// *Array inbuilt methods
// *push()* adds an element to the end of an array
console.log(cars2.push("Porsche")); // *adds element to the end of the array also console.logs the new length of the array
console.log(cars2);

// *pop()* removes the last element of an array
console.log(cars2.pop()); // *removes the last element of the array also console.logs the element removed
console.log(cars2);

// *unshift()* adds an element to the beginning of an array
cars2.unshift("Porsche"); // *adds element to the beginning of the array
console.log(cars2);

// *shift()* removes the first element of an array
console.log(cars2.shift()); // *removes the first element of the array also console.logs the element removed
console.log(cars2);

// *splice()* removes elements from an array
cars2.splice(1, 1); // *removes the element at index 1 also console.logs the element removed
console.log(cars2);

// *slice()* copies elements from an array
let cars3 = cars2.slice(1, 3); // *copies the elements from index 1 to index 3
console.log(cars3);

// *concat()* combines two or more arrays
let cars4 = cars2.concat(cars3); // *combines the two arrays
console.log(cars4);

// *indexOf()* returns the index of the first occurrence of a specified value in an array
console.log(cars4.indexOf("Porsche")); // *returns the index of the first occurrence of the specified value

// *lastIndexOf()* returns the index of the last occurrence of a specified value in an array
console.log(cars4.lastIndexOf("Porsche")); // *returns the index of the last occurrence of the specified value

// *join()* joins all elements of an array into a string
console.log(cars4.join("-")); // *joins the elements of the array with the specified separator

// *reverse()* reverses the order of the elements in an array
cars4.reverse(); // *reverses the order of the elements in the array
console.log(cars4);

// *sort()* sorts the elements of an array
cars4.sort(); // *sorts the elements of the array
console.log(cars4);

// *forEach()* executes a provided function once for each array element (not recommended)
cars4.forEach(function (element) {
  console.log(element);
});

// *map()* creates a new array with the results of calling a provided function on every element in the calling array
let cars5 = cars4.map(function (element) {
  return element + "!";
});
console.log(cars5);
