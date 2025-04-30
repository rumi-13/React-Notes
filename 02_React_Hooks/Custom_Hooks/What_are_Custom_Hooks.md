# Custom Hooks in React

Custom hooks let you extract component logic into reusable functions. They are a convention in React, and their names always start with `use` to ensure that React can check for rules of hooks correctly.

A custom hook is a JavaScript function whose name starts with `use` and that may call other hooks inside it. It allows you to share logic between components without duplicating code.

---

## Why Use Custom Hooks?

React components often share logic like fetching data, subscribing to events, form handling, etc. Custom hooks let you encapsulate this logic in a separate function, keeping your component code clean and focused.

Consider a scenario where multiple components need to track the window width:

```js
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}
```

Now you can use `useWindowWidth()` in any component to get the current window width.

```js
function MyComponent() {
  const width = useWindowWidth();
  return <p>Window width: {width}</p>;
}
```

---

## Rules for Custom Hooks

Custom hooks must follow the rules of hooks:

- Only call hooks at the top level.
- Only call hooks from React functions or other custom hooks.
- The hook function's name must begin with `use`.

---

## Sharing Data with Custom Hooks

Custom hooks can return anything: variables, functions, or objects. This allows them to expose whatever parts of the logic are needed by the component.

Example: a hook to manage form input

```js
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
}
```

Usage:

```js
function ContactForm() {
  const name = useInput("");
  return <input type="text" {...name} />;
}
```

---

## Combining Hooks Inside Custom Hooks

You can compose hooks inside custom hooks to combine multiple behaviors into a single reusable unit.

```js
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return { count, increment, decrement };
}

function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

---

## Conclusion

Custom hooks allow you to reuse and organize logic across multiple components. They promote cleaner, more modular code and are a powerful feature of modern React development.

