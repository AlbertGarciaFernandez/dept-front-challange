import React from "react";
import "./ClientCardComposition5.scss";
import ClientCard from "../../molecules/ClientCard/ClientCard";
import Image9 from "../../../assets/webp/clientCardImg9.webp";
import Image10 from "../../../assets/webp/clientCardImg10.webp";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image9}
        title="ZALANDO"
        text="Innovative SEO and content strategy for Zalando"
        alt="BackgrounImgZalando"
      />
      <ClientCard
        img={Image10}
        title="KONINKLIJKE BIBLIOTHEEK"
        text="The search of the most influential book ever"
        alt="BackgrounImgKonik"
      />
    </div>
  );
}

export default ClientCardComposition1;
