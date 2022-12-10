import { Link } from "react-router-dom";
import "../Styles/Header.css";
import RequestQuote from "./Request";
const Header = () => {
  return (
    <div className="header">
      <div className="logoBox">
        <Link className="homeLink" to={`/`}>
          {/* <img className="logo" src={Logo} /> */}
          Nelson Grinding
        </Link>
      </div>
      <RequestQuote />
      {/* <div className="quoteButtBox">
        <Link className="quoteButt" to={`/quote`}>
          REQUEST A QUOTE
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
