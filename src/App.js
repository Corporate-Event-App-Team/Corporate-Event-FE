import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  const [userDetails, setUserDetails] = useState({username: "", password: ""});

  return (
    <div className="App">
      <Login userDetails={userDetails} setUserDetails={setUserDetails}/>
    </div>
  );
}

export default App;
