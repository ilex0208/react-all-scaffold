Stateless Functions

You may also define your React classes as a plain JavaScript function. For example using the stateless function syntax:

`code`
#-------------------------------------------------------------
function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}
ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode);
#-------------------------------------------------------------

Or using the new ES6 arrow syntax:
#-------------------------------------------------------------
const HelloMessage = (props) => <div>Hello {props.name}</div>;
ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode);
#------------------------------------------------------------- 

This simplified component API is intended for components that are pure functions of their props. 
These components must not retain internal state, do not have backing instances, and do not have the component lifecycle methods. 
They are pure functional transforms of their input, with zero boilerplate. 
However, you may still specify .propTypes and .defaultProps by setting them as properties on the function, just as you would set them on an ES6 class.

    NOTE:

    Because stateless functions don't have a backing instance, you can't attach a ref to a stateless function component. 
    Normally this isn't an issue, since stateless functions do not provide an imperative API.
    Without an imperative API, there isn't much you could do with an instance anyway. 
    However, if a user wants to find the DOM node of a stateless function component, they must wrap the component in a stateful component (eg. ES6 class component) and attach the ref to the stateful wrapper component.

    NOTE:

    In React v0.14, stateless functional components were not permitted to return null or false (a workaround is to return a <noscript /> instead). 
    This was fixed in React v15, and stateless functional components are now permitted to return null.

In an ideal world, most of your components would be stateless functions because in the future we’ll also be able to make performance optimizations specific to these components by avoiding unnecessary checks and memory allocations. This is the recommended pattern, when possible.
