import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './js/header';
import Main from './js/main';
import Footer from './js/footer';
import BookingPage from './js/bookingPage';  // Import BookingPage
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />  {/* Define route for BookingPage */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
