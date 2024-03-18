# 1. What is the difference between Component and PureComponent? Give an example where it might break my app.
 - The main difference between them is how they handle component updates
 - Component:  Component class doesn't implement the shouldComponentUpdate method
 - PureComponent: PureComponent class, on the other hand, implements a shallow comparison of the component's props and state in the shouldComponentUpdate method

Example: when we are using the current autocomplete  and we are using pure component , it will break the app as Since PureComponent performs a shallow comparison of props, it will incorrectly determine that the props haven't changed, and it won't re-render items. As a result, even though the data has changed (according to the reference comparison), the UI won't update accordingly, breaking the app's expected behavior.


# 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

 - When we are using context and some contect data is updating in contect provider the componrnts are rerender and the data available in corresponding components. the ShouldComponentUpdate is used for opposite purpose it will rejects unwanted rerendering.

# 3. Describe 3 ways to pass information from a component to its PARENT.

- event emitting : we can emit the events to parent
- we can use observable for reading
- context casn be used
- signals can be used
- state management can be used (redux)


# 4. Give 2 ways to prevent components from re-rendering.

 - We can use react memo
 - pure components can be used
 - 



# 5. What is a fragment and why do we need it? Give an example where it might break my app.

 - multiple children elements  can be wrapped in fragment and which is avoidning extra node adding to the dom
 - example
 <code>
    - <>
      - <h1>Hello</h1>
      - <p>World</p>
    - </>
 </code>


# 6. Give 3 examples of the HOC pattern.
 - The Higher Order Component (HOC) pattern in React is a way to reuse component logic by wrapping components with a higher-order function. Here are three examples of the HOC pattern

  - Authentication : wrap components which needs authenicated
  - ErrorBoundary : All composnts can be wrapped inside 
  - Loading indicator : API fetched componets can be wrapped inside this
  - Debouncing§


# 7. What's the difference in handling exceptions in promises,callbacks and async...await?

 - some differences in syntax and behavior
 - Promises : Promises use the .then() and .catch() methods
 <code>
.then(data => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  });
 </code>

 - Callbacks : 
 <code>
 if (error) {
    // Handle error
  } else {
    // Handle success
  }
 </code>

 - Async/Await:
 <code>
try {
  // Handle success
} catch (error) {
  // Handle error
}
 </code>

# 8. How many arguments does setState take and why is it async.

- setState function takes two arguments:
 - 1. state: object containing key-value pairs to update in the component's state
 - 2.: Callback Function : callback function that will be executed after the state has been updated 

 - Why is async: react will  batch multiple state updates together and apply them in a single re-render for performance optimization. this will helps for somany rerenders . so app will immediatly update


# 9. List the steps needed to migrate a Class to Function Component.

- Below are the points to take care

- Rewrite the Component as a Function:
- Convert State to useState Hook:
- Lifecycle Methods to useEffect Hook:
- Use the jest to test  for components


# 10.List a few ways styles can be used with components.

- Here are a few common ways styles can be used with components:

- Inline Styles:
- CSS Modules:
- use Libraries: 

# 11. How to render an HTML string coming from the server.
- we can use the dangerouslySetInnerHTML attribute
<code>
        <div dangerouslySetInnerHTML={{ __html: string from the server }} />;
</code>
- WE can user third party library to render string in app


