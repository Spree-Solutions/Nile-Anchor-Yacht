import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../Styles/Colors";
import { DataEnglish } from "../../Data/English/HomePage/BusinessEvents";
import { DataArabic } from "../../Data/Arabic/HomePage/BusinessEvents";

// import { isMobileOnly } from "react-device-detect";
import Business_Coffee from "../../Images/Business_Coffee.jpeg";
import Business_Background from "../../Images/Business_Background.jpeg";

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
              <div className="bodyBold">
                <Link to="/business">{Data.ReadMore}</Link>
              </div>
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
  padding: 2.5vw 3vw 7vw 5.63vw;
  color: ${colors.Navy};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: ${colors.MainBeige};
  /* background-image: url(${Business_Background}); */
  /* border-bottom: solid 0.35vw black; */
  height: 15vw;

  @media (max-width: 768px) {
    padding: 8vw;
    height: auto;
  }
  table {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  tr,
  td {
    vertical-align: top;
    border: none;
  }
  tr {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
  .TitleBold {
    width: 2vw;
    font-size: 3.5vw;
    line-height: 3vw;
    font-family: "Askan Bold" !important;
    /* color: ${colors.White}; */
    @media (max-width: 768px) {
      font-size: 5.9vw;
      width: 26.4vw;
      line-height: 6.7vw;
    }
  }
  .body {
    font-family: "Lato Regular" !important;
    font-size: 1.3vw;
    line-height: 1.5vw;
    padding: 1.88vw 0vw 1.88vw 0vw;
    /* text-align: justify; */
    @media (max-width: 768px) {
      font-size: 3.2vw;
      line-height: normal;
      margin-top: 4.5vw;
      margin-bottom: 4.3vw;
    }
  }
  .bodyBold {
    font-family: "Lato Bold" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    a {
      color: ${colors.Navy};
      font-size: 1.3vw;
    }
    @media (max-width: 768px) {
      font-size: 3.2vw;
      margin-bottom: 9vw;
    }
  }
  .ENcol1 {
    width: 52.4vw;
    padding-right: 17vw;

    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }
  }
  .ARcol1 {
    width: 52.4vw;
    padding-left: 27.4vw;
  }
  .Business_Meeting {
    width: 46.8vw;
    height: 19vw;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100%;
      height: 43.5vw;
    }
  }
`;
