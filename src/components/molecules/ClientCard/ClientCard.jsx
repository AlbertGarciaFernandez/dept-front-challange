import React, { useEffect } from "react";

//styles
import "./ClientCard.scss";

//molecules
import ReadMore from "../ReadMore/ReadMore";

//animations
import Aos from "aos";
import "aos/dist/aos.css";

function ClientCard(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="clientCardSection">
      <div className="clientCardWrapper">
        <img src={props.img} className="clientCardImage" alt={props.alt} />
        <div data-aos="fade-up" className="clientCardBottomContainer">
          <p className="clientCardTitle">{props.title}</p>
          <p className="clientCardTtext">{props.text}</p>
          <ReadMore />
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
