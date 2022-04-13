# Arrow Functions

- Arrow functions are a new feature in ES6.
- They are a shorter syntax for writing functions.
- They are a little bit more concise.
- Lets take an example to make a function expression to add two numbers.

- Prior to ES6, we would write this:

```js
let addTwo = function (a, b) {
  return a + b;
};
```

- After ES6, we can write this:

```js
let addTwo = (a, b) => a + b;
```

- The main difference is that we don't need to use the return keyword and we need not require to write the function keyword to define an arrow function.
- `=>` is known as fat arrow or lambda.
- Comprehensively speaking, an arrow function is a function expression that does not have a name.
- Arrow functions are always anonymous.

## Syntax

- Without parameters we need to write `() => {expression}`

```js
let greet = () => {
  console.log("Hello");
};
```

- With parameters we need to write `(param1, param2) => {expression}`

```js
let addTwo = (a, b) => a + b;
```

- With just 1 parameter we can choose to omit () and write `param => {expression}`

```text
let incByTwo = a => a + 2;
```
