import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

function MainDescription() {
  return (
    <section id="main" className="main-description">
      <h1>Welcome to Our Restaurant</h1>
      <p>Enjoy the finest cuisine in a cozy atmosphere.</p>
      <Link to="/booking">
        <button className="booking-button">Make a Booking</button>
      </Link>  {/* Link to the booking page */}
    </section>
  );
}

export default MainDescription;
