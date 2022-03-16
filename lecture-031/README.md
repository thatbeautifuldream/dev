# Document Object Model

- The DOM is a tree structure that represents the document as a whole in HTML.
- There are many ways to access the DOM, but the most common way is to use the `document` object.
- The `document` object is the root of the DOM tree.
- The `document` object has`parentNode` property and `childNodes` property.
- The Event handler is attached to the `document` object, it is called when the DOM is loaded.
- The `document` object has a `querySelector` method that returns the first element that matches the specified CSS selector.
- The `addEventListener` method attaches an event handler to an element.
- Syntax : `element.addEventListener(event, handler, useCapture)`
- Example : `element.removeEventListener("click", function() { alert("Hello!"); }, false);`
- `appendChild` method adds a node to the end of the list of children of a specified parent node.
- `removeChild` method removes a specified child node from the DOM tree.
- `innerHTML` property sets the HTML content of the specified element.
- `innerText` property sets the text content of the specified element.

## Problem 1

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button>Say Hello</button>
    <script type="text/javascript">
      //Q1 on Clicking the Button append hello to the page
      document.querySelector("button").onclick = function () {
        document.body.innerHTML += "<h1>Hello</h1>";
      };
      //or
      let btn = document.querySelector("button");
      btn.addEventListener("click", function () {
        document.body.innerHTML += "<h1>Hello</h1>";
      });
    </script>
  </body>
</html>
```

## Problem 2

- `querySelectorAll` method returns a node-list of all elements that match the specified CSS selector.
- `insertBefore` method inserts a node as a child, right before an existing child of the specified parent node.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>

    <script>
      // Fix the list by inserting the missing element using querySelectorAll and insertBefore(value, referenceNodeBefore)
      let list = document.querySelector("ul");
      let allListItems = document.querySelectorAll("li"); //comes in a node list form which is not array so cant use array methods
      list.insertBefore(
        (document.createElement("li").innerText = "7"),
        allListItems[6]
      );
    </script>
  </body>
</html>
```

## Problem 3

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Q Fix the mathematical problem using JS -->
    <p>2 + 2 = 22</p>
    <script>
      let p = document.querySelector("p");
      p.innerHTML = "2 + 2 = " + (2 + 2);
    </script>
  </body>
</html>
```

## Problem 4

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 5rem;
      }

      .blue {
        background-color: blue;
        box-shadow: 0px 0px 6px 5px;
      }

      .green {
        background-color: green;
        box-shadow: 0px 0px 6px 5px;
      }

      .red {
        background-color: red;
        box-shadow: 0px 0px 6px 5px;
      }

      .card {
        border: 1px solid;
        height: 10rem;
        width: 10rem;
        margin: 2rem;
      }
    </style>
  </head>

  <body>
    <div class="card" data-color="blue"></div>
    <div class="card" data-color="red"></div>
    <div class="card" data-color="blue"></div>
    <div class="card" data-color="red"></div>
    <div class="card" data-color="red"></div>
    <div class="card" data-color="blue"></div>
    <div class="card" data-color="green"></div>
    <div class="card" data-color="blue"></div>
    <div class="card" data-color="green"></div>
    <div class="card" data-color="blue"></div>
    <script>
      // Q Write a script which fetches the data-color attribute of the card on
      //double clicking on them and attaches the fetched class to that card.
      // Also changes the data-color attribute to "used"

      let cards = document.querySelectorAll(".card");

      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("dblclick", function (e) {
          let classTobeAttached = e.currentTarget.getAttribute("data-color");
          e.currentTarget.setAttribute("data-color", "used");
          e.currentTarget.classList.add(classTobeAttached);
        });
      }
    </script>
  </body>
</html>
```
