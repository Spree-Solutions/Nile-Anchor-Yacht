import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/WhoAreWe";
import { DataArabic } from "../Data/Arabic/WhoAreWe";

import { colors } from "../Styles/Colors";
import Blacked_Area_Welcome from "../Images/Blacked_Area_Welcome.jpeg";
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
              <tr>
                <td
                  className={
                    props.language === "EN"
                      ? "SubTitle LeftTextAlign"
                      : "SubTitle RightTextAlign"
                  }
                >
                  {Data.SubTitle}
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
  padding: 0vw 5.6vw 0vw 5.1vw;
  font-family: "Askan Regular" !important;
  color: ${colors.White};
  background-image: url(${Blacked_Area_Welcome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .SubTitle {
    font-family: "Askan Light" !important;
    font-size: 4.16vw;
    width: 15.2vw;
    padding: 0vw 0vw 1.25vw 0vw;
    line-height: 3.8vw;
  }

  .Body {
    font-family: "Askan Light" !important;
    font-size: 1.15vw;
    width: 43.7vw;
    padding: 0vw 8.9vw 0vw 7.3vw;
    line-height: 1.39vw;
  }

  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
  }

  .ImageLogo {
    width: 13.75vw;
    height: 14vw;
    padding: 1.7vw 0vw 2.3vw 0vw;
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
