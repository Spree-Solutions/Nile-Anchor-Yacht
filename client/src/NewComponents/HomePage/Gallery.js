import React, { useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/Gallery";
import { DataArabic } from "../../Data/Arabic/HomePage/Gallery";
import { colors } from "../../Styles/Colors";
import Gallery_Background from "../../Images/Gallery_Background.jpeg";
import Liberty_Light from "../../Images/Liberty_Light.png";
import Bella_Light from "../../Images/Bella_Light.png";
import CarouselComponent from "./Carousel";

export default function Gallery(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <StyledDiv>
      <div
        className={props.language === "EN" ? "LeftTextAlign" : "RightTextAlign"}
      >
        <div
          className={
            props.language === "EN"
              ? "ENTitle gallery-title"
              : "ARTitle gallery-title"
          }
        >
          {Data.Title}
        </div>
        <div className={props.language === "EN" ? "ENTable" : "ARTable"}>
          <table>
            <tr>
              <td className="Col1 top">
                <div>
                  <img src={Liberty_Light} alt="" className="LibertyImage" />
                </div>
                <div> {Data.LibertyBody} </div>
              </td>

              <td
                className={
                  props.language === "EN" ? "ENCol2 top" : "ARCol2 top"
                }
              >
                <div>
                  {" "}
                  <img src={Bella_Light} alt="" className="BellaImage" />
                </div>
                <div>{Data.BellaBody}</div>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <CarouselComponent language={props.language} />
        </div>
        <div className="Title">
          {Data.ServicesTitle} {Data.ServicesTitleBold}
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 0vw 0vw 0vw 0vw;
  font-family: "Askan Regular" !important;
  background-image: url(${Gallery_Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.White};

  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
  }
  .top {
    vertical-align: top;
  }
  .gallery-title {
    font-size: 2.1vw;
    @media (max-width: 768px) {
      height: 16vw;
      font-size: 6vw;
      display: flex;
      align-items: center;
    }
  }
  .ENTitle {
    background-color: ${colors.DarkBrown};
    font-family: "Merriweather Regular";
    line-height: 3vw;
    padding: 1.9vw 0vw 1.5vw 5.5vw;
  }
  .ARTitle {
    background-color: ${colors.DarkBrown};
    font-family: "Merriweather Regular";
    line-height: 3vw;
    padding: 1.9vw 05.5vw 1.5vw 0vw;
  }
  .ENTable {
    padding: 0vw 0vw 6.95vw 5.5vw;
    font-family: "Lato Regular";
    font-size: 0.97vw;
    line-height: 1.4vw;
    background: rgba(37, 28, 21, 0.7);
  }
  .ARTable {
    padding: 0vw 5.5vw 6.95vw 0vw;
    font-family: "Lato Regular";
    font-size: 0.97vw;
    line-height: 1.4vw;
    background: rgba(37, 28, 21, 0.7);
  }
  .ENTable,
  .ARTable {
    @media (max-width: 768px) {
      font-size: 3.73vw;
      line-height: normal;
      table {
        tr {
          display: flex;
          flex-direction: column;
          td {
            padding: 0;
            width: 84%;
            &:not(:first-child) {
              margin-top: 16.3vw;
            }
          }
        }
      }
    }
  }
  .Col1 {
    width: 36.3vw;
  }
  .ENCol2 {
    width: 36.25vw;
    padding: 0vw 0vw 0vw 8.9vw;
  }
  .ARCol2 {
    width: 36.25vw;
    padding: 0vw 8.9vw 0vw 0vw;
  }
  .LibertyImage {
    width: 9.17vw;
    height: 3.9vw;
    padding: 4.6vw 0vw 2.36vw 0vw;
  }
  .BellaImage {
    width: 8.54vw;
    height: 3.2vw;
    padding: 5.3vw 0vw 2.36vw 0vw;
  }
  .Title {
    background: rgba(0, 0, 0, 0.7);
    font-family: "Merriweather Regular";
    font-size: 2.1vw;
    line-height: 3vw;
    padding: 1.9vw 0vw 1.5vw 5.5vw;
    margin: 3.7vw 0vw 0vw 0vw;
  }
`;
