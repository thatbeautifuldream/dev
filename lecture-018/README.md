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

> Extracting all the `scorecard` links

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
  let scoreCardArr = $('a[data-hover = "Scorecard"]');
  for (let i = 0; i < scoreCardArr.length; i++) {
    let link = scoreCardArr[i].attribs.href;
    let fullLink = "https://www.espncricinfo.com" + link;
    console.log(fullLink);
  }
}
```

> Output :

```bash
$ node main.js
https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-in
dians-final-1237181/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-sunrisers
-hyderabad-qualifier-2-1237180/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore
-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-in
dians-qualifier-1-1237177/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-mumb
ai-indians-56th-match-1216495/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-cha
llengers-bangalore-55th-match-1216505/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-ra
jasthan-royals-54th-match-1216530/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-king
s-xi-punjab-53rd-match-1216506/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore
-vs-sunrisers-hyderabad-52nd-match-1216502/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-in
dians-51st-match-1216535/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kings-xi-punjab-vs-rajastha
n-royals-50th-match-1216537/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kolk
ata-knight-riders-49th-match-1216536/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-royal-cha
llengers-bangalore-48th-match-1216499/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-delh
i-capitals-47th-match-1216524/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-ki
ngs-xi-punjab-46th-match-1216520/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/rajasthan-royals-vs-mumbai-
indians-45th-match-1216541/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore
-vs-chennai-super-kings-44th-match-1216544/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kings-xi-punjab-vs-sunriser
s-hyderabad-43rd-match-1216498/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-de
lhi-capitals-42nd-match-1216497/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-mumb
ai-indians-41st-match-1216521/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/rajasthan-royals-vs-sunrise
rs-hyderabad-40th-match-1216518/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-ro
yal-challengers-bangalore-39th-match-1216494/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kings-xi-punjab-vs-delhi-ca
pitals-38th-match-1216546/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-raja
sthan-royals-37th-match-1216533/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-kings-xi-
punjab-36th-match-1216517/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-kolk
ata-knight-riders-35th-match-1216512/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-chennai-s
uper-kings-34th-match-1216509/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/rajasthan-royals-vs-royal-c
hallengers-bangalore-33rd-match-1216522/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-kolkata-k
night-riders-32nd-match-1216526/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore
-vs-kings-xi-punjab-31st-match-1216531/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-rajasthan
-royals-30th-match-1216543/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-chen
nai-super-kings-29th-match-1216528/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore
-vs-kolkata-knight-riders-28th-match-1216540/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-delhi-cap
itals-27th-match-1216529/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-raja
sthan-royals-26th-match-1216507/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-roya
l-challengers-bangalore-25th-match-1216525/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kings-xi-punjab-vs-kolkata-
knight-riders-24th-match-1216523/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/rajasthan-royals-vs-delhi-c
apitals-23rd-match-1216500/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-king
s-xi-punjab-22nd-match-1216542/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-ch
ennai-super-kings-21st-match-1216501/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-rajasthan
-royals-20th-match-1216511/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore
-vs-delhi-capitals-19th-match-1216519/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kings-xi-punjab-vs-chennai-
super-kings-18th-match-1216513/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-sunrisers
-hyderabad-17th-match-1216538/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-kolkata-k
night-riders-16th-match-1216515/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore
-vs-rajasthan-royals-15th-match-1216514/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-sunr
isers-hyderabad-14th-match-1216516/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kings-xi-punjab-vs-mumbai-i
ndians-13th-match-1216503/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/rajasthan-royals-vs-kolkata
-knight-riders-12th-match-1216504/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-mumbai-indians-5th-match-1216508/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/rajasthan-royals-vs-chennai-super-kings-4th-match-1216496/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-royal-challengers-bangalore-3rd-match-1216534/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-kings-xi-punjab-2nd-match-1216493/full-scorecard
https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard
```
