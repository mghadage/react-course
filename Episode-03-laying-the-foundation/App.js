import React  from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div',{id:"parent"},[
                React.createElement('div',{id:"child1"},[
                                        React.createElement('h1',{},'This is React Course 🚀🚩'),
                                        React.createElement('h2',{},'by akshay saini')
                                    ]),
                React.createElement('div',{id:"child2"},[
                                        React.createElement('h1',{},'Episode No. 03'),
                                        React.createElement('h2',{},'Igniting our app')
                                    ])
            ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);