import React from "react";
import styled from "styled-components";
import { colors } from "../../Styles/Colors";
import { DataEnglish } from "../../Data/English/HomePage/BusinessEvents";
import { DataArabic } from "../../Data/Arabic/HomePage/BusinessEvents";

// import { isMobileOnly } from "react-device-detect";
import Business_Coffee from "../../Images/Business_Coffee.png";
import Business_Background from "../../Images/Business_Background.png";

export default function BusinessEvents(props) {
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
            <td>
              <img
                src={Business_Coffee}
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
  padding: 3.6vw 6vw 3.75vw 5.63vw;
  color: ${colors.Black};
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
    font-size: 2.8vw;
    font-family: "Askan Bold" !important;
    color: ${colors.White};
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
    width: 52.4vw;
    padding-right: 27.4vw;
  }
  .ARcol1 {
    width: 52.4vw;
    padding-left: 27.4vw;
  }
  .Business_Meeting {
    width: 36vw;
    height: 19.5vw;
  }
`;
