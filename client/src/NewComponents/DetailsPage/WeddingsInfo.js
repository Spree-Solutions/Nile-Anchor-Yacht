import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/WeddingsInfo";
import { DataArabic } from "../../Data/Arabic/DetailsPage/WeddingsInfo";

import { colors } from "../../Styles/Colors";

import WeddingsInfo_1 from "../../Images/WeddingsInfo_1.png";
import WeddingsInfo_2 from "../../Images/WeddingsInfo_2.png";
import WeddingsInfo_3 from "../../Images/WeddingsInfo_3.png";
import WeddingsInfo_Background from "../../Images/WeddingsInfo_Background.png";

export default function WeddingsInfo(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className={props.language === "EN" ? "ENLeft" : "ARRight"}>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={WeddingsInfo_1}
                  alt=""
                  className={
                    props.language === "EN"
                      ? "WeddingsInfo_1_EN"
                      : "WeddingsInfo_1_AR"
                  }
                />
              </td>
              <td>{Data.body1}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>{Data.body2}</td>
              <td>
                <img
                  src={WeddingsInfo_2}
                  alt=""
                  className={
                    props.language === "EN"
                      ? "WeddingsInfo_2_EN"
                      : "WeddingsInfo_2_AR"
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <img src={WeddingsInfo_3} alt="" className="WeddingsInfo_3" />
        </div>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 7vw 20.6vw 4.86vw 20.6vw;
  text-align: left;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${WeddingsInfo_Background});
  font-size: 1vw;
  line-height: 1.3vw;
  font-family: "Lato Regular" !important;
  color: ${colors.Black};

  td,
  tr {
    vertical-align: top;
    padding: 0vw 0vw 5.2vw 0vw;
  }
  .ARRight {
    text-align: right;
  }
  .ENLeft {
    text-align: left;
  }
  .WeddingsInfo_1_EN {
    width: 36.2vw;
    height: 18.6vw;
    padding: 0vw 1.4vw 0vw 0vw;
  }
  .WeddingsInfo_1_AR {
    width: 36.2vw;
    height: 18.6vw;
    padding: 0vw 0vw 0vw 1.4vw;
  }
  .WeddingsInfo_2_EN {
    width: 35.9vw;
    height: 19vw;
    padding: 0vw 0vw 0vw 1.6vw;
  }
  .WeddingsInfo_2_AR {
    width: 35.9vw;
    height: 19vw;
    padding: 0vw 1.6vw 0vw 0vw;
  }
  .WeddingsInfo_3 {
    width: 58.7vw;
    height: 25.32vw;
  }
`;
