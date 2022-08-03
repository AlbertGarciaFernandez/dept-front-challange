import React from "react";
import "./Navbar.scss";
import Logo from "../../atoms/Logo/Logo";

import { useSelector } from "react-redux";

import PrimaryNavigation from "../../molecules/PrimaryNavigation/PrimaryNavigation";
import Hamburger from "../../atoms/Hamburger/Hamburger";

function Navbar() {
  const {
    hamburger: { isHamburgerActive },
  } = useSelector((state) => state);
  return (
    <div className="navbarContainer" data-testid="navBar-1">
      <header className="headerWrapper">
        {!isHamburgerActive ? (
          <>
            <div className="navbarlogoWrapper">
              <Logo />
            </div>
            <div className="navbarNavigation">
              <PrimaryNavigation />
            </div>
          </>
        ) : (
          <div></div>
        )}

        <div className="navbarModalWrapper">
          <Hamburger />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
