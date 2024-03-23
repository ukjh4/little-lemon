import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">Restaurant Logo</div>
        <nav className="navbar">
          <ul>
            <li><a href="#main">Home</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <main className="App">
        <section id="main" className="main-description">
          <h1>Welcome to Our Restaurant</h1>
          <p>Enjoy the finest cuisine in a cozy atmosphere.</p>
        </section>

        <section id="specials" className="specials">
          <h2>Today's Specials</h2>
          <ul>
            <li>Grilled Salmon - $20</li>
            <li>Beef Steak - $25</li>
            <li>Vegan Bowl - $18</li>
          </ul>
        </section>

        <section id="testimonials" className="testimonials">
          <h2>Testimonials</h2>
          <blockquote>
            "The best dining experience I've had in years!" - Jane Doe
          </blockquote>
          <blockquote>
            "Absolutely delicious, highly recommend!" - John Smith
          </blockquote>
        </section>

        <section id="about" className="about">
          <h2>About Us</h2>
          <p>Founded in 1990, our restaurant has been serving up delicious meals made with the freshest ingredients. Come taste the difference!</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">Restaurant Logo</div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#main">Home</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <div className="contact-info">
          <p>123 Main Street, City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@restaurant.com</p>
        </div>
        <div className="social-media-links">
          <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
        </div>
      </footer>
    </>
  );
}

export default App;
