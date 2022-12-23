import { Link, redirect } from "react-router-dom";
import RequestQuote from "../components/Request";
import Slides from "../components/Slides";
import "../Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
const Home = () => {
  // const navigate = useNavigate();
  const navToBServ = (event) => {
    console.log(event.target);
    console.log("image Clicked");
    redirect("/blanchard");
  };

  return (
    <div className="homePage">
      <div className="topBar">
        <p>SPECIALIZING IN PRECISION GRINDING SINCE 1978</p>
      </div>
      <div className="slideBox">
        <Slides />
      </div>
      <div className="homeInfo">
        {/* <h1 className="title">NELSON GRINDING</h1>
        <h3>PRECISION BLANCHARD AND SURFACE GRINDING</h3> */}
        <div className="detailsBox">
          <div className="details">
            <FontAwesomeIcon
              className="icons"
              icon={solid("map-location-dot")}
            />
            <p className="iconDescription">
              Nelson Grinding has become a leading custom grinding center
              throughout the Orange County, California region.
            </p>
          </div>
          <div className="details">
            <FontAwesomeIcon className="icons" icon={solid("pen-ruler")} />
            <p className="iconDescription">
              We take pride in our precision grinding work by assuring qualtiy
              products for all customers. Our customers know our quality work
              and the standards that we set.
            </p>
          </div>
          <div className="details">
            <FontAwesomeIcon
              className="icons"
              icon={solid("building-circle-check")}
            />
            <p className="iconDescription">
              For 30 years Nelson Grinding has focused on providing the best
              value for our customers through superior customer service,
              experienced project management, long lasting partnerships, and
              innovative approaches to grinding services.
            </p>
          </div>
        </div>
      </div>
      <div className="grindingExamples">
        <Link className="grindingExample" to={"/blanchard"}>
          <img
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrHKb3QzbigO_z_-QqnPPtKhUnDnu4gHHWpfyYq5WwzmNg?cn=THISLIFE&res=medium&ts=1671214276"
            className="homePic"
            alt="unavailable"
            onClick={navToBServ}
          />
          <h3>Blanchard Grinding</h3>
        </Link>
        <Link className="grindingExample" to={"/surface"}>
          <img
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrHrEIPwSvgYFdPt-cdHb2F-rnHjCyIZu59oV2we_kMG9A?cn=THISLIFE&res=medium&ts=1671214408"
            className="homePic"
            alt="unavailable"
          />
          <h3>Surface Grinding</h3>
        </Link>
      </div>
      <RequestQuote />
    </div>
  );
};

export default Home;
