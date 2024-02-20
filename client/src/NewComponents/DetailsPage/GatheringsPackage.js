import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/GatheringsPackage";
import { DataArabic } from "../../Data/Arabic/DetailsPage/GatheringsPackage";

import { colors } from "../../Styles/Colors";


export default function GatheringsPackage(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className="Title">{Data.title}</div>
      <div className="Body">
        {Data.body.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      {/* <div className="End">{Data.end}</div> */}
      {/* <Label /> */}
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  position: relative;
  color: ${colors.DarkGrey};
  padding: 3.47vw 5.6vw 2.3vw 5.6vw;
  background-color: ${colors.White};
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 13.33vw;
    padding-bottom: 21.6vw;
    padding-left: 7.7vw;
    padding-right: 7.7vw;
  }

  .Title {
    // font-family: "Lato Regular" !important;
    font-size: 2.3vw;
    padding: 0.4vw;
    /* padding: 0vw 0vw 3vw 0vw; */
    width: fit-content;
    margin: auto;
    margin-bottom: 2vw;
    border: 0.25vw solid ${colors.DarkGrey};
    @media (max-width: 768px) {
      padding: 3vw;
      font-size: 5.9vw;
      border: 0.5vw solid black;
      margin-bottom: 5vw;
    }
  }
  .Body {
    // font-family: "Lato Regular" !important;
    font-size: 1.9vw;
    line-height: 2.5vw;
    @media (max-width: 768px) {
      padding: 0;
      width: 84.8vw;
      margin: auto;
      font-size: 4.3vw;
      line-height: 6.4vw;
    }
  }
  .End {
    font-weight : Bold;
    // font-family: "Lato Bold" !important;
    font-size: 1.5vw;
    line-height: 1.7vw;
    padding: 3.125vw 0vw 0vw 30vw;
    text-align: right;
    @media (max-width: 768px) {
      font-size: 3vw;
      margin-top: 6vw;
    }
  }
`;
