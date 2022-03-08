# Revision Class | Js Concepts 💊

## Callback function

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a quick example:

```js
function greeting(name) {
  // callback function
  alert("Hello " + name);
}

function processUserInput(callback) {
  // outer function
  var name = prompt("Please enter your name.");
  callback(name);
}
processUserInput(greeting); // callback function passed as an argument to other function
```
