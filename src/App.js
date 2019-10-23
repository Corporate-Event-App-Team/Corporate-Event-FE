import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
// import { NotificationContainer } from "react-notifications";
// import "react-notifications/lib/notifications.css";

import "./App.css";
import Login from "./components/Login";
import * as actionCreators from "../src/state/actionCreators";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import AddEvents from "./components/AddEvents";
import PrivateRoute from "./components/PrivateRoute";

export function App(props) {
  console.log("props from app", props);

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route  path="/register" component={Register} />
      <Route  path="/dashboard/add-event" component={AddEvents}/>
      <PrivateRoute
         exact path="/dashboard"
          component={Dashboard}
        />
      {/* <NotificationContainer /> */}
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
