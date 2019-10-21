import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    label input {
        height: 35px;
        width: 150px;
        border-radius: 10px;
        margin-bottom: 20px;
        margin-left: 20px;
    }

    button {
        height: 35px;
        width: 150px;
        border-radius: 10px;
        border: none;
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
            <input type='current-password' onChange={onCPasswordChange} value={formValues.confirmPassword} />
          </label>

          <button onClick={(e)=> onFormSubmit(e, formValues)} >REGISTER</button>

        </FormStyle>
    )
}