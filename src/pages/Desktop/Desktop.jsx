import React from "react";
import "./Desktop.scss";
import Navbar from "../../components/organism/NavBar/Navbar";
import HeroSection from "../../components/organism/HeroSection/HeroSection";
import ClientQuote from "../../components/organism/ClientQuote/ClientQuote";
import QuestionForm from "../../components/organism/QuestionForm/QuestionForm";
import Footer from "../../components/organism/Footer/Footer";
import DotsModal from "../../components/molecules/DotsModal/DotsModal";
import ClientNoteLeft from "../../components/organism/ClientNoteLeft/ClientNoteLeft";
import ClientNoteRight from "../../components/organism/ClientNoteRight/ClientNoteRight";

import ClientCardComposition1 from "../../components/organism/ClientCardComposition1/ClientCardComposition1";
import ClientCardComposition2 from "../../components/organism/ClientCardComposition2/ClientCardComposition2";
import ClientCardComposition3 from "../../components/organism/ClientCardComposition3/ClientCardComposition3";
import ClientCardComposition4 from "../../components/organism/ClientCardComposition4/ClientCardComposition4";
import ClientCardComposition5 from "../../components/organism/ClientCardComposition5/ClientCardComposition5";
import ClientCardComposition6 from "../../components/organism/ClientCardComposition6/ClientCardComposition6";

import Filters from "../../components/molecules/Filters/Filters";
import ClientList from "../../components/organism/ClientList/ClientList";

function Desktop() {
  return (
    <div className="DesktopContainer">
      <Navbar />
      <HeroSection />
      <Filters />

      <ClientCardComposition1 />
      <ClientCardComposition2 />
      <ClientNoteLeft />
      <ClientCardComposition3 />
      <ClientNoteRight />
      <ClientCardComposition4 />
      <ClientCardComposition5 />
      <ClientQuote />
      <ClientCardComposition6 />
      <ClientList />
      <QuestionForm />
      <Footer />
    </div>
  );
}

export default Desktop;
