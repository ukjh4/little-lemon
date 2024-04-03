import React from 'react';
import Nav from './nav';

function Header() {
  return (
    <header className="header">
      <img src="./logo.png" alt="Restaurant Logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;
