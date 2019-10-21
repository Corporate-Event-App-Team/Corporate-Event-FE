import * as types from "./actionTypes";
import axios from "axios";


export const getError = err => {
    return { type: types.GET_ERROR, payload: err };
  };

export const onLogin = (userDetails) => dispatch => {
    axios
        .post("https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/auth/login", userDetails)
        .then(res => {
            console.log("response from login endpoint", res);
            dispatch({type: types.ON_LOGIN, payload: res.data.token})
        })
        .catch(err => {
            console.log("response from login endpoint", err);
            dispatch(getError(err.message));
        })   

};

  
//   export const catData = () => dispatch => {
//     dispatch(fetchData());
//     axios
//       .get("https://cors-anywhere.herokuapp.com/https://catfact.ninja/breeds")
//       .then(res => {
//         dispatch({ type: types.CAT_DATA, payload: res.data.data });
//       })
//       .catch(err => {
//         console.log("response from server", err.message);
//         dispatch(getError(err.message));
//       });
//   };