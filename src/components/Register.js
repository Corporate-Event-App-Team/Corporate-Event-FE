import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import styled from "styled-components";

import image from "../imgs/register_back.jpg";
import logo from "../imgs/corporate_logo.png";
import Axios from "axios";
import Form from "./Form";
// import {Route} from 'react-router-dom';

const RegisterStyle = styled.div`
  height: 100vh;

  nav {
    display: flex;
    justify-content: space-between;
    background-color: #c4c4c4;

    img {
      width: 5%;
    }
    a {
      background-color: #090429;
      text-decoration: none;
      border-radius: 5px;
      width: 120px;
      height: 35px;
      text-align: center;
      margin-top: 12px;
      margin-bottom: 12px;
      margin-right: 15px;
      padding-top: 10px;
      color: white;
      &:hover {
        background-color: #fbab06;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    background-color: #e5e5e5;

    img {
      width: 50%;
      height: 100vh;
    }
    section {
      text-align: center;

      margin: 0;
    }
  }
`;

const initialFormValues = {
  username: "",
  emailAddress: "",
  password: "",
  confirmPassword: ""
};

export default function Register(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onNameChange = e => {
    setFormValues({ ...formValues, username: e.target.value });
  };

  const onEmailChange = e => {
    setFormValues({ ...formValues, emailAddress: e.target.value });
  };

  const onPasswordChange = e => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const onCPasswordChange = e => {
    setFormValues({ ...formValues, confirmPassword: e.target.value });
  };

  const onFormSubmit = (e, formValues) => {
    e.preventDefault();

    const newUserDetails = {
      username: formValues.username,
      password: formValues.password,
      id: Date.now()
    };
    if (formValues.password === formValues.confirmPassword) {
      Axios.post(
        "https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/auth/register",
        newUserDetails
      )
        .then(response => {
          NotificationManager.success("Registration successful");
          props.history.push("/");
        })
        .catch(err => {
          NotificationManager.error(
            err.message,
            "Something went terribly wrong!"
          );
          console.log(err);
        });
    } else {
      setFormValues({ ...formValues, password: "", confirmPassword: "" });
      alert("password fields must be the same!!");
    }
  };

  return (
    <RegisterStyle>
      <nav>
        <img src={logo} alt="corporate-logo" />
        <a href="/">LOGIN</a>
      </nav>

      <div>
        <img src={image} alt="for-register" />

        <section>
          <h3>
            We offer centralised management for your event planning needs and
            allow you meet all your client’s requirements with ease. Fill in
            your information below to get started.
          </h3>

          <Form
            onNameChange={onNameChange}
            onFormSubmit={onFormSubmit}
            onEmailChange={onEmailChange}
            onCPasswordChange={onCPasswordChange}
            formValues={formValues}
            onPasswordChange={onPasswordChange}
          />
        </section>
      </div>
    </RegisterStyle>
  );
}
