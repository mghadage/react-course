import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"dummy",
                name:"default",
                avatar_url:""
            }
        }

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mghadage"); 
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log('componenet Did Update');
    }

    componentWillUnmount()
    {
        console.log('componenet Will Unmount');
    }

    render(){

        console.log('Render');
        const {name,location,avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Email: {location}</h3>
                <h4>contact: 9989345678</h4>
            </div>
        );
    }
}

export default UserClass;