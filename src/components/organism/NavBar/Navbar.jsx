import React from "react";
import "./Navbar.scss";
import Logo from "../../atoms/Logo/Logo";

import PrimaryNavigation from "../../molecules/PrimaryNavigation/PrimaryNavigation";
import DotsModal from "../../molecules/DotsModal/DotsModal";

function Navbar() {
  return (
    <div className="navbarContainer">
      <header className="headerWrapper">
        <Logo />
        <PrimaryNavigation />
        <DotsModal />
      </header>
    </div>
  );
}

export default Navbar;
