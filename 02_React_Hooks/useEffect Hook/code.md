# Understanding  `useEffect` in React

## Introduction
This project demonstrates the use of the `useEffect` hook in React to side effects. The application consists of two counters and a timer, each showcasing different aspects of React's state management and effect handling.

## Concepts Covered
### 1. **useState Hook**
`useState` is a React Hook that allows functional components to have state.
- It initializes a state variable with a default value.
- A function is provided to update the state.
- When the state updates, React re-renders the component.

### 2. **useEffect Hook**
`useEffect` allows performing side effects in functional components.
- Runs after every render by default.
- Can run conditionally based on dependencies.
- Can return a cleanup function to prevent memory leaks.

---

## Code Breakdown

### **1. Importing React Hooks**
```jsx
import { useState, useEffect } from "react";
```
- `useState` manages state variables.
- `useEffect` handles side effects.

### **2. Defining State Variables**
```jsx
const [count, setCount] = useState(0);
const [eCount, setEcount] = useState(0);
const [time, setTime] = useState(0);
```
- `count`: Tracks the number of times the first button is clicked.
- `eCount`: Tracks the number of times the second button is clicked.
- `time`: Tracks the elapsed time in seconds.

### **3. Updating State**
```jsx
const updateCount = () => {
  setCount(count + 1);
};

const updateEcount = () => {
  setEcount(eCount + 1);
};
```
- `updateCount`: Increments `count` state when the first button is clicked.
- `updateEcount`: Increments `eCount` state when the second button is clicked.

### **4. Using `useEffect` to Update Document Title**
```jsx
useEffect(() => {
  document.title = `${eCount} and ${count} times Clicked`;
}, [count, eCount]);
```
- Runs whenever `count` or `eCount` changes.
- Updates the page title dynamically with the click count.

### **5. Using `useEffect` to Manage a Timer**
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setTime(time + 1);
  }, 1500);

  return () => {
    clearInterval(timer);
  };
}, [count]);
```
- Starts a timer that increments `time` every 1.5 seconds.
- Runs only when `count` changes.
- **Cleanup function**: Clears the previous interval to prevent memory leaks.

### **6. Rendering UI**
```jsx
return (
  <>
    <div className="text-4xl">
      <h1>{count} times Clicked</h1>
      <button onClick={updateCount} className="bg-blue-300 text-black rounded-sm p-2 m-7">Click Me</button>
      <h1>UseEffect used {eCount} times</h1>
      <button onClick={updateEcount} className="bg-red-300 text-black rounded-sm p-2 m-7">Click Me</button>
      <h1>The time is: {time} Seconds</h1>
    </div>
  </>
);
```
- Displays the counter values and timer.
- Uses `onClick` handlers to update state.

---

## **Key Takeaways**
- `useState` manages component-level state.
- `useEffect` allows side effects like updating the document title and handling timers.
- **Dependency array (`[count, eCount]`)** ensures effects run only when specified values change.
- **Cleanup function in `useEffect`** prevents memory leaks from intervals.
- Efficient state updates lead to reactive UI changes in real time.

This example provides a hands-on understanding of how React manages state and side effects in functional components!

