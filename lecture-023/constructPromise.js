const log = console.log;

// syntax to construct a promise
// let myPromise = new Promise(function (resolve, reject) {});

let promise = new Promise(function (resolve, reject) {
  const x = "Milind";
  const y = "Milind";
  if (x == y) {
    resolve("Same");
  } else {
    reject("Not Same");
  }
});

promise
  .then(function (data) {
    log(data);
  })
  .catch(function (err) {
    log(err);
  });

log(promise);
