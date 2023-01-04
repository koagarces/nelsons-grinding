import { Link, redirect } from "react-router-dom";
import Slides from "../components/Slides";
import "../Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import Slider from "../components/Slider";
const Home = () => {
  // const navigate = useNavigate();
  const navToBServ = (event) => {
    console.log(event.target);
    console.log("image Clicked");
    redirect("/blanchard");
  };

  return (
    <div className="homePage">
      <div className="slideBox">
        {/* <Slides /> */}
        <Slider />
      </div>
      <div className="topBar">
        <p>SPECIALIZING IN PRECISION GRINDING SINCE 1978</p>
      </div>
      <div className="homeInfo">
        {/* <h1 className="title">NELSON GRINDING</h1>
        <h3>PRECISION BLANCHARD AND SURFACE GRINDING</h3> */}
        <div className="detailsBox">
          <div className="details">
            <FontAwesomeIcon className="icons" icon={solid("pen-ruler")} />
            <p className="iconDescription">
              We take pride in our <span className="redFont">precision</span>{" "}
              grinding work by assuring <span className="redFont">qualtiy</span>{" "}
              products for all customers. Our customers know our quality work
              and the standards that we set.
            </p>
          </div>

          <div className="details">
            <FontAwesomeIcon className="icons" icon={solid("seedling")} />
            <p className="iconDescription">
              Here at Nelson Grinding, we believe in making the world more
              <span className="redFont"> Environmentally Friendly</span>. All of
              our machines solely rely on water to do their jobs.
            </p>
          </div>
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
            <FontAwesomeIcon
              className="icons"
              icon={solid("building-circle-check")}
            />
            <p className="iconDescription">
              For 30 years Nelson Grinding has focused on providing the best
              value for our customers through superior customer service,
              experience, and innovative approaches to grinding services.
            </p>
          </div>
        </div>
      </div>
      <div className="examplesDiv">
        <div className="overlay">
          <div className="hidden">
            <l>
              <h3 className="subheading">Blanchard</h3>
              <li>3 - 42" Blanchard Grinders</li>
              <li>1 - 48" Blanchard Grinder</li>

              <li> 1 - 82" Blanchard Grinder</li>
              <li>Tolerances as low as +/-</li>
            </l>
          </div>
          <div className="hidden">
            <l>
              <h3 className="subheading">Surface Grinding</h3>
              <li> 2 - 54" Mattison Rotary Surface Grinders</li>
              <li>1 - 24" X 72" Mattison Recipricating Surface Grinder</li>

              <li>.001 Flatness and parallelism .001</li>
              <li>
                Finishes to 16 RMS Roughing for subsequent finishing operations
              </li>
            </l>
          </div>
        </div>

        <div className="grindingExamples">
          <Link className="grindingExample topEx" to={"/blanchard"}>
            <img
              src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrHKb3QzbigO_z_-QqnPPtKhUnDnu4gHHWpfyYq5WwzmNg?cn=THISLIFE&res=medium&ts=1671214276"
              className="homePic"
              alt="unavailable"
              onClick={navToBServ}
            />
          </Link>
          <Link className="grindingExample bottEx" to={"/surface"}>
            <img
              src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrHrEIPwSvgYFdPt-cdHb2F-rnHjCyIZu59oV2we_kMG9A?cn=THISLIFE&res=medium&ts=1671214408"
              className="homePic"
              alt="unavailable"
            />
          </Link>
        </div>
      </div>
      <div className="bottomHome">
        <l className="capabilitiesList bott">
          <h3 className="capabilityHeader">Grinding Capabilities</h3>
          <li className="capability">Long or short runs</li>
          <li className="capability">
            Ferrous or non-ferrous metals, annealed or hardened up to 62 RC
          </li>
          <li className="capability">
            Up to a 82" diagonal on Blanchard machines and 72" length on surface
            grinding.
          </li>
        </l>
        <l className="diffParts bott">
          <h3>What Can be Ground?</h3>
          <li>Plate stock and burnouts</li>
          <li>Bar stock</li>
          <li>Various parts ground to finish sizes</li>
          <li>Outside edges of complete molds</li>
          <li>Injection mold plates and inserts</li>
          <li>Die blocks</li>
          <li>Forgings</li>
          <li>Castings</li>
          <li>Stampings</li>
          <li>Weldments</li>
        </l>
        <div className="improve bott">
          <h3>Improving Job Costs</h3>
          <p>
            Machining costs and turnaround time can be reduced by simultaneously
            Blanchard grinding multiple parts. Blanchard grinding is often
            faster and more economical than milling because of fast set ups.
            Multiple part grinding of large loads provides uniform part-to-part
            thickness tolerances and surface finishes at a lower unit cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
