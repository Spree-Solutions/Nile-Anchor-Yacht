import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/GatheringsTitle";
import { DataArabic } from "../../Data/Arabic/DetailsPage/GatheringsTitle";

import { colors } from "../../Styles/Colors";
import GatheringsTitleImg from "../../Images/GatheringsTitle.png";

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
        <div className="Title">{Data.Title}</div>
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
  }
  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 4.2vw;
  }
  .Body {
    font-family: "Askan Regular" !important;
    font-size: 1.3vw;
    padding: 1.3vw 0vw 0vw 0vw;
  }

  .ImageTitle {
    width: 100vw;
    height: 21.6vw;
  }

  .ImgDiv {
    height: 21.6vw;
  }
`;
