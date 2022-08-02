import React from "react";
import "./Navbar.scss";
import Logo from "../../atoms/Logo/Logo";

import PrimaryNavigation from "../../molecules/PrimaryNavigation/PrimaryNavigation";

function Navbar() {
  return (
    <div className="navbarContainer" data-testid="navBar-1">
      <header className="headerWrapper">
        <div className="navbarlogoWrapper">
          <Logo />
        </div>
        <div className="navbarNavigation">
          <PrimaryNavigation />
        </div>
        <div className="navbarModalWrapper"></div>
      </header>
    </div>
  );
}

export default Navbar;
