// Callback functions in Js

// Callback functions are functions that are passed to other functions as arguments.
// They are used to execute code after the function that calls them is finished executing.
// They are also used to execute code in response to events.
// They are used to execute code in response to asynchronous events.

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
