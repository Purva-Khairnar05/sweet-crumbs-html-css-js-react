import "./CakeGallery.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import cake1 from "../../assets/gallery1.webp";
import cake2 from "../../assets/gallery2.webp";
import cake3 from "../../assets/gallery3.webp";
import cake4 from "../../assets/gallery15.webp";
import cake5 from "../../assets/gallery5.webp";
import cake6 from "../../assets/gallery6.webp";
import cake7 from "../../assets/gallery7.webp";
import cake8 from "../../assets/gallery8.webp";
import cake9 from "../../assets/gallery9.webp";
import cake10 from "../../assets/gallery10.webp";
import cake11 from "../../assets/gallery11.webp";
import cake12 from "../../assets/gallery12.webp";

const cakes = [
  {
    id: 1,
    name: "Fruit Cream Cake",
    price: "₹500",
    desc: "Soft cake topped with fresh fruits and cream.",
    img: cake1
  },
  {
    id: 2,
    name: "Heart Shape Cake",
    price: "₹600",
    desc: "Beautiful heart-shaped cream cake.",
    img: cake2
  },
  {
    id: 3,
    name: "Chocolate Dessert Jar",
    price: "₹550",
    desc: "Layered chocolate dessert in a jar.",
    img: cake3
  },
  {
    id: 4,
    name: "Chocolate Pastry Slice + Coffee",
    price: "₹700",
    desc: "Soft pastry with chocolate topping.",
    img: cake4
  },
  {
    id: 5,
    name: "Cupcake",
    price: "₹400",
    desc: "Small soft cupcake with cream frosting.",
    img: cake5
  },
  {
    id: 6,
    name: "Chocolate Pastry",
    price: "₹100",
    desc: "Rich chocolate pastry with smooth layers.",
    img: cake6
  },
  {
    id: 7,
    name: "Almond Cake",
    price: "₹450",
    desc: "Soft cake topped with almond flakes.",
    img: cake7
  },
  {
    id: 8,
    name: "Loaf Bread",
    price: "₹550",
    desc: "Fresh baked soft bread loaf.",
    img: cake8
  },
  {
    id: 9,
    name: "Chocolate Cookies",
    price: "₹500",
    desc: "Crunchy chocolate cookies.",
    img: cake9
  },
  {
    id: 10,
    name: "Palmier Pastry",
    price: "₹800",
    desc: "Crispy layered puff pastry.",
    img: cake10
  },
  {
    id: 11,
    name: "Jam Cookies",
    price: "₹750",
    desc: "Cookies filled with sweet jam.",
    img: cake11
  },
  {
    id: 12,
    name: "Donut",
    price: "₹650",
    desc: "Soft donut with colorful sprinkles.",
    img: cake12
  }
];

function CakeGallery() {
  const navigate = useNavigate();

  return (
    <div className="cake-gallery-page">
      <Navbar active="gallery" />

      <div className="gallery">
        <h1>Sweet Cravings 🍰</h1>

        <div className="cake-container">
          {cakes.map((cake) => (
            <div key={cake.id} className="cake-card">
              <img src={cake.img} alt={cake.name} />

              <h3>{cake.name}</h3>
              <p className="price">{cake.price}</p>
              <p className="desc">{cake.desc}</p>

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