import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/WeddingsPackage";
import { DataArabic } from "../../Data/Arabic/DetailsPage/WeddingsPackage";

import { colors } from "../../Styles/Colors";
import WeddingsPackages from "../../Images/WeddingsPackages.png";

export default function WeddingsPackage(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className="Title">{Data.title}</div>
      <div className="Body">
        {Data.body.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <img
                src={WeddingsPackages}
                alt=""
                className={
                  props.language === "EN"
                    ? "WeddingsPackages_EN"
                    : "WeddingsPackages_AR"
                }
              />
            </td>
            <td>
              <div className={props.language === "EN" ? "End_EN" : "End_AR"}>
                {Data.end}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  color: ${colors.Black};
  padding: 3.47vw 5.6vw 0vw 5.6vw;
  background-color: ${colors.White};
  text-align: center;

  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 2vw;
    padding: 0vw 0vw 3vw 0vw;
  }
  .Body {
    font-family: "Lato Regular" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
  }
  .End_EN {
    font-family: "Lato Bold" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
    padding: 17vw 0vw 2.3vw 22vw;
    text-align: right;
  }
  .End_AR {
    font-family: "Lato Bold" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
    padding: 17vw 22vw 2.3vw 0vw;
    text-align: right;
  }
  .WeddingsPackages_EN {
    width: 10.9vw;
    height: 16.1vw;
    padding: 6.7vw 0vw 0vw 38vw;
  }
  .WeddingsPackages_AR {
    width: 10.9vw;
    height: 16.1vw;
    padding: 6.7vw 38vw 0vw 0vw;
  }
`;
