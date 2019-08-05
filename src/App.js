import React, { useState } from 'react';
// import Auth from './Components/Auth/Auth';
// import Main from './Components/Main/Main';
import Create from './Components/Create/Create';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  function handleLogin(x) {
    setToken(x)
    console.log('TOKEN RECEIVED AT TOP LEVEL')
  }

  function handleLogout() {
    setToken(null)
  }

  return (
    // token ? <div>
    //   <h1>YOU ARE LOGGED IN</h1>
    //   <button onClick={handleLogout}>LOGOUT</button>
    // </div> : <Auth handleLogin={handleLogin} handleLogout={handleLogout} />
    // <Main />
    <Create />
  );
}

export default App;
