import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Founded in 1990, our restaurant has been serving up delicious meals made with the freshest ingredients. Come taste the difference!</p>
      </div>
      <div className="about-image">
        <img src="./about.jpg" alt="About Our Restaurant" />
      </div>
    </section>
  );
}

export default About;
