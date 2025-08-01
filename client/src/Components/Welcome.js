import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/WhoAreWe";
import { DataArabic } from "../Data/Arabic/WhoAreWe";

import { colors } from "../Styles/Colors";
import Background_Welcome from "../Images/Background_Welcome.jpeg";
import WhoAreWe from "./WhoAreWe";
import NavBar from "./NavBar";

import { isMobileOnly } from "react-device-detect";

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
          <NavBar
            executeScroll={props.executeScroll}
            References={props.References}
            setLanguage={props.setLanguage}
            language={props.language}
          />
          {isMobileOnly ? (
            <div>
              <div className="TitleMobile">{Data.Title}</div>
              <div className="TitleBoldMobile">{Data.TitleBold}</div>{" "}
            </div>
          ) : (
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
          )}
        </div>
      </StyledDiv>
      <WhoAreWe language={props.language} />
    </div>
  );
}

const StyledDiv = styled.div`
  color: ${colors.Merino};
  background-image: url(${Background_Welcome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .EnglishComponentPadding {
    padding: 0vw 0vw 0vw 5.1vw;
  }
  .ArabicComponentPadding {
    padding: 0vw 5.1vw 0vw 0vw;
  }

  .Title {
    // font-family: "Askan Light" !important;
    padding-top: 18vw;
    padding-left: 0.5vw;
    font-size: 4.4vw;
    line-height: 4.4vw;
  }
  .TitleBold {
    font-weight : Bold;
    // font-family: "Askan Bold" !important;
    padding-bottom: 11.5vw;
    font-size: 7.4vw;
    line-height: 7.4vw;
  }

  .TitleMobile {
    // font-family: "Askan Light" !important;
    text-align: left;
    font-size: 10.7vw;
    line-height: 12vw;
    padding-top: 57vw;
  }
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
