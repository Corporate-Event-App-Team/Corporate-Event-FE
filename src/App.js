import React, {useState} from 'react';
// import logo from './logo.svg';
import image from "./img/adults-communication-cooperation-2422294.jpg";
import logo from "./img/image2vector.svg";
import './App.css';
import Axios from 'axios';
import {Route} from 'react-router-dom';

const initialFormValues = {
  username: '',
  emailAddress: '',
  password: '',
  confirmPassword: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [displayLogin, setDisplayLogin] = useState(false)

  const onNameChange = e => {
    setFormValues({...formValues, username: e.target.value})
  }

  const onEmailChange = e => {
    setFormValues({...formValues, emailAddress: e.target.value})
  }

  const onPasswordChange = e => {
    setFormValues({...formValues, password: e.target.value})
  }

  const onCPasswordChange = e => {
    setFormValues({...formValues, confirmPassword: e.target.value})
  }

  const onFormSubmit = (e, formValues) => {
    e.preventDefault();
    
    const newUserDetails = {
      username: formValues.username,
      password: formValues.password,
      id: Date.now()
    }

    if (formValues.password === formValues.confirmPassword) {
      Axios.post('https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/auth/register', newUserDetails)
      .then((response) => {
        alert(response.data.message)
        setDisplayLogin(true)
      })
      .catch(err => console.log(err))
    } else {
      setFormValues({...formValues, password: '', confirmPassword: ''});
      alert('password fields must be the same!!')
    }

    
  }

  return (
    <div className="App">
      <nav>
        <img src={logo} alt="corporate-logo" />
        <a href="Login.js">LOGIN</a>
      </nav>
      
      <div>
      <figure>
        <img src={image} alt='for-register' />
      </figure>

      <section>
        <h3>We offer centralised management for your event planning needs and allow you meet all your client’s requirements with ease. Fill in your information below to get started.</h3>

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
      </section>
      </div>

      {/* {
        displayLogin && (
          // <Route exact path='/login' component={Login} />
        )
      } */}
    </div>
  );
}

export default App;
