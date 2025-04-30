# Understanding Context API in React

When working with complex component trees in React, passing data from parent to deeply nested child components can become messy. This is known as **prop drilling**.

### What is Prop Drilling?
Prop drilling is the process of passing data from a top-level component down to nested components through props, even if intermediate components do not need the data. This leads to unnecessary complexity and less maintainable code.

To solve this issue, React provides the **Context API**, which allows you to share data across components without passing props manually at every level.

---

## Using Context API in Four Steps

### Step 1: Create a Context
First, you need to create a context using `createContext()` from React:

```js
import { createContext } from "react";

const userContext = createContext();

export default userContext;
```

This creates a context object which can be used to provide and consume data.

---

### Step 2: Wrap All Children Inside a Provider
Next, you wrap the components that need access to the context inside a `Provider` component.

```js
import { useState } from 'react'
import './App.css'
import ChildA from './components/childA'
import userContext from './context/ThemeContext'

function App() {
  return (
    <>
      <userContext.Provider>
        <ChildA/>
      </userContext.Provider>
    </>
  )
}

export default App;
```

At this stage, the `Provider` exists but does not provide any actual value.

---

### Step 3: Pass a Value to the Provider
Now, pass the actual data you want to share using the `value` prop of the provider:

```js
function App() {
    const [user, setUser] = useState({ name: "Rumi" })

    return (
        <>
            <userContext.Provider value={user}>
                <ChildA />
            </userContext.Provider>
        </>
    )
}
```

In this example, an object containing the user's name is passed to the provider. All child components inside this provider will now have access to this value.

---

### Step 4: Consume the Value Inside a Consumer Component
To use the value provided by the context, use the `useContext` hook inside any child component:

```js
import React, { useContext } from 'react'
import userContext from '../context/ThemeContext'

function ChildC() {
    const user = useContext(userContext);

    return (
        <>
            <h1>Hello</h1>
            <h1>{user.name}</h1>
        </>
    )
}

export default ChildC;
```

Here, `ChildC` uses the `useContext` hook to access the `user` object provided by the context. It then displays the user's name.

---

## Summary
- **Prop drilling** can make component trees unnecessarily complex.
- **Context API** simplifies state sharing across deeply nested components.
- It involves:
  1. Creating a context.
  2. Wrapping child components with a provider.
  3. Passing the state to the provider.
  4. Consuming it via the `useContext` hook.

Context API makes your React applications cleaner and easier to manage, especially when dealing with global data like user info, themes, or language settings.

