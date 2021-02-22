import React from 'react';
import './App.css';

import Navigation from './components/Navigation'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Navigation />
      <div style={{maxWidth: '1440px', margin: 'auto'}}>
        <Login />
      </div>
    </div>
  );
}

export default App;
