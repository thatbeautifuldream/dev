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
  let contentArr = setTool(".maincounter-number span"); // inspect the html to find the content (store in array)

  // loop through the array and print the content
  //   for (let i = 0; i < contentArr.length; i++) {
  //     let data = setTool(contentArr[i]).text();
  //     console.log(data);
  //   }

  // individually access the content
  let totalCases = setTool(contentArr[0]).text();
  let totalDeaths = setTool(contentArr[1]).text();
  let totalRecovered = setTool(contentArr[2]).text();
  console.log("Total Casess : ", totalCases);
  console.log("Total Deaths : ", totalDeaths);
  console.log("Total Recovered : ", totalRecovered);
}

console.log("After");
