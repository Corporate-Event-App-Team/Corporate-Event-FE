import React from 'react';
import {connect} from "react-redux";
import {Route} from "react-router-dom";

import './App.css';
import Login from './components/Login';
import * as actionCreators from "../src/state/actionCreators";
import Dashboard from './components/Dashboard';


export function App(props) {
  console.log("props from app", props);

  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </div>
  );
}

export default connect(state => state,actionCreators)(App);
