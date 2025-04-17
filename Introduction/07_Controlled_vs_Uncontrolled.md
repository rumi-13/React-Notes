# Controlled components vs. Uncontrolled components

This reading will teach you how to work with uncontrolled inputs in React and the advantages of controlled inputs via state design. You will also learn when to choose controlled or uncontrolled inputs and the features each option supports.

## Introduction

In most cases, React recommends using **controlled components** to implement forms. While this approach aligns with the React declarative model, **uncontrolled form fields** are still a valid option and have their merit. Let's break them down to understand the differences between these two approaches and when you should use each method.

---

## Uncontrolled Inputs

Uncontrolled inputs behave like standard HTML form inputs:

```jsx
const Form = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

They remember exactly what you type—because the **DOM** itself maintains their internal state.

### Accessing Input Value
To get the value, you can use a **React ref**:

```jsx
const Form = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
    // Do something with the value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
    </form>
  );
};
```

You **pull** the value from the field only when needed.

Uncontrolled components are the **simplest** way to implement form inputs. They are especially useful when your form is straightforward. However, they are **not as powerful** as controlled components.

---

## Controlled Inputs

Controlled inputs accept their current value as a **prop**, and updates are made via a **callback** (usually using `useState`).

```jsx
const Form = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <input value={value} onChange={handleChange} />
    </form>
  );
};
```

### Flow
- The input starts out as an empty string `""`
- You type "a" ➝ `handleChange` gets "a" via `e.target.value`, then calls `setValue("a")`
- You type "b" ➝ `handleChange` gets "ab", and the state is updated to `"ab"`

This **pushes** the value into React state on every keystroke.

### Benefits
With controlled components, the **form component always has the current value**. No need to ask for it explicitly. This keeps your **data (state)** and **UI (input tags)** in sync at all times.

You can now:
- Perform **instant validation**
- **Disable** the submit button unless all fields are valid
- **Enforce input formats** (e.g., phone numbers)
- **Combine multiple inputs** into one state value
- Dynamically render form fields based on logic

---

## File Input Type

Some form inputs, like `<input type="file" />`, are **always uncontrolled** in React. That's because their value is read-only and can't be set programmatically.

To handle file inputs, use a ref:

```jsx
const Form = () => {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = fileInput.current.files;
    // Do something with the files
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInput} />
    </form>
  );
};
```

---

## Conclusion

Use **uncontrolled components** with refs when your form is extremely basic and does not require real-time validation or interactivity.

Use **controlled components** when your form is dynamic, needs validations, formatting, or when your logic benefits from having the data available in the React state at all times.

---

## Feature Comparison Table

| Feature                                     | Uncontrolled | Controlled |
|---------------------------------------------|:------------:|:----------:|
| One-time value retrieval (on submit)        | Yes          | Yes        |
| Validation on submit                        | Yes          | Yes        |
| Instant field validation                    | No           | Yes        |
| Conditionally disabling the submit button   | No           | Yes        |
| Enforcing specific input formats            | No           | Yes        |
| Multiple inputs for one piece of data       | No           | Yes        |
| Dynamic inputs                              | No           | Yes        |

---

In summary, both approaches are valid. Controlled components offer tight integration with React’s state model and are more feature-rich. Uncontrolled components are quicker for very simple forms. Choose based on your specific needs.

