import * as types from "./actionTypes";
const initialToken = {
  token: "", 
  username: ""
};

export const loginReducer = (state = initialToken, action) => {
  switch (action.type) {
    case types.ON_LOGIN:
      return {
        ...state,
        token: window.localStorage.setItem("token", action.payload.token),
        username: action.payload.username
      };
    default:
      return state;
  }
};

const initialEvents = {
  events: [
    {
      eventId: '',
      eventName: '',
      descriptionOfEvent: '',
      date: '',
      time: '',
      todoList: [],
      vendors: []
    }
  ]
}

export function dashboardReducer(state=initialEvents, action) {
  switch(action.type) {
    case types.ADD_EVENT: 
    return {
      ...state, events : [...state.events, ...action.payload]
    };

    default: 
    return state;
  }
}

const loggedInUser = {
  user: {}
};

export const userReducer = (state=loggedInUser,action) => {
  switch(action.type) {
    case types.GET_USER: 
    return {...state, user: action.payload};
    default:
      return state;
  }
}

const userEvents = {
  events: []
};

export const userEventsReducer = (state=userEvents,action) => {
  switch(action.type) {
    case types.SHOW_USER: 
    return {...state, events: action.payload};
    default:
      return state;
  }
}
