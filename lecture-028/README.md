# Lecture 28 | Async Await

## Coffee Problem

- We are supposed to place order for coffee and process it using promises.

```js
function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for Coffee");
    } else {
      reject("order cannot be Placed");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("Order is being Processed");
    resolve(`${order} Served`);
  });
}

// --> Promisified Solution
placeOrder("coffee")
  .then(function (demand) {
    console.log(demand);
    let orderIsProccesed = processOrder(demand);
    return orderIsProccesed;
  })
  .then(function (orderServed) {
    console.log(orderServed);
  })
  .catch(function (err) {
    console.log(err);
  });
```

- `async` function
  > An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
  > Async functions may also be defined as expressions.

```js
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

## Async Await Solution

```js
// Aysnc Await Solution - >

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("coffee");
    console.log(orderPlaced); // order for Coffee
    let proccessedOrder = await processOrder(orderPlaced);
    console.log(proccessedOrder);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
```

> Refactoring of the previous automation project using `async await`.
