import React from "react";

import AboutTitle from "./../NewComponents/DetailsPage/AboutTitle";
import AboutInfo from "./../NewComponents/DetailsPage/AboutInfo";
import VissionAndMission from "./../NewComponents/DetailsPage/VissionAndMission";


import Contact from "./../Components/Contact";
import CeoMessage from "../NewComponents/DetailsPage/CeoMessage";

export default function AboutPage(props) {
  return (
    <div>
      <AboutTitle language={props.language} />
      <AboutInfo language={props.language} />
      <CeoMessage />
      <VissionAndMission language={props.language} />
      <Contact language={props.language} />
    </div>
  );
}
