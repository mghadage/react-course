import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const {name,email} = this.props;
        return (
            <div class="user-card">
                <h2>Name: {name}</h2>
                <h3>Email: {email}</h3>
                <h4>contact: 9989345678</h4>
            </div>
        );
    }
}

export default UserClass;