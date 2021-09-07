import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/WhoAreWe";
import { DataArabic } from "../Data/Arabic/WhoAreWe";

import { colors } from "../Styles/Colors";
import Blacked_Area_Welcome from "../Images/Blacked_Area_Welcome.png";
import White_Logo from "../Images/White_Logo.png";

import { isMobileOnly } from "react-device-detect";

export default function WhoAreWe(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <div>
      {isMobileOnly ? (
        <StyledMobileDiv>
          <div className="SubTitleMobile">{Data.SubTitle}</div>
          <div className="BodyMobile">{Data.Body}</div>
        </StyledMobileDiv>
      ) : (
        <StyledDiv>
          <table>
            <tbody>
              <tr className="tableContent">
                <td
                  className={
                    props.language === "EN"
                      ? "SubTitle LeftTextAlign"
                      : "SubTitle RightTextAlign"
                  }
                >
                  <div> {Data.SubTitle}</div>
                  <div className="SubTitleBold"> {Data.SubTitleBold} </div>
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
      )}
    </div>
  );
}

const StyledDiv = styled.div`
  padding: 0vw 7.3vw 2.3vw 5.9vw;
  font-family: "Askan Regular" !important;
  color: ${colors.White};
  background-image: url(${Blacked_Area_Welcome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .tableContent {
    vertical-align: bottom;
  }

  .SubTitle {
    font-family: "Askan Light" !important;
    font-size: 3.32vw;
    width: 16vw;
    padding: 0vw 0vw 0vw 0vw;
    line-height: 3.5vw;
  }
  .SubTitleBold {
    font-family: "Askan Bold" !important;
  }

  .Body {
    font-family: "Askan Light" !important;
    font-size: 1vw;
    width: 53vw;
    padding: 0vw 3.5vw 0vw 7vw;
    line-height: 1.7vw;
  }

  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
  }

  .ImageLogo {
    width: 9.86vw;
    height: 10.4vw;
    padding: 1.7vw 0vw 0vw 0vw;
  }
`;

const StyledMobileDiv = styled.div`
  padding: 6.4vw 14.7vw 8vw 8vw;
  font-family: "Askan Regular" !important;
  color: ${colors.White};
  background-color: ${colors.DarkBlack};
  text-align: left;
  font-family: "Askan Light" !important;

  .SubTitleMobile {
    font-size: 6.7vw;
    line-height: 7.47vw;
    padding: 0vw 0vw 4.53vw 0vw;
  }

  .BodyMobile {
    font-size: 3.2vw;
    line-height: 3.47vw;
  }
`;
