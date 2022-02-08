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

// note : to select the desired class use parent class and then child class (desendent)

function extractMatchDetails(html) {
  const $ = cheerio.load(html);
  let descString = $(".header-info .description").text();
  let descStringArr = descString.split(",");
  // console.log(descStringArr);
  let venue = descStringArr[1].trim(); // using trim() to remove the white space is a good practice
  let date = descStringArr[2].trim();
  let matchType = descStringArr[3].trim();
  let results = $(".event .status-text span").text();
  console.log(`Match Details: ${venue}, ${date}, ${matchType}`);
  console.log(`Match Results: ${results}`);

  // grabbing Mumbai and Chennai stats table
  let innings = $(".card.content-block.match-scorecard-table .Collapsible");
  let htmlString = "";
  for (let i = 0; i < innings.length; i++) {
    htmlString += $(innings[i]).html();
    let teamName = $(innings[i]).find("h5").text();
    teamName = teamName.split("INNINGS")[0].trim();
    let opponentIndex = i == 0 ? 1 : 0;
    let opponentName = $(innings[opponentIndex]).find("h5").text();
    opponentName = opponentName.split("INNINGS")[0].trim();

    console.log(`${teamName} v/s ${opponentName}`);
  }
  // console.log(htmlString);
}
