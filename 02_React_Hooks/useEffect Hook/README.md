# Understanding `useEffect` in React

## Introduction
`useEffect` is one of the most essential hooks in React, allowing functional components to handle side effects such as data fetching, subscriptions, timers, and DOM updates. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components.

## Syntax
```jsx
useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);
```
- The **callback function** runs after the component renders.
- The **cleanup function** (optional) runs before the component unmounts or before the effect re-executes.
- The **dependency array** determines when the effect runs.

---

## How `useEffect` Works
### 1. **Running After Every Render (No Dependencies)**
```jsx
useEffect(() => {
  console.log("Component rendered or re-rendered");
});
```
- Runs **after every render**.
- Can cause performance issues if not used carefully.

### 2. **Running Once After Mounting (Empty Dependency Array)**
```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```
- Runs only **once** after the initial render.
- Useful for fetching data or setting up event listeners.

### 3. **Running Only When Certain State/Props Change**
```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```
- Runs only when `count` changes.
- Prevents unnecessary executions.

### 4. **Cleanup Function (Component Unmount or Effect Cleanup)**
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Cleanup: Timer stopped");
  };
}, []);
```
- Runs once on mount, sets up an interval.
- Cleanup function runs on unmount, preventing memory leaks.

---

## Common Use Cases
### 1. **Fetching Data from an API**
```jsx
useEffect(() => {
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => setData(data));
}, []);
```
- Fetches data once after the component mounts.

### 2. **Updating the Document Title**
```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```
- Updates the title dynamically based on `count`.

### 3. **Event Listeners (With Cleanup)**
```jsx
useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```
- Attaches an event listener when the component mounts.
- Removes it when the component unmounts.

---

## Best Practices
✅ Use **dependencies wisely** to avoid unnecessary effect executions.  
✅ **Always return cleanup functions** when dealing with subscriptions, timers, or event listeners.  
✅ **Avoid unnecessary side effects** inside effects—use them only when needed.  
✅ **Use multiple `useEffect` hooks** if handling different concerns separately.  

By mastering `useEffect`, you can efficiently manage side effects in functional components and write more optimized React applications!

