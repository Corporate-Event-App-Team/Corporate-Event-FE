import React from "react";
import user_icon from "../imgs/User_icon.png";
import {StyledDashboard} from "../styles";

const Dashboard  = (props) => {
    console.log("props from Dashboard", props);
    return (
        <StyledDashboard>
            <div>
                <img alt="user icon" src={user_icon}/>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard;