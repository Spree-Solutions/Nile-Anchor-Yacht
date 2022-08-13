import React, { useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/Gallery";
import { DataArabic } from "../../Data/Arabic/HomePage/Gallery";
import { colors } from "../../Styles/Colors";
import Gallery_Background from "../../Images/Gallery_Background.jpeg";
import Liberty_Dark2 from "../../Images/Liberty_Dark2.png";
import Bella_Dark from "../../Images/Bella_Dark.png";
import CarouselComponent from "./Carousel";
import logo from "../../Images/navylogo.png";
import logoVida from "../../Images/vida1logo.png";

import CustomCarousel from "../CustomCarousel";
import Bella0 from "../../Images/Bella0.jpeg";
import Bella1 from "../../Images/Bella1.jpeg";
import Bella2 from "../../Images/Bella2.jpeg";
import Bella3 from "../../Images/Bella3.jpeg";
import Bella4 from "../../Images/Bella4.jpeg";
import Bella5 from "../../Images/Bella5.jpeg";
import Bella6 from "../../Images/Bella6.jpeg";

import Liberty1 from "../../Images/Liberty1.jpeg";
import Liberty2 from "../../Images/Liberty2.jpeg";
import Liberty3 from "../../Images/Liberty3.jpeg";
import Liberty4 from "../../Images/Liberty4.jpeg";
import Liberty5 from "../../Images/Liberty5.jpeg";
import Liberty6 from "../../Images/Liberty6.jpeg";
import Liberty7 from "../../Images/Liberty7.jpeg";
import Liberty8 from "../../Images/Liberty8.jpeg";
import Liberty9 from "../../Images/Liberty9.jpeg";
import Liberty10 from "../../Images/Liberty10.jpeg";


import Vida1 from "../../Images/Vida Yacht-6.jpg";
import Vida2 from "../../Images/Vida Yacht-7.jpg";
import Vida3 from "../../Images/Vida Yacht-1.jpg";
import Vida4 from "../../Images/Vida Yacht-2.jpg";
import Vida5 from "../../Images/Vida Yacht-3.jpg";
import Vida6 from "../../Images/Vida Yacht-4.jpg";
import Vida7 from "../../Images/Vida Yacht-8.jpg";
import Vida8 from "../../Images/Vida Yacht-9.jpg";
import Vida9 from "../../Images/Vida Yacht-10.jpg";
// import Vida5 from "../../Images/Vida Yacht-5.jpg";

export default function Gallery(props) {
  const bellaImages = [Bella0, Bella1, Bella2, Bella3, Bella4, Bella5, Bella6];
  const libertyImages = [
    Liberty1,
    Liberty2,
    Liberty3,
    Liberty4,
    Liberty5,
    Liberty6,
    Liberty7,
    Liberty8,
    Liberty9,
    Liberty10,
  ];
  const vidaImages = [
    Vida1,
    Vida2,
    Vida3,
    Vida4,
    Vida5,
    Vida6,
    Vida7,
    Vida8,
    Vida9,
  ];
  const [selectedYacht, setSelectedYacht] = useState(libertyImages);
  const [selectedYachtName, setSelectedYachtName] = useState("liberty");
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
          <img
            src={Liberty_Dark2}
            alt="liberty"
            onClick={() => {
              setSelectedYacht(libertyImages);
              setSelectedYachtName("liberty");
            }}
            className={`${selectedYachtName === "liberty" ? "selected" : ""}`}
          />
          <div className="separator"></div>
          <img
            src={Bella_Dark}
            id="bella"
            alt="bella"
            onClick={() => {
              setSelectedYacht(bellaImages);
              setSelectedYachtName("bella");
            }}
            className={`${selectedYachtName === "bella" ? "selected" : ""}`}
          />
          <div className="separator"></div>
          <img
            src={logoVida}
            id="bella"
            alt="bella"
            onClick={() => {
              setSelectedYacht(vidaImages);
              setSelectedYachtName("vida1");
            }}
            className={`${selectedYachtName === "vida1" ? "selected" : ""}`}
          />
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
    width: 40vw;
    margin: auto;
    padding: 3vw;
    @media (max-width: 768px) {
      width: 80vw;
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
