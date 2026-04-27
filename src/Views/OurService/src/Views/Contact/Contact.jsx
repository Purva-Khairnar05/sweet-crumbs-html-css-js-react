import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

function Contact() {
  return (
    <div className="contact">
      <Navbar active="contact" />
      
      <BodyContainer>
        <h1 className="contact-title">Contact Bakery Shop</h1>
        <p className="contact-subtitle">We bake fresh treats every day and are happy to help with your order.</p>

        <div className="contact-container">
          <div className="contact-card">
            <h3>Shop</h3>
            <p>Bakery Shop</p>

            <h3>Address</h3>
            <p>123 Baker Street, Pune, Maharashtra</p>

            <h3>Phone</h3>
            <p>+91 98765 43210</p>

            <h3>Email</h3>
            <p>bakeryshop@gmail.com</p>

            <h3>Best for</h3>
            <p>Custom cakes, party orders, fresh bakery boxes and same-day delivery.</p>

            <h3>Opening Hours</h3>
            <p>Mon-Sun: 8:00 AM – 8:00 PM</p>
          </div>
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Contact;