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

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

- Inorder to render anything using react we use, `ReactDOM.render(<element to render>, <where to render>);`
- Inorder to use JSX Syntax we need to transpile it using babel.
- To use babel we use cdn links in the head section.

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

- Babel is a compiler that transforms JavaScript code into a format that can be run by a JavaScript engine.
- In order for the browser to use the babel we need to tell that script type is `text/babel`.

```html
<script type="text/babel">
  function Element() {
    return <h1>Hello</h1>;
  }
  ReactDOM.render(<Element />, document.querySelector(".root"));
</script>
```

- Babel is a transpiler that takes JSX and converts it to JavaScript.
- Alternatives to it are SWC transpiler and Webpack.
- Webpack is a module bundler.

## Child and Parent Components

```jsx
function Child() {
  return <h1>Hello</h1>;
}
function Parent() {
  return <Child />;
}
ReactDOM.render(<Parent />, document.querySelector(".root"));
```

- Note in order to use multiple child components we need to wrap them in a parent component and then render it.
- Common convention is to wrap them inside a div or an empty element `<> </>` popularly known as react fragment.

```jsx
function Child() {
  return <h1>Hello</h1>;
}
function Parent() {
  return (
    <>
      <Child />
      <Child />
      <Child />
    </>
  );
}
ReactDOM.render(<Parent />, document.querySelector(".root"));
```

- This will show 3 child components with same Hello text.

![scr 2022-04-15 at 10 22 15 PM](https://user-images.githubusercontent.com/28717686/163598410-f8679702-eeba-4352-8ee3-55da2b8d6f04.png)

- Inorder to see components we can use react developer tools, in the development build.

![scr 2022-04-15 at 10 26 11 PM](https://user-images.githubusercontent.com/28717686/163598784-17904774-ba2f-465c-a880-2b8f0dd040dc.png)
