import React from 'react'
import './Navigation.css'
import {
  Link,
  useHistory
} from "react-router-dom";

function Navigation() {
  const history = useHistory()

  return (
    <div>
        <ul>
            <li><Link to="/" style={{paddingTop: '14px', fontSize: '24px', fontWeight: '800', color: '#cc1a1a', position: 'relative'}}>EcoFighter<Link to="/" style={{position: 'absolute', top: 4, right: -26, color: '#cc1a1a', borderRadius: '16px', zIndex: '-1', fontSize: '13px', fontWeight: '500'}}>.app</Link></Link></li>
            <li><Link to="/product" style={{marginLeft: '30px'}}>Product</Link></li>
            <li><Link to="/sponserships">Sponserships</Link></li>
            <li><Link to="/mission">Our Mission</Link></li>
            <button className="nav-button" style={{float: 'right'}} onClick={() => {history.push("/register")}}>Join the Fight</button>
            <li style={{float: 'right'}}><Link class="active" to="/login">Login</Link></li>
        </ul>
    </div>
  );
}

export default Navigation;
