import React, { useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/Gallery";
import { DataArabic } from "../../Data/Arabic/HomePage/Gallery";
import { colors } from "../../Styles/Colors";
import Gallery_Background from "../../Images/Gallery_Background.jpeg";
import logo from "../../Images/navylogo.png";

import CustomCarousel from "../CustomCarousel";

export default function Gallery({ yachts, ...props }) {
  const [selectedYacht, setSelectedYacht] = useState(
    yachts[Object.keys(yachts)[0]].images
  );
  const [selectedYachtName, setSelectedYachtName] = useState(
    Object.keys(yachts)[0]
  );
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
          <p>{Data.Title}</p>
          <img src={logo} alt="logo" />
        </div>
        <div className="heading-section">
          {Object.keys(yachts).map((yacht, index) => (
            <>
              <img
                src={yachts[yacht].logo}
                alt="yacht image"
                onClick={() => {
                  setSelectedYacht(yachts[yacht].images);
                  setSelectedYachtName(yachts[yacht].name);
                }}
                className={`${
                  selectedYachtName === yachts[yacht].name ? "selected" : ""
                }`}
              />
              {index !== Object.keys(yachts).length - 1 && (
                <div className="separator"></div>
              )}
            </>
          ))}
        </div>
        <div className="carousel-section">
          <CustomCarousel imagesArray={selectedYacht} />
        </div>
        <div className="Title">
          {Data.ServicesTitle}{" "}
          <span className="Bold-Title"> {Data.ServicesTitleBold}</span>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  padding: 0vw 0vw 0vw 0vw;
  font-family: "Askan Regular" !important;
  /* background-image: url(${Gallery_Background}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.Navy};
  /* border-bottom: solid 0.35vw black; */

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
    font-size: 3.1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
    img {
      width: 5vw;
    }
    @media (max-width: 768px) {
      height: 16vw;
      font-size: 6vw;
      display: flex;
      align-items: center;
      img {
        width: 13vw;
      }
    }
  }
  .ENTitle {
    background-color: ${colors.MainBeige};
    font-family: "Merriweather Regular";
    line-height: 3vw;
    padding: 0.2vw 5.5vw 0.2vw 5.5vw;
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
    font-size: 1.3vw;
    line-height: 1.8vw;
    text-align: justify;
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
    width: 13vw;
    /* height: 3.9vw; */
    padding: 4.6vw 0vw 2.36vw 0vw;
    @media (max-width: 768px) {
      width: 35vw;
    }
  }
  .BellaImage {
    width: 12vw;
    /* height: 3.2vw; */
    padding: 5.3vw 0vw 2.36vw 0vw;
    @media (max-width: 768px) {
      width: 35vw;
    }
  }
  .Title {
    background: ${colors.MainBeige};
    font-family: "Merriweather Regular";
    font-size: 3.1vw;
    line-height: 3vw;
    /* padding: 1.9vw 0vw 1.5vw 5.5vw; */
    padding: 0.2vw 5.5vw 0.2vw 5.5vw;
    margin: 3.7vw 0vw 0vw 0vw;
    @media (max-width: 768px) {
      height: 14vw;
      font-size: 6vw;
      display: flex;
      align-items: center;
      .Bold-Title {
        margin-left: 1vw;
      }
    }
    .Bold-Title {
      font-family: "Merriweather Bold";
    }
  }
  .heading-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 55vw;
    margin: auto;
    padding: 3vw 0;
    @media (max-width: 768px) {
      width: 100vw;
      justify-content: space-around;
    }
    img {
      cursor: pointer;
      width: 10vw;
      padding-bottom: 0.2vw;
      &#bella {
        margin-top: 0.5vw;
      }
      &.selected {
        border-bottom: solid 0.1vw ${colors.Navy};
      }
      @media (max-width: 768px) {
        width: 20vw;
      }
    }
    .zein-logo {
      height: 7vw;
      object-fit: contain;
      @media (max-width: 768px) {
        height: 15vw;
      }
    }
    .separator {
      height: 4vw;
      width: 0.2vw;
      background: ${colors.Navy};
      @media (max-width: 768px) {
        height: 12vw;
        width: 0.4vw;
      }
    }
  }
`;
