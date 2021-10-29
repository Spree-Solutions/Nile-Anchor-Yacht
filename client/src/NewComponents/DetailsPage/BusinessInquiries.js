import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/BusinessInquiries";
import { DataArabic } from "../../Data/Arabic/DetailsPage/BusinessInquiries";

import { colors } from "../../Styles/Colors";

export default function BusinessInquiries(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className={props.language === "EN" ? "ENLeft" : "ARRight"}>
        <div className="Body Body1">{Data.body1}</div>
        <div className="Body">
          <div>{Data.body2}</div>
          <div>{Data.body3}</div>
          <div>{Data.body4}</div>
        </div>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  height: 25vw;
  @media (max-width: 768px) {
    height: 75vw;
  }

  color: ${colors.Black};
  /* background-color: ${colors.MainBeige}; */
  /* background-color: ${colors.White}; */
  .ARRight {
    text-align: right;
    padding: 2vw 5.6vw 9vw 51.4vw;
  }
  .ENLeft {
    text-align: left;
    padding: 2vw 0vw 9vw 0vw;
    @media (max-width: 768px) {
      padding: 0;
      width: 84.8vw;
      margin: auto;
    }
  }
  .Body {
    font-family: "Lato Regular" !important;
    font-size: 1.7vw;
    line-height: 2.5vw;
    padding: 3.5vw 0vw 0vw 0vw;
    color: ${colors.DarkGrey};
    &.Body1 {
      padding-left: 13vw;
      padding-right: 13vw;
    }
    div {
      width: fit-content;
      padding-left: 3vw;
      padding-right: 1vw;
      color: ${colors.DarkGrey2};
      :first-child {
        background: ${colors.MainBeige};
      }
    }
    &:not(:last-child) {
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 3.7vw;
      line-height: 5.33vw;
      padding-top: 10.67vw;
      &:first-child {
        padding-top: 12vw;
      }
      &:last-child {
        padding-bottom: 13.33vw;
      }
    }
  }
`;
