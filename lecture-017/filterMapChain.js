let arr = [
  { name: "A", age: 14, gender: "M" },
  { name: "B", age: 34, gender: "M" },
  { name: "C", age: 24, gender: "F" },
  { name: "D", age: 44, gender: "F" },
  { name: "E", age: 44, gender: "M" },
  { name: "I", age: 28, gender: "F" },
  { name: "G", age: 36, gender: "M" },
  { name: "H", age: 47, gender: "F" },
];

// print the age of all the females "F" using filter() map() chaining

let allFemales = arr.filter(function (x) {
  if (x.gender == "F") {
    return true;
  } else {
    return false;
  }
});

console.log(allFemales);

let femaleAge = allFemales.map(function (female) {
  return female.age;
});

console.log(femaleAge);

// Chaining the filter() and map() together!
// basically output of filter can be mapped

let ageOfAllFemales = arr
  .filter(function (x) {
    if (x.gender == "F") {
      return true;
    } else {
      return false;
    }
  })
  .map(function (female) {
    return female.age;
  });

console.log(ageOfAllFemales);
