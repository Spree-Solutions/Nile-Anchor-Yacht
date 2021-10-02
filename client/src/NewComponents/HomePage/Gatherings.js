import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/Gatherings";
import { DataArabic } from "../../Data/Arabic/HomePage/Gatherings";

import { colors } from "../../Styles/Colors";

import Kids_Birthday from "../../Images/Kids_Birthday.png";
import Party_Bags from "../../Images/Party_Bags.png";
import Gatherings_Background from "../../Images/Gatherings_Background.png";

export default function Gatherings(props) {
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
                src={Kids_Birthday}
                alt="Kids_Birthday"
                className="Kids_Birthday"
              />
            </td>
            <td>
              <img src={Party_Bags} alt="Party_Bags" className="Party_Bags" />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 3.47vw 5.48vw 3.75vw 5.42vw;
  color: ${colors.Black};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Gatherings_Background});

  tr,
  td {
    vertical-align: top;
    border: none;
  }
  .TitleBold {
    font-size: 2.8vw;
    font-family: "Askan Bold" !important;
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
    width: 41vw;
    padding-right: 16vw;
  }
  .ARcol1 {
    width: 41vw;
    padding-left: 16vw;
  }
  .ENcol2 {
    padding-right: 1.4vw;
  }
  .ARcol2 {
    padding-left: 1.4vw;
  }
  .Kids_Birthday {
    width: 33vw;
    height: 21vw;
  }
  .Party_Bags {
    width: 13.75vw;
    height: 21vw;
  }
`;
