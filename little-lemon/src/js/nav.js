import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/#specials">Specials</a>
        </li>
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
