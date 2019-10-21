import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <img />
        <a href="Login.js">LOGIN</a>
      </nav>
      
      <div>
      <figure>
        <img />
      </figure>

      <section>
        <h3>We offer centralised management for your event planning needs and allow you meet all your client’s requirements with ease. Fill in your information below to get started.</h3>

        <form>
          <label>
            Username
            <input type='text'  />
          </label>

          <label>
            Email Address
            <input type='text'  />
          </label>

          <label>
            Password
            <input type='password'  />
          </label>

          <label>
            Confirm Password
            <input type='password'  />
          </label>

          <button>REGISTER</button>

        </form>
      </section>
      </div>
    </div>
  );
}

export default App;
