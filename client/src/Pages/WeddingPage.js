import React from "react";

import WeddingsTitle from "./../NewComponents/DetailsPage/WeddingsTitle";
import WeddingsInfo from "./../NewComponents/DetailsPage/WeddingsInfo";
import WeddingsPackage from "./../NewComponents/DetailsPage/WeddingsPackage";
import Contact from "./../Components/Contact";

export default function WeddingPage(props) {
  return (
    <div>
      <WeddingsTitle language={props.language} />
      <WeddingsInfo language={props.language} />
      <WeddingsPackage language={props.language} />
      <Contact language={props.language} />
    </div>
  );
}
