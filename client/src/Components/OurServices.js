import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/OurServices";
import { DataArabic } from "../Data/Arabic/OurServices";


import BusinessEvents from "./BusinessEvents";
import Weddings from "./Weddings";
import Gatherings from "./Gatherings";

export default function OurServices(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <div>
      <StyledDiv>
        <div
          className={
            props.language === "EN"
              ? "LogoCell LeftTextAlign"
              : "LogoCell RightTextAlign"
          }
        >
          <Weddings
            SubTitle={Data.SubTitles[0]}
            Paragraph={Data.Paragraphs[0]}
            Action={Data.Action[0]}
            language={props.language}
          />
          <BusinessEvents
            SubTitle={Data.SubTitles[1]}
            Paragraph={Data.Paragraphs[1]}
            Action={Data.Action[1]}
            language={props.language}
          />
          <Gatherings
            SubTitle={Data.SubTitles[2]}
            Paragraph={Data.Paragraphs[2]}
            Action={Data.Action[2]}
            language={props.language}
          />
        </div>
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
  }
`;
