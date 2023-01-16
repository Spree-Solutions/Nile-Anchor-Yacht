import React from "react";
import styled from "styled-components";

import { colors } from "../Styles/Colors";

// import { isMobileOnly } from "react-device-detect";

import Kids_Birthday from "../Images/Kids_Birthday.jpeg";
import Party_Bags from "../Images/Party_Bags.jpeg";
import Gathering_Background from "../Images/Gathering_Background.jpeg";

export default function Gatherings(props) {
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
  padding: 3.3vw 5.4vw 3.5vw 5.4vw;
  color: ${colors.DarkGrey2};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Gathering_Background});

  tr,
  td {
    vertical-align: top;
    border: none;
  }
  .TitleBold {
    font-size: 3.75vw;
    line-height: 3.75vw;
    // font-family: "Askan DemiBold" !important;
    padding-top: 1.1vw;
  }
  .body {
    // font-family: "Askan Light" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    padding: 1.6vw 0vw 1.6vw 0.7vw;
  }
  .bodyBold {
    // font-family: "Askan DemiBold" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    padding-left: 0.7vw;
  }

  .ENcol1 {
    width: 33.5vw;
    padding-right: 8.5vw;
  }
  .ARcol1 {
    width: 33.5vw;
    padding-left: 8.5vw;
  }
  .ENcol2 {
    padding-right: 4.2vw;
  }
  .ARcol2 {
    padding-left: 4.2vw;
  }
  .Kids_Birthday {
    width: 32.9vw;
    height: 19.9vw;
  }
  .Party_Bags {
    width: 18.5vw;
    height: 19.9vw;
  }
`;
