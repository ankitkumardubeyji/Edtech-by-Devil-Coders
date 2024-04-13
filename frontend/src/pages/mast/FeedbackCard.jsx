
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const FeedbackCard = () => {
  return (
    <div className="card">
      <div className="d-flex justify-content-between">
      <div className="card-body">
      <FaUser />
        <p className="card-text">Excellent work</p>
      </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between align-items-center">
          <span>Rating:</span>
          <FaStar />
        </div>
      </div>
    </div>
  );
};

// FeedbackCard.propTypes = {
//   text: PropTypes.string.isRequired,
//   profilePic: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

export default FeedbackCard;
