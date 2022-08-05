import React from "react";

//styles
import "./Navbar.scss";

//redux
import { useSelector } from "react-redux";

// components
import Logo from "../../atoms/Logo/Logo";
import PrimaryNavigation from "../../molecules/PrimaryNavigation/PrimaryNavigation";
import Hamburger from "../../atoms/Hamburger/Hamburger";

function Navbar() {
  const {
    hamburger: { isHamburgerActive },
  } = useSelector((state) => state);
  return (
    <div className="navbarContainer">
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
