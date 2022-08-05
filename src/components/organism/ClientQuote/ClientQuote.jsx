import React, { useEffect } from "react";

//styles
import "./ClientQuote.scss";

//animations
import Aos from "aos";
import "aos/dist/aos.css";

function ClientQuote() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="clientQuoteWrapper">
      <p data-aos="fade-left" className="clientQuoteText">
        “Dept helped us tell our story through a bold new identity and a robust
        online experience. To the tone of 60% growth in online bookings in just
        one month”
      </p>
      <p data-aos="fade-right" className="clientQuoteAutor">
        MATTIJS TEN DRINK - CEO, TRANSAVIA
      </p>
    </div>
  );
}

export default ClientQuote;
