import React from "react";
import "./CardClientsText.scss";

import Note from "../Note/Note";

function CardClientsText() {
  return (
    <section className="cardClientTextSection">
      <div className="cardClientWrapper">
        <Note
          header="MICROSOFT"
          text="Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels"
        />
        <Note
          header="O’NEILL"
          text="Integrating existing content into O’Neills’s new e-commerce platform"
        />
        <Note
          className="note3"
          header="MICROSOFT"
          text="Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels"
        />
      </div>
    </section>
  );
}

export default CardClientsText;
