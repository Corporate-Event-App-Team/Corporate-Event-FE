import React, { useEffect } from "react";
import user_icon from "../imgs/User_icon.png";
import {
  StyledDashboard,
  StyledUSerDiv,
  StyledH4,
  StyledAddEventBtn
} from "../styles";
import axiosWithAuth from "../axios/axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Dashboard = props => {
  console.log("props from Dashboard", props);
  useEffect(() => {
    props.getUser(props.login.username);
    props.showUser(props.user.id);
  }, [props]);

  const userEvents = props.events.events;
  console.log("userevents", userEvents);
  //     axiosWithAuth().
  //get("https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/users/")
  //     .then(response  => {
  //         console.log("response from dashboard server users endpoint", response);
  //     } )
  //     .catch(err => {
  //         console.log("response from dashboard server", err);
  //     })
  //     axiosWithAuth().get("https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/users/1/events")
  //     .then(response  => {
  //         console.log("response from dashboard server from events endpoint", response);
  //     } )
  //     .catch(err => {
  //         console.log("response from dashboard server", err);
  //     })
  //     axiosWithAuth().get("https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/users/2/events/todolist")
  //     .then(response  => {
  //         console.log("response from dashboard server from events todolist endpoint ", response);
  //     } )
  //     .catch(err => {
  //         console.log("response from dashboard server", err);
  //     })

  // },[])
  return (
    <StyledDashboard>
      <StyledUSerDiv>
        <img alt="user icon" src={user_icon} />
        <h4>Hello, {props.login.username}</h4>
      </StyledUSerDiv>
      <div style={{background: "#57C5EA"}}>
        <StyledH4>Past Events</StyledH4>
        <div>
            {userEvents.length === 0 ? <h4>You don't have any events</h4> :
              userEvents.map((event) => {
                  return (
                      <div key={event.id}>
                          <h4>Budget: {event.budget}</h4>
                          <h4>Company: {event.company}</h4>
                          <h4>Description: {event.description}</h4>
                      </div>
                  )
              }) } 
        </div>
        <StyledH4>Present Events</StyledH4>
        <div>Events from Backend</div>
        <StyledAddEventBtn>Add a new event</StyledAddEventBtn>
      </div>
    </StyledDashboard>
  );
};

export default connect(
  state => state,
  actionCreators
)(Dashboard);
