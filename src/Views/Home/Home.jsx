import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import "./Home.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";


import Cake1 from "../../assets/cake1.jpg";
import Cake2 from "../../assets/cake2.jpg";
import Cake3 from "../../assets/cake3.jpg";
import Cake4 from "../../assets/cake4.jpg";
import Cake5 from "../../assets/cake5.jpg";

const Products = [
  {
    id: 1,
    title: "Chocolate Cake",
    price: 40,
    description: "Rich chocolate cake with creamy frosting",
    image: Cake1
  },
  {
    id: 2,
    title: "Vanilla Cake",
    price: 60,
    description: "Classic vanilla cake with buttercream",
    image: Cake2
  },
  {
    id: 3,
    title: "Strawberry Cake",
    price: 70,
    description: "Fresh strawberry cake with whipped cream",
    image: Cake3
  },
  {
    id: 4,
    title: "Red Velvet Cake",
    price: 80,
    description: "Moist red velvet cake with cream cheese frosting",
    image: Cake4
  },
  {
    id: 5,
    title: "Carrot Cake",
    price: 50,
    description: "Spiced carrot cake with walnuts",
    image: Cake5
  }
];

function Home() {
  return (
    <div className="home">
      <Navbar active="home" />

      <BodyContainer>
        <div className="hero-section">
          <h1 className="home-title">Welcome to Bakery Shop</h1>
          <p className="home-subtitle"><i>Fresh bakery treats made daily just for you.</i></p>
        </div>

        <div className="product-container">
          {Products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card-content">
                <h3>{product.title}</h3>
                <p className="price">₹ {product.price}</p>
                <p className="description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;





