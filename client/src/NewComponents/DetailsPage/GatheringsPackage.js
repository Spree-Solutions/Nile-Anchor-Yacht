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
      <div className="End">{Data.end}</div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  color: ${colors.Black};
  padding: 3.47vw 5.6vw 2.3vw 5.6vw;
  background-color: ${colors.MainBeige};
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 13.33vw;
    padding-bottom: 21.6vw;
    padding-left: 7.7vw;
    padding-right: 7.7vw;
  }

  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 2vw;
    padding: 0vw 0vw 3vw 0vw;
    @media (max-width: 768px) {
      font-size: 5.9vw;
    }
  }
  .Body {
    font-family: "Lato Regular" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
    @media (max-width: 768px) {
      padding: 0;
      width: 84.8vw;
      margin: auto;
      font-size: 4.3vw;
      line-height: 6.4vw;
    }
  }
  .End {
    font-family: "Lato Bold" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
    padding: 3.125vw 0vw 0vw 30vw;
    text-align: right;
    @media (max-width: 768px) {
      font-size: 3vw;
      margin-top: 6vw;
    }
  }
`;
