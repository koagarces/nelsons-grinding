import "../Styles/company.css";

const Company = () => {
  return (
    <div className="companyPage">
      <div className="companyFrontBox">
        <img
          className="companyFront"
          src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrGyJQpnYga5UXOw-DU9_qZoV7ntXQOewWgszVPDOQPWWw?cn=THISLIFE&res=large&ts=1672365954"
        />
      </div>
      <div className="companyDesc">
        <h3 className="textOverlay">The Precision Grinding Experts</h3>
        <p>
          For 30 years Nelson Grinding has focused on providing the best value
          for our customers through superior customer service, experienced
          project management, long lasting partnerships, and innovative
          approaches to grinding services.
        </p>
        <p>
          We have forged ongoing relationships with our customers throughout the
          years. We are experienced and knowledgeable and looking out for your
          needs. We want to earn your business for life.
        </p>
        <div className="trioImageBox">
          <img
            className="trioImage one"
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrE_dLjTuQgbFUXYf8T1pfh2UnDnu4gHHWpfyYq5WwzmNg?cn=THISLIFE&res=medium&ts=1672365949"
          />
          <img
            className="trioImage two"
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrGnF2XZQdiX3H3IM8X8qq31qCe7ffHDJpwno-pEcjtJnw?cn=THISLIFE&res=medium&ts=1672623047"
          />
          <img
            className="trioImage three"
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrGiXigNCkxaP4-JQy9RnCUtV7ntXQOewWgszVPDOQPWWw?cn=THISLIFE&res=medium&ts=1672622464"
          />
        </div>
        <h2>Why Choose Nelson Grinding?</h2>
        <p>
          Working directly with our industrial customers, Nelson provides full
          service Blanchard and Surface grinding solutions on most metals. Our
          seven high-powered Blanchard grinders (with different diameters) are
          capable of grinding most ferrous and nonferrous materials to an exact
          tolerance within .001 of an inch. Edges and ends of plates are ground
          to meet exact dimensional tolerance and squareness requirements.
        </p>
        <ul className="companyFacts">
          <li>We have been in Orange County for over 30 years</li>
          <li>We have stability and financial strength</li>
          <li>We offer full service capabilities</li>
          <li>We have highly skilled project managers</li>
          <li>We have a documented Quality Control system in place</li>
          <li>Our track record of on budget and on time delivery.</li>
        </ul>
      </div>
    </div>
  );
};

export default Company;
