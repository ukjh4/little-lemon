import React from 'react';
import BookingForm from './bookingForm';

function BookingPage() {
  return (
    <div className="booking-page">
      <section className="booking-intro">
        <h2>Book a Table</h2>
        <p>We’re excited to host you! Please fill out the form below to secure your reservation.</p>
      </section>

      <BookingForm />

    </div>
  );
}

export default BookingPage;
