
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props){
        super(props);
        // console.log('Parent Constructor');
    }

    componentDidMount(){
        // console.log('Parent Did Mount');
    }

    render(){
        // console.log('Parent Render');
        return (
            <div>
                <h1>About Us</h1>
                <div>Logged in User:
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="font-bold text-xl">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is about us page.</h2>
                {/* <User name={"Mahesh (function)"} email={"mahesh@apptroid.com (function)"} /> */}
                <UserClass name={"First"} email={"First@apptroid.com (class)"} />
            </div>
        );
    }
}

export default About;