// Browser + Non Strict Mode

// Global Context
console.log(this); // Window object gets returned

// Function Context
function f() {
  console.log(this); // Window object gets returned
}
f();

// Object Context
let obj = {
  a: 2,
  b: function () {
    console.log(this); // Object gets returned
  },
};
obj.b(); // Object itself gets returned

// Object Function Function Context
let obj2 = {
  a: 2,
  b: function () {
    function f() {
      console.log(this); // Window object gets returned
    }
    f();
  },
};
obj2.b(); // Window object gets returned
