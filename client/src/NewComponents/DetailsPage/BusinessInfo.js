import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/BusinessInfo";
import { DataArabic } from "../../Data/Arabic/DetailsPage/BusinessInfo";

import { colors } from "../../Styles/Colors";

import BusinessInfo_1 from "../../Images/BusinessInfo_1.jpeg";
import BusinessInfo_2 from "../../Images/BusinessInfo_2.jpeg";
import BusinessInfo_3 from "../../Images/BusinessInfo_3.jpeg";
import BusinessInfo_4 from "../../Images/BusinessInfo_4.jpeg";
import BusinessInfo_Background from "../../Images/newbg.png";

export default function BusinessInfo(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className={props.language === "EN" ? "ENLeft" : "ARRight"}>
        <table className="table-1">
          <tbody>
            <tr>
              <td className="text">{Data.body1}</td>
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
            </tr>
          </tbody>
        </table>
        <table className="table-2">
          <tbody>
            <tr>
              <td className="text">{Data.body2}</td>
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
            </tr>
          </tbody>
        </table>
        {/* <table className="table-3">
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
              <td className="text-inv">{Data.body3}</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 7.1vw 7.6vw 6.2vw 7.6vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: url(${BusinessInfo_Background}); */
  font-size: 1.8vw;
  line-height: 2.5vw;
  font-family: "Lato Regular" !important;
  border-bottom: solid 0.4vw ${colors.DarkGrey};
  @media (max-width: 768px) {
    padding: 10.01vw 8.36vw 15.7vw 8.3vw;
    img {
      padding: 0 !important;
    }
  }
  table {
    td.text {
      padding-right: 9vw;
      text-align: justify;
      @media (max-width: 768px) {
        padding: 0;
      }
    }
    td.text-inv {
      padding-left: 9vw;
      text-align: justify;
      @media (max-width: 768px) {
        padding: 0;
      }
    }
    /* td {
      &:first-child {
        padding-right: 9vw;
        text-align: justify;
        text-justify: inter-word;
      }
    } */
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
  .BusinessInfo_1_EN {
    width: 36.2vw;
    height: 18.6vw;
    /* padding: 0vw 1.4vw 0vw 0vw; */
    @media (max-width: 768px) {
      width: 83.4vw;
      width: 100%;
      height: 43vw;
    }
  }
  .BusinessInfo_1_AR {
    width: 36.2vw;
    height: 18.6vw;
    padding: 0vw 0vw 0vw 1.4vw;
  }
  .BusinessInfo_2_EN {
    width: 36.2vw;
    height: 19vw;
    object-fit: cover;
    padding: 0vw 1.4vw 0vw 1.6vw;
    @media (max-width: 768px) {
      width: 100%;
      height: 43vw;
    }
  }
  .BusinessInfo_2_AR {
    width: 21.2vw;
    height: 19vw;
    padding: 0vw 1.6vw 0vw 1.4vw;
  }
  .BusinessInfo_3 {
    width: 13.7vw;
    height: 19vw;
    @media (max-width: 768px) {
      width: 31vw;
      height: 44vw;
      margin-left: 1vw;
    }
  }
  .BusinessInfo_4_EN {
    width: 36.2vw;
    height: 19vw;
    padding: 0vw 1.5vw 0vw 0vw;
    @media (max-width: 768px) {
      width: 83.4vw;
      width: 100%;
      height: 43vw;
    }
  }
  .BusinessInfo_4_AR {
    width: 36.2vw;
    height: 19vw;
    padding: 0vw 0vw 0vw 1.5vw;
  }
`;
