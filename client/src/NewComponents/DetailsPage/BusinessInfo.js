import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/BusinessInfo";
import { DataArabic } from "../../Data/Arabic/DetailsPage/BusinessInfo";

import { colors } from "../../Styles/Colors";

import BusinessInfo_1 from "../../Images/BusinessInfo_1.png";
import BusinessInfo_2 from "../../Images/BusinessInfo_2.png";
import BusinessInfo_3 from "../../Images/BusinessInfo_3.png";
import BusinessInfo_4 from "../../Images/BusinessInfo_4.png";
import BusinessInfo_Background from "../../Images/BusinessInfo_Background.png";

export default function BusinessInfo(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className={props.language === "EN" ? "ENLeft" : "ARRight"}>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={BusinessInfo_1}
                  alt=""
                  className={
                    props.language === "EN"
                      ? "BusinessInfo_1_EN"
                      : "BusinessInfo_1_AR"
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
                  src={BusinessInfo_2}
                  alt=""
                  className={
                    props.language === "EN"
                      ? "BusinessInfo_2_EN"
                      : "BusinessInfo_2_AR"
                  }
                />
              </td>
              <td>
                <img src={BusinessInfo_3} alt="" className="BusinessInfo_3" />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={BusinessInfo_4}
                  alt=""
                  className={
                    props.language === "EN"
                      ? "BusinessInfo_4_EN"
                      : "BusinessInfo_4_AR"
                  }
                />
              </td>
              <td>{Data.body3}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 7.1vw 20.6vw 6.2vw 20.6vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BusinessInfo_Background});
  font-size: 1vw;
  line-height: 1.3vw;
  font-family: "Lato Regular" !important;

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
  .BusinessInfo_1_EN {
    width: 36.2vw;
    height: 18.6vw;
    padding: 0vw 1.4vw 0vw 0vw;
  }
  .BusinessInfo_1_AR {
    width: 36.2vw;
    height: 18.6vw;
    padding: 0vw 0vw 0vw 1.4vw;
  }
  .BusinessInfo_2_EN {
    width: 21.2vw;
    height: 19vw;
    padding: 0vw 1.4vw 0vw 1.6vw;
  }
  .BusinessInfo_2_AR {
    width: 21.2vw;
    height: 19vw;
    padding: 0vw 1.6vw 0vw 1.4vw;
  }
  .BusinessInfo_3 {
    width: 13.7vw;
    height: 19vw;
  }
  .BusinessInfo_4_EN {
    width: 36.2vw;
    height: 19vw;
    padding: 0vw 1.5vw 0vw 0vw;
  }
  .BusinessInfo_4_AR {
    width: 36.2vw;
    height: 19vw;
    padding: 0vw 0vw 0vw 1.5vw;
  }
`;
