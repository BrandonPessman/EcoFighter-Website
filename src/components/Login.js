import React from 'react';
import {
  Link,
  useHistory
} from "react-router-dom";

function Login({ handleLogin }) {
  const history = useHistory()

  return (
    <div>
      <center>
          <h1 style={{fontSize: '18px', fontWeight: '700', marginBottom: '15px'}}>Login</h1>
          <input placeholder="Username" type="text" id="fusername" name="fusername" style={{width: '250px', borderRadius: '8px', marginBottom: '15px', padding: '10px 20px', border: 'none', backgroundColor: '#e3e3e3', color: '#696969', fontWeight: '600'}} /><br />
          <input placeholder="Password" type="password" id="fpassword" name="fpassword" style={{width: '250px', borderRadius: '8px', marginBottom: '0px', padding: '10px 20px', border: 'none', backgroundColor: '#e3e3e3', color: '#696969', fontWeight: '600'}} />
          <br />
          <button className="nav-button" style={{width: '250px', fontWeight: '600'}} onClick={() => handleLogin()}>Login</button>
          <p style={{fontSize: '14px'}}>Looking to join the fight? <Link to="/register" style={{color: '#cc1a1a'}}>Sign-up here.</Link></p>
      </center>
    </div>
  );
}

export default Login;
