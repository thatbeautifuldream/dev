// get the number of products whose price is atleast 100
const products = [
  { name: "T-Shirt", price: 25 },
  { name: "Headphones", price: 125 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 200 },
];
// hint : chaining map and filter
let productsAbove100 = products
  .map(function (product) {
    return product.price;
  })
  .filter(function (price) {
    return price >= 100;
  });
console.log(productsAbove100.length);
