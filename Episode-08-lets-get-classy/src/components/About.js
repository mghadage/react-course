import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
        console.log('Parent Constructor');
    }

    componentDidMount(){
        console.log('Parent Did Mount');
    }

    render(){
        console.log('Parent Render');
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is about us page.</h2>
                <User name={"Mahesh (function)"} email={"mahesh@apptroid.com (function)"} />
                <UserClass name={"Mahesh (class)"} email={"mahesh@apptroid.com (class)"} />
            </div>
        );
    }
}

export default About;