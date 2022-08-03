import React from "react";
import "./ClientNoteCard.scss";
import ReadMore from "../ReadMore/ReadMore";

function ClientNoteCard(props) {
  return (
    <div className="ClientNoteCard">
      <img
        src={props.img}
        className="ClientNoteCardImage"
        alt="ClientNoteCardBackground"
      />
      <div className="ClientNoteCardBottomContainer">
        <p className="ClientNoteCardTitle">{props.title}</p>
        <p className="ClientNoteCardText">{props.text}</p>
        <div className="ReadMoreWrapperClientCard">
          <ReadMore />
        </div>
      </div>
    </div>
  );
}

export default ClientNoteCard;
