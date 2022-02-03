# Lecture 18 | Web Scraping

## :exclamation: ESPN Web Scraping Project

> [ESPN Cricinfo | https://www.espncricinfo.com/series/ipl-2020-21-1210595](https://www.espncricinfo.com/series/ipl-2020-21-1210595)

## Setup the folder structure

- Make a folder named `espn-scraping`
- Inside the `espn-scraping` folder, `npm init -y` : it will create a `package.json` file
- `npm i cheerio request` in the folder

> The actual **anchor** tag to the `scoreboard`

![image](https://user-images.githubusercontent.com/28717686/152389641-042f659f-9878-46a5-954b-ad1047d568f0.png)

> Code to _scrape the data_ from the website (view all results)

```js
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
  let fullLink = "https://www.espncricinfo.com" + link;
  console.log(fullLink);
}
```

> Output :

```bash
$ node main.js
https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
```

> The extracted `view all results` link

![image](https://user-images.githubusercontent.com/28717686/152388695-87532d94-e7e3-49b6-ac4c-649546b9d935.png)



> Scorecard `anchor`

![image](https://user-images.githubusercontent.com/28717686/152393627-061ae12e-23f4-4736-81d8-cf31b1a98a01.png)

> Scorecard `a[data-hover = "Scorecard"]` array

![image](https://user-images.githubusercontent.com/28717686/152394190-f46b9c36-8ad2-4005-8600-07852ca67fda.png)
