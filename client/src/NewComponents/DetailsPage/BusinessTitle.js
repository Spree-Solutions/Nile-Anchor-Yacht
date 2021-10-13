import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/BusinessTitle";
import { DataArabic } from "../../Data/Arabic/DetailsPage/BusinessTitle";

import { colors } from "../../Styles/Colors";
import BusinessTitleImg from "../../Images/BusinessTitle.jpeg";

export default function BusinessTitle(props) {
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
        <div className="Title">{Data.Title}</div>
        <div className="Body">{Data.body}</div>
      </div>
      <div className="ImgDiv">
        <img src={BusinessTitleImg} alt="" className="ImageTitle" />
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  .TitleSection {
    color: ${colors.Black};
    background-color: ${colors.MainBeige};
  }
  .ARRight {
    text-align: right;
    padding: 12vw 5.9vw 14vw 50vw;
  }
  .ENLeft {
    text-align: left;
    padding: 12vw 50vw 14vw 5.9vw;
    @media (max-width: 768px) {
      padding: 80vw 33.87vw 44vw 8vw;
    }
  }
  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 4.2vw;
    @media (max-width: 768px) {
      font-size: 9.3vw;
      width: 41vw;
      margin-bottom: 4.3vw;
    }
  }
  .Body {
    font-family: "Askan Regular" !important;
    font-size: 1.3vw;
    padding: 1.3vw 0vw 0vw 0vw;
    @media (max-width: 768px) {
      font-size: 3.7vw;
    }
  }
  .ImageTitle {
    width: 100vw;
    height: 21.6vw;
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
