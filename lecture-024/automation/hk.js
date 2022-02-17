const loginLink = "https://www.hackerrank.com/auth/login";
const log = console.log;
const email = "xiyale4432@goonby.com";
const password = "xiyale4432";
const name = "Mike Tyson";

let puppeteer = require("puppeteer");

console.log("Before");

let page;

// Puppeteer works on promises

let browserWillbeLauncedPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  rgs: ["--start-maximized"],
});
// we used puppeteer launch method to return an instance of broswer

browserWillbeLauncedPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
  })
  .then(function (newTab) {
    console.log("New Tab opened");
    page = newTab;
    let pageWillbeOpenedPromise = newTab.goto(loginLink);
    return pageWillbeOpenedPromise;
  })
  .then(function () {
    let typedEmailPromise = page.type("input[id='input-1']", email, {
      delay: 100,
    });
    return typedEmailPromise;
  })
  .then(function () {
    let typePasswordPromise = page.type("input[id='input-2']", password, {
      delay: 100,
    });
    return typePasswordPromise;
  })
  .then(function () {
    let loginPromise = page.click('button[data-analytics="LoginPassword"]', {
      delay: 100,
    });
    return loginPromise;
  });

console.log("After");
