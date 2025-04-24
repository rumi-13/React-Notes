# Understanding Cross-Cutting Concerns and Higher-Order Components in React

When building React applications, you will often create generic functionality that is not directly related to business logic but is needed throughout the application. These functionalities include:

- Managing permission roles
- Handling errors
- Logging

These types of logic fall under **cross-cutting concerns**—common functionalities that span multiple parts of an application but do not belong to the core business logic.

## The Problem with Components Alone

Components are the primary unit of code reuse in React, but they aren’t always the best choice for encapsulating cross-cutting concerns. For example:

Imagine you're building the logic to display a **list of live orders** for a restaurant app called *Little Lemon*.

Here’s a valid approach:
- Use local state to store the list of orders.
- Use `useEffect` to handle the subscription and unsubscription to the live data.
- Update the state when new orders arrive.

Now imagine a second feature: displaying the **number of newsletter subscribers** in real-time. You’ll likely implement it similarly:
- Add a change listener on mount.
- Update state when the data source changes.
- Remove the listener on unmount.

### Identifying a Pattern
While the details (orders vs. users) differ, the implementation logic is mostly the same. In a large app, this subscription logic would be repeated in many places.

### Possible Solution: Custom Hook
You could write a **custom hook** to encapsulate the shared logic. However, this means altering every component that needs the data, making each of them stateful.

## A Better Alternative: Higher-Order Components (HOCs)

A **Higher-Order Component (HOC)** is a function that:
- Takes a component.
- Returns a new component with enhanced behavior.

> A component transforms props into UI.
> A higher-order component transforms a component into another component.

### Example: `withSubscription` HOC
Let’s say you create a HOC called `withSubscription`:
- It accepts a component and a `selectData` function (to determine whether you want orders or users).
- It returns a new component that:
  - Adds a subscription on mount.
  - Passes new data as a `data` prop to the wrapped component.
  - Forwards other props unchanged (a common HOC convention).

### Usage
You can then create two different components:
- One for **Live Orders**
- One for **Newsletter Subscribers**

All without duplicating the subscription logic in each component.

## Summary
In this lesson, you learned:
- What **cross-cutting concerns** are.
- Why components are not always sufficient for reusing behavior.
- How **Higher-Order Components (HOCs)** can encapsulate reusable logic like data subscriptions.

Another pattern for cross-cutting concerns—**render props**—will be discussed later.

> Cross-cutting concerns like subscriptions, logging, or permissions are better handled with advanced patterns like HOCs or render props rather than repeating logic in every component.

