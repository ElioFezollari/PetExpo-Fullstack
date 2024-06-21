import Logo from "../assets/petexpo.svg";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Petexpo Logo" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <a href="/#about-us">About Us</a>
        <a href="/#contact-us">Contact Us</a>
        <div className="animals-dropdown">
          <button className="animals-button">Animals</button>
          <div className="animals-content">
            <Link to="dogs">Dogs</Link>
            <Link to="cats">Cats</Link>
            <Link to="birds">Birds</Link>
          </div>
        </div>
        <Link className="admin-button" to="admin">
          Admin Panel
        </Link>
      </nav>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
