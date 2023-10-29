/* 1. create this using react <h1 id="heading">Hello World From React!</h1> */

const heading = React.createElement("h1",{id:"heading",abc:"xyz"},"Hello World From React!");

/* 2. 
    <div id="parent">
        <div id="child1">
            <h1>This is h1 tag</h1>
        </div>
        <div id="child2">
            <h2>This is h2 tag</h2>
        </div>
    </div>
*/

const temp = React.createElement('div',{id:"parent"},[
                React.createElement('div',{id:"child1"},[
                                        React.createElement('h1',{},'This is h1 tag'),
                                        React.createElement('h2',{},'This is h2 tag')
                                    ]),
                React.createElement('div',{id:"child2"},[
                                        React.createElement('h1',{},'This is h1 tag'),
                                        React.createElement('h2',{},'This is h2 tag')
                                    ])
            ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(temp);