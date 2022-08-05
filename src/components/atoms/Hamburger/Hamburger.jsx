import React, { useEffect } from "react";

//animations
import Aos from "aos";
import "aos/dist/aos.css";

// styles
import "./Hamburger.scss";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setHamburger } from "../../../redux/Hamburger/hamburgerSlice";

//icons
import hamburgerIcon from "../../../assets/svg/Dots.svg";
import crossIcon from "../../../assets/svg/cross.svg";
import polygon from "../../../assets/svg/Polygon.svg";

function Hamburger() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const dispatch = useDispatch();
  const {
    hamburger: { isHamburgerActive },
  } = useSelector((state) => state);

  return (
    <>
      <button
        className="hamburgerButton"
        type="button"
        onClick={() => dispatch(setHamburger(!isHamburgerActive))}
      >
        <img
          src={isHamburgerActive ? crossIcon : hamburgerIcon}
          alt="hamburger"
        />
      </button>
      {isHamburgerActive ? (
        <div className="hamburgerWrapper">
          <div className="hamburgerLogoWrapper"></div>
          <div className="hamburgerNavlistsWrapper">
            <ul className="hamburgerNavlistList" data-aos="fade-left">
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Home
              </li>
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Work
              </li>
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Culture
              </li>
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Servicies
              </li>
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Partners
              </li>
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Stories
              </li>
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Careers
              </li>
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Events
              </li>
              <li className="hamburgerNavlistItem">
                <img src={polygon} alt="arrowPolygon" />
                Contact
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Hamburger;
