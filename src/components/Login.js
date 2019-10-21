import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { Formik } from "formik";

export const Login = props => {
  const [userDetails] = useState({ username: "", password: "" });
  console.log("props from redux Store", props);
  return (
    <div className="login-form">
      <Formik
        initialValues={userDetails}
        validate={userDetails => {
          let errors = {};
          if (!userDetails.username) {
            errors.username = "Please provide a username!";
          }
          if (!userDetails.password) {
            errors.password = "Please provide a password!";
          } else if (userDetails.password.length < 7) {
            errors.password = "Your password must be more than 8 characters!";
          } else if (userDetails.password.length > 11) {
            errors.password = "Your password must be less than 12 characters!";
          }
          return errors;
        }}
        onSubmit={(userDetails, actions) => {
          props.onLogin(userDetails);
          actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              value={values.username}
              type="text"
              name="username"
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>
              {" "}
              {errors.username && touched.username && errors.username}
            </span>
            <label>Password</label>
            <input
              value={values.password}
              type="password"
              name="password"
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>
              {" "}
              {errors.password && touched.password && errors.password}
            </span>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(Login);
