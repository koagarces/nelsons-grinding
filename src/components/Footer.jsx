import { Link } from "react-router-dom";
import Request from "./Request";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blackBar" />

      <div className="footBox">
        <div className="footReq">
          <Request />
        </div>
        <div className="footLinksBox">
          <h3>Find Us!</h3>
          <Link className="footLinks">1014 E Elm Ave, Fullerton, CA 92831</Link>
          <Link className="footLinks">(714)-738-5588</Link>
        </div>
        <div className="footLinksBox">
          <h3>Quick Links</h3>
          <Link className="footLinks" to={`/contact`}>
            Contact
          </Link>
          <Link className="footLinks" to={`/contact`}>
            Careers
          </Link>
          <Link className="footLinks" to={`/blanchard`}>
            Blanchard Grinding
          </Link>
          <Link className="footLinks" to={`/surface`}>
            Surface Grinding
          </Link>
        </div>
      </div>
      <h4>Nelson Grinding</h4>
    </div>
  );
};

export default Footer;
