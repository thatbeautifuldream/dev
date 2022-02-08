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
    htmlString = $(innings[i]).html();
  }
  console.log(htmlString);
}
```

- Added a new file to store the HTML data [`innings.html`](https://thatbeautifuldream.github.io/pepcoding-webdev/lecture-020/espn-scraper/innings.html)

![Screenshot 2022-02-08 at 9 47 42 PM](https://user-images.githubusercontent.com/28717686/153029878-945d1b7b-dfb8-4d3b-85f3-407ba48ce499.png)
