import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <div>
        <ul>
        <li><a href="/" style={{paddingTop: '14px', fontSize: '24px', fontWeight: '800', color: '#cc1a1a', position: 'relative'}}>EcoFighter<a href="/" style={{position: 'absolute', top: 4, right: -26, color: '#cc1a1a', borderRadius: '16px', zIndex: '-1', fontSize: '13px', fontWeight: '500'}}>.app</a></a></li>
            <li><a href="#home" style={{marginLeft: '30px'}}>Product</a></li>
            <li><a href="#news">Sponserships</a></li>
            <li><a href="#contact">Our Mission</a></li>
            <button className="nav-button" style={{float: 'right'}}>Join the Fight</button>
            <li style={{float: 'right'}}><a class="active" href="#about">Login</a></li>
        </ul>
    </div>
  );
}

export default Navigation;
