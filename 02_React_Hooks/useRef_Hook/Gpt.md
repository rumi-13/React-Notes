# What is the useRef Hook?

The `useRef` hook is a built-in React hook that allows you to persist values across renders without causing re-renders. It is often used to access and interact with DOM elements directly, and also for storing mutable values that should not trigger a re-render when updated.

Unlike state variables created with `useState`, updating a `useRef` value does not cause the component to re-render.

```js
import { useRef } from 'react';
```

You can think of `useRef` as the React way to hold a reference to a DOM node or any mutable value you want to keep around without re-rendering.

## Basic Usage

Here's a simple example of using `useRef` to persist a mutable value:

```js
import { useRef } from 'react';

function Timer() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(`Clicked ${countRef.current} times`);
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

In this example, clicking the button increments the `current` property of `countRef`. The component doesn't re-render when the value changes, but the updated value is retained between renders.

---

## Accessing DOM Elements

One of the most common uses of `useRef` is accessing DOM nodes.

```js
import { useRef, useEffect } from 'react';

function TextInputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

In this example, the input element will be focused automatically when the component mounts. The `inputRef` holds a reference to the DOM element.

---

## Keeping Mutable Values Between Renders

`useRef` is useful for keeping any mutable value around similar to an instance variable in a class component.

```js
function Stopwatch() {
  const timerId = useRef(null);
  const startTime = useRef(null);

  const start = () => {
    startTime.current = Date.now();
    timerId.current = setInterval(() => {
      console.log(Date.now() - startTime.current);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
```

Here, both `timerId` and `startTime` are used to keep track of values across renders, but without causing re-renders themselves.

---

## When Not to Use useRef

Avoid using `useRef` to manage values that should affect rendering or UI. In those cases, `useState` or `useReducer` should be used instead.

---

## Conclusion

You have learned that the `useRef` hook is useful for:

- Persisting values between renders without re-rendering
- Storing mutable variables
- Accessing and interacting with DOM elements directly

It is a powerful and flexible hook that plays a unique role in the React Hooks ecosystem, especially for tasks that involve direct manipulation or stable reference to values.

