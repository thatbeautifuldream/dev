# DOM Manupilation

## Question 6

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

      .movies {
        height: 10rem;
        width: 10rem;
        margin: 2rem;
      }

      .price {
        background-color: rgb(247 84 33);
        height: 8rem;
        padding: 1.5rem;
        font-size: 2rem;
      }

      .heading {
        background-color: rgba(0, 0, 0, 0.856);
        height: 2rem;
      }

      .heading,
      .price {
        color: white;
        text-align: center;
        margin: 0;
      }

      select,
      h1 {
        position: fixed;
      }

      h1 {
        top: 0px;
      }

      select {
        width: 8rem;
      }
    </style>
  </head>

  <body>
    <h1>BOOK MY SHOW</h1>
    <select>
      <option value="none">None</option>
      <option value="action">Action</option>
      <option value="romance">Romance</option>
      <option value="comedy">Comedy</option>
    </select>
    <div class="movies">
      <h3 class="heading">Example-1</h3>
      <p class="price" data-category="action">Rs. 100</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-2</h3>
      <p class="price" data-category="action">Rs 200</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-3</h3>
      <p class="price" data-category="action">Rs. 150</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-4</h3>
      <p class="price" data-category="romance">Rs 200</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-5</h3>
      <p class="price" data-category="romance">Rs. 150</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-6</h3>
      <p class="price" data-category="romance">Rs. 150</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-7</h3>
      <p class="price" data-category="action">Rs 200</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-8</h3>
      <p class="price" data-category="comedy">Rs. 100</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-9</h3>
      <p class="price" data-category="romance">Rs. 100</p>
    </div>
    <div class="movies">
      <h3 class="heading">Example-10</h3>
      <p class="price" data-category="comedy">Rs 200</p>
    </div>
    <script>
      // Q Make the filter work

      let select = document.querySelector("select");
      select.addEventListener("change", function () {
        let filterVal = select.value;
        let allTickets = document.querySelectorAll(".price");
        if (filterVal == "none") {
          for (let i = 0; i < allTickets.length; i++) {
            allTickets[i].parentElement.style.display = "block";
          }
        } else {
          for (let i = 0; i < allTickets.length; i++) {
            if (allTickets[i].getAttribute("data-category") == filterVal) {
              allTickets[i].parentElement.style.display = "block";
            } else {
              allTickets[i].parentElement.style.display = "none";
            }
          }
        }
      });
    </script>
  </body>
</html>
```

## Question 7

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #pass {
        display: block;
        margin: auto;
        margin-top: 10rem;
        width: 25rem;
        height: 3rem;
      }

      p {
        text-align: center;
        font-size: 3rem;
        display: none;
      }
    </style>
  </head>
  <body>
    <input type="text" id="pass" />
    <p>Caps on!</p>
    <script>
      //Q- Write a script which keeps checking the password being entered. It should check if capslock is on or off if its on it should not allow to type and show "caps on" on screen, also it should only allow to type if the shift in pressed down.

      //   Solution :
      let isCaps = false;
      let isShift = false;
      let input = document.getElementById("pass");
      let text = document.querySelector("p");
      input.addEventListener("keypress", function (e) {
        if (e.getModifierState("CapsLock")) {
          text.style.display = "block";
          e.preventDefault();
        } else {
          text.style.display = "none";
        }
        if (!isShift) {
          e.preventDefault();
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key == "Shift") {
          isShift = true;
        }
      });
      document.addEventListener("keyup", function (e) {
        if (e.key == "Shift") {
          isShift = false;
        }
      });
    </script>
  </body>
</html>
```
