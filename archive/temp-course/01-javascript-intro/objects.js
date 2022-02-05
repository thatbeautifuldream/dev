// objects : group of keys : value pairs
// key : value -> property
// key : function -> method
let cap = {
  name: "Steve",
  lastName: "Rogers",
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
  },
  age: 45,
  isAvenger: true,
  movies: ["First Avenger", "Winter Soldier", "Civil War"],
  sayHi: function () {
    console.log("Hi");
  },
};
// Get
console.log(cap.name);
console.log(cap.age);
console.log(cap.address.city);
cap.sayHi();

//Set/Update
console.log("cap :", cap);
cap.age = 36;
cap.isAvenger = false;
cap.friends = ["Tony", "Bruce", "Steve"];
console.log("----------");
console.log("cap :", cap);
// delete
delete cap.address;
console.log("cap :", cap);
console.log(cap.xyz);
