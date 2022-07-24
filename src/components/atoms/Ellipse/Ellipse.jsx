import React from "react";
import "./Ellipse.scss";
import EllipseSvg from "../../../assets/svg/Ellipse.svg";

function Ellipse() {
  return (
    <i className="ellipseWrapper">
      <img className="ellipse" src={EllipseSvg} alt="logo" />
    </i>
  );
}

export default Ellipse;
