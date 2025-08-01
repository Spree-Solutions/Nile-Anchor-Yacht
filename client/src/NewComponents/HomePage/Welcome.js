import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/WhoAreWe";
import { DataArabic } from "../../Data/Arabic/HomePage/WhoAreWe";

import { colors } from "../../Styles/Colors";
import Background_Welcome from "../../Images/Background_Welcome_Blue.jpg";
import WhoAreWe from "./WhoAreWe";

export default function Welcome(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <div>
      <StyledDiv>
        <div
          className={
            props.language === "EN"
              ? "EnglishComponentPadding"
              : "ArabicComponentPadding"
          }
        >
          <div>
            {" "}
            <div
              className={
                props.language === "EN"
                  ? "Title LeftTextAlign"
                  : "Title RightTextAlign"
              }
            >
              {Data.Title}
            </div>
            <div
              className={
                props.language === "EN"
                  ? "TitleBold LeftTextAlign"
                  : "TitleBold RightTextAlign"
              }
            >
              {Data.TitleBold}
            </div>{" "}
          </div>
        </div>
      </StyledDiv>
      <WhoAreWe language={props.language} />
    </div>
  );
}

const StyledDiv = styled.div`
  color: ${colors.White};
  background-image: url(${Background_Welcome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 @media (max-width: 768px) {
  background-position: center;
  background-size: 100vw auto; 
  height: calc((210 / 375) * 100vw); 
}
  .EnglishComponentPadding {
    padding: 0vw 0vw 0vw 5.1vw;
  }
  .ArabicComponentPadding {
    padding: 0vw 5.1vw 0vw 0vw;
  }

  .Title {
    // font-family: "Askan Light" !important;
    padding-top: 16vw;
    font-size: 3.75vw;
    line-height: 4vw;
    @media (max-width: 768px) {
      // font-family: "Askan Light" !important;
      font-weight : 400;
      text-align: left;
      font-size: calc((20 / 375) * 100vw); 
      line-height:  calc((24 / 375) * 100vw); 
      padding-top:  calc((70 / 375) * 100vw); 
    }
  }
  .TitleBold {
    font-weight : 700;
    // font-family: "Askan Bold" !important;
    padding-bottom: 11.9vw;
    font-size: 6.67vw;
    line-height: 6.9vw;
    @media (max-width: 768px) {
      font-weight : Bold;
      // font-family: "Askan Bold" !important;
      font-size: calc((30 / 375) * 100vw); 
      line-height: calc((36 / 375) * 100vw); 
      padding-bottom: 99vw;
    }
  }

  /* .TitleMobile {
    // font-family: "Askan Light" !important;
    text-align: left;
    font-size: 10.7vw;
    line-height: 12vw;
    padding-top: 57vw;
  } */
  .TitleBoldMobile {
    font-weight : Bold;
    // font-family: "Askan Bold" !important;
    font-size: 18.7vw;
    line-height: 21vw;
    padding-bottom: 99vw;
  }

  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
  }
  .CenterTextAlign {
    text-align: center;
  }
`;
