import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/GatheringsTitle";
import { DataArabic } from "../../Data/Arabic/DetailsPage/GatheringsTitle";

import { colors } from "../../Styles/Colors";
import GatheringsTitleImg from "../../Images/gp.jpg";

export default function GatheringsTitle(props) {
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
      <div className="ImgDiv">
        <img src={GatheringsTitleImg} alt="" className="ImageTitle" />
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  .TitleSection {
    color: ${colors.Navy};
  }
  .ARRight {
    text-align: right;
    padding: 12vw 5.9vw 14vw 50vw;
  }
  .ENLeft {
    text-align: left;
    min-height: 25vw;
    height: calc(50vh - 5vw);
    @media (max-width: 768px) {
      height: auto;
      min-height: calc(50vh - 20.8vw);
      height: calc(50vh - 20.8vw);
    }
  }
  .Title {
    font-weight : Bold;
    // font-family: "Askan DemiBold" !important;
    font-size: 4.2vw;
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
      font-size: 9.3vw;
      width: 41vw;
      margin-bottom: 4.3vw;
    }
  }
  .Body {
    // font-family: "Lato Regular" !important;
    font-size: 1.3vw;
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
      img {
        width: 100%;
      }
    }
  }
`;
