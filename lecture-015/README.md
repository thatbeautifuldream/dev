# Lecture 15 | Web Scraping w/ Js

## Callback Functions in Js

> 1. Callback functions are functions that are passed to other functions as arguments, and called later.
> 2. They are used to control the flow of a program.

```javascript
function callback(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}
```
