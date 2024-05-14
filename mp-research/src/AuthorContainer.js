import React from 'react';
import './AuthorContainer.css';

const AuthorContainer = () => {
  return (
    <div className="author-container">
      <img src="path/to/profile-picture.jpg" alt="Profile" className="profile-picture" />
      <h2 className="profile-name">Norma Escobar</h2>
      <p className="profile-tag">@madamepresident</p>
      <p className="profile-bio">
        My interpretations and aspirations of the world. Developer with a focus on Bitcoin and public practice.
      </p>
    </div>
  );
};

export default AuthorContainer;
