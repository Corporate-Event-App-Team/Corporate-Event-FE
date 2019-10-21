import React from 'react';
import {connect} from "react-redux";
import './App.css';
import Login from './components/Login';
import * as actionCreators from "../src/state/actionCreators";


export function App(props) {
  console.log("props from app", props);

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default connect(state => state,actionCreators)(App);
