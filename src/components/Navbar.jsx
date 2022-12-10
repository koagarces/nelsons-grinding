import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Nav = () => {
  return (
    <div className="navbar">
      <Link className="links" to={`/`}>
        HOME
      </Link>
      <Link className="links" to={`/company`}>
        COMPANY
      </Link>
      <Link className="links" to={`/services`}>
        SERVICES
      </Link>
      <Link className="links" to={`contact`}>
        CONTACT
      </Link>
    </div>
  );
};

export default Nav;
