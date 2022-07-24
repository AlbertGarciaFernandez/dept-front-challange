import React from "react";
import "./ClientCardComposition2.scss";
import ClientCard from "../../molecules/ClientCard/ClientCard";
import Image3 from "../../../assets/img/clientCardImg3.png";
import Image4 from "../../../assets/img/clientCardImg4.png";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image3}
        title="PHILIPS"
        text="ABeautiful design meets innovative technology"
      />
      <ClientCard
        img={Image4}
        title="GEMEENTEMUSEUM"
        text="A 100 years of Mondriaan & De Stijl"
      />
    </div>
  );
}

export default ClientCardComposition1;
