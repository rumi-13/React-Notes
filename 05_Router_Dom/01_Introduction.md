# Beginner's Detailed Guide to React Router DOM (with Navbar Example)

React itself only handles the UI. It doesn’t know about pages, URLs, or how to move between them. That’s where **React Router** comes in. Think of it as your app’s **GPS system** — it tells React which component to show for each path in your app.

---

## 🔧 1. What is React Router DOM?

**React Router DOM** is the web-specific version of React Router. It’s what helps you create multi-page navigation experiences in a *single-page application (SPA)*.

So, even though you only have one HTML file (`index.html`), your app *feels* like it has multiple pages, because React Router controls what content is shown based on the URL.

---

## 📅 2. Installing React Router DOM

Inside your React project:

```bash
npm install react-router-dom
```

This gives you access to routing components like `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, `<NavLink>`, etc.

---





---

### 📲 `<Outlet>`: For Nested Routes

Think of `<Outlet />` as a placeholder. It renders child components **inside the parent layout**.

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

In `DashboardLayout.jsx`, you need `<Outlet />` to show the profile/settings components.

```jsx
return (
  <div>
    <Sidebar />
    <Outlet />
  </div>
);
```

---

## 🚀 Navbar Example with React Router

### `Navbar.jsx`

```jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white shadow h-20">
      <nav className="h-full flex items-center justify-around bg-gray-200">
        <Link to="/">Home</Link>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 font-bold' : 'text-black'
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive ? 'text-green-500 font-bold' : 'text-black'
          }
        >
          Support
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
```

### `App.jsx`

```jsx
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
```

### `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Support from './pages/Support';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/support', element: <Support /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Explanation: Here, we use createBrowserRouter to define the routing structure. The routes include:

    The / route, which renders the Home component.

    The /contact route, which renders the Contact component.

    The /support route, which renders the Support component.

The RouterProvider is used to provide the router configuration to the entire app.

---

###🧠 Key Takeaways

    React Router allows for dynamic routing in React, making navigation seamless without full page reloads.

    Core components like <Link>, <NavLink>, <Routes>, and <Outlet> allow you to handle navigation and organize components efficiently.

    useNavigate lets you programmatically navigate, providing flexibility in routing based on events.
    
## 🤖 Wrap-Up

You just learned:
- What React Router DOM is
- How it controls navigation
- All the core components like `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, `<NavLink>`, `useNavigate`, and `<Outlet>`
- How to build a basic navbar with route-aware styling

From here, explore advanced topics like:
- Route loaders & actions
- Route protection (private routes)
- Lazy loading pages

Happy Routing ✨

