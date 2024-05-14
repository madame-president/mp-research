import React from 'react';
import './CenterContainer.css';
import TweetContainer from './TweetContainer';
import AuthorContainer from './AuthorContainer';

const CenterContainer = () => {
  return (
    <div className="center-wrapper">
      <AuthorContainer />
      <div className="feed-container">
        <h2>Feed Container</h2>
        <TweetContainer />
        <TweetContainer />
        <TweetContainer />
        {/* Add more TweetContainer components as needed */}
      </div>
    </div>
  );
};

export default CenterContainer;
