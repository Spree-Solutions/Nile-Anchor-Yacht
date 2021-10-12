import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
              <div className="bodyBold">
                <Link to="./wedding">{Data.ReadMore}</Link>
              </div>
            </td>
            <tr className="images-row">
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
  @media (max-width: 768px) {
    padding: 9.6vw 8vw 12vw 8vw;
  }

  table {
    @media (max-width: 768px) {
      width: 84vw;
    }
  }
  tr,
  td {
    vertical-align: top;
    border: none;
  }
  tr {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      &.images-row {
        /* display: flex; */
        margin-top: 12.5vw;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
  .TitleBold {
    font-size: 2.8vw;
    font-family: "Askan Bold" !important;
    color: ${colors.Pink};
    @media (max-width: 768px) {
      font-size: 5.9vw;
    }
  }
  .body {
    font-family: "Lato Regular" !important;
    font-size: 0.97vw;
    line-height: 1.4vw;
    padding: 1.88vw 0vw 1.88vw 0vw;
    @media (max-width: 768px) {
      font-size: 3.2vw;
      line-height: normal;
      margin-top: 4.5vw;
      margin-bottom: 4.3vw;
    }
  }
  .bodyBold {
    font-family: "Lato Bold" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    @media (max-width: 768px) {
      font-size: 3.2vw;
      line-height: normal;
    }
  }

  .ENcol1 {
    width: 52.5vw;
    padding-right: 23.9vw;
    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }
  }
  .ARcol1 {
    width: 52.5vw;
    padding-left: 23.9vw;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  .ENcol2 {
    padding-right: 1.4vw;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  .ARcol2 {
    padding-left: 1.4vw;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  .Wedding_Rings {
    width: 13.68vw;
    height: 14.7vw;
    @media (max-width: 768px) {
      width: 33.9vw;
      height: 31.75vw;
    }
  }
  .Wedding_Setup {
    width: 21.25vw;
    height: 14.7vw;
    @media (max-width: 768px) {
      width: 44.8vw;
      height: 31.75vw;
    }
  }
`;
