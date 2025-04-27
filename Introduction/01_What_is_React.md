### React + Vite + Tailwind CSS Setup Notes
```
## 📘 What is React?

React is a JavaScript library for building user interfaces. It allows developers to create **reusable UI components**, manage state efficiently, and render changes dynamically.

- Developed by **Facebook**
- Works using a **virtual DOM**
- Component-based architecture
- Commonly used with libraries like **Vite** for fast development

---

## ⚡ Installing React with Vite

### Step 1: Create a Vite project

```bash
npm create vite@latest
```

- Choose a project name (e.g., `my-app`)
- Select **React** (or **React + TypeScript** if needed)

### Step 2: Navigate into your project

```bash
cd my-app
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Run the development server

```bash
npm run dev
```

---

## 🎨 Integrating Tailwind CSS with Vite

### Step 1: Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 2: Configure `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### Step 3: Add Tailwind to your CSS

In `src/index.css` or `src/App.css`, add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Import the CSS file

In `main.jsx`:

```js
import './index.css';
```

---

## ✅ Done!

Now you can use Tailwind utility classes directly in your React components.

Example:

```jsx
function App() {
  return (
    <div className="text-center p-4 text-2xl font-bold text-blue-600">
      Hello, Tailwind with React and Vite!
    </div>
  );
}
```