import React from "react";

function Specials() {
  return (
    <div className="specials-background">
      <section className="specials">
        <div className="special-title">This Week's Specials</div>
        <div className="specials-container">
          <div className="special-item">
            <img src="cp.jpg" alt="Chicken Parmigiana" />
            <h3>Chicken Parmigiana</h3>
            <p>
              Tender chicken breast, breaded and fried to a golden crisp, then
              smothered in our homemade marinara sauce and melted mozzarella
              cheese. Served over a bed of al dente spaghetti, it's a classic
              Italian comfort dish that's bound to please the buds.
            </p>
            <div className="price">$32.99</div>
          </div>

          <div className="special-item">
            <img src="beefsteak.jpg" alt="Beef Steak" />
            <h3>Beef Steak</h3>
            <p>
              A succulent cut of prime beef steak, chargrilled to your
              preference, and seasoned with our signature blend of herbs.
              Accompanied by roasted garlic mashed potatoes and glazed seasonal
              vegetables.
            </p>
            <div className="price">$24.99</div>
          </div>

          <div className="special-item">
            <img src="vbb.jpg" alt="Vegan Buddha Bowl" />
            <h3>Vegan Buddha Bowl</h3>
            <p>
              Delight in our Vegan Buddha Bowl, a wholesome ensemble of quinoa,
              kale, spiced chickpeas, roasted sweet potatoes, and creamy avocado
              slices. Drizzled with a zesty lemon-tahini dressing, it's a
              guilt-free option that's rich in nutrients and flavors.
            </p>
            <div className="price">$17.99</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Specials;
