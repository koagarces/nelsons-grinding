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
      <div className="dropdown">
        <Link className="links" id="servicesLink">
          SERVICES
        </Link>
        <div className="dropdown-content">
          <Link className="links" to={`/blanchard`}>
            BLANCHARD GRINDING
          </Link>
          <Link className="links" to={`/surface`}>
            SURFACE GRINDING
          </Link>
        </div>
      </div>
      <Link className="links" to={`/contact`}>
        CONTACT
      </Link>
    </div>
  );
};

export default Nav;
