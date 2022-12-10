import { Link } from "react-router-dom";
import "../Styles/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logoBox">
        <Link className="homeLink" to={`/`}>
          {/* <img className="logo" src={Logo} /> */}
          Nelson Grinding
        </Link>
      </div>
      <div className="quoteButtBox">
        <Link className="quoteButt" to={`/`}>
          REQUEST A QUOTE
        </Link>
      </div>
    </div>
  );
};

export default Header;
