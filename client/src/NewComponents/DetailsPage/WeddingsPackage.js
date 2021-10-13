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
      <table className="cta-table">
        <tbody>
          <tr className="cta-row">
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
  @media (max-width: 768px) {
    padding-top: 13.33vw;
    padding-bottom: 0vw;
    padding-left: 7.7vw;
    padding-right: 7.7vw;
    .cta-table {
      width: 100%;
      margin-top: 9.7vw;
    }
    .cta-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      width: 100%;
      td {
        &:last-child {
          display: none;
        }
      }
    }
  }

  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 2vw;
    padding: 0vw 0vw 3vw 0vw;
    @media (max-width: 768px) {
      font-size: 5.9vw;
    }
  }
  .Body {
    font-family: "Lato Regular" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
    @media (max-width: 768px) {
      padding: 0;
      width: 84.8vw;
      margin: auto;
      font-size: 4.3vw;
      line-height: 6.4vw;
    }
  }
  .End_EN {
    font-family: "Lato Bold" !important;
    font-size: 1.2vw;
    line-height: 1.7vw;
    padding: 17vw 0vw 2.3vw 22vw;
    text-align: right;
    @media (max-width: 768px) {
      font-size: 3vw;
      margin-top: 6vw;
      padding: 0;
      line-height: 5.33vw;
    }
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
    @media (max-width: 768px) {
      width: 28vw;
      height: 41.1vw;
      padding: 0;
    }
  }
  .WeddingsPackages_AR {
    width: 10.9vw;
    height: 16.1vw;
    padding: 6.7vw 38vw 0vw 0vw;
  }
`;
