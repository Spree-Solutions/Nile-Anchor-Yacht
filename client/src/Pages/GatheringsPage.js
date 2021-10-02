import React from "react";

import GatheringsTitle from "./../NewComponents/DetailsPage/GatheringsTitle";
import GatheringsInfo from "./../NewComponents/DetailsPage/GatheringsInfo";
import GatheringsPackage from "./../NewComponents/DetailsPage/GatheringsPackage";
import Contact from "./../Components/Contact";

export default function GatheringsPage(props) {
  return (
    <div>
      {" "}
      <GatheringsTitle language={props.language} />
      <GatheringsInfo language={props.language} />
      <GatheringsPackage language={props.language} />
      <Contact language={props.language} />
    </div>
  );
}
