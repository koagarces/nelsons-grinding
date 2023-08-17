import "../Styles/Request.css";
import { Link } from "react-router-dom";

//Request Quote Button to use universally on the website

const RequestQuote = () => {
  return (
    <div className="quoteButtBox">
      <Link className="quoteButt" to={`/quote`}>
        REQUEST QUOTE
      </Link>
    </div>
  );
};

export default RequestQuote;
