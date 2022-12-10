import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Nav = () => {
  return (
    <div className="navbar">
      <Link className="links" to={`/`}>
        HOME
      </Link>
      <Link className="links" to={`/about`}>
        COMPANY
      </Link>
      <Link className="links" to={`/`}>
        SERVICES
      </Link>
      <Link className="links" to={`/`}>
        CONTACT
      </Link>
    </div>
  );
};

export default Nav;
