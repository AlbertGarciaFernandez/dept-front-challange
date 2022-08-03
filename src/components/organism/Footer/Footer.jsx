import React from "react";

//components
import Arrow from "../../atoms/Arrow/Arrow";
import FooterInfo from "../../molecules/FooterInfo/FooterInfo";
import FooterLinks from "../../molecules/FooterLinks/FooterLinks";
import Logo from "../../atoms/Logo/Logo";

//assets
import Facebook from "../../../assets/svg/Facebook.svg";
import Twitter from "../../../assets/svg/Twitter.svg";
import Instagram from "../../../assets/img/instagram.png";

import "./Footer.scss";

function Footer() {
  return (
    <section className="footerSection">
      <div className="footerBlackWrapper">
        <div className="footerUpSection">
          <div className="footerLogoWrapper">
            <Logo />
          </div>
          <FooterLinks />
          <div className="iconSocialNetworks">
            <img className="FacebookIcon" src={Facebook} alt="FacebookIcon" />
            <img className="TwitterIcon" src={Twitter} alt="TwitterIcon" />
            <img
              className="InstagramIcon"
              src={Instagram}
              alt="InstagramIcon"
            />
          </div>
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
