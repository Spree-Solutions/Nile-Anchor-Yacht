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
  color: ${colors.Black};
  padding: 3.61vw 28.3vw 4.72vw 28.3vw;
  background-color: ${colors.MainBeige};
  .ARRight {
    text-align: right;
  }
  .ENLeft {
    text-align: left;
  }
  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 2vw;
    text-align: center;
    padding: 0vw 0vw 4vw 0vw;
  }
  .Body {
    font-family: "Lato Regular" !important;
    font-size: 1vw;
    line-height: 1.3vw;
    padding: 0vw 0vw 1.4vw 0vw;
  }
  .Subtitle {
    font-family: "Lato Bold" !important;
    font-size: 1vw;
    line-height: 1.3vw;
  }
`;
