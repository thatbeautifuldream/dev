let str = "pepcoder";
let parts = str.split("c"); // array of ["pep", "oder"]
console.log(parts); // ["pep", "oder"]

// split() splits a string into an array of substrings based on the separator string you provide as an argument.
// The separator string can be a character, a string, or a regular expression.
// If the separator is not specified, the string is split on every character.
// If the separator is an empty string (""), the string is split on every character.

let str2 = "Hello World";
let parts2 = str2.split(" "); // array of ["Hello", "World"]
console.log(parts2); // ["Hello", "World"]

// join function reverses the process of split()
// join() takes an array and joins the elements into a string
// it takes an optional separator argument which is used to separate the elements of the array

let joinedStr = parts.join("c"); // "pepcoder"
let joinedStr2 = parts2.join(" "); // "Hello World"

console.log(joinedStr);
console.log(joinedStr2);
