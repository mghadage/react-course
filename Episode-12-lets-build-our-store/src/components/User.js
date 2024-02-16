import { useState } from "react";

const User = (props) => {

    const [count,] = useState(0);
    const [count1] = useState(1);
    const {name,email} = props;
    return (
        <div class="user-card">
            <h2>Count: {count}</h2>
            <h2>Count1: {count1}</h2>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h4>contact: 9989345678</h4>
        </div>
    );
}

export default User;