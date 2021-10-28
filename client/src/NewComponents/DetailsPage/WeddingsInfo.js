import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/WeddingsInfo";
import { DataArabic } from "../../Data/Arabic/DetailsPage/WeddingsInfo";

import { colors } from "../../Styles/Colors";

import WeddingsInfo_1 from "../../Images/WeddingsInfo_1.jpeg";
import WeddingsInfo_2 from "../../Images/WeddingsInfo_2.jpeg";
import WeddingsInfo_3 from "../../Images/WeddingsInfo_3.jpeg";
import WeddingsInfo_Background from "../../Images/WeddingsInfo_Background.jpeg";
import Label from "../Label";

export default function WeddingsInfo(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className={props.language === "EN" ? "ENLeft" : "ARRight"}>
        <table className="table-1">
          <tbody>
            <tr>
              <td>{Data.body1}</td>
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
            </tr>
          </tbody>
        </table>
        <table className="table-2">
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
        <div className="div-3">
          <img src={WeddingsInfo_3} alt="" className="WeddingsInfo_3" />
        </div>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 7.1vw 10.6vw 6.2vw 10.6vw;
  text-align: left;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${WeddingsInfo_Background});
  font-size: 1.8vw;
  line-height: 2.2vw;
  font-family: "Lato Regular" !important;
  color: ${colors.Black};
  border-bottom: solid 0.35vw black;
  @media (max-width: 768px) {
    padding: 10.01vw 8.36vw 15.7vw 8.3vw;
    img {
      padding: 0 !important;
    }
  }
  .div-3 {
    display: flex;
    justify-content: flex-end;
  }
  table {
    td {
      &:first-child {
        padding-right: 9vw;
        text-align: justify;
        text-justify: inter-word;
      }
    }
    @media (max-width: 768px) {
      font-size: 3.7vw;
      line-height: 5.33vw;
      td {
        width: 100%;
      }
      &.table-1 {
        tr {
          display: flex;
          flex-direction: column-reverse;
        }
      }
      &.table-2 {
        tr {
          display: flex;
          flex-direction: column-reverse;
        }
      }
      &.table-3 {
        tr {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

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
    @media (max-width: 768px) {
      width: 83.4vw;
      width: 100%;
      height: 43vw;
    }
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
    @media (max-width: 768px) {
      width: 100%;
      height: 44vw;
    }
  }
  .WeddingsInfo_2_AR {
    width: 35.9vw;
    height: 19vw;
    padding: 0vw 1.6vw 0vw 0vw;
  }
  .WeddingsInfo_3 {
    width: 35.9vw;
    height: 19vw;
    @media (max-width: 768px) {
      width: 100%;
      height: 44vw;
    }
  }
`;
