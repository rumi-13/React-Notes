
### 📍 `<NavLink>`: Highlight Active Link
### 📍 **`<NavLink>`: Highlight Active Link**

The `<NavLink>` component is a special version of `<Link>` provided by React Router that allows you to apply styles or classes to links based on their "active" state. This is particularly useful for navigation menus, where you may want to highlight the link corresponding to the current route.

---

### Why Use `<NavLink>`?

Unlike `<Link>`, which is used for basic navigation, `<NavLink>` helps with dynamic styling. It automatically adds an `active` class (or any class you define) to the link when its associated route is active. This makes it easier to highlight the currently active route in your navigation bar or menu.

---

### How It Works

`<NavLink>` works just like `<Link>`, but it comes with an added feature: it automatically manages the "active" state of the link. When the URL matches the path defined in the `to` prop, `<NavLink>` applies a special class to the link.

### Basic Syntax:
```jsx
<NavLink to="/about">About</NavLink>
```

In this example, when the URL path is `/about`, the `About` link will be automatically styled as active.

---

### Example with Active Class

You can customize how the active link looks by passing a function to the `className` prop. This function receives an object with the `isActive` property, which indicates whether the link is active.

```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
```

In this example:
- When the user navigates to `/about`, the `About` link will be highlighted with the `active` class.
- The `isActive` property is passed to the `className` function to conditionally apply the class based on whether the link is active.

---

### Styling the Active Link

You can define the `active` class in your CSS to style the active link. For example:

```css
.active {
  color: red;
  font-weight: bold;
}
```

Now, the active link will be styled with a red color and bold text.

---

### Advanced Example with Exact Matching

By default, `<NavLink>` applies the active class when the path **partially** matches the current URL. If you want the link to only be active when the path matches **exactly**, you can use the `end` prop.

```jsx
<NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
  Home
</NavLink>
```

- **`end` prop**: Ensures that the link is only active when the path is exactly `/`, preventing partial matching. For example, the home link won’t be active when navigating to `/about`.

---

### Example with Dynamic Styling Based on Active State

You can dynamically change styles based on whether a link is active or not:

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'blue' : 'gray'
  })}
>
  About
</NavLink>
```

In this example:
- When the `/about` route is active, the link’s font weight will be bold, and the color will be blue.
- When it is inactive, the font weight will be normal, and the color will be gray.

---

### Key Points:
- **Active State**: `<NavLink>` automatically adds a class (like `active`) to the link when its route matches the current URL.
- **Conditional Styling**: Use the `className` or `style` prop to apply custom styles based on whether the link is active.
- **Exact Matching**: The `end` prop ensures that the link is only active for an exact match of the path.

---





### Full Example with Navigation:

```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
```

Here, the active link will be highlighted, helping users clearly see which section of the site they are currently on.

---

### Conclusion:
`<NavLink>` is perfect for navigation links in your app where you need to highlight the active route. Whether it's by applying an `active` class or using inline styles, it gives you full control over the appearance of active navigation items. This makes it an essential tool for building intuitive and user-friendly navigation in your React apps!
---