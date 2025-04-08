# 📚 Understanding `.sort()` in JavaScript with React Example

Sorting is one of the most important tasks when working with data in JavaScript. Whether you're dealing with numbers, strings, or objects, the `.sort()` method helps you arrange items the way you want.

In this article, we’ll understand how `.sort()` works **step by step**, especially in the context of a **React component** where we’re displaying a list of desserts sorted by calories.

---

## ⚖️ What is `.sort()`?

The `.sort()` method is used on arrays in JavaScript to **rearrange elements**. By default, it sorts values as **strings**, but you can pass in a custom compare function to sort numbers, objects, or other complex data.

Syntax:
```js
array.sort((a, b) => {
  // return a number
});
```

---

## 🍩 Real Example – Sorting Desserts by Calories

Let’s say we have this list of desserts:

```js
const data = [
  { id: '1', title: 'Chicken Burst Burger', calories: 450 },
  { id: '2', title: 'Chicken Momos', calories: 280 },
  { id: '3', title: 'Chicken Kanti', calories: 570 }
];
```

We want to show only desserts with **less than 500 calories**, and we want them **sorted from lowest to highest**.

---

## ⚛️ React Component Setup

Here’s our functional component:

```jsx
function DessertList(props) {
  const lowCaloriesDesserts = props.data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => (
      <li key={dessert.id}>
        {dessert.title} - {dessert.calories} cal
      </li>
    ));

  return <ul>{lowCaloriesDesserts}</ul>;
}
```

And we call it from the `App` component:

```jsx
function App() {
  return (
    <div>
      <h2>Desserts under 500 Calories</h2>
      <DessertList data={data} />
    </div>
  );
}
```

---

## 🔍 Breaking Down `.sort((a, b) => a.calories - b.calories)`

Let’s dive into this line:

```js
.sort((a, b) => a.calories - b.calories)
```

- `a` and `b` are two dessert objects being compared.
- `a.calories - b.calories` returns a **number**:
  - If it's **negative**, `a` is placed before `b`.
  - If it's **positive**, `b` is placed before `a`.
  - If it's **zero**, their order stays the same.

### 🎯 Example:
```js
a = { title: "Chicken Momos", calories: 280 }
b = { title: "Chicken Burst Burger", calories: 450 }

a.calories - b.calories = 280 - 450 = -170
```
Result: Since it's negative, **Momos comes before Burger**.

---

## ✅ Final Sorted Output

After filtering and sorting, the list becomes:

```
• Chicken Momos - 280 cal  
• Chicken Burst Burger - 450 cal
```

---

## ♻️ Reversing the Order

If you want **highest to lowest** calories:

```js
.sort((a, b) => b.calories - a.calories)
```

Now, `Burger` would come before `Momos`.

---

## 🄠 Bonus: Sorting Alphabetically

Want to sort by name instead of calories? Use:

```js
.sort((a, b) => a.title.localeCompare(b.title))
```

This compares the `title` strings and sorts them A to Z.

---

## 🧠 Summary Table

| Expression                    | Meaning                                 |
|------------------------------|-----------------------------------------|
| `a.calories - b.calories`    | Sort from **lowest to highest**         |
| `b.calories - a.calories`    | Sort from **highest to lowest**         |
| `a.title.localeCompare(b.title)` | Sort by **name A-Z**                     |
| `b.title.localeCompare(a.title)` | Sort by **name Z-A**                     |

---

## 📝 Conclusion

The `.sort()` method is powerful, and when combined with `.filter()` and `.map()`, it helps you create clean, customized lists in React. Whether you’re working with numbers or strings, understanding how `.sort()` works with a compare function gives you full control over your data.


