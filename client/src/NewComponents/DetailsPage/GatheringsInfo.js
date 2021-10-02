import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/GatheringsInfo";
import { DataArabic } from "../../Data/Arabic/DetailsPage/GatheringsInfo";

import { colors } from "../../Styles/Colors";

import GatheringsInfo_1 from "../../Images/GatheringsInfo_1.png";
import GatheringsInfo_2 from "../../Images/GatheringsInfo_2.png";
import GatheringsInfo_3 from "../../Images/GatheringsInfo_3.png";
import GatheringsInfo_Background from "../../Images/GatheringsInfo_Background.png";

export default function GatheringsInfo(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className={props.language === "EN" ? "ENLeft" : "ARRight"}>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={GatheringsInfo_1}
                  alt=""
                  className={
                    props.language === "EN"
                      ? "GatheringsInfo_1_EN"
                      : "GatheringsInfo_1_AR"
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
                  src={GatheringsInfo_2}
                  alt=""
                  className={
                    props.language === "EN"
                      ? "GatheringsInfo_2_EN"
                      : "GatheringsInfo_2_AR"
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={GatheringsInfo_3}
                  alt=""
                  className={
                    props.language === "EN"
                      ? "GatheringsInfo_3_EN"
                      : "GatheringsInfo_3_AR"
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
  padding: 7vw 20.6vw 5.9vw 20.6vw;
  text-align: left;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${GatheringsInfo_Background});
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
  .GatheringsInfo_1_EN {
    width: 36.2vw;
    height: 18.6vw;
    padding: 0vw 1.4vw 0vw 0vw;
  }
  .GatheringsInfo_1_AR {
    width: 36.2vw;
    height: 18.6vw;
    padding: 0vw 0vw 0vw 1.4vw;
  }
  .GatheringsInfo_2_EN {
    width: 35.9vw;
    height: 19vw;
    padding: 0vw 1.4vw 0vw 1.6vw;
  }
  .GatheringsInfo_2_AR {
    width: 35.9vw;
    height: 19vw;
    padding: 0vw 1.6vw 0vw 1.4vw;
  }
  .GatheringsInfo_3_EN {
    width: 36.2vw;
    height: 19vw;
    padding: 0vw 1.4vw 0vw 1.6vw;
  }
  .GatheringsInfo_3_AR {
    width: 36.2vw;
    height: 19vw;
    padding: 0vw 1.6vw 0vw 1.4vw;
  }
`;
