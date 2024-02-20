import React from "react";
import styled from "styled-components";

import { colors } from "../Styles/Colors";


import Business_Table from "../Images/Business_Table.jpeg";
import Business_Meeting from "../Images/Business_Meeting.jpeg";
import Business_Background from "../Images/Business_Background.jpeg";

export default function BusinessEvents(props) {
  return (
    <StyledDiv>
      <table>
        <tbody>
          <tr>
            <td className={props.language === "EN" ? "ENcol1" : "ARcol1"}>
              <img
                src={Business_Table}
                alt="Business_Table"
                className="Business_Table"
              />
            </td>
            <td className={props.language === "EN" ? "ENcol2" : "ARcol2"}>
              <div className="TitleBold">{props.SubTitle} </div>
              <div className="body">{props.Paragraph} </div>
              <div className="bodyBold">{props.Action}</div>
            </td>
            <td>
              <img
                src={Business_Meeting}
                alt="Business_Meeting"
                className="Business_Meeting"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 4.86vw 5.8vw 4.5vw 5.625vw;
  color: ${colors.Merino2};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Business_Background});

  tr,
  td {
    vertical-align: top;
    border: none;
  }
  .TitleBold {
    font-size: 3.75vw;
    line-height: 3.75vw;
    font-weight : Bold;
    // font-family: "Askan DemiBold" !important;
    padding-top: 1.1vw;
  }
  .body {
    // font-family: "Askan Light" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    padding: 1.6vw 0vw 1.6vw 0vw;
  }
  .bodyBold {
    font-weight : Bold;
    // font-family: "Askan DemiBold" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
  }

  .ENcol1 {
    padding-right: 3.47vw;
  }
  .ARcol1 {
    padding-left: 3.47vw;
  }

  .ENcol2 {
    width: 25vw;
    padding-right: 3.47vw;
  }
  .ARcol2 {
    width: 25vw;
    padding-left: 3.47vw;
  }

  .Business_Table {
    width: 17vw;
    height: 21.6vw;
  }
  .Business_Meeting {
    width: 39.3vw;
    height: 21.6vw;
  }
`;
