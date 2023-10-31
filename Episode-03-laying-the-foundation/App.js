import React  from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
                    <h1 id="heading">Laying the foundation by JSX 🚀</h1> 
                );

// React Components
// functional components

const Heading1 = () => {
    return (<h1 id="heading">
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
        <Heading1 />
        <Heading2 />    
        <h1>This is component which contains 2 other components</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CombineComponents />);