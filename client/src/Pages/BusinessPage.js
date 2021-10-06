import React from "react";

import BusinessTitle from "./../NewComponents/DetailsPage/BusinessTitle";
import BusinessInfo from "./../NewComponents/DetailsPage/BusinessInfo";
import BusinessInquiries from "./../NewComponents/DetailsPage/BusinessInquiries";
import Contact from "./../Components/Contact";

export default function BusinessPage(props) {
  return (
    <div>
      <BusinessTitle language={props.language} />
      <BusinessInfo language={props.language} />
      <BusinessInquiries language={props.language} />
      <Contact language={props.language} />
    </div>
  );
}
