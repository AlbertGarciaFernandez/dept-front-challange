import React from "react";
import "./Note.scss";
import ReadMore from "../ReadMore/ReadMore";

function Note(props) {
  return (
    <section className="noteSection">
      <div className="noteWrapper">
        <p className="headerNote">{props.header}</p>
        <p className="textNote">{props.text}</p>
        <ReadMore />
      </div>
    </section>
  );
}

export default Note;
