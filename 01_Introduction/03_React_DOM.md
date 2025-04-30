# React DOM: Concepts and Under-the-Hood Explanation

## 1. React DOM: Explanation & Under-the-Hood Working

**React DOM** is the package that provides DOM-specific methods used at the top level of a React app. It enables React to interact with the browser DOM.

### What it does:
- ReactDOM handles rendering elements and components to the DOM using `ReactDOM.render()` or `createRoot().render()` in newer versions.
- It connects the virtual DOM (a lightweight copy of the real DOM) with the real DOM.

### Under the Hood:
1. JSX like `<div>Hello</div>` is compiled into React.createElement calls.
2. React creates a **Virtual DOM** from these elements.
3. ReactDOM compares the new Virtual DOM to the previous one using **diffing**.
4. ReactDOM performs minimal and efficient DOM updates.

The virtual DOM is fast because it’s a plain JavaScript object. Real DOM operations are slow, so ReactDOM tries to reduce direct interaction with it.

---

## 2. Fiber (Reconcilation Engine)

**Fiber** is React’s new architecture for rendering and reconciliation, introduced in React 16.

### Goals of Fiber:
- Improve responsiveness by splitting rendering into chunks.
- Allow pausing and resuming work.
- Enable prioritization of updates (like user input over background tasks).

### What is a Fiber?
- A **Fiber** is a JavaScript object that represents a unit of work.
- Each component in the UI is associated with a Fiber node.
- The Fiber node stores information like component type, props, state, and effect tags.

### How Fiber Works:
- It builds a **Fiber Tree** during rendering.
- The tree is built in two phases:
  - **Render Phase (Reconciliation):** Creates the new fiber tree.
  - **Commit Phase:** Applies changes to the DOM.
- It can yield control to the browser between units of work, allowing smoother experiences (like animations).

### Headline feature: "Incremental Rendering"
 - split rendering work into  chunks ND SPREAD IT OVER MULTIPLE FRAMES
---

## 3. Reconciliation

**Reconciliation** is the process React uses to update the DOM with the least number of operations.

### What happens:
1. React builds a new Virtual DOM tree on update.
2. Compares it with the previous Virtual DOM tree.
3. Determines what has changed (this is called **diffing**).
4. Creates a list of **effects** (like insert, delete, or update operations).
5. These effects are applied during the commit phase.

### Heuristics:
- If elements have the same type and key, React reuses the existing DOM node.
- If keys are different, React assumes elements have changed.

Efficient reconciliation avoids redrawing large portions of the UI unnecessarily.

---

## 4. Update

An **update** in React is any change in props, state, or context that triggers a re-render of a component.

### What Happens on Update:
1. React detects the update (e.g., `setState`, prop change).
2. It schedules a re-render of the affected components.
3. During the render phase, it builds a new fiber tree.
4. The reconciliation process compares the new and old trees.
5. Changes are batched and committed to the DOM in the commit phase.

### Lifecycle:
- For class components: `componentDidUpdate`, `shouldComponentUpdate`, etc.
- For functional components: `useEffect`, `useMemo`, `useCallback`, etc.

---

## 5. Hydration

**Hydration** is the process of attaching event listeners and React logic to HTML that was rendered on the server.

### Used In:
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)

### Why Hydration?
- Improves initial load time because the HTML is pre-rendered.
- React reuses this HTML and connects it to the virtual DOM.

### How it Works:
1. The server sends the HTML markup.
2. React loads on the client and "hydrates" that HTML.
3. It checks if the DOM matches React's virtual DOM.
4. Attaches events and state without re-rendering everything.

If there’s a mismatch between server-rendered HTML and client-rendered virtual DOM, React logs a warning and might re-render.

---

## 6. Reconciliation vs Rendering

### Rendering
- Rendering is the process of **generating the virtual DOM** using React components.
- This happens whenever a component is created or re-rendered due to updates.
- It describes **how the UI should look**.

### Reconciliation
- Reconciliation happens **after rendering**.
- It compares the newly rendered virtual DOM with the previous one.
- It figures out **what has changed** and how to efficiently update the actual DOM.

### Summary Table:
| Aspect             | Reconciliation                              | Rendering                                |
|--------------------|---------------------------------------------|-------------------------------------------|
| What it is         | Diffing old vs new virtual DOM              | Creating virtual DOM from JSX             |
| Purpose            | To determine what changed                   | To describe how UI should look            |
| Output             | List of changes (effects)                   | Virtual DOM tree                          |
| When it happens    | After a state/prop change                   | Initially or after update                 |
| Related to         | Fiber, virtual DOM, keys                    | Component functions, JSX                  |

# Getaways:
- In UI,  its not necessary for every update to be applied immediately, in fact doing so can be wasteful

- The primary goal of fiber is to enable React to take advantages of Scheduling

-Specifically we need to able to:
    - pause work and come back to it either
    - assign priority
    - reuse previoussly completed work 
    - abort work
---



