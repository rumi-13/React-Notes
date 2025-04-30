##  Props in React

**Props** (short for properties) are how data is passed from a parent component to a child component in React.

### Key Points:

1. **Read-Only:**
   - Props cannot be modified inside a component.
   - They are immutable.
   - If you want to change a value, you need to lift the state up to a parent component.

2. **Passed as Attributes in JSX:**
   - Props are passed using attributes on components.
   ```jsx
   <Greeting name="Alice" age={25} />
   ```

3. **Accessed in Child Components:**
   - Props are received as arguments in functional components:
   ```jsx
   function Greeting(props) {
     return <h1>Hello, {props.name}!</h1>;
   }
   ```
   - Or via destructuring:
   ```jsx
   function Greeting({ name }) {
     return <h1>Hello, {name}!</h1>;
   }
   ```

### Example:
```jsx
function App() {
  return <Profile username="coder123" followers={1000} />;
}

function Profile(props) {
  return (
    <div>
      <h2>User: {props.username}</h2>
      <p>Followers: {props.followers}</p>
    </div>
  );
}
```

In this example:
- `username` and `followers` are passed as props.
- `Profile` accesses them via `props.username` and `props.followers`.

Props help keep components **reusable and modular** by separating data from layout.

---
