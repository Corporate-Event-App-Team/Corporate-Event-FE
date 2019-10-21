import React, {useState} from "react";
import {connect} from "react-redux";
import * as actionCreators from "../state/actionCreators";

 export const Login = (props) => {
    const [userDetails, setUserDetails] = useState({username: "", password: ""});
console.log("props from redux Store", props);
    const valueChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value});
        console.log("form values login", userDetails);
    }
    const onLogin = (e) => {
        e.preventDefault();
        props.onLogin(userDetails);
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

export default connect(state => state,actionCreators)(Login);