# Lecture 20 | Web Scraping

- Scrape Team performance details from [this](https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard)
- Access the data using class selectors

![Screenshot 2022-02-08 at 9 34 20 PM](https://user-images.githubusercontent.com/28717686/153027066-2352ca69-cd87-468d-b641-3b718248cb92.png)

- grabbed the table contents from Mumbai and Chennai stats table as HTML and store in a html file

```js
// grabbing Mumbai and Chennai stats table
  let innings = $(".card.content-block.match-scorecard-table .Collapsible");
  let htmlString = "";
  for (let i = 0; i < innings.length; i++) {
    htmlString += $(innings[i]).html();
  }
  console.log(htmlString);
}
```

- Added a new file to store the HTML data [`innings.html`](https://thatbeautifuldream.github.io/pepcoding-webdev/lecture-020/espn-scraper/innings.html)

![Screenshot 2022-02-08 at 9 47 42 PM](https://user-images.githubusercontent.com/28717686/153029878-945d1b7b-dfb8-4d3b-85f3-407ba48ce499.png)

```js
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
    console.log(`${teamName}`);
  }
  // console.log(htmlString);
}
```

> Output:

```bash
> node scorecard.js
Match Details: Abu Dhabi, Sep 19 2020, Indian Premier League
Match Results: Super Kings won by 5 wickets (with 4 balls remaining)
Mumbai Indians
Chennai Super Kings
```
