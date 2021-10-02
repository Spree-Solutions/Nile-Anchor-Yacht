import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/Partners";
import { DataArabic } from "../../Data/Arabic/HomePage/Partners";
import { colors } from "../../Styles/Colors";

import Partner_01 from "../../Images/Partner_01.png";
import Partner_02 from "../../Images/Partner_02.png";
import Partner_03 from "../../Images/Partner_03.png";
import Partner_04 from "../../Images/Partner_04.png";

export default function Partners(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <div className="PartnersTitle">
        <span> {Data.Title} </span>
        <span className="PartnersTitleBold"> {Data.TitleBold} </span>
      </div>
      <table className="Table">
        <tbody>
          <tr>
            <td>
              <img src={Partner_01} alt="" className="Partner_01" />
            </td>
            <td>
              {" "}
              <img src={Partner_02} alt="" className="Partner_02" />
            </td>{" "}
            <td>
              {" "}
              <img src={Partner_03} alt="" className="Partner_03" />
            </td>{" "}
            <td>
              {" "}
              <img src={Partner_04} alt="" className="Partner_04" />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 0vw 0vw 0vw 0vw;
  font-family: "Askan Regular" !important;
  background-color: ${colors.White};
  color: ${colors.Black};
  .Title {
    background-color: ${colors.DarkBrown};
    font-family: "Merriweather Regular";
    font-size: 2.1vw;
    line-height: 3vw;
    padding: 1.9vw 0vw 1.5vw 5.5vw;
  }
  .Partner_01 {
    width: 14vw;
    padding: 0vw 3.35vw 0vw 3.35vw;
  }
  .Partner_02 {
    width: 13.75vw;
    height: 7.64vw;
    padding: 0vw 3.35vw 0vw 3.35vw;
  }
  .Partner_03 {
    width: 13.95vw;
    height: 5.97vw;
    padding: 0vw 3.35vw 0vw 3.35vw;
  }
  .Partner_04 {
    width: 12vw;
    height: 12vw;
    padding: 0vw 3.35vw 0vw 3.35vw;
  }
  .Table {
    margin: 5.4vw 12.8vw 6.25vw 12.8vw;
  }
  .PartnersTitle {
    font-size: 2.1vw;
    font-family: "Askan Regular" !important;
    line-height: 3.8vw;
    padding: 3vw 0vw 0vw 0vw;
  }
  .PartnersTitleBold {
    font-family: "Askan Bold" !important;
  }
`;
