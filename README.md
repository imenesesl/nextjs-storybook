# nextjs-storybook

Hi!, this is a basic example project using Next JS and Strorybook, additionally libraries such as react-icons and styled-components have been used to make a component-oriented design

## How to run this project

To run this project make sure you have the node version set in the nvmrc file, for more practicality of how to move between node versions, I recommend using node version manager, once you are using the specific version run the following commands, It should be noted that we are using yarn, so make sure you have it installed globally on your machine.

- yarn -> to install all dependencies, if you have any issue please try again
- yarn dev -> to run the project
- yarn storybook -> to run storybook

This project was built based on atomic design, therefore you will find some components with minimal responsibility and others that are a composition of several components.

To test each exposed component it is recommended to use storybook to interact with them using the storybook controls

## Component

visual components

- Autocomplete
- TextField

## Module

Components that integrate logic

- Search

### API

A Mercadolibre api was used

- https://http2.mlstatic.com/resources/sites/MCO/autosuggest?limit=<number>&q=<string>

## Context

Finally, you could test the system both in storybook and running the project

## Addons

- useQuery
- debounce

# Questions

1. What is the difference between Component and PureComponent? give an example where it might break my app.
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
3. Describe 3 ways to pass information from a component to its PARENT.
4. Give 2 ways to prevent components from re-rendering.
5. What is a fragment and why do we need it? Give an example where it might break my app.
6. Give 3 examples of the HOC pattern.
7. what's the difference in handling exceptions in promises, callbacks and async...await.
8. How many arguments does setState take and why is it async.
9. List the steps needed to migrate a Class to Function Component.
10. List a few ways styles can be used with components.
11. How to render an HTML string coming from the server.

# Answers

1.  Component is the base class for creating stateful components which could be rendered when the state or one of its props changes.
    PureComponent is an optimized or memorized version of a Component, it will only re-render if its content or props change.

```jsx
class MyCustomPureComponent extends PureComponent {
    // Is render  only when name change
    render() {
        return <span>{this.props.name}</span>;
    }
}

const MyForm = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    return <>
        <input value={name} onChange={(event) => setName(event.target.value) } >
        <input value={lastName} onChange={(event) => setLastName(event.target.value) } >
        <MyCustomPureComponent name={name} />
        <span>{lastName}</span>
    </>
}

```

2. TBD

3. We can use multiple shapes and those shapes might impact performance or make our components more complex.

- have states in the parent and functions that allow updating the state, this would be passed to the children
- Use Redux to create actions and dispatch events which would be listened to by the parent and dispatched by the children
- Use Context API, it's similar to above but with reduced context and using React API

4. We can use React.memo to analyze previous and next props to know if it is necessary to render or not, we could also use PureComponents.

5. Fragment is an empty tag which allows us to group multiple nodes within an empty tag that, before the real DOM, will be represented as the aquapation of the nodes within the upper tag

6. A HOC is a component that encapsulates logic that could be passed to the other children or it could also be a kind of logic handler that conditions the rendering or makes business decisions.

```jsx
const withCurrentUser = (Component) => {
    const user = //... services or methods to get the current user

    const Wrapper = (props) => {
        <Component {...props} user={user} />
    }
    return Wrapper
}

const Profile = withCurrentUser(User)
```

```jsx
const withAuth = (Component) => {
    const [loading, setLoading] = useState(false)
    const [isAvailable, setIsAvailable] = useState(false)
    useEffect(()=> {
        setLoading(true)
        const permissions =
        //... call service to analyze if the user has permissions to view the Component content
        const { hasAuth } = permissions
        setIsAvailable(hasAuth)
        setLoading(false)
    },[])

    if(loading) return <>loading</>
    if(isAvailable) return <Component />
    return <>404<>
}
const TokenSection = withAuth(TokenPage)
```

```jsx
const withService = (Component, promise) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    useEffect(()=> {
        setLoading(true)
        const response = await promise;
        setData(response)
        setLoading(false)
    },[])

    const Wrapper = (props) => {
        <Component {...props} {...data} />
    }
    return Wrapper

    if(loading) return <>loading</>
    return Wrapper
}
const TokenSection = withAuth(TokenPage)
```

7.  Error handling strategies using Callbacks, promises and async/await differ in their structure and performance.

```jsx
// Callback will notify when is completed
const readAsyncFile = (error, data) => {
  if (error) {
    console.log('error');
  } else {
    console.log('data', data);
  }
};
```

```jsx
// Async using callbacks
const readAsyncFile = () => {
  myPromise()
    .then((data) => console.log('data', data))
    .catch((error) => console.log('error'))
    .finally(() => console.log('success'));
};
```

```jsx
// Async using async/await keywords
const readAsyncFile = async () => {
  try {
    const result = await myPromise();
    console.log('data', data);
  } catch (error) {
    console.log('error');
  } finally {
    console.log('success');
  }
};
```

8.  setState accepts two arguments, the first could be of two types, object type or function type.

the second argument is a callback that is executed after the state is updated

setState is asynchronous to improve performance because multiple setState calls can be bundled into a single update to minimize DOM calls

```jsx
// First argument
setState({} | 1 | | '') //... Object

setState((prev) => {
    return {} | 1 | | ''
}) //... Callback

// Second argument
setState('hi!', () => console.log('value updated!') )
```

9. From my perspective, you need identify if you class has states or not and if you class is using some life cycles methods, following the next steps

- If you are using states, you need migrate your states to hooks like useState, if you are using life cycle methods you need works with useEffect
- Replace you bind function to normal functions
- use just the render content to be a direct return

```jsx
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({ count: this.state.count + this.props.increment });
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```

```jsx
import React, { useState, useEffect } from 'react';

function FunctionalComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Updated');
  });

  const handleClick = () => {
    setCount(count + props.increment);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

10. The common ways are:

```jsx
// Inline styles
const style = {
    color: 'red'
}

return <MyComponent style={style}>
```

```jsx
// CSS/SASS/<others> Files
import './myComponent-css.css'

return <MyComponent className='color'>
```

```jsx
// Modules
import style from './MyComponent.module.css'

return <MyComponent className={style.MyComponent}>
```

The difference between them is the scope to be able to apply the styles

11. To render HTML provider form the server we need use `dangerouslySetInnerHTML` property like this.

```jsx
const html = '<p>Hi there!</p>';
return <div dangerouslySetInnerHTML={html} />;
```
