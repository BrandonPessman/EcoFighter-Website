import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>
      <Navigation />

      <div style={{maxWidth: '1440px', margin: 'auto', marginTop: '50px'}}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
