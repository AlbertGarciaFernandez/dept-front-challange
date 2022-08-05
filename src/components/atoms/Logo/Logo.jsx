import React from "react";

//styles
import "./Logo.scss";

//icons
import DeptLogoWhite from "../../../assets/svg/DeptLogoWhite.svg";

function Logo() {
  return (
    <div className="logoWrapper">
      <img
        className="imgLogo"
        src={DeptLogoWhite}
        alt="logo"
        data-testid="logo-1"
      />
    </div>
  );
}

export default Logo;
