import React from "react";

//styles
import "./ClientNoteLeft.scss";

//molecules
import CardClientsText from "../../molecules/CardClientsText/CardClientsText";
import ClientNoteCard from "../../molecules/ClientNoteCard/ClientNoteCard";

//images
import ImageClientNote1 from "../../../assets/webp/ClientNoteImg.webp";

function ClientNote() {
  return (
    <div className="clientNoteWrapper">
      <ClientNoteCard
        img={ImageClientNote1}
        title="FLORENSIS"
        text="Rethinking the entire online ecosystem"
      />

      <CardClientsText />
    </div>
  );
}

export default ClientNote;
