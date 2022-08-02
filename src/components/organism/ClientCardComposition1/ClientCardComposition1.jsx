import React from "react";
import "./ClientCardComposition1.scss";
import ClientCard from "../../molecules/ClientCard/ClientCard";
import Image1 from "../../../assets/webp/clientCardImg1.webp";
import Image2 from "../../../assets/webp/clientCardImg2.webp";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image1}
        title="BOL.COM"
        text="A Summer island in the Netherlands"
        alt="BackgrounImgBol"
      />
      <ClientCard
        img={Image2}
        title="KEMPEN"
        text="Not some average banking website"
        alt="BackgrounImgKempen"
      />
    </div>
  );
}

export default ClientCardComposition1;
