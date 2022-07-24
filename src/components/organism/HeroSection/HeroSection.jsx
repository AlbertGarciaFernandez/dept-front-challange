import React, { useEffect } from "react";
import "./HeroSection.scss";

import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="heroSectionWrapper">
      <p data-aos="fade-up" className="heroSectionTitle">
        Work
      </p>
      <p data-aos="fade-up" className="heroSectionText">
        A selection of projects that <b>pioneer tech</b> and<b> marketing</b> to
        help brands stay ahead.
      </p>
    </div>
  );
}

export default HeroSection;
