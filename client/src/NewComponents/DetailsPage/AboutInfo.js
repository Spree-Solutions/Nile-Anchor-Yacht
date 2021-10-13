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
  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Body {
    font-family: "Askan Regular" !important;
    font-size: 1vw;
    line-height: 1.3vw;
    padding: 0vw 0vw 2.6vw 0vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      font-family: "Lato Regular" !important;
      font-size: 3.7vw;
      line-height: 5.3vw;
      width: 85.1vw;
      padding-top: 15.2vw;
      margin: auto;
      margin-bottom: 9.9vw;
      font-weight: 400;
    }
  }
  .ImageAboutInfo {
    width: 43.75vw;
    height: 24.65vw;
    padding: 0vw 0vw 1vw 0vw;
    @media (max-width: 768px) {
      width: 85.1vw;
      margin: auto;
      padding: 0;
      height: 53.33vw;
      /* text-align: center; */
    }
  }
  .Label {
    font-family: "Askan Regular" !important;
    font-size: 1vw;
    text-align: right;
    @media (max-width: 768px) {
      font-family: "Lato Regular" !important;
      font-size: 3.7vw;
      align-self: flex-end;
      margin-right: 7.5vw;
      margin-top: 4.5vw;
      padding-bottom: 5.3vw;
      font-weight: 400;
    }
  }
`;
