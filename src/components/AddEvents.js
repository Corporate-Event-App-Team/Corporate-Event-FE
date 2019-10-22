import React, {useState} from "react";
import NavBar from "./NavBar";
import {StyledAddEvntsForm, StyledAddEvntsDiv, StyledAddEvntInpt,StyledButton} from "../styles";

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
                <StyledAddEvntInpt name="eventName" onChange={valueChange}/>
                <label>Description </label>
                <StyledAddEvntInpt name="descriptionOfEvent" onChange={valueChange}/>
                <label>Due date</label>
                <StyledAddEvntInpt name="date" onChange={valueChange}/>
                <label>time</label>
                <StyledAddEvntInpt name="time" onChange={valueChange}/>
                <label>todoList</label>
                <StyledAddEvntInpt name="todoList"onChange={valueChange}/>
                 <label>Vendors</label>
                <StyledAddEvntInpt name="vendors" onChange={valueChange}/> 
                <StyledButton>Add event</StyledButton>
            </StyledAddEvntsForm>
        </StyledAddEvntsDiv>
    )
}

export default AddEvents;