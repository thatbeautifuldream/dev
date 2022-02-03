const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const cheerio = require("cheerio");
const request = require("request");

request(url, cb);

// cb is a callback function for request
function cb(err, response, html) {
  if (err) {
    console.error(err);
  } else {
    extractLink(html);
  }
}

function extractLink(html) {
  const $ = cheerio.load(html);
  let anchorElement = $("a[data-hover = 'View All Results']");
  let link = anchorElement.attr("href");
  let fullLink = "https://www.espncricinfo.com" + link; // view all results
  console.log(fullLink);

  getAllMatchLink(fullLink);
}

function getAllMatchLink(uri) {
  request(uri, function (err, response, html) {
    if (err) {
      console.error(err);
    } else {
      extractAllLink(html); // all scorecard link
    }
  });
}

function extractAllLink(html) {
  const $ = cheerio.load(html);
  let anchorElement = $("a[data-hover = 'View Scorecard']");
  let link = anchorElement.attr("href");
  let fullLink = "https://www.espncricinfo.com" + link; // view all results
  console.log(fullLink);
}
