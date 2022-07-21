import React from "react";
import "./Navbar.scss";
import Logo from "../../atoms/Logo/Logo";
import PrimaryNavigation from "../../molecules/PrimaryNavigation/PrimaryNavigation";

function Navbar() {
  return (
    <div className="navbarContainer">
      <header className="headerWrapper">
        <Logo />

        <PrimaryNavigation />
      </header>
    </div>
  );
}

export default Navbar;
