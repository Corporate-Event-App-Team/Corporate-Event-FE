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
        background-color: blue;
        color: white;

        &:hover {
            background-color: yellow;

        }
    }
`

export const Form = ({onFormSubmit, formValues, onNameChange, onPasswordChange, onCPasswordChange, onEmailChange}) => {
    
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