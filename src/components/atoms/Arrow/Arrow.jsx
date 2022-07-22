import React, { useEffect } from "react";
import "./Arrow.scss";

import ArrowSvg from "../../../assets/svg/Arrow.svg";

function Arrow() {
  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      className="arrowButton"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <img className="Arrow" src={ArrowSvg} alt="logo" />
    </button>
  );
}

export default Arrow;
