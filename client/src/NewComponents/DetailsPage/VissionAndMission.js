import React from "react";
import styled from "styled-components";

import { DataArabic } from "../../Data/Arabic/DetailsPage/VissionAndMission";
import { DataEnglish } from "../../Data/English/DetailsPage/VissionAndMission";

import { colors } from "../../Styles/Colors";

export default function VissionAndMission(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className={props.language === "EN" ? "ENLeft" : "ARRight"}>
        <div className="Title">{Data.Title}</div>
        <div className="Body">
          <span className="Subtitle">{Data.subtitle1}</span>
          <span>{Data.body1}</span>
        </div>
        <div className="Body">
          <span className="Subtitle">{Data.subtitle2}</span>
          <span>{Data.body2}</span>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: ${colors.DarkGrey};
  /* background-color: ${colors.MainBeige}; */
  padding: 3.61vw 0vw 4.72vw 0vw;
  /* padding: 3.61vw 8.3vw 4.72vw 8.3vw; */
  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 36.3vw;
  }
  .ARRight {
    text-align: right;
  }
  .ENLeft {
    text-align: left;
    div {
      &:first-child {
        background: ${colors.MainBeige};
        padding-right: 1vw;
        padding-bottom: 0;
        margin-bottom: 4vw;
        width: fit-content;
      }
      padding-left: 8.3vw;
      padding-right: 8.3vw;
    }
  }
  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 2.5vw;
    /* text-align: left; */
    padding: 0vw 0vw 4vw 0vw;
    @media (max-width: 768px) {
      font-size: 5.9vw;
      padding-top: 16.5vw;
      text-align: center;
    }
  }
  .Body {
    font-family: "Lato Regular" !important;
    font-size: 1.9vw;
    line-height: 2.5vw;
    padding: 0vw 0vw 1.4vw 0vw;
    color: ${colors.DarkGrey2};
    @media (max-width: 768px) {
      width: 85vw;
      font-size: 3.7vw;
      line-height: 5.3vw;
      margin: auto;
      &:not(:first-child) {
        margin-top: 8vw;
      }
    }
  }
  .Subtitle {
    font-family: "Lato Bold" !important;
    font-size: 1.6vw;
    /* line-height: 1.3vw; */
    @media (max-width: 768px) {
      font-size: 3.7vw;
      line-height: 5.3vw;
    }
  }
`;
