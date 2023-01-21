import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/WhoAreWe";
import { DataArabic } from "../../Data/Arabic/HomePage/WhoAreWe";

import { colors } from "../../Styles/Colors";
import Blacked_Area_Welcome from "../../Images/Blacked_Area_Welcome.jpeg";
import White_Logo from "../../Images/White_Logo.png";

export default function WhoAreWe(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <div>
      <StyledDiv>
        <table>
          <tbody>
            <tr className="tableContent">
              <td
                className={
                  props.language === "EN"
                    ? "SubTitle LeftTextAlign title"
                    : "SubTitle RightTextAlign title"
                }
              >
                <div className="SubTitleBold"> {Data.SubTitleBold}</div>
                <div className="SubTitleNormal"> {Data.SubTitle} </div>
              </td>
              <td
                className={
                  props.language === "EN"
                    ? "Body LeftTextAlign"
                    : "Body RightTextAlign"
                }
              >
                {Data.Body}
              </td>
              <td>
                <img src={White_Logo} alt="logo" className="ImageLogo" />
              </td>
            </tr>
          </tbody>
        </table>
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  padding: 2.3vw 7.3vw 2.3vw 5.9vw;
  // font-family: "Askan Regular" !important;
  color: ${colors.White};
  background-image: url(${Blacked_Area_Welcome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    padding: 0vw 13vw 0vw 9.6vw;
  }

  .tableContent {
    /* vertical-align: bottom; */
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .title {
        display: flex;
        margin-bottom: 21.6vw;
        /* margin: auto; */
      }
    }
  }

  .SubTitle {
    // font-family: "Askan Light" !important;
    font-size: 3.32vw;
    width: 16vw;
    padding: 0vw 0vw 0vw 0vw;
    line-height: 3.5vw;
    text-align: left;
    @media (max-width: 768px) {
      width: fit-content;
      font-size: 6.67vw;
      margin-top: 11.5vw;
    }
  }
  .SubTitleBold{
    font-weight : 700;
  }
  .SubTitleNormal {

    @media (max-width: 768px) {
      margin-left: 1vw;
    }
  }

  .Body {
    // font-family: "Askan Light" !important;
    font-size: 1.2vw;
    text-align: center;
    width: 53vw;
    padding: 0vw 3.5vw 0vw 7vw;
    line-height: 1.7vw;
    @media (max-width: 768px) {
      font-size: 3.7vw;
      line-height: 6vw;
      width: 77vw;
      padding: 0;
      margin-bottom: 27.2vw;
    }
  }

  .LeftTextAlign {
    /* text-align: left; */
  }
  .RightTextAlign {
    text-align: right;
  }

  .ImageLogo {
    width: 11.86vw;
    /* height: 10.4vw; */
    padding: 0vw 0vw 0vw 0vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
