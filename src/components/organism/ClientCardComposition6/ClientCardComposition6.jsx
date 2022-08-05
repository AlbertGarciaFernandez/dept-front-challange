import React from "react";

//styles
import "./ClientCardComposition6.scss";

// molecules
import ClientCard from "../../molecules/ClientCard/ClientCard";

// images
import Image11 from "../../../assets/webp/clientCardImg11.webp";
import Image12 from "../../../assets/webp/clientCardImg12.webp";

function ClientCardComposition1() {
  return (
    <div className="ClientCardComposition1Wrapper">
      <ClientCard
        img={Image11}
        title="LIBERTY GLOBAL "
        text="Delivering complex commerce solutions"
        alt="BackgrounImgLiberty"
      />
      <ClientCard
        img={Image12}
        title="ARLA"
        text="Swipe to find your next holiday destination"
        alt="BackgrounImgArla"
      />
    </div>
  );
}

export default ClientCardComposition1;
