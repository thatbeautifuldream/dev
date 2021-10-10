// print
console.log("Hello World");
//  declare variable
let a;
console.log(a); // undefined
a = 10;
console.log(a);
a = 10.1;
console.log(a);
a = "Hello";
console.log(a);
a = true;
console.log(a);
a = null;
console.log(a);
// Variable types : Primitive Types : String, Number, Boolean, Null, Undefined
// Variable types : Reference Types : Object, Array, Function, Date, RegExp, Error
// Variable types : Complex Types : Map, Set, WeakMap, WeakSet
// Variable types : Symbol
// Variable types : BigInt
// Variable types : BigInt64Array
// Variable types : BigUint64Array
// Variable types : DataView
// Variable types : ArrayBuffer
// Variable types : SharedArrayBuffer
// Variable types : Atomics
// Variable types : Promise
// Variable types : Generator
// Variable types : GeneratorFunction
// Variable types : AsyncFunction
// Variable types : AsyncGenerator
// Variable types : AsyncGeneratorFunction
// Variable types : Proxy
// Variable types : Symbol
// Variable types : Map
// Variable types : Set
// Variable types : WeakMap
// Variable types : WeakSet
// Variable types : ArrayBufferView
// Variable types : DataView
// Variable types : Int8Array
// Variable types : Uint8Array
// Variable types : Uint8ClampedArray
// Variable types : Int16Array
// Variable types : Uint16Array
// Variable types : Int32Array
// Variable types : Uint32Array
// Variable types : Float32Array
// Variable types : Float64Array
// Variable types : BigInt64Array
// Variable types : BigUint64Array
// Variable types : Array
// Variable types : Object
// Variable types : Function
// Variable types : Date
// Variable types : RegExp
// Variable types : Error
// Variable types : EvalError
// Variable types : RangeError

// JS-> Java / C / C++

let number = 10;
for (let i = 1; i <= number; i++) {
  console.log("Number is : ", i);
}

// is prime
let number = 23;
let isPrime = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

