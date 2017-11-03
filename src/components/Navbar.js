import React from 'react';

const Navbar = props => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='title'>Auction Site</div>
        <div className='links'>
          <div className='signup'>Sign Up</div>
          <div className='login'>Log In</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
