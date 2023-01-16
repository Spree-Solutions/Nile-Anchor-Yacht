import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/Colors";
import whatsapp from "../Icons/whatsapp.svg";

const SideSlider = () => {
  return (
    <StyledSlider>
      <div className="whatsapp">
        <a target="__blank" href="https://wa.me/+201211140222">
          <img src={whatsapp} alt="" />
        </a>
      </div>
      <div className="book-now">
        <a href="#booking">Book Now</a>
      </div>
    </StyledSlider>
  );
};
const StyledSlider = styled.div`
  /* Removing default margins and paddings */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  position: fixed;
  top: 10vw;
  right: 0vw;
  z-index: 100;
  @media (max-width: 768px) {
    top: 21.5vw;
  }
  .whatsapp {
    a {
      display: inline-block;
      height: 2vw;
      width: 2vw;
      @media (max-width: 768px) {
        height: 6vw;
        width: 6vw;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .book-now {
    padding: 0.25vw 0vw;
    background: ${colors.MainBeige};
    @media (max-width: 768px) {
      padding: 0.75vw 0vw;
    }
    a {
      margin-top: 0.2vw;
      text-decoration: none;
      color: black;
      writing-mode: tb-rl;
      transform: rotate(-180deg);
      // font-family: "Askan Bold" !important;
      font-size: 0.8vw;
      @media (max-width: 768px) {
        font-size: 3.2vw;
      }
    }
  }
`;
export default SideSlider;
