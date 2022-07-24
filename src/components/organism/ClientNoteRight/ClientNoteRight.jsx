import React from "react";

import "./ClientNoteRight.scss";
import CardClientsText from "../../molecules/CardClientsText/CardClientsText";
import ClientNoteCard from "../../molecules/ClientNoteCard/ClientNoteCard";
import ImageClientNote1 from "../../../assets/img/ClientNoteImg.png";

function ClientNote() {
  return (
    <div className="clientNoteWrapper">
      <CardClientsText />
      <ClientNoteCard
        img={ImageClientNote1}
        title="FLORENSIS"
        text="Rethinking the entire online ecosystem"
      />
    </div>
  );
}

export default ClientNote;
