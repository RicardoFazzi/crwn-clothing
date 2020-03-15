import React from "react";
import './homepage.styles.scss';

const HomePage = props => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">Shop Hats</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">Shop Jackets</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Women</h1>
            <span className="subtitle">Shop Hats</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Men</h1>
            <span className="subtitle">Shop Hats</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Pants</h1>
            <span className="subtitle">Shop Hats</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
