const pptr = require("puppeteer");
const log = console.log;

// pptr has a heavily promises based
// pptr uses a headless chromium by default

log("Before");
// to see the browser in action, keep headless = false
let browserWillBeLaunchedPromise = pptr.launch({
  headless: false,
  defaultViewport: null,
}); // returns a promise (pending)

// in order

browserWillBeLaunchedPromise
  .then(function (browser) {
    //   console.log("Browser is launched");
    //   return browser; // browser launched (promise is resolved)
    let newTabPromise = browser.newPage(); // returns a promise (pending)
    return newTabPromise; // new tab is created (promise is resolved)
  })
  .then(function (newTab) {
    console.log("New tab is created");
    return newTab.goto(loginLink); // new tab is loaded (promise is resolved)
  })
  .then(function () {
    console.log("Opened https://milindmishra.me in the browser");
  });

log("After");
