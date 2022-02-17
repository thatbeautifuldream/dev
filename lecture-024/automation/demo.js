const pptr = require("puppeteer");
const log = console.log;

// pptr has a heavily promises based
// pptr uses a headless chromium by default

log("Before");
// to see the browser in action, keep headless = false
let browserWillBeLaunchedPromise = pptr.launch({
  headless: false,
}); // returns a promise (pending)

// in order

browserWillBeLaunchedPromise.then(function (browser) {
  console.log("Browser is launched");
  return browser; // browser launched (promise is resolved)
});

log("After");
