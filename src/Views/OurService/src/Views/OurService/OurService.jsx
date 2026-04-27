import "./OurService.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import BodyContainer from "../../components/BodyContainer/BodyContainer.jsx";
import { Cake, Cookie, Gift, Truck } from "lucide-react";

function OurService() {
  return (
    <div className="ourservice">
      <Navbar active="services" />

      <BodyContainer>
        <h1 className="service-title">Our Services</h1>
        <p className="service-subtitle">Discover how our bakery brings joy to every celebration.</p>

        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <Cake size={48} />
            </div>
            <h3>Custom Cakes</h3>
            <p>Made-to-order cakes for birthdays, weddings and anniversaries with beautiful decoration.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Cookie size={48} />
            </div>
            <h3>Fresh Pastries</h3>
            <p>Croissants, muffins and danishes baked fresh every morning.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Gift size={48} />
            </div>
            <h3>Party Boxes</h3>
            <p>Assorted pastry and dessert boxes perfect for gatherings and gifting.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Truck size={48} />
            </div>
            <h3>Home Delivery</h3>
            <p>Warm bakery treats delivered to your door with care and speed.</p>
          </div>
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default OurService;