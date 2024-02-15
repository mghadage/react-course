# Assignment

### Q1. What is Prop Drilling?

**Prop drilling** is the process of passing data from a parent component down through multiple levels of nested child components to reach a specific component that needs the data. It involves passing props through intermediary components, even if those components do not directly use the data.

#### **Example:**

Consider a React application where user data fetched in the top-level `App` component needs to be passed down to a deeply nested `UserProfile` component.

```jsx
// App.js (Top-level component)
import React, { useState, useEffect } from 'react';
import UserContainer from './UserContainer';

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from an API
    // ...

    setUserData(/* fetched user data */);
  }, []);

  return (
    <div>
      {/* Prop drilling: Passing userData down to UserContainer */}
      <UserContainer userData={userData} />
    </div>
  );
};
```

```jsx
// UserContainer.js (Intermediate component)
import React from 'react';
import UserProfile from './UserProfile';

const UserContainer = ({ userData }) => {
  return (
    <div>
      {/* Prop drilling: Passing userData down to UserProfile */}
      <UserProfile userData={userData} />
    </div>
  );
};
```

```jsx
// UserProfile.js (Target component)
import React from 'react';

const UserProfile = ({ userData }) => {
  // Using userData in the UserProfile component
  return (
    <div>
      <h2>User Profile</h2>
      {/* Display user information */}
      {/* ... */}
    </div>
  );
};
```

In this example, userData is prop-drilled from the top-level App component through the UserContainer component to the UserProfile component. Prop drilling is a straightforward but may become less scalable as the component hierarchy grows. Alternative state management solutions like Context API or Redux can be considered for more complex scenarios.

------------------------------------------------------------------------------------


### Q2. Lifting State Up

**Lifting state up** is a React pattern where the state that is shared by multiple components is moved to a common ancestor, typically a parent component. This promotes data sharing and avoids prop drilling by lifting the state to a higher level in the component tree.

#### **Example:**

Consider a scenario where two sibling components, `Counter` and `Display`, need to share and display the same count value.

```jsx
// App.js (Parent Component)
import React, { useState } from 'react';
import Counter from './Counter';
import Display from './Display';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/* Lifting state up: Passing count and handlers to Counter */}
      <Counter count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      {/* Lifting state up: Passing count to Display */}
      <Display count={count} />
    </div>
  );
};

export default App;
```

```
// Counter.js (Child Component)
import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      {/* Lifting state up: Using onIncrement and onDecrement */}
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```


```jsx
// Display.js (Child Component)
import React from 'react';

const Display = ({ count }) => {
  return (
    <div>
      <h2>Display</h2>
      {/* Lifting state up: Displaying the count */}
      <p>Count: {count}</p>
    </div>
  );
};

export default Display;
```

In this example, the count state is lifted up to the App component, which serves as the common ancestor for both Counter and Display. The count state and its updating functions are passed down as props to the child components, allowing them to share and display the same count value.

------------------------------------------------------------------------------------


### Q3. Context Provider and Context Consumer

**Context Provider** and **Context Consumer** are components provided by React's Context API for managing and sharing state across multiple components without the need for prop drilling.

#### **Example:**

Consider a scenario where a theme (light or dark) needs to be shared across various components in a React application.

```jsx
// ThemeContext.js
import { createContext, useContext, useState } from 'react';

// Creating a context with a default value
const ThemeContext = createContext();

// Custom hook for using the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component to wrap around the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

```jsx
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Themed App</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
```

```jsx
// ThemedComponent.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  // Using the theme context with the custom hook
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#000000' : '#ffffff' }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
```

In this example, the ThemeContext is created using createContext(), and a ThemeProvider component wraps the entire application. The ThemeProvider component uses the ThemeContext.Provider to provide the theme state and a function to toggle the theme to its children.

The useTheme custom hook is used in the ThemedComponent to consume the theme context, allowing the component to access the current theme and the toggleTheme function.

------------------------------------------------------------------------------------


### Q4. Default Value in Context Provider

If you don't pass a value to the Context Provider, it takes the default value specified during the creation of the context using `createContext(defaultValue)`.

#### **Example:**

```jsx
// ExampleContext.js
import React, { createContext, useContext } from 'react';

// Creating a context with a default value
const ExampleContext = createContext('Default Value');

// Custom hook for using the context
export const useExample = () => {
  return useContext(ExampleContext);
};

// ExampleProvider component to wrap around the app
export const ExampleProvider = ({ children }) => {
  // No value provided, default value will be 'Default Value'
  return <ExampleContext.Provider>{children}</ExampleContext.Provider>;
};
```

```jsx
// App.js
import React from 'react';
import { ExampleProvider } from './ExampleContext';
import ExampleComponent from './ExampleComponent';

const App = () => {
  return (
    <ExampleProvider>
      <div>
        <h1>App with Default Context Value</h1>
        <ExampleComponent />
      </div>
    </ExampleProvider>
  );
};

export default App;
```

```jsx
// ExampleComponent.js
import React from 'react';
import { useExample } from './ExampleContext';

const ExampleComponent = () => {
  // Using the context with the custom hook
  const valueFromContext = useExample();

  return (
    <div>
      <p>Value from Context: {valueFromContext}</p>
    </div>
  );
};

export default ExampleComponent;
```

In this example, the ExampleContext is created with a default value of 'Default Value'. When ExampleProvider wraps the application in App.js without explicitly providing a value, the default value is used. The ExampleComponent then uses the context with the useExample hook to retrieve and display the value from the context.

