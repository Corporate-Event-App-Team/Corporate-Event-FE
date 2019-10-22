import React, {useState} from "react";
import NavBar from "./NavBar";
import {StyledAddEvntsForm, StyledAddEvntsDiv, StyledAddEvntInpt} from "../styles";

const AddEvents = () => {
const [eventBody, setEventBody] = useState({
    eventName: '',
    clientName: "",
    descriptionOfEvent: '',
    dateDue: '',
     completed: false,
    time: '',
    todoList: [],
    vendors: []
  })
    // {
    //     eventName: '',
    //  clientName: ""
    //     descriptionOfEvent: '',
    //     dateDue: '',
    //      completed: false,
    //     time: '',
    //     todoList: [],
    //     vendors: []
    //   }

    const valueChange = (e) => {
        setEventBody({...eventBody, [e.target.name]: e.target.value});
    };

    return (
        <StyledAddEvntsDiv>
            <NavBar/>
            <StyledAddEvntsForm>
                <label>Event Name</label>
                <StyledAddEvntInpt name="eventName" value/>
                <label>Description </label>
                <StyledAddEvntInpt name="descriptionOfEvent"/>
                <label>Due date</label>
                <StyledAddEvntInpt name="date"/>
                <label>time</label>
                <StyledAddEvntInpt name="time"/>
                <label>todoList</label>
                <StyledAddEvntInpt name="todoList"/>
                 <label>Vendors</label>
                <StyledAddEvntInpt name="vendors"/> 
            </StyledAddEvntsForm>
        </StyledAddEvntsDiv>
    )
}

export default AddEvents;