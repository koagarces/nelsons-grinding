import { Link } from "react-router-dom";
import "../Styles/Header.css";
import RequestQuote from "./Request";

const Header = () => {
  return (
    <div className="header">
      <div className="logoBox">
        <Link className="LogoLink" to={`/`} alt="NG">
          <img
            className="logo"
            src={
              "https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrHRufg4hqc15ia6quxncCfvVZV51t4MhjbEwRNyGscOgg?cn=THISLIFE&res=small&ts=1671597295"
            }
            alt="Nelson Grinding"
          />
        </Link>
      </div>
      <RequestQuote />
    </div>
  );
};

export default Header;
