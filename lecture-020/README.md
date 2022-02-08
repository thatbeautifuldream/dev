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

- Both teams are in a `h5 container`

![Screenshot 2022-02-08 at 10 12 43 PM](https://user-images.githubusercontent.com/28717686/153034425-f2059d96-c682-4300-828d-bb43b6a4ad1b.png)

- Based on the teams deciding the opponent, we can use the `h5` container to extract the team name

```js
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
```

> Output:

```bash
> node scorecard.js
Match Details: Abu Dhabi, Sep 19 2020, Indian Premier League
Match Results: Super Kings won by 5 wickets (with 4 balls remaining)
Mumbai Indians v/s Chennai Super Kings
Chennai Super Kings v/s Mumbai Indians
```

```js

    let cInning = $(innings[i]);

    let allRows = cInning.find(".table.batsman tbody tr");

    for (let j = 0; j < allRows.length; j++) {
      let allCols = $(allRows[j]).find("td");
      let isWorthy = $(allCols[0]).hasClass("batsman-cell");

      if (isWorthy == true) {
        let playerName = $(allCols[0]).text().trim();

        let runs = $(allCols[2]).text().trim();
        let balls = $(allCols[3]).text().trim();
        let fours = $(allCols[5]).text().trim();
        let sixes = $(allCols[6]).text().trim();
        let STR = $(allCols[7]).text().trim();

        console.log(
          `${playerName} | ${runs} |${balls} | ${fours} | ${sixes} | ${STR}`
        );
      }
    }

    console.log(
      "----------------------------------------------------------------"
    );
  }
}
```

> Output:

```bash
Rohit Sharma (c) | 12 |10 | 2 | 0 | 120.00
Quinton de Kock † | 33 |20 | 5 | 0 | 165.00
Suryakumar Yadav | 17 |16 | 2 | 0 | 106.25
Saurabh Tiwary | 42 |31 | 3 | 1 | 135.48
Hardik Pandya | 14 |10 | 0 | 2 | 140.00
Kieron Pollard | 18 |14 | 1 | 1 | 128.57
Krunal Pandya | 3 |3 | 0 | 0 | 100.00
James Pattinson | 11 |8 | 2 | 0 | 137.50
Rahul Chahar | 2 |4 | 0 | 0 | 50.00
Trent Boult | 0 |1 | 0 | 0 | 0.00
Jasprit Bumrah | 5 |3 | 0 | 0 | 166.66
----------------------------------------------------------------
Murali Vijay | 1 |7 | 0 | 0 | 14.28
Shane Watson | 4 |5 | 1 | 0 | 80.00
Faf du Plessis | 58 |44 | 6 | 0 | 131.81
Ambati Rayudu | 71 |48 | 6 | 3 | 147.91
Ravindra Jadeja | 10 |5 | 2 | 0 | 200.00
Sam Curran | 18 |6 | 1 | 2 | 300.00
MS Dhoni (c)† | 0 |2 | 0 | 0 | 0.00
----------------------------------------------------------------
```
