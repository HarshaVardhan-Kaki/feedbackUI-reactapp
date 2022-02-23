import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

const FeedbackStats = (props) => {
  const { feedbackData } = useContext(FeedbackContext);
  let average =
    feedbackData.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedbackData.length;

  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
