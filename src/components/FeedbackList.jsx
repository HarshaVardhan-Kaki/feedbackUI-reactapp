import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from './context/FeedbackContext';

const FeedbackList = () => {
  const { feedbackData } = useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackData.map((currentFeedback, index) => {
          return (
            <motion.div
              key={currentFeedback.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                feedback={currentFeedback}
                key={currentFeedback.id}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
