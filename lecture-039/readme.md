# React Basics

- Virtual Dom (VDOM) is a tree data structure (of HTML elements) that represents the DOM.
- VDOM reflects changes only in the changed parts of the tree (partial update).
- React implements the virtual DOM and updates the DOM based on the virtual DOM.
- React is a library that allows us to create components.
- React uses an algorithm called diffing to update the DOM (tracks the changes)
- Whatever changes are made to the virtual DOM compared to the actual DOM, React updates the DOM using the diffing algorithm.

## Components

- React is a library that allows us to create components, and is component based library.
- Components are the building blocks of React, we can breakdown website into multiple components.
- For example, we can create a component that renders a button, and another component that renders a list of buttons.

## JSX

- JSX is a syntax extension to JavaScript that allows us to write HTML inside of JavaScript.
- Shortcommings of JSX is that it cant run any loops.
- Alternative to loops we can use map and filter.
- New functions can not be defined in JSX.
- Rather while using JSX we can use newly created functions or methords in JSX.

## Getting hands dirty with DOM Manipulation basics

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
    <div class="root"></div>
  </body>
  <script>
    // add h1 element hello to root div
    let h1 = document.createElement("h1");
    h1.innerHTML = "Hello";
    let root = document.querySelector(".root");
    root.appendChild(h1);
  </script>
</html>
```

- Just to explain basic react code we are using cdn, which in production is not recommended.
- Installation using npm will be discussed in next bit by bit.
- Same as above, but using JSX syntax.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div class="root"></div>

    <script type="text/babel">
      // add h1 element hello to root div
      // let h1 = document.createElement('h1');
      // h1.innerHTML = 'Hello';
      // let root = document.querySelector('.root');
      // root.appendChild(h1);

      // let ele = React.createElement('h1', {
      //     className: 'hello',
      //     id: 'hello',
      // }, 'Hello');

      // Syntax : ReactDOM.render(<element to render>, <where to render>);
      // ReactDOM.render(ele, document.querySelector('.root'));

      // Functional Component
      function Element() {
        return <h1>Hello</h1>;
      }
      ReactDOM.render(<Element />, document.querySelector(".root"));
    </script>
  </body>
</html>
```

- In order to use react we need react and react-dom cdn.
- Inorder to render anything using react we use, `ReactDOM.render(<element to render>, <where to render>);`
- Inorder to use JSX Syntax we need to transpile it using babel.
- To use babel we use cdn links in the head section.
- Babel is a compiler that transforms JavaScript code into a format that can be run by a JavaScript engine.
- In order for the browser to use the babel we need to tell that script type is `text/babel`.
