import React from "react";

//styles
import "./ClientCardComposition2.scss";

//molecules
import ClientCard from "../../molecules/ClientCard/ClientCard";

//images
import Image3 from "../../../assets/webp/clientCardImg3.webp";
import Image4 from "../../../assets/webp/clientCardImg4.webp";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image3}
        title="PHILIPS"
        text="Beautiful design meets innovative technology"
        alt="BackgrounImgPhilips"
      />
      <ClientCard
        img={Image4}
        title="GEMEENTEMUSEUM"
        text="A 100 years of Mondriaan & De Stijl"
        alt="BackgrounImgMuseum"
      />
    </div>
  );
}

export default ClientCardComposition1;
