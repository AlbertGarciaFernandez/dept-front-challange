import React from "react";
import DeptLogoWhite from "../../../assets/svg/DeptLogoWhite.svg";

function Logo() {
  return (
    <div className="logoWrapper">
      <img className="imgLogo" src={DeptLogoWhite} alt="logo" />
    </div>
  );
}

export default Logo;
