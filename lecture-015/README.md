# Lecture 15 | Web Scraping w/ Js

## Callback Functions in Js [`freeCodeCamp`](https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/#:~:text=A%20callback%20function%20is%20a,the%20callback%20function%20gets%20executed.)

> 1. Callback functions are functions that are passed to other functions as arguments.
> 2. They are used to execute code after the function that calls them is finished executing.
> 3. They are also used to execute code in response to events.
> 4. They are used to execute code in response to asynchronous events.

```javascript
function printFirstName(firstName, cb) {
  // cb is a callback function parameter
  console.log(firstName);
  cb("Doe"); // cb is passed to printLastName
}

function printLastName(lastName) {
  // function that is passed to printFirstName as a callback
  console.log(lastName);
}

printFirstName("John", printLastName); // prints "John" and "Doe"
```
