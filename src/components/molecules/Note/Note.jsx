import React, { useEffect } from "react";

//styles
import "./Note.scss";

//molecules
import ReadMore from "../ReadMore/ReadMore";

//animations
import Aos from "aos";
import "aos/dist/aos.css";

function Note(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="noteSection">
      <div data-aos="fade-left" className="noteWrapper">
        <p className="headerNote">{props.header}</p>
        <p className="textNote">{props.text}</p>
        <ReadMore />
      </div>
    </section>
  );
}

export default Note;
