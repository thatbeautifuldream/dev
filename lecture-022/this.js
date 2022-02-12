// Js has two modes strict and non-strict
// "use strict"; // strict mode
// a = 10; // error
// console.log(a); // not defined

// Js has two environments node and browser

// this in global context
console.log(this); // {} empty object

// inside in a function
function f() {
  console.log(this); // function object : {}
}
f();

// inside in an object
let obj = {
  a: 10,
  f: function () {
    console.log(this); // obj
  },
};
obj.f();

let obj2 = {
  a: 20,
  f: function () {
    function g() {
      console.log(this);
    }
    g();
  },
};

obj2.f();
