import React from "react";

import AboutTitle from "./../NewComponents/DetailsPage/AboutTitle";
import AboutInfo from "./../NewComponents/DetailsPage/AboutInfo";
import VissionAndMission from "./../NewComponents/DetailsPage/VissionAndMission";

import WeddingsTitle from "./../NewComponents/DetailsPage/WeddingsTitle";
import WeddingsInfo from "./../NewComponents/DetailsPage/WeddingsInfo";
import WeddingsPackage from "./../NewComponents/DetailsPage/WeddingsPackage";

import BusinessTitle from "./../NewComponents/DetailsPage/BusinessTitle";
import BusinessInfo from "./../NewComponents/DetailsPage/BusinessInfo";
import BusinessInquiries from "./../NewComponents/DetailsPage/BusinessInquiries";

import GatheringsTitle from "./../NewComponents/DetailsPage/GatheringsTitle";
import GatheringsInfo from "./../NewComponents/DetailsPage/GatheringsInfo";
import GatheringsPackage from "./../NewComponents/DetailsPage/GatheringsPackage";
import Contact from "./../Components/Contact";

export default function AboutPage(props) {
  return (
    <div>
      <AboutTitle language={props.language} />
      <AboutInfo language={props.language} />
      <VissionAndMission language={props.language} />
      <Contact language={props.language} />
    </div>
  );
}
