import * as types from "./actionTypes";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import axiosWithAuth from "../axios/axiosWithAuth";


export const getError = err => {
  return { type: types.GET_ERROR, payload: err };
};

export const onLogin = userDetails => dispatch => {
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/auth/login",
      userDetails
    )
    .then(res => {
      console.log("response from login endpoint", res);
      NotificationManager.success(res.data.message,"Login successful!");
      dispatch({ type: types.ON_LOGIN, payload: res.data.token });
    })
    .catch(err => {
      console.log("response from login endpoint", err);
      NotificationManager.error(err.message,"Something went terribly wrong");
      dispatch(getError(err.message));
    });
};
