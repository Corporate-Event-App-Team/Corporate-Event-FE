import React from "react";
import axios from "axios";

const Login = (props) => {

    const {userDetails, setUserDetails } = props;
    const valueChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value});
        console.log("form values login", userDetails);
    }
    const onLogin = (e) => {
        e.preventDefault();
        axios
        .post("https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/auth/login", userDetails)
        .then(res => {
            console.log("response from login endpoint", res);
            window.localStorage.setItem("token", res.data.token);
        })
        .catch(err => {
            console.log("response from login endpoint", err);
        })   

    };

    return (
        <div>
            <form>
                <label>
                    Username
                </label>
                <input value={userDetails.username} type="text" name="username" onChange={valueChange}/>
                <label>
                    Password
                </label>
                <input value={userDetails.password} type="password" name="password" onChange={valueChange}/>  
                <button onClick={onLogin}>Submit</button>              
            </form>
        </div>
    )
}

export default Login;