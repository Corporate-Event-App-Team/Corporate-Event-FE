import * as types from "./actionTypes";
const initialToken = {
  token: ""
};

export const loginReducer = (state = initialToken, action) => {
  switch (action.type) {
    case types.ON_LOGIN:
      return {
        ...state,
        token: window.localStorage.setItem("token", action.payload)
      };
    default:
      return state;
  }
};
