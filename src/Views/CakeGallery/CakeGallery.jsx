import "./CakeGallery.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import cake1 from "../../assets/gallery1.webp";
import cake2 from "../../assets/gallery2.webp";
import cake3 from "../../assets/gallery3.webp";
import cake4 from "../../assets/gallery4.webp";
import cake5 from "../../assets/gallery5.webp";
import cake6 from "../../assets/gallery6.webp";
import cake7 from "../../assets/gallery7.webp";
import cake8 from "../../assets/gallery8.webp";
import cake9 from "../../assets/gallery9.webp";
import cake10 from "../../assets/gallery10.webp";
import cake11 from "../../assets/gallery11.webp";
import cake12 from "../../assets/gallery12.webp";
import cake13 from "../../assets/gallery13.webp";
import cake14 from "../../assets/gallery14.webp";
import cake15 from "../../assets/gallery15.webp";

const cakes = [
  { id: 1, name: "Chocolate Cake", price: "₹500", img: cake1 },
  { id: 2, name: "Strawberry Cake", price: "₹600", img: cake2 },
  { id: 3, name: "Black Forest", price: "₹550", img: cake3 },
  { id: 4, name: "Red Velvet", price: "₹700", img: cake4 },
  { id: 5, name: "Vanilla Cake", price: "₹400", img: cake5 },
  { id: 6, name: "Cupcake", price: "₹100", img: cake6 },
  { id: 7, name: "Pineapple Cake", price: "₹450", img: cake7 },
  { id: 8, name: "Butterscotch", price: "₹550", img: cake8 },
  { id: 9, name: "Mango Cake", price: "₹500", img: cake9 },
  { id: 10, name: "KitKat Cake", price: "₹800", img: cake10 },
  { id: 11, name: "Oreo Cake", price: "₹750", img: cake11 },
  { id: 12, name: "Fruit Cake", price: "₹650", img: cake12 },
  { id: 13, name: "Blueberry Cake", price: "₹700", img: cake13 },
  { id: 14, name: "Rasmalai Cake", price: "₹850", img: cake14 },
  { id: 15, name: "Chocolate Truffle", price: "₹900", img: cake15 }
];

function CakeGallery() {
  const navigate = useNavigate();

  return (
    <div className="cake-gallery-page">
      <Navbar active="gallery" />

      <div className="gallery">
        <h1>Cake Gallery 🎂</h1>

        <div className="cake-container">
          {cakes.map((cake) => (
            <div key={cake.id} className="cake-card">
              <img src={cake.img} alt={cake.name} />
              <h3>{cake.name}</h3>
              <p>{cake.price}</p>

              <button onClick={() => navigate("/order")}>
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CakeGallery;