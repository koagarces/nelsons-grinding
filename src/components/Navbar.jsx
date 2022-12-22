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
      <div class="dropdown">
        <Link className="links" to={`/services`} id="servicesLink">
          SERVICES
        </Link>
        <div class="dropdown-content">
          <Link className="links" to={`/blanchard`}>
            BLANCHARD GRINDING
          </Link>
          <Link className="links" to={`/surface`}>
            SURFACE GRINDING
          </Link>
        </div>
      </div>
      <Link className="links" to={`contact`}>
        CONTACT
      </Link>
    </div>
  );
};

export default Nav;
