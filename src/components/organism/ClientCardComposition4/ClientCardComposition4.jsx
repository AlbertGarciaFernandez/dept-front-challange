import React from "react";
import "./ClientCardComposition4.scss";
import ClientCard from "../../molecules/ClientCard/ClientCard";
import Image7 from "../../../assets/img/clientCardImg7.png";
import Image8 from "../../../assets/img/clientCardImg8.png";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image7}
        title="CHOCOMEL"
        text="A campaign for the limited edition letter packs"
      />
      <ClientCard
        img={Image8}
        title="JBL"
        text="Live like a champion with Jerome Boateng"
      />
    </div>
  );
}

export default ClientCardComposition1;
