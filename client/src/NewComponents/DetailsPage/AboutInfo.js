import React from "react";
import styled from "styled-components";

import { DataArabic } from "../../Data/Arabic/DetailsPage/AboutInfo";
import { DataEnglish } from "../../Data/English/DetailsPage/AboutInfo";

import { colors } from "../../Styles/Colors";
import AboutTitle from "../../Images/AboutTitle.png";

export default function AboutInfo(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className="Body">{Data.body}</div>
      <img src={AboutTitle} alt="" className="ImageAboutInfo" />
      <div className="Label">{Data.label}</div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: ${colors.White};
  padding: 7.2vw 28.3vw 6.04vw 28.4vw;
  text-align: left;
  background: linear-gradient(
    180deg,
    rgba(0, 136, 171, 0.9) 0%,
    rgba(0, 51, 66, 0.9) 100%
  );

  .Body {
    font-family: "Askan Regular" !important;
    font-size: 1vw;
    line-height: 1.3vw;
    padding: 0vw 0vw 2.6vw 0vw;
  }
  .ImageAboutInfo {
    width: 43.75vw;
    height: 24.65vw;
    padding: 0vw 0vw 1vw 0vw;
  }
  .Label {
    font-family: "Askan Regular" !important;
    font-size: 1vw;
    text-align: right;
  }
`;
