# Types of Children in JSX

In JSX expressions, the content between an opening and closing tag is passed as a unique prop called `children`. There are several ways to pass children, such as rendering string literals or using JSX elements and JavaScript expressions. It is also essential to understand the types of JavaScript values that are ignored as children and don’t render anything. Let’s explore these in more detail:

## String Literals

String literals refer to simple JavaScript strings. They can be placed between the opening and closing tags, and the `children` prop will be that string:

```jsx
<MyComponent>Little Lemon</MyComponent>
```

In the above example, the `children` prop in `MyComponent` will be the string "Little Lemon".

There are also some rules JSX follows regarding whitespaces and blank lines you need to bear in mind, so that you understand what to expect on your screen when those edge cases occur.

### Whitespace and Blank Lines in JSX:
1. JSX removes whitespace at the beginning and end of a line, as well as blank lines:
    ```jsx
    <div>    Little Lemon   </div>
    <div>
      Little Lemon
    </div>
    ```
2. New lines adjacent to tags are removed:
    ```jsx
    <div>
      
      Little Lemon
    </div>
    ```
3. JSX condenses new lines in the middle of string literals into a single space:
    ```jsx
    <div>
      Little
      Lemon
    </div>
    ```

All the examples above render the same content.

## JSX Elements

JSX elements can be passed as children to display nested components:

```jsx
<Alert>
  <Title />
  <Body />
</Alert>
```
JSX also enables mixing and matching different types of children, like a combination of string literals and JSX elements:

```jsx
<Alert>
  <div>Are you sure?</div>
  <Body />
</Alert>
```

### React Fragments

A React component can also return a bunch of elements without wrapping them in an extra tag. For that, you can use React Fragments either using the explicit component imported from React or empty tags, which is a shorter syntax for a fragment. A React Fragment component lets you group a list of children without adding extra nodes to the DOM. You can learn more about fragments in the additional resources unit from this lesson.

The two code examples below are equivalent, and it’s up to your personal preference what to choose, depending on whether you prefer explicitness or a shorter syntax:

```jsx
return (
  <React.Fragment>
    <li>Pizza margarita</li>
    <li>Pizza diavola</li>
  </React.Fragment>
);
```

Or with shorter syntax:

```jsx
return (
  <>
    <li>Pizza margarita</li>
    <li>Pizza diavola</li>
  </>
);
```

## JavaScript Expressions

You can pass JavaScript expressions as children using curly braces `{}`:

```jsx
<MyComponent>{'Little Lemon'}</MyComponent>
```

This is equivalent to:

```jsx
<MyComponent>Little Lemon</MyComponent>
```

Expressions are particularly useful when rendering lists:

```jsx
function Dessert(props) {
  return <li>{props.title}</li>;
}

function List() {
  const desserts = ['tiramisu', 'ice cream', 'cake'];
  return (
    <ul>
      {desserts.map((dessert) => <Dessert key={dessert} title={dessert} />)}
    </ul>
  );
}
```
Also, you can mix JavaScript expressions with other types of children without having to resort to string templates, like in the example below:

```jsx
function Hello(props) {
  return <div>Hello {props.name}!</div>;
}
```

## Functions as Children

Suppose you insert a JavaScript expression inside JSX. In that case, React will evaluate it to a string, a React element, or a combination of the two. However, the children prop works just like any other prop, meaning it can be used to pass any type of data, like functions.

Function as children is a React pattern used to abstract shared functionality that you will see in detail in the next lesson

## Booleans, Null, and Undefined

Values like `false`, `null`, `undefined`, and `true` are valid children but are ignored and render nothing:

```jsx
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
```

Again, this is all for demonstration purposes so that you know what to expect on your screen when these special values are used in your JSX. 

When used in isolation, they don’t offer any value. However, boolean values like true and false can be useful to conditionally render React elements, like rendering a Modal component only if the variable showModal is true

```jsx
<div>
  {showModal && <Modal />}
</div>
```

### Beware of 0

However, keep in mind that React still renders some "false" values, like the 0 number. For example, the below code will not behave as you may expect because 0 will be printed when props.desserts is an empty array:

```jsx
<div>
  {props.desserts.length && <DessertList desserts={props.desserts} />}
</div>
```

To prevent `0` from being rendered:

```jsx
<div>
  {props.desserts.length > 0 && <DessertList desserts={props.desserts} />}
</div>

<div>
  {!!props.desserts.length && <DessertList desserts={props.desserts} />}
</div>
```

## Conclusion

You have learned about different types of children in JSX:
- How to render **string literals**
- How to use **JSX elements** and **JavaScript expressions**
- How **functions** can be used as children
- How **boolean, null, or undefined** values are ignored as children and don’t render anything

