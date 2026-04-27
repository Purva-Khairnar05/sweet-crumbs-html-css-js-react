import "./NotFound.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import BodyContainer from "../../components/BodyContainer/BodyContainer.jsx";
import Footer from "../../components/Footer/Footer.jsx";
  
function NotFound() {
  return (
    <div className="notfound">
      <Navbar />
      <BodyContainer>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </BodyContainer>
      
      <Footer />
    </div>
  );
}

export default NotFound;