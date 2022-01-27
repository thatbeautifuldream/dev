const request = require("request");
const cheerio = require("cheerio");

let url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

request(url, cb);

function cb(error, response, html) {
  if (error) {
    console.log(error);
  } else {
    handleHtml(html);
  }
}

// Task : Scrape the data of last ball (18.5) commentary from the website

function handleHtml(html) {
  let $ = cheerio.load(html);
  // target last ball commentary
  let lbc = $(
    ".d-flex.match-comment-padder.align-items-center .match-comment-long-text"
  );
  let data = $(lbc[0]).text();
  console.log(data);
}
