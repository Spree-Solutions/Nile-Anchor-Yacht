import React from "react";
import styled from "styled-components";
import bluegradient from "../../Images/bluegradient.png";

import { DataArabic } from "../../Data/Arabic/DetailsPage/AboutInfo";
import { DataEnglish } from "../../Data/English/DetailsPage/AboutInfo";

import { colors } from "../../Styles/Colors";
import AboutTitle from "../../Images/AboutTitle.jpeg";

export default function AboutInfo(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className="Body">{Data.body}</div>
      <iframe width="1000" height="530"
        src="https://www.youtube.com/embed/IZOxeMSrkPE?rel=0&mute=1">
      </iframe>
      <div className="Label">{Data.label}</div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 7.2vw 8vw 6.04vw 8vw;

  /* text-align: left; */
  /* background: linear-gradient(
    180deg,
    rgba(0, 136, 171, 0.9) 0%,
    rgba(0, 51, 66, 0.9) 100%
  ); */
  /* background-image: url(${bluegradient}); */
  background-size: cover;
  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Body {
    color: ${colors.DarkGrey2};
    font-family: "Askan Regular" !important;
    font-size: 1.6vw;
    line-height: 2.2vw;
    /* text-align: justify; */
    /* text-align-last: center; */
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
    width: 60vw;
    height: 32vw;
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
    font-size: 2vw;
    margin-top: 1vw;
    text-align: center;
    text-decoration: underline;
    @media (max-width: 768px) {
      font-family: "Lato Regular" !important;
      font-size: 3.7vw;
      align-self: flex-end;
      margin: auto;
      margin-top: 4.5vw;
      padding-bottom: 5.3vw;
      font-weight: 400;
    }
  }
`;
