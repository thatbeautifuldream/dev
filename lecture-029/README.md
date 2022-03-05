# Lecture 29 | Mini Project using Promises

- Installation `Inquirer <https://www.npmjs.com/package/inquirer>`

```bash
> npm i inquirer
```

- Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js
- It is a library that provides a simple way to create a command line user interface.

```js
var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      name: "selection",
      choices: ["About", "Skills", "Academics", "Projects", "Contact"],
    },
  ])
  .then((answers) => {
    console.log(answers);
    if (answers.selection === "choice 1") {
      console.log("choice 1");
    } else {
      console.log("choice 2");
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.log("Something else went wrong");
    }
  });
```

- Running the above code will output

```bash
> node demo.js
? selection: (Use arrow keys)
❯ choice 1
  choice 2
```

- On selection

```bash
? selection: choice 1
{ selection: 'choice 1' }
choice 1
```

- Completed Project

```js
const inquirer = require("inquirer");
const cp = require("child_process");

function displayList() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["About", "Skills", "Academics", "Projects", "Contact"],
      },
    ])
    .then(function (ans) {
      if (ans.selection == "About") {
        console.log(`I'm an Electronics and Communication Engineer from Bangalore, India.
🔭 I'm currently working on Data Structures and Algorithms
🌱 I'm currently learning everything 🤣
👯 I'm looking to collaborate with other content creators
🥅 2022 Goals: Contribute more to Open Source projects
⚡ Fun fact: I love anime 🍿`);
        displayNext();
      } else if (ans.selection == "Skills") {
        console.log("Java , JavaScript , React , NodeJs");
        displayNext();
      } else if (ans.selection == "Academics") {
        console.log("B.Tech in Electronics and Communication Engineering");
        displayNext();
      } else if (ans.selection == "Projects") {
        console.log("🤖 GitHub : https://github.com/thatbeautifuldream");
        displayNext();
      } else if (ans.selection == "Contact") {
        console.log(`
📞 Phone: +91-9631333128
📧 Email: milind.mishra4@gmail.com
            `);
        displayNext();
      }
    });
}

displayList();

// Go back option ->

function displayNext() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["Go back", "Exit"],
      },
    ])
    .then(function (ans) {
      if (ans.selection == "Go back") {
        displayList();
      } else if (ans.selection == "Exit") {
        console.log("Resume closed");
      }
    });
}
```
