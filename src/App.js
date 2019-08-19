import React, { useState } from 'react';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Nav from './Components/Nav/Nav';
import Create from './Components/Create/Create';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  // function handleLogin(x) {
  //   setToken(x)
  //   console.log('TOKEN RECEIVED AT TOP LEVEL')
  // }

  function handleLogout() {
    console.log('USER LOGGED OUT')
    setToken(null)
  }

  return (
    <BrowserRouter >
      <Nav />
      <Switch>
        <Route exact path='/compose'
          render={(routeProps) => (
            <Create {...routeProps} {...{ token: token }}
            />
          )}
        />
        <Route exact path='/profile'
          render={(routeProps) => (
            <Profile {...routeProps} {...{ token: token }} {...{ handleLogout: handleLogout }}
            />
          )}
        />
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/auth' component={Auth}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
