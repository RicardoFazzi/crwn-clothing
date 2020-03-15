import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, id, size }) => {
  return (
    <div className={`${size} menu-item`} key={id}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
