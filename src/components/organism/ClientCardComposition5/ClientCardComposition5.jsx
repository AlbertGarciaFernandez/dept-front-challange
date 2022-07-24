import React from "react";
import "./ClientCardComposition5.scss";
import ClientCard from "../../molecules/ClientCard/ClientCard";
import Image9 from "../../../assets/img/clientCardImg9.png";
import Image10 from "../../../assets/img/clientCardImg10.png";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image9}
        title="ZALANDO"
        text="Innovative SEO and content strategy for Zalando"
      />
      <ClientCard
        img={Image10}
        title="KONINKLIJKE BIBLIOTHEEK"
        text="The search of the most influential book ever"
      />
    </div>
  );
}

export default ClientCardComposition1;
