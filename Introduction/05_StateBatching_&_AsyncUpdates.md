##  State Batching & Async Updates

**State Batching** refers to React's optimization technique where multiple state updates are grouped (or batched) together in a single re-render to avoid unnecessary renders.

### Why Batching?
- Improves performance.
- Avoids multiple re-renders for related state changes.

### Example:
```jsx
setCount(count + 1);
setFlag(true);
```
Without batching, this would cause **two renders**. With batching, both updates happen in **one render**.

### Automatic Batching:
Starting from React 18:
- Batching works **automatically** even in asynchronous functions like `setTimeout`, `fetch`, or event handlers.

```jsx
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(true);
});
```
In React 18+, the above would be batched automatically.

### Manual Batching:
React provides `flushSync` to force immediate updates when needed:
```jsx
import { flushSync } from 'react-dom';

flushSync(() => setCount(c => c + 1));
```

### Async Updates:
React schedules state updates **asynchronously**:
- `setState()` does **not** immediately update the state.
- The update is placed in a queue.
- React processes this queue before the next render.

### Why Async?
- Gives React control over when and how updates are applied.
- Enables features like batching, prioritization, and interruption (with Fiber).

---

