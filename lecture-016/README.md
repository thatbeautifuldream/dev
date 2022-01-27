# Lecture 16 | Web Scraping

> Website to scrape: [worldometers.info/coronavirus](https://www.worldometers.info/coronavirus/)

## Undestanding the [Request Module](https://www.npmjs.com/package/request)

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

> Example from our code

```bash
$ node request.js
error: null
statusCode: 200
```
