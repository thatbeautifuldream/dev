# Lecture 16 | Web Scraping

> Website to scrape: [worldometers.info/coronavirus](https://www.worldometers.info/coronavirus/)

## Undestanding the [`Request Module`](https://www.npmjs.com/package/request)

```js
const request = require("request");
request(
  "https://www.worldometers.info/coronavirus/",
  function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the given homepage.
  }
);
```

> Run

```bash
node ./request.js
```

> [Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) `200: OK`

```text
Informational responses (100–199)
Successful responses (200–299)
Redirection messages (300–399)
Client error responses (400–499)
Server error responses (500–599)
```

> Code to get Status Code from worldometers.info

```js
const request = require("request");

request(
  "https://www.worldometers.info/coronavirus/",
  function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the given homepage.
  }
);
```

> Run

```bash
$ node request.js
error: null
statusCode: 200
```

## Understanding [`cheerio`](https://www.npmjs.com/package/cheerio) | Install using `npm install cheerio`

```js
const cheerio = require("cheerio");
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$("h2.title").text("Hello there!");
$("h2").addClass("welcome");

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>
```

> Analysing the classes using Inspect element

![image](https://user-images.githubusercontent.com/28717686/151407819-308cf000-38a4-4bf7-8b86-a84ecf118a8d.png)

> Grabbing the HTML

```js
const request = require("request");
const cheerio = require("cheerio");

// to analyse async behaviour
console.log("Before");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
  if (error) {
    console.log("error:", error); // Print the error if one occurred
  } else {
    handleHtml(html);
  }
}

function handleHtml(html) {
  let setTool = cheerio.load(html);
  let contentArr = setTool(".maincounter-number span");
  //   for (let i = 0; i < contentArr.length; i++) {
  //     let data = setTool(contentArr[i]).text();
  //     console.log(data);
  //   }

  let totalCases = setTool(contentArr[0]).text();
  let totalDeaths = setTool(contentArr[1]).text();
  let totalRecovered = setTool(contentArr[2]).text();
  console.log("Total Cases : ", totalCases);
  console.log("Total Deaths : ", totalDeaths);
  console.log("Total Recovered : ", totalRecovered);
}

console.log("After");
```

> Run

```bash
$ node coronaDetails.js
Before
After
Total Cases :  364,513,804
Total Deaths :  5,648,937
Total Recovered :  288,406,934
```

> Using the `Ctrl + F` in Inspect window and use the inspect array for same class elements to browse the HTML

![image](https://user-images.githubusercontent.com/28717686/151408140-a711c8d2-804e-47a9-81b9-6a1c99c897ca.png)

## [ESPN CRIC INFO](https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary) | Web Scraping

