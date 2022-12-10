import "../Styles/Request.css";
import { Link } from "react-router-dom";
const RequestQuote = () => {
  return (
    <div className="quoteButtBox">
      <Link className="quoteButt" to={`/quote`}>
        REQUEST A QUOTE
      </Link>
    </div>
  );
};

export default RequestQuote;
