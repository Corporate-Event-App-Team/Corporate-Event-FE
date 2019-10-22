import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import "./App.css";
import Login from "./components/Login";
import * as actionCreators from "../src/state/actionCreators";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import AddEvents from "./components/AddEvents";

export function App(props) {
  console.log("props from app", props);

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />

      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/add-event" component={AddEvents}/>
      <NotificationContainer />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
