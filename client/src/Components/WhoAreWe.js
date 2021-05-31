import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/WhoAreWe";
import { DataArabic } from "../Data/Arabic/WhoAreWe";

import { colors } from "../Styles/Colors";
import Blacked_Area_Welcome from "../Images/Blacked_Area_Welcome.png";
import White_Logo from "../Images/White_Logo.png";

export default function WhoAreWe(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <StyledDiv>
      <table>
        <tbody>
          <tr>
            <td className="SubTitle">{Data.SubTitle}</td>
            <td className="Body">{Data.Body}</td>
            <td>
              <img src={White_Logo} alt="logo" className="ImageLogo" />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
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
    text-align: left;
    width: 15.2vw;
    padding: 0vw 0vw 1.25vw 0vw;
    line-height: 3.8vw;
  }

  .Body {
    font-family: "Askan Light" !important;
    font-size: 1.15vw;
    width: 43.7vw;
    padding: 0vw 8.9vw 0vw 7.3vw;
    text-align: left;
    line-height: 1.39vw;
  }

  .ImageLogo {
    width: 13.75vw;
    height: 14vw;
    padding: 1.7vw 0vw 2.3vw 0vw;
  }
`;
