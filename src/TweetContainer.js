import React from 'react';
import './TweetContainer.css';

const TweetContainer = () => {
  return (
    <div className="tweet-container">
      <img src="path/to/tweet-icon.jpg" alt="Tweet Icon" className="tweet-icon" />
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-header-text">John Doe</span>
          <span className="tweet-tag">@johndoe</span>
        </div>
        <div className="tweet-body">
          This is the body of the tweet. It contains the tweet text and can span multiple lines.
        </div>
      </div>
    </div>
  );
};

export default TweetContainer;
