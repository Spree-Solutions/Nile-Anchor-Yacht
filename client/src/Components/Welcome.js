import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/WhoAreWe";
import { DataArabic } from "../Data/Arabic/WhoAreWe";

import { colors } from "../Styles/Colors";
import Background_Welcome from "../Images/Background_Welcome.png";
import WhoAreWe from "./WhoAreWe";
import NavBar from "./NavBar";

export default function Welcome(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <div>
      <StyledDiv>
        <NavBar
          executeScroll={props.executeScroll}
          References={props.References}
          setLanguage={props.setLanguage}
          language={props.language}
        />
        <div className="Title">{Data.Title}</div>
        <div className="TitleBold">{Data.TitleBold}</div>
      </StyledDiv>
      <WhoAreWe language={props.language} />
    </div>
  );
}

const StyledDiv = styled.div`
  padding: 0vw 0vw 0vw 5.1vw;
  color: ${colors.Merino};
  background-image: url(${Background_Welcome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .Title {
    font-family: "Askan Light" !important;
    text-align: left;
    padding-top: 18vw;
    padding-left: 0.5vw;
    font-size: 4.4vw;
    line-height: 4.4vw;
  }
  .TitleBold {
    font-family: "Askan Bold" !important;
    text-align: left;
    padding-bottom: 11.5vw;
    font-size: 7.4vw;
    line-height: 7.4vw;
  }
`;
