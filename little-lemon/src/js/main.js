import React from 'react';
import MainDescription from './mainDescription';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';

function Main() {
  return (
    <main className="App">
      <MainDescription />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;
