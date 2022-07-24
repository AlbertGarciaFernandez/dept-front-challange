import React from "react";
import "./ClientCard.scss";
import ReadMore from "../ReadMore/ReadMore";

function ClientCard(props) {
  return (
    <div className="clientCardSection">
      <div className="clientCardWrapper">
        <img
          src={props.img}
          className="clientCardImage"
          alt="clientCardBackground"
        />
        <div className="clientCardBottomContainer">
          <p className="clientCardTitle">{props.title}</p>
          <p className="clientCardTtext">{props.text}</p>
          <ReadMore />
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
