import React from "react";
import {NavLink} from "react-router-dom";
import corporate_logo from "../imgs/corporate_logo.png";

const NavBar = () => {
    return (
        <div>
            <img  alt="logo of corporate events" src={corporate_logo}/>
            
            <div>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    )
}

export default NavBar;