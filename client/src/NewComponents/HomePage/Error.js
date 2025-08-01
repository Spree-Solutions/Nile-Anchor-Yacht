import React from "react";
import styled from "styled-components";
import { colors } from "../../Styles/Colors";
import { DataEnglish } from "../../Data/English/HomePage/Error";
import { DataArabic } from "../../Data/Arabic/HomePage/Error";

import warning from "../../Icons/warning.svg";
import dark_logo from "../../Images/dark_logo.png";
import cross from "../../Icons/cross.svg";

export default function Error(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv style={{ display: props.showError ? "" : "none" }}>
      <div className="modalPopUp">
        <div>
          <img
            src={cross}
            alt=""
            className="cross"
            onClick={() => {props.setShowError(false); window.location.href = "/";}}
          />
        </div>
        <div>
          <img src={warning} alt="" className="warning" />
        </div>
        <div className="DataBody">{Data.Body}</div>
        <div className="DataBodyBold">{Data.BodyBold}</div>
        <div>
          <img src={dark_logo} alt="" className="dark_logo" />
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100vw; /* width without sidebar*/
  height: 100%; /* Full height */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  color: ${colors.Black};

  .modalPopUp {
    width: 29.9vw;
    height: 20vw;
    padding: 1.9vw 7.6vw 3.9vw 7.9vw;
    background-color: ${colors.MainBeige};
    margin: 12vw 29vw 0vw 29vw;
    @media (max-width: 768px) {
      height: 100%;
      padding: 0;
      width: 100%;
      margin: 0;
    }
  }

  .warning {
    width: 3.2vw;
    height: 3vw;
    @media (max-width: 768px) {
      width: 12.3vw;
      height: 11.77vw;
      margin-top: 60vw;
      margin-bottom: 11.8vw;
    }
  }

  .dark_logo {
    width: 3.2vw;
    height: 3.2vw;
    padding: 0vw 0vw 3.9vw 0vw;
    @media (max-width: 768px) {
      width: 15.5vw;
      height: 15.5vw;
      margin-top: 12vw;
    }
  }

  .DataBody {
    // font-family: "Lato Regular" !important;
    font-size: 1vw;
    padding: 3vw 0vw 2vw 0vw;
    @media (max-width: 768px) {
      font-size: 3.7vw;
      width: 57.3vw;
      margin: auto;
      margin-bottom: 2vw;
    }
  }
  .DataBodyBold {
    font-weight : Bold;
    // font-family: "Lato Bold" !important;
    font-size: 1vw;
    padding: 0vw 0vw 3vw 0vw;
    @media (max-width: 768px) {
      font-size: 3.7vw;
      /* margin-top: 60vw; */
      margin-bottom: 12vw;
      width: 50vw;
      margin: auto;
    }
  }
  .cross {
    width: 1.2vw;
    height: 1.2vw;
    padding: 0vw 0vw 2vw 32vw;
    cursor: pointer;
    @media (max-width: 768px) {
      padding: 2vw 0vw 0vw 90vw;
      width: 4vw;
      height: 4vw;
    }
  }
`;
