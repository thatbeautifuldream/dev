const log = console.log;
// Conditional Operators : == and  ===

// Double equals (==) is used to compare two values. Its a loose comparison.

let check = 2 == 2;
let check1 = 2 == "2";
log(check); // true
log(check1); // true

// Triple equals (===) is used to compare two values. Its a strict comparison.

let check2 = 2 === "2";
let check3 = 2 === 2;
log(check2); // false (Strict comparison, compares the type of the values)
log(check3); // true

// Use of == and ===
// == is used to compare two values. It is a loose comparison. Where we can compare any type of values.
// === is used to compare two values. It is a strict comparison. Where we can compare only the same type of values.

// Truthy and Falsy
// all variables, array, objects, functions, etc. have boolean values in JavaScript.
// if the value is true, it is truthy.
// if the value is false, it is falsy.

function testTruthyFalsy(value) {
  return value ? log("Truthy") : log("Falsy");
}

testTruthyFalsy(0); // Falsy (0 is falsy) +- 0 is falsy in JavaScript
testTruthyFalsy(1); // Truthy (1 is truthy) Any + - number except 0 is truthy in JavaScript
testTruthyFalsy(false); // Falsy (false is falsy) obviously
testTruthyFalsy(true); // Truthy (true is truthy) obviously
testTruthyFalsy(""); // Falsy (empty string is falsy)
testTruthyFalsy(" "); // Truthy (space is truthy)
testTruthyFalsy([]); // Truthy (Array is truthy)
testTruthyFalsy({}); // Truthy (Object is truthy)
testTruthyFalsy(function () {}); // Truthy (function is a type of object)
testTruthyFalsy(undefined); // Falsy (undefined is falsy)
testTruthyFalsy(null); // Falsy (null is falsy)
testTruthyFalsy(NaN); // Falsy (NaN is falsy) NaN : Not a Number its a special value that is not equal to any other value.
testTruthyFalsy(Infinity); // Falsy (Infinity is falsy) Infinity : Infinity is a special value that is greater than any other value.
testTruthyFalsy(-Infinity); // Falsy (-Infinity is falsy) -Infinity : -Infinity is a special value that is less than any other value.
testTruthyFalsy(new Date()); // Truthy (Date is a type of object)
testTruthyFalsy(new Error()); // Truthy (Error is a type of object)
testTruthyFalsy(new RegExp()); // Truthy (RegExp is a type of object)

// List of Truthy values in Js
// 1, true, "", " ", [], {}, function () {}, new Date(), new Error(), new RegExp()
// List of Falsey values in Js
// 0, false, null, undefined, NaN, Infinity, -Infinity
