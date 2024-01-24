import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count:1,
            count1:2
        }

        console.log('Child Constructor');
    }

    componentDidMount(){
        console.log('Child Did Mount');
    }

    render(){
        const {name,email} = this.props;
        const { count,count1} = this.state;
        console.log('Child Render');
        return (
            <div class="user-card">
                <h2>Count: {count}</h2>
                <h2>Count1: {count1}</h2>
                <button onClick={()=> {
                   this.setState({
                    count: count + 1
                   }) 
                }}>Increse Count</button>

                <button onClick={()=> {
                   this.setState({
                    count: count - 1
                   }) 
                }}>Decrese Count</button>
                <h2>Name: {name}</h2>
                <h3>Email: {email}</h3>
                <h4>contact: 9989345678</h4>
            </div>
        );
    }
}

export default UserClass;