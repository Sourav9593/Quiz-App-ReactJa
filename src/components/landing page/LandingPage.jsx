import React from 'react';
import {Link} from 'react-router-dom'
import './landingPage.css';

const LandingPage = () => {

  
  return (
    <div className="landing-page">
      <h1 className="title">Welcome to the Quiz App</h1>
      <p className="subtitle">Test your knowledge across various topics</p>
      <Link to="/quiz" className="start-button">
      Start Quiz
      </Link>
    </div>
  );
};

export default LandingPage;
