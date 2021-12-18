// ! Lecture 2
// ! Agenda : Arrays, Strings, Objects
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

// *reverse()* reverses the order of the elements in an array
cars4.reverse(); // *reverses the order of the elements in the array
console.log(cars4);

// *sort()* sorts the elements of an array
cars4.sort(); // *sorts the elements of the array
console.log(cars4);

// *Multi-dimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

// Strings in Js:
// *Strings are immutable*
// *Strings are objects*
// *Strings are indexed*
// *Strings are iterable*
// *Strings are a sequence of characters*
// *Strings are a sequence of 16-bit integers*
// *Strings are stored in memory as an array of 16-bit integers*
let str = "Hello World"; // *string declaration*
let str2 = new String("Hello World"); // *string declaration*
console.log(str);
console.log(str2);

// Methods:
// *length of the string
console.log(str.length); // *returns the length of the string

// * extracting a part of the string
// str.slice(startIndex, endIndex + 1) extracts a part of the string from startIndex to endIndex
console.log(str.slice(0, 5)); // *returns the string from index 0 to index 4

let str3 = "pepcoder";
console.log(str3.slice(3, str3.length + 1)); // *returns the string from index 3 to the end
// >> coder

// * Substring expects start and length parameters
// str.substring(param : from, param : length) extracts a part of the string from start to length (depricated)
console.log(str3.substr(3, str3.length)); // *returns the string from index 3 till length 4
// >> coder

// Replacing a part of the string
// str.replace(searchValue, replaceValue) replaces the first occurrence of searchValue with replaceValue
console.log(str3.replace("pep", "Pep")); // *returns the string with Pep instead of Pepcoder

// toUpperCase() and toLowerCase() Methods
// str.toUpperCase() converts the string to upper case
// str.toLowerCase() converts the string to lower case
console.log(str3.toUpperCase()); // *returns the string in upper case
console.log(str3.toLowerCase()); // *returns the string in lower case

// String Concatenation
let str4 = "Hello";
let str5 = "World";
console.log(str4 + " " + str5); // *returns Hello World
// Concatenation with Methods
// str.concat(str2) concatenates the string str2 to the string str
// str.concat(" ",str2) concatenates the string str2 to the string str with a space in between
// str.concat(" ",str2," ",str3) concatenates the string str2 to the string str with a space in between and str3
console.log(str4.concat(" ", str5)); // *returns Hello World
console.log(str4.concat(str5, " this is Milind")); // *returns HelloWorld this is Milind

// Trimming
// str.trim() removes whitespace from both ends (headspace, tailspace) of the string
let str6 = "   Hello World   ";
console.log(str6.trim()); // *returns Hello World (all whitespaces removed)

// * Objects in Js: (key-value pairs)
// *Objects are mutable*
// *Objects are not indexed*
// *Objects are iterable*
// *Objects are a collection of name-value pairs*
// *Objects are stored in memory as a collection of name-value pairs*
let obj = {}; // *object declaration*

let person = {
  // *object initialization*
  name: "Milind",
  age: 21,
  city: "Bangalore",
};
console.log(obj);

let captainAmerica = {
  name: "Steve Rogers",
  age: 35,
  address: {
    city: "New York",
    state: "New York",
    block: "A",
    lane: "1",
  },
  friends: ["Tony Stark", "Bruce Banner", "Natasha Romanoff"],
  superPowers: ["super strength", "super speed", "super healing"],
  saysHi: function () {
    console.log(`Captain says,"Hi!"`);
  },
};
// *access property of an object
console.log(captainAmerica.name); // *returns Steve Rogers (using dot notation)
console.log(captainAmerica["name"]); // *returns Steve Rogers (using bracket notation)
console.log(captainAmerica.age); // *returns 35
console.log(captainAmerica.address.city); // *returns New York
console.log(captainAmerica.friends[1]); // *returns Bruce Banner
console.log(captainAmerica.superPowers[1]); // *returns super speed
captainAmerica.saysHi(); // *returns Captain says,"Hi!"

// *for in loop*
// *iterates over the enumerable properties/key of an object*
for (let key in captainAmerica) {
  console.log("Key : ", key, ", Value : ", captainAmerica[key]);
}

captainAmerica.isAvenger = true; // *adds a new property to the object or can update an existing property
console.log(captainAmerica);

captainAmerica.movies = ["Avengers: Endgame", "Avengers: Infinity War"]; // *adding a new property to an object
console.log(captainAmerica);

delete captainAmerica.age; // *deletes the age property of the object
console.log(captainAmerica);
