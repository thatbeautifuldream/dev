const request = require("request");

console.log("Before");
request(
  "https://www.worldometers.info/coronavirus/",
  function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the given homepage.
  }
);
console.log("After");

module.exports = request;
