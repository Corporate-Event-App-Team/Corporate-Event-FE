import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    const {onFormSubmit, formValues, onNameChange, onPasswordChange, onCPasswordChange, onEmailChange} = props;

    return (
        <FormStyle>
          <label>
            Username
            <input type='text' onChange={onNameChange} value={formValues.username} />
          </label>

          <label>
            Email Address
            <input type='text' onChange={onEmailChange} value={formValues.emailAddress} />
          </label>

          <label>
            Password
            <input type='password' onChange={onPasswordChange} value={formValues.password} />
          </label>

          <label>
            Confirm Password
            <input type='password' onChange={onCPasswordChange} value={formValues.confirmPassword} />
          </label>

         <button onClick={(e)=> onFormSubmit(e, formValues)} >REGISTER</button>

        </FormStyle>
    )
} 

export default Form;