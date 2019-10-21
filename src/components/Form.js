import React from 'react';

export const Form = ({onFormSubmit, formValues, onNameChange, onPasswordChange, onCPasswordChange, onEmailChange}) => {
    
    return (
        <form>
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

        </form>
    )
}