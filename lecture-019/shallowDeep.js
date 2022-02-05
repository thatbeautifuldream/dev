const log = console.log;

// copying an array
let arr = [1, 2, 3, 4, 5];
let copyArr = arr;
copyArr[1] = 4;

log(arr); // [1, 4, 3, 4, 5]
log(copyArr); // [1, 4, 3, 4, 5]
// both arrays are pointing to the same array
// all object types (reference data types) are passed by reference (stores just one reference to the object)
// all copies get points to the same object (the same reference)
// if you change the original array, the copy will also change and vice versa

// Shallow copy is a upper level copy, but not deep copy which copies the nested elements as well
// Shallow copy methord : use the spread operator `...`
let sports = [
  "soccer",
  "baseball",
  "football",
  {
    name: "Basketball",
    players: ["Lebron", "Curry", "Jordan"],
  },
];
let sportsCopy = [...sports]; // spread operator
sportsCopy[1] = "basketball"; // change the value of the copy
sportsCopy[3].players[1] = "Kobe"; // change the value of the copy
log(sports); // ["soccer", "basketball", "football", {name: "Basketball", players: ["Lebron", "Kobe", "Jordan"]}] // original array is changed in the nested array
log(sportsCopy); // ["soccer", "basketball", "football", {name: "Basketball", players: ["Lebron", "Kobe", "Jordan"]}] // copy array is changed in the nested array

// Shallow copy methord : `Array.from()`

let courses = [
  "Engineering",
  "Math",
  "Physics",
  "Chemistry",
  {
    name: "Biology",
    students: ["John", "Mary", "Peter"],
  },
];

let coursesCopy = Array.from(courses); // Array.from() method creates a new array from an array-like or iterable object
coursesCopy[4].students[1] = "Jane"; // change the value of the copy
log(courses); // ["Engineering", "Math", "Physics", "Chemistry", {name: "Biology", students: ["John", "Jane", "Peter"]}] // original array is changed in the nested array
log(coursesCopy); // ["Engineering", "Math", "Physics", "Chemistry", {name: "Biology", students: ["John", "Jane", "Peter"]}] // copy array is changed in the nested array

// Shallow copy methord : arr.slice(0) method
// works the same as the spread operator

let coursesCopySlice = courses.slice(0); // slice() method creates a shallow copy of an array
coursesCopySlice[4].students[1] = "July"; // change the value of the copy
log(courses); // ["Engineering", "Math", "Physics", "Chemistry", {name: "Biology", students: ["John", "July", "Peter"]}] // original array is changed in the nested array
log(coursesCopySlice); // ["Engineering", "Math", "Physics", "Chemistry", {name: "Biology", students: ["John", "July", "Peter"]}] // copy array is changed in the nested array

// Deep copy : It copies in the nested elements as well

// Deep copy methord : `JSON.parse(JSON.stringify(obj))`

let coursesDeepCopy = JSON.parse(JSON.stringify(courses)); // JSON.stringify() method converts an object into a JSON string
coursesDeepCopy[4].students[1] = "Alice"; // change the value of the copy
log(courses); // ["Engineering", "Math", "Physics", "Chemistry", {name: "Biology", students: ["John", "Jane", "Peter"]}] // original array is not changed in the nested array
log(coursesDeepCopy); // ["Engineering", "Math", "Physics", "Chemistry", {name: "Biology", students: ["John", "Alice", "Peter"]}] // copy array is changed in the nested array

// Deep copy methord : `Object.assign(obj)`

let obj = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["movies", "music"],
  family: {
    wife: "Jane",
    son: "Peter",
    daughter: "Alice",
  },
};

let newObj = obj;
newObj.name = "Bob";
log(obj); // {name: "Bob", age: 30, city: "New York", hobbies: ["movies", "music"], family: {wife: "Jane", son: "Peter", daughter: "Alice"}}
log(newObj); // {name: "Bob", age: 30, city: "New York", hobbies: ["movies", "music"], family: {wife: "Jane", son: "Peter", daughter: "Alice"}}
// both objects are pointing to the same object (the same reference) and both objects are changed

// shallow copy methord : `...` Spread operator

let objCopy = { ...obj };
objCopy.name = "Rock";
objCopy.family.wife = "Mary";
log(obj); // {name: "Bob", age: 30, city: "New York", hobbies: ["movies", "music"], family: {wife: "Mary", son: "Peter", daughter: "Alice"}}
log(objCopy); // {name: "Rock", age: 30, city: "New York", hobbies: ["movies", "music"], family: {wife: "Mary", son: "Peter", daughter: "Alice"}}
// upper level copy of the object but nested elements still get altered in the original object

// Deep copy methord : `JSON.parse(JSON.stringify(obj))` : JSON.stringify() method converts an object into a JSON string
// JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
// JSON.parse() method creates a new object by parsing a JSON string

let person = {
  name: "Milind",
  age: 20,
  city: "Bangalore",
  hobbies: ["movies", "music"],
};

let personCopy = JSON.parse(JSON.stringify(person));
// any changes to the copy will not affect the original object
personCopy.name = "Mrinal";
personCopy.age = 23;
personCopy.city = "Mumbai";
personCopy.hobbies[0] = "cricket";
log(person); // {name: "Milind", age: 20, city: "Bangalore", hobbies: ["movies", "music"]}
log(personCopy); // {name: "Mrinal", age: 23, city: "Mumbai", hobbies: ["cricket", "music"]}

// Object Shallow Copy : `Object.assign()` method creates a shallow copy of an object

let newShallowCopy = Object.assign({}, person);
newShallowCopy.name = "John";
newShallowCopy.age = 25;
newShallowCopy.city = "New York";
newShallowCopy.hobbies[0] = "coding";
log(person); // {name: "Milind", age: 20, city: "Bangalore", hobbies: ["coding", "music"]}
log(newShallowCopy); // {name: "John", age: 25, city: "New York", hobbies: ["coding", "music"]}
// nested elements get altered in the original object as it was a shallow copy

