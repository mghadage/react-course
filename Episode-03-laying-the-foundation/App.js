import React  from "react";
import ReactDOM from "react-dom/client";

// React Components
// functional components


const element = React.createElement(
                        'h1',
                        {className: 'greeting'},
                        'Hello, world!'
                    );

const element1 = <p>this is an element</p>;


const Title = () => (
    <h1 id="heading">Laying the foundation by JSX 🚀</h1> 
);

const Heading1 = () => {
                        return (
                                <h1 id="heading">
                                This is Component using arrow function with return
                                </h1>);
                    }

const Heading2 = () => (
                    <h1 id="heading">
                        This is Component using arrow function but not return
                    </h1>
                );

const CombineComponents = () => (
    <div id="container">
        {element}
        {Title()}
        {Heading1}
        <Heading2 />    
        <Heading2></Heading2>
        {element1} 
        <h1>This is component which contains 2 other components</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<CombineComponents />);