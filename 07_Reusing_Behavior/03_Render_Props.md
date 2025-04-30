# Understanding the Render Props Pattern in React

In React, **code reusability** is a very important concept.  
You have already learned about **Higher-Order Components (HOCs)** — a technique where you create a new component by enhancing an existing one without modifying its original code.

However, **Higher-Order Components** are **not the only tool** for reusing code in React.

Just like you can use different utensils depending on the food (chopsticks for sushi, forks for pasta), in programming, you can choose between different patterns for code reusability depending on the situation.  
**The important thing is picking the tool that makes your job easier.**

One such tool you will now learn about is called the **Render Props Pattern**.

---

# What is Render Props?

**Render Props** is a technique for sharing code between components **by using a prop that is a function**.

> A **Render Prop** is a prop whose value is a **function** that returns a **React element**.

In simple words:
- Instead of creating a new component (like in HOC),
- You **pass a function as a prop** to a component,
- That component **calls** your function and gives you the data you need,
- **You decide** how to display the result.

---

# Why Use Render Props?

Suppose you're running a restaurant app for **Little Lemon** and you want to:
- Keep track of how many **desserts** and **drinks** are available on the menu.
- Fetch this information from a server.
- Display the counts nicely on the screen.

You could copy-paste the same **data-fetching logic** into each component...  
**BUT that would be messy and repetitive!**

Instead, you can use the **Render Props** pattern to:
- Write the fetching logic **once** in one component,
- Reuse it wherever you need it,
- Customize how the fetched data is displayed.

---

# How Does Render Props Work?

Let’s understand this step-by-step:

### 1. Create a Reusable Component: `DataFetcher`

```jsx
function DataFetcher({ url, render }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url === "/desserts") {
      setData(["cake", "ice cream", "pie"]);
    } else if (url === "/drinks") {
      setData(["coffee", "tea", "juice"]);
    }
  }, [url]);

  return render(data);
}
```

**Key points:**
- `url` prop tells which data to fetch (`/desserts` or `/drinks`).
- `render` prop is **a function** that describes how to display the fetched `data`.
- Inside `return`, instead of returning JSX directly, we **call `render(data)`** and let the parent component decide what to display.

---

### 2. Create Components That Use `DataFetcher`

Now, let's create two separate components — one to show the number of desserts and one for drinks:

#### a) DessertsCount Component

```jsx
function DessertsCount() {
  return (
    <DataFetcher
      url="/desserts"
      render={(data) => (
        <p>Number of desserts: {data.length}</p>
      )}
    />
  );
}
```

---

#### b) DrinksCount Component

```jsx
function DrinksCount() {
  return (
    <DataFetcher
      url="/drinks"
      render={(data) => (
        <h3>Number of drinks: {data.length}</h3>
      )}
    />
  );
}
```

---

### 3. Render Everything Inside App Component

```jsx
function App() {
  return (
    <div>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}
```

**Result:**  
When the app runs, you will see something like:

```
Number of desserts: 3
Number of drinks: 3
```

---

# Render Props vs Higher-Order Components (HOC)

| Feature | Render Props | Higher-Order Components (HOC) |
|:---|:---|:---|
| How it works | Passes a **function** as a prop | Wraps a **new component** around another component |
| Where new props come from | Passed **dynamically** through the render function | Passed **statically** as new props |
| Flexibility | Very flexible: you control rendering | Less flexible: structure is pre-decided |

**Both techniques aim to share logic across components without modifying them.**

---

# Why Render Props Are Useful

- They **separate** logic from presentation.
- They **promote reusability** and **reduce duplication**.
- They make your components **easier to maintain**.
- They give **full control** over how to display the result.

---

# Final Example Summary

- `DataFetcher` handles **only fetching**.
- `DessertsCount` and `DrinksCount` handle **only displaying**.
- **Render Props** connect them **elegantly**.

---

# Conclusion

The **Render Props Pattern** is a powerful technique to **reuse functionality** in React without repeating code.  
You use it when you want **different components to share logic** (like fetching data) but **customize how they render** the result.

Now, Little Lemon Restaurant can **easily track and display** how many desserts and drinks are available — and you have learned another important React skill!

