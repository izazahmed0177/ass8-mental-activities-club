import React from 'react';

const Question = () => {
    return (
        <div>
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

        </div>
    );
};

export default Question;