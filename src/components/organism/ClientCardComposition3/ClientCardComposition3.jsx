import React from "react";
import "./ClientCardComposition3.scss";
import ClientCard from "../../molecules/ClientCard/ClientCard";
import Image5 from "../../../assets/img/clientCardImg5.png";
import Image6 from "../../../assets/img/clientCardImg6.png";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image5}
        title="BE LIGHTNING"
        text="Delivering clarity on a global scale"
      />
      <ClientCard
        img={Image6}
        title="TUI"
        text="Swipe to find your next holiday destination"
      />
    </div>
  );
}

export default ClientCardComposition1;
