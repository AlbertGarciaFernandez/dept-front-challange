import React from "react";
import "./ClientCardComposition1.scss";
import ClientCard from "../../molecules/ClientCard/ClientCard";
import Image1 from "../../../assets/img/clientCardImg1.png";
import Image2 from "../../../assets/img/clientCardImg2.png";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image1}
        title="BOL.COM"
        text="A Summer island in the Netherlands"
      />
      <ClientCard
        img={Image2}
        title="KEMPEN"
        text="Not some average banking website"
      />
    </div>
  );
}

export default ClientCardComposition1;
