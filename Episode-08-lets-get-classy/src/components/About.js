import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is about us page.</h2>
            <User name={"Mahesh (function)"} email={"mahesh@apptroid.com (function)"} />
            <UserClass name={"Mahesh (class)"} email={"mahesh@apptroid.com (class)"} />
        </div>
    );
}

export default About;