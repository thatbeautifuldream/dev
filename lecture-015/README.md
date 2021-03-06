# Lecture 15 | Web Scraping w/ Js

## Callback Functions in Js ⚡ [`freeCodeCamp`](https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/#:~:text=A%20callback%20function%20is%20a,the%20callback%20function%20gets%20executed.)

> 1. Callback functions are functions that are passed to other functions as arguments.
> 2. They are used to execute code after the function that calls them is finished executing.
> 3. They are also used to execute code in response to events.
> 4. They are used to execute code in response to asynchronous events.

> Explaining `Callback Functions`:

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

> Output:

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

## Format of Asynchronous Callbacks Internal Working of Node.js

![async](https://user-images.githubusercontent.com/28717686/151028564-622fe732-3ef6-459c-824e-24ac04028e68.jpeg)

## Working with Asynchronous Callbacks

![image](https://user-images.githubusercontent.com/28717686/151025526-3671deb4-a790-4665-bd1a-e7bdd09b5fcc.png)

> Visulaize the flow of execution of asynchronous callbacks [`Click Me ⚡`](https://www.jsv9000.app/)

## Introduction to Web Scrapping

> Web Scraping is a technique for extracting data from websites.
> It is a process of `traversing the website` and `extracting the data`.
> It is a type of `reverse engineering`.

## Use Case of Web Scraping | Scraping [`covid stats`](https://www.worldometers.info/coronavirus/) for Corona Virus Data

> We can extract meaningfull data from the website.

![image](https://user-images.githubusercontent.com/28717686/151031996-d502b64d-0b18-4928-b93d-614452f02a75.png)

## About, Request Response Cycle | Client Server Architecture

> The `request-response cycle` is a cycle of events that occur between a `client and a server`.
> The client sends a `request` to the server, which then sends a `response` back to the client.
> HTTP works by using a request-response cycle.

![image](https://user-images.githubusercontent.com/28717686/151032518-34c6dada-92bb-4ff4-bad4-95094201b9ff.png)

## Using page source and inspect element in browser window

![image](https://user-images.githubusercontent.com/28717686/151032855-c1175eac-fda1-431d-a315-c64f02d3ce21.png)

## Using 2 `npm libraries` to scrape data from websites

> 1. [`request`](https://www.npmjs.com/package/request) - is a node.js module that makes it easy to make HTTP requests and get HTML documents from websites.
> 2. [`cheerio`](https://www.npmjs.com/package/cheerio) - A library that helps us to scrape data from websites and the meaningfull data.

```bash
npm i request cheerio
```

> Sidenote : Keep the nessasarary dependencies installed for next lecture to work.
