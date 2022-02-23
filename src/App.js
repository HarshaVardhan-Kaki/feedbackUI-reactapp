import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './components/context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Link to="/">
          <Header text={'feedback UI'} />
        </Link>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
