// Node + strict mode
"use strict";

// global context
console.log(this); // {} empty object

// function context
function f() {
  console.log(this); // function object : {}
}
f(); // undefined

// object context
let obj = {
  a: 10,
  f: function () {
    console.log(this); // obj
  },
};
obj.f(); // obj itself

// object context 2
let obj2 = {
  a: 20,
  f: function () {
    function g() {
      console.log(this);
    }
    g();
  },
};
obj2.f(); // undefined


