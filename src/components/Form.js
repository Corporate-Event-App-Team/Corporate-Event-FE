import React from 'react';
import styled from 'styled-components';


const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 50vw; */
    /* align-items: baseline; */
    label input {
        height: 35px;
        width: 250px;
        border-radius: 10px;
        margin-bottom: 20px;
        margin-left: 20px;
    }
    button {
        height: 35px;
        width: 150px;
        border-radius: 10px;
        border: none;
        margin-left: 50%;
        margin-bottom: 12px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #090429;
        color: white;
        &:hover {
            background-color: #FBAB06;
        }
    }
`


const Form = (props) => {
    console.log("props from register form",props);
    const {onFormSubmit, formValues, onNameChange, } = props;
    //onPasswordChange, onCPasswordChange, onEmailChange

    return (
        <FormStyle>
          <label>
            Username
            <input type='text' name="username" onChange={onNameChange} value={formValues.username} />
          </label>

          <label>
            Email Address
            <input type='text' name="emailAddress" onChange={onNameChange} value={formValues.emailAddress} />
          </label>

          <label>
            Password
            <input type='password' name="password" onChange={onNameChange} value={formValues.password} />
          </label>

          <label>
            Confirm Password
            <input type='password' name="confirmPassword" onChange={onNameChange} value={formValues.confirmPassword} />
          </label>

         <button onClick={(e)=> onFormSubmit(e, formValues)} >REGISTER</button>

        </FormStyle>
    )
} 

export default Form;