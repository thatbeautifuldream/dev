# Lecture 15 | Web Scraping w/ Js

## Callback Functions in Js ⚡ [`freeCodeCamp`](https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/#:~:text=A%20callback%20function%20is%20a,the%20callback%20function%20gets%20executed.)

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

## Reading files in Node.js Synchronously and Asynchronously

```javascript
// Syncronous way of reading a file

console.log("before"); // before file reading starts
const text = fs.readFileSync("./lecture-015/file.txt", "utf8");
console.log(text);
console.log("after"); // after file reading ends

// Asyncronous way of reading a file
// readFile() expects a callback function as a parameter

console.log("before"); // before file reading starts
fs.readFile("./lecture-015/file.txt", "utf8", cb);

function cb(err, text) {
  if (err) {
    console.log("error");
  } else {
    console.log(text);
  }
}

console.log("after"); // after file reading ends
```

Output:

```bash
Milind Mishra@milind MINGW64 ~/Documents/git-repos/pepcoding-webdev (main)
$ node lecture-015/callback.js
John
Doe
23
before
This is data from file.txt
after
before
after
This is data from file.txt
```

> Q. `error first callbacks` : error first callbacks are functions that are passed to handle error events

![async](https://user-images.githubusercontent.com/28717686/151028564-622fe732-3ef6-459c-824e-24ac04028e68.jpeg)


![image](https://user-images.githubusercontent.com/28717686/151025526-3671deb4-a790-4665-bd1a-e7bdd09b5fcc.png)

