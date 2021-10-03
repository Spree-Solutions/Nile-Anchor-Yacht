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

  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 2vw;
    padding: 0vw 0vw 3vw 0vw;
  }
  .Body {
    font-family: "Lato Regular" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
  }
  .End {
    font-family: "Lato Bold" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
    padding: 3.125vw 0vw 0vw 30vw;
    text-align: right;
  }
`;
