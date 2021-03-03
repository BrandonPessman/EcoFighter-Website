import React, { useState } from 'react';
import './App.css';
import {
  Switch,
  Route,
  useHistory,
  withRouter
} from "react-router-dom";

import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'
import Unavailable from './components/Unavailable'

function App() {
  const history = useHistory()

  const [auth, setAuth] = useState(true)

  const handleLogout = () => {
    setAuth(false)
    history.push('/')
  }

  const handleLogin = () => {
    setAuth(true)
    history.push('/tracking')
  }

  const handleRegister = () => {

  }

  return (
    <div>
      <Navigation auth={auth} handleLogout={handleLogout} />

      <div style={{maxWidth: '1440px', margin: 'auto', marginTop: '50px'}}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/tracking">
            <Unavailable />
          </Route>
          <Route path="/compete">
            <Unavailable />
          </Route>
          <Route path="/quests">
            <Unavailable />
          </Route>
          <Route path="/learn">
            <Unavailable />
          </Route>
          <Route path="/shop">
            <Unavailable />
          </Route>
          <Route path="/profile">
            <Unavailable />
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
