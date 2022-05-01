import React from "react";
import styled from "styled-components";

import { colors } from "../Styles/Colors";

// import { isMobileOnly } from "react-device-detect";

import Wedding_Rings from "../Images/Wedding_Rings.jpeg";
import Wedding_Setup from "../Images/Wedding_Setup.jpeg";

export default function Weddings(props) {
  return (
    <StyledDiv>
      <table>
        <tbody>
          <tr>
            <td className={props.language === "EN" ? "ENcol1" : "ARcol1"}>
              <div className="TitleBold">{props.SubTitle} </div>
              <div className="body">{props.Paragraph} </div>
              <div className="bodyBold">{props.Action}</div>
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
  padding: 5.6vw 5.9vw 3.5vw 5.2vw;
  background-color: ${colors.Merino2};
  color: ${colors.Black};

  tr,
  td {
    vertical-align: top;
    border: none;
  }
  .TitleBold {
    font-size: 3.75vw;
    line-height: 3.75vw;
    font-family: "Askan DemiBold" !important;
    padding-top: 1.1vw;
  }
  .body {
    font-family: "Askan Light" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    padding: 1.6vw 0vw 1.6vw 0vw;
  }
  .bodyBold {
    font-family: "Askan DemiBold" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
  }

  .ENcol1 {
    width: 40vw;
    padding-right: 15vw;
  }
  .ARcol1 {
    width: 40vw;
    padding-left: 15vw;
  }
  .ENcol2 {
    padding-right: 1.875vw;
  }
  .ARcol2 {
    padding-left: 1.875vw;
  }
  .Wedding_Rings {
    width: 13.2vw;
    height: 22.68vw;
  }
  .Wedding_Setup {
    width: 33.6vw;
    height: 22.68vw;
  }
`;
