import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbackData((prev) => {
      return [...prev, newFeedback];
    });
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }
  };

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedbackData(
      feedbackData.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    setFeedbackEdit({ item: {}, edit: false });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbackData,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
