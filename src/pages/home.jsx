import RequestQuote from "../components/Request";
import Slides from "../components/Slides";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="slideBox">
        <Slides />
      </div>
      <h1 className="title">NESLSON GRINDING</h1>
      <h3>PRECISION BLANCHARD AND SURFACE GRINDING</h3>
      <div className="grindingExamples">
        <div className="blanchardExample">
          <img
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrHKb3QzbigO_z_-QqnPPtKhUnDnu4gHHWpfyYq5WwzmNg?cn=THISLIFE&res=medium&ts=1671214276"
            className="homePic"
          />
          <h3>Blanchard Grinding</h3>
        </div>
        <div className="surfaceExample">
          <img
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrHrEIPwSvgYFdPt-cdHb2F-rnHjCyIZu59oV2we_kMG9A?cn=THISLIFE&res=medium&ts=1671214408"
            className="homePic"
          />
          <h3>Surface Grinding</h3>
        </div>
      </div>
      <RequestQuote />
    </div>
  );
};

export default Home;
