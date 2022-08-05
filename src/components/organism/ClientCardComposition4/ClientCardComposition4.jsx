import React from "react";

//styles
import "./ClientCardComposition4.scss";

//molecules
import ClientCard from "../../molecules/ClientCard/ClientCard";

//images
import Image7 from "../../../assets/webp/clientCardImg7.webp";
import Image8 from "../../../assets/webp/clientCardImg8.webp";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image7}
        title="CHOCOMEL"
        text="A campaign for the limited edition letter packs"
        alt="BackgrounImgChocomel"
      />
      <ClientCard
        img={Image8}
        title="JBL"
        text="Live like a champion with Jerome Boateng"
        alt="BackgrounImgJbl"
      />
    </div>
  );
}

export default ClientCardComposition1;
