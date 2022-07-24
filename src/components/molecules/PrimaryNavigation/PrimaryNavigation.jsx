import React, { useEffect } from "react";
import "./PrimaryNavigation.scss";

import Aos from "aos";
import "aos/dist/aos.css";

function PrimaryNavigation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <nav className="navWrapper">
      <ul data-aos="fade-left" className="navList">
        <li>Work</li>
        <li>Culture</li>
        <li>Services</li>
        <li>Insights</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default PrimaryNavigation;
