import React from 'react'
import './Navigation.css'
import {
  Link,
  useHistory
} from "react-router-dom"

function Navigation({ auth, handleLogout }) {
  const history = useHistory()

  const handleShop = () => {
    history.push('/shop')
  }

  return (
    <div>
        <ul>
            <li><Link to="/" style={{paddingTop: '14px', fontSize: '24px', fontWeight: '800', color: '#cc1a1a', position: 'relative'}}>EcoFighter<Link to="/" style={{position: 'absolute', top: 4, right: -26, color: '#cc1a1a', borderRadius: '16px', zIndex: '-1', fontSize: '13px', fontWeight: '500'}}>.app</Link></Link></li>
            {auth ? 
            <>
              <button className="nav-button" style={{float: 'right'}} onClick={() => handleLogout()}>Logout</button>
              <button style={{float: 'right'}} className="fighter-coins" onClick={() => handleShop()}>47 <span style={{fontWeight: '400'}}>Coins</span></button> 
              <li style={{float: 'right'}}><Link to="/profile">Profile</Link></li>
              <li style={{float: 'right'}}><Link to="/shop">Shop</Link></li>
              <li style={{float: 'right'}}><Link to="/learn">Learn</Link></li>
              <li style={{float: 'right'}}><Link to="/quests">Quests</Link></li>
              <li style={{float: 'right'}}><Link to="/compete">Compete</Link></li>
              <li style={{float: 'right'}}><Link to="/tracking">Tracking</Link></li>            
            </> : <>
              <li><Link to="/product" style={{marginLeft: '30px'}}>Product</Link></li>
              <li><Link to="/sponserships">Sponserships</Link></li>
              <li><Link to="/mission">Our Mission</Link></li>
              <button className="nav-button" style={{float: 'right'}} onClick={() => {history.push("/login")}}>Login</button>
              <li style={{float: 'right'}}><Link class="active" to="/register">Join the Fight</Link></li>
            </>}
        </ul>
    </div>
  );
}

export default Navigation;
