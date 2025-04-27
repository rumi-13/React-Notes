## Using `useLoaderData`

Once a loader has fetched data, you need a way to access that data inside your component. React Router provides a hook called `useLoaderData()` for this purpose ([Data Loading  | React Router](https://reactrouter.com/start/data/data-loading#:~:text=The%20data%20is%20available%20in,useLoaderData)) ([useLoaderData v6.30.0 | React Router](https://reactrouter.com/6.30.0/hooks/use-loader-data#:~:text=)). When you call `useLoaderData()` inside a route component, it returns whatever the loader function returned. This hook does **not** itself fetch any data; it simply gives you the result that the router already fetched. 

Continuing the example above, your `PostsPage` component could look like this:

```jsx
import { useLoaderData } from 'react-router-dom';

function PostsPage() {
  // Get the data returned by postsLoader()
  const posts = useLoaderData();
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
```

Here, `posts` will contain the array of post objects that `postsLoader` returned. React Router ensures that the loader function completes (fetching posts) before rendering `PostsPage`, so `useLoaderData()` immediately has the data. In other words, “the data is available in route components with `useLoaderData`” ([Data Loading  | React Router](https://reactrouter.com/start/data/data-loading#:~:text=The%20data%20is%20available%20in,useLoaderData)). 

**Steps to use loaders and `useLoaderData`:**  
- In your router configuration (using `createBrowserRouter` or similar), attach a `loader` function to the route object.  
- Inside the loader, fetch and return the data you need (this can be a promise or data object).  
- In the component for that route, call `useLoaderData()` to retrieve the data returned by the loader.  

This pattern keeps data fetching logic in the route layer and lets your components focus on displaying data.
