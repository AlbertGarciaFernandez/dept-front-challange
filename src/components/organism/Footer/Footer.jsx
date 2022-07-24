import React from "react";
import Arrow from "../../atoms/Arrow/Arrow";
import FooterInfo from "../../molecules/FooterInfo/FooterInfo";
import FooterLinks from "../../molecules/FooterLinks/FooterLinks";
import Logo from "../../atoms/Logo/Logo";

import "./Footer.scss";

function Footer() {
  return (
    <section className="footerSection">
      <div className="footerBlackWrapper">
        <div className="footerUpSection">
          <Logo />
          <FooterLinks />
        </div>
        <div className="footerDownSection">
          <FooterInfo />
        </div>
      </div>
      <div className="footerArrowWrapper">
        <Arrow />
      </div>
    </section>
  );
}

export default Footer;
