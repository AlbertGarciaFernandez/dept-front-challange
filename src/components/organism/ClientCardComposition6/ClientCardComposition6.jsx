import React from "react";
import "./ClientCardComposition6.scss";
import ClientCard from "../../molecules/ClientCard/ClientCard";
import Image11 from "../../../assets/img/clientCardImg11.png";
import Image12 from "../../../assets/img/clientCardImg12.png";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image11}
        title="LIBERTY GLOBAL "
        text="Delivering complex commerce solutions"
      />
      <ClientCard
        img={Image12}
        title="ARLA"
        text="Swipe to find your next holiday destination"
      />
    </div>
  );
}

export default ClientCardComposition1;
