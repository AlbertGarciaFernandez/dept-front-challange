import React from "react";

//styles
import "./Ellipse.scss";

//icons
import EllipseSvg from "../../../assets/svg/Ellipse.svg";

function Ellipse() {
  return (
    <i className="ellipseWrapper">
      <img className="ellipse" src={EllipseSvg} alt="logo" />
    </i>
  );
}

export default Ellipse;
