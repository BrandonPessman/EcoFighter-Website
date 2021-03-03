import React from 'react';
import {
  Link,
  useHistory
} from "react-router-dom";

function Register({ handleRegister }) {
  const history = useHistory()

  return (
    <div>
      <center>
          <h1 style={{fontSize: '18px', fontWeight: '700', marginBottom: '15px'}}>Sign-up</h1>
          <input placeholder="Username" type="text" id="fusername" name="fusername" style={{width: '250px', borderRadius: '8px', marginBottom: '15px', padding: '10px 20px', border: 'none', backgroundColor: '#e3e3e3', color: '#696969', fontWeight: '600'}} /><br />
          <input placeholder="Email" type="text" id="femail" name="femail" style={{width: '250px', borderRadius: '8px', marginBottom: '0px', padding: '10px 20px', border: 'none', backgroundColor: '#e3e3e3', color: '#696969', fontWeight: '600'}} />
          <br />
          <input placeholder="Password" type="text" id="femail" name="fpassword" style={{width: '250px', marginTop: '15px',borderRadius: '8px', marginBottom: '0px', padding: '10px 20px', border: 'none', backgroundColor: '#e3e3e3', color: '#696969', fontWeight: '600'}} />
          <br />
          <button className="nav-button" style={{width: '250px', fontWeight: '600'}} onClick={() => handleRegister()}>Join the Fight</button>
          <p style={{fontSize: '14px'}}>Already in the fight? <Link to="/login" style={{color: '#cc1a1a'}}>Login here.</Link></p>
      </center>
    </div>
  );
}

export default Register;
