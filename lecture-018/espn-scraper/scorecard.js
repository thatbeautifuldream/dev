// idea for the task was to use split() on the string and then use a for loop to iterate through the array

const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";

const cheerio = require("cheerio");
const request = require("request");

request(url, cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    extractMatchDetails(html);
  }
}

function extractMatchDetails(html) {
  const $ = cheerio.load(html);
  let div = $(".header-info .description").text();
  let arr = div.split(",");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
