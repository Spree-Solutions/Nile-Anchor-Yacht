import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/Weddings";
import { DataArabic } from "../../Data/Arabic/HomePage/Weddings";

import { colors } from "../../Styles/Colors";

// import { isMobileOnly } from "react-device-detect";

import Wedding_Rings from "../../Images/Wedding_Rings.png";
import Wedding_Setup from "../../Images/Wedding_Setup.png";
import Wedding_Background from "../../Images/Wedding_Background.png";

export default function Weddings(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <table>
        <tbody>
          <tr>
            <td className={props.language === "EN" ? "ENcol1" : "ARcol1"}>
              <div className="TitleBold">{Data.Title} </div>
              <div className="body">{Data.body} </div>
              <div className="bodyBold">{Data.ReadMore}</div>
            </td>
            <td className={props.language === "EN" ? "ENcol2" : "ARcol2"}>
              <img
                src={Wedding_Rings}
                alt="Wedding"
                className="Wedding_Rings"
              />
            </td>
            <td>
              <img
                src={Wedding_Setup}
                alt="Wedding"
                className="Wedding_Setup"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 3.96vw 5.6vw 3.6vw 5.63vw;
  color: ${colors.Black};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Wedding_Background});

  tr,
  td {
    vertical-align: top;
    border: none;
  }
  .TitleBold {
    font-size: 2.8vw;
    font-family: "Askan Bold" !important;
    color: ${colors.Pink};
  }
  .body {
    font-family: "Lato Regular" !important;
    font-size: 0.97vw;
    line-height: 1.4vw;
    padding: 1.88vw 0vw 1.88vw 0vw;
  }
  .bodyBold {
    font-family: "Lato Bold" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
  }

  .ENcol1 {
    width: 52.5vw;
    padding-right: 23.9vw;
  }
  .ARcol1 {
    width: 52.5vw;
    padding-left: 23.9vw;
  }
  .ENcol2 {
    padding-right: 1.4vw;
  }
  .ARcol2 {
    padding-left: 1.4vw;
  }
  .Wedding_Rings {
    width: 13.68vw;
    height: 14.7vw;
  }
  .Wedding_Setup {
    width: 21.25vw;
    height: 14.7vw;
  }
`;
