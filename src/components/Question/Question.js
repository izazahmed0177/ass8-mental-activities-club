import React from 'react';

const Question = () => {
    return (
        <div className='container text-start'>
            <div>
                <h1>1.How does react work ?</h1>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</p>
                <p>It's important to note that ReactJS is not a JavaScript framework. That's because it's only responsible for rendering the components of an application's view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p>
                <p>This article will explore React's features, explain how it works, and go over its benefits for front-end developers. We'll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
                <p>Meanwhile, the ReactDOM.render() function renders the React element on the Document Object Model (DOM) tree, describing the UI.
                    <br />
                    JSX also helps combat Cross-Site Scripting (XSS) attacks. By default, React DOM converts values embedded in JSX to strings before rendering them. Consequently, third parties cannot inject extra code through user input unless it is explicitly written in the application.</p>
                <p>The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.</p>
            </div>
            <div>
                <h1>2.What is difference between props and state in react ?</h1>
                <h4>State</h4>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                <h4>Props</h4>
                <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                <h4>Difference between State and Props</h4>
                <h5>Props</h5>
                <p>
                    1.	Props are read-only.
                    <br />
                    2.	Props are immutable.
                    <br />
                    3.	Props allow you to pass data from one component to other components as an argument.
                    <br />
                    4.	Props can be accessed by the child component.
                    <br />
                    5.	Props are used to communicate between components.

                </p>
                <h5>State</h5>
                <p>
                    1.	State changes can be asynchronous.
                    <br />
                    2.	State is mutable.
                    <br />
                    3.	State holds information about the components.
                    <br />
                    4.State cannot be accessed by child components.
                    <br />
                    5.States can be used for rendering dynamic changes with the component.

                </p>
            </div>
            <div >
                <h1>3.How the useEffect Hook Works?</h1>
                <p>The useEffect hook is the Swiss Army knife of all the hooks. It's the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.
                    <br />
                    Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too)
                    <br />
                    All this power comes with a tradeoff: useEffect can be confusing until you understand how it works.
                    <br />
                    In this post, we're going to look at lots of useEffect examples so that you understand the mental model and can use it effectively in your own code.</p>

                <p> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
                <p>Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don't need a special API to read it — it's already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.</p>
                <p>By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

                </p>
            </div>

        </div>
    );
};

export default Question;