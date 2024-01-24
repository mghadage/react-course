const User = (props) => {

    const {name,email} = props;
    return (
        <div class="user-card">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h4>contact: 9989345678</h4>
        </div>
    );
}

export default User;