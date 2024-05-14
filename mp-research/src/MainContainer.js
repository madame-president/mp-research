import React from 'react';
import './MainContainer.css';
import LeftContainer from './LeftContainer';
import CenterContainer from './CenterContainer';
import RightContainer from './RightContainer';

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <LeftContainer />
      </div>
      <div className="center-container">
        <CenterContainer />
      </div>
      <div className="right-container">
        <RightContainer />
      </div>
    </div>
  );
};

export default MainContainer;
