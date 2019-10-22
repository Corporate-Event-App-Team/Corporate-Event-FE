import React from "react";
import user_icon from "../imgs/User_icon.png";
import {StyledDashboard, StyledUSerDiv} from "../styles";

const Dashboard  = (props) => {
    console.log("props from Dashboard", props);
    return (
        <StyledDashboard>
            <StyledUSerDiv>
                <img alt="user icon" src={user_icon}/>
            </StyledUSerDiv>
            <div>
                <h4>Past Events</h4>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard;