import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footBox">
      <h3>Quick Links</h3>
      <Link className="footLinks" to={`/contact`}>
        Contact
      </Link>
      <Link className="footLinks" to={`/contact`}>
        Careers
      </Link>
    </div>
  );
};

export default Footer;
