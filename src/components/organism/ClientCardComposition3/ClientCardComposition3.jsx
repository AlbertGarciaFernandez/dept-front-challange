import React from "react";

//styles
import "./ClientCardComposition3.scss";

//molecules
import ClientCard from "../../molecules/ClientCard/ClientCard";

//images
import Image5 from "../../../assets/webp/clientCardImg5.webp";
import Image6 from "../../../assets/webp/clientCardImg6.webp";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image5}
        title="BE LIGHTNING"
        text="Delivering clarity on a global scale"
        alt="BackgrounImgLightning"
      />
      <ClientCard
        img={Image6}
        title="TUI"
        text="Swipe to find your next holiday destination"
        alt="BackgrounImgTui"
      />
    </div>
  );
}

export default ClientCardComposition1;
