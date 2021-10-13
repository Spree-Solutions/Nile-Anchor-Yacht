import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/DetailsPage/GatheringsInfo";
import { DataArabic } from "../../Data/Arabic/DetailsPage/GatheringsInfo";

import { colors } from "../../Styles/Colors";

import GatheringsInfo_1 from "../../Images/GatheringsInfo_1.jpeg";
import GatheringsInfo_2 from "../../Images/GatheringsInfo_2.jpeg";
import GatheringsInfo_3 from "../../Images/GatheringsInfo_3.jpeg";
import GatheringsInfo_Background from "../../Images/GatheringsInfo_Background.jpeg";

export default function GatheringsInfo(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className={props.language === "EN" ? "ENLeft" : "ARRight"}>
        <table className="table-1">
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
        <table className="table-2">
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
        <table className="table-3">
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
  @media (max-width: 768px) {
    padding: 10.01vw 8.36vw 15.7vw 8.3vw;
    img {
      padding: 0 !important;
    }
  }
  table {
    @media (max-width: 768px) {
      font-size: 3.7vw;
      line-height: 5.33vw;
      td {
        width: 100%;
      }
      &.table-1 {
        tr {
          display: flex;
          flex-direction: column;
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
  .GatheringsInfo_1_EN {
    width: 36.2vw;
    height: 18.6vw;
    padding: 0vw 1.4vw 0vw 0vw;
    @media (max-width: 768px) {
      width: 83.4vw;
      width: 100%;
      height: 43vw;
    }
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
    @media (max-width: 768px) {
      width: 100%;
      height: 44vw;
    }
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
    @media (max-width: 768px) {
      width: 100%;
      height: 44vw;
    }
  }
  .GatheringsInfo_3_AR {
    width: 36.2vw;
    height: 19vw;
    padding: 0vw 1.6vw 0vw 1.4vw;
  }
`;
