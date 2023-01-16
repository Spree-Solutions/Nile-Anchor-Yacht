import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/AboutTitle";
import { DataArabic } from "../../Data/Arabic/DetailsPage/AboutTitle";

import { colors } from "../../Styles/Colors";
import AboutTitleImg from "../../Images/bee.jpg";

export default function AboutTitle(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div
        className={
          props.language === "EN"
            ? "TitleSection ENLeft"
            : "TitleSection ARRight"
        }
      >
        <div className="Title">
          <p>{Data.Title}</p>
        </div>
        <div className="Body">{Data.body}</div>
      </div>

    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  /* height: calc(100vh - 5vw); */
  .TitleSection {
    color: ${colors.Navy};
    /* background-color: ${colors.MainBeige}; */
  }
  .ARRight {
    text-align: right;
    padding: 12vw 5.9vw 14vw 50vw;
  }
  .ENLeft {
    text-align: left;
    /* padding: 12vw 5.9vw 14vw 5.9vw; */
    min-height: 25vw;
    height: calc(50vh - 5vw);
    @media (max-width: 768px) {
      height: auto;
      min-height: calc(50vh - 20.8vw);
      height: calc(50vh - 20.8vw);

      /* padding: 80vw 33.87vw 44vw 8vw; */
    }
  }
  .Title {
    // font-family: "Askan DemiBold" !important;
    font-size: 4.2vw;
    /* padding-top: 12vw; */
    padding: 6vw 5.9vw 6vw 0vw;
    p {
      margin: 0;
      padding: 0;
      background: ${colors.MainBeige};
      width: fit-content;
      padding-left: 12vw;
      padding-right: 1vw;
    }

    @media (max-width: 768px) {
      margin-bottom: 4.3vw;
      font-size: 9.3vw;
    }
  }
  .Body {
    // font-family: "Lato Regular" !important;
    width: fit-content;
    margin: auto;
    font-size: 2.9vw;
    color: ${colors.DarkGrey2};
    @media (max-width: 768px) {
      font-size: 3.7vw;
      padding-left: 3vw;
      padding-right: 3vw;
    }
  }

  .ImageTitle {
    width: 100%;
    height: 21.6vw;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 43.2vw;
    }
  }

  .ImgDiv {
    height: 21.6vw;
    @media (max-width: 768px) {
      height: 43.2vw;
    }
  }
`;
