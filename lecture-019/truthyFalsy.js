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

// all variables, array, objects, functions, etc. are having boolean values
