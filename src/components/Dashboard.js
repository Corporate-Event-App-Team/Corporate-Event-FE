import React, {useEffect} from "react";
import user_icon from "../imgs/User_icon.png";
import {StyledDashboard, StyledUSerDiv, StyledH4, StyledAddEventBtn} from "../styles";
import { axiosWithAuth } from "../axios/axiosWithAuth";

const Dashboard  = (props) => {
    console.log("props from Dashboard", props);
        useEffect(() => {
            axiosWithAuth().get("https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/users")
            .then(response  => {
                console.log("response from dashboard server", response);
            } )
            .catch(err => {
                console.log("response from dashboard server", err);
            })

        },[])
    return (
        <StyledDashboard>
            <StyledUSerDiv>
                <img alt="user icon" src={user_icon}/>
            </StyledUSerDiv>
            <div>
                <StyledH4>Past Events</StyledH4>
                <div>Events from Backend</div>
                <StyledH4>Present Events</StyledH4>
                <div>Events from Backend</div>
                <StyledAddEventBtn>Add a new event</StyledAddEventBtn>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard;