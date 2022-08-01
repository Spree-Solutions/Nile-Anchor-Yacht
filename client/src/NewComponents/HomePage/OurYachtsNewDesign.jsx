import React, { useState } from "react";
import styled from "styled-components";
import Liberty_Image from "../../Images/Liberty_Image.png";
import Bella_Image from "../../Images/bella-image.jpeg";
import { colors } from "../../Styles/Colors";
import BellaYellow from "../../Images/BellaYellow.png";
import vidaLogo from "../../Images/vida-1.png";
import Liberty_Dark from "../../Images/libDark.png";
import vidaImage from "../../Images/Vida Yacht-1.jpg";

export const yachts = {
  bella: {
    displayName: "BELLA",
    logo: BellaYellow,
    image: Bella_Image,
    description:
      " Bella – Italian for beauty, an inner reflection of the yacht’s overall look. Smaller than the liberty yacht in size yetstands-out elegantly as it cruises throughout Cairo’s Nile River. The yacht offers three decks with a classic high- end interior andß exterior design with the capacity to cater around 30 passengers.ßThe upper deck comes with tinted windows and a 360-degreeß panoramic view, giving our delightful guests the chance toß privately experience Cairo’s Nile River.",
  },
  liberty: {
    displayName: "LIBERTY",
    logo: Liberty_Dark,
    image: Liberty_Image,
    description:
      "Liberty - Liberating one’s self to a moment of happiness. The two-story yacht is designed to comfortably accommodate guests who seek to host large; events, celebrations, marriage ceremonies, wedding parties, corporate outings and private meetings on Cairo’s Nile River. The yacht’s exterior and interior design is exquisitely designed to provide our guests with a sense of European luxury on the Nile.",
  },
  vida1: {
    displayName: "VIDA I",
    logo: vidaLogo,
    image: vidaImage,
    description:
      "Vida; Spanish for “life” Our smallest yacht, designed for a family gathering or cozy friends’ get-together.The yacht takes up to 20 people. Fully equipped, with a friendly crew to ensure a pleasurable trip on board",
  },
};
const OurYachtsNewDesign = () => {
  const [selectedYacht, setSelectedYacht] = useState("liberty");
  return (
    <StyledSection>
      <div className="column column-1">
        <div className="title">
          <h1>Yacht</h1>
          <h1>Collection</h1>
        </div>
        <img src={yachts[selectedYacht].image} alt="" />
        <a href="/#booking">- Book Now</a>
      </div>
      <div className="column column-2">
        <div className="heading">
          <div className="yacht-buttons">
            <p
              onClick={() => setSelectedYacht("liberty")}
              className={`${selectedYacht === "liberty" ? "selected" : ""}`}
            >
              LIBERTY
            </p>
            <p>|</p>
            <p
              onClick={() => setSelectedYacht("bella")}
              className={`${selectedYacht === "bella" ? "selected" : ""}`}
            >
              BELLA
            </p>
            <p
              onClick={() => setSelectedYacht("vida1")}
              className={`${selectedYacht === "vida1" ? "selected" : ""}`}
            >
              VIDA I
            </p>
          </div>
          <div className="separator"></div>
          <img src={yachts[selectedYacht].logo} alt="logo" />
        </div>
        <div className="text">{yachts[selectedYacht].description}</div>
      </div>
    </StyledSection>
  );
};
const StyledSection = styled.div`
  display: flex;
  color: ${colors.Navy};
  font-family: "Lato Regular";
  width: 100%;
  justify-content: space-between;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .column-1 {
    width: 50%;
    .title {
      font-family: "Askan Light";
      font-size: 2vw;
      line-height: 3.5vw;
      h1:first-child {
        font-weight: 700;
        font-family: "Askan Bold";
      }
      text-align: left;
      color: ${colors.DarkGrey2};
    }
    img {
      width: 30vw;
      width: 90%;
      height: 23vw;
      object-fit: contain;
      margin-top: 4vw;
    }
    a {
      text-decoration: none;
      text-align: left;
      margin-top: 2vw;
      color: ${colors.Navy};
      font-size: 2vw;
    }
  }
  .column-2 {
    width: 50%;
    /* justify-content: center; */

    .heading {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 3vw;
      .yacht-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      p {
        font-size: 2vw;
        &:not(:first-of-type) {
          margin-left: 1vw;
        }
        &:not(:nth-of-type(2)) {
          cursor: pointer;
          font-weight: 400;

          /* text-decoration: underline; */
        }
        &.selected {
          font-weight: 600;
          /* text-decoration: none; */
          text-decoration: underline;
        }
      }
      .separator {
        background: ${colors.MainBeige};
        height: 6vw;
        width: 0.5vw;
        margin-left: 2vw;
      }
    }
    img {
      width: 19vw;
      height: 6.5vw;
      object-fit: cover;
      margin-left: 2vw;
    }
    .text {
      margin-top: 5vw;
      font-size: 1.5vw;
      font-weight: 500;
      text-align: left;
    }
  }
`;
export default OurYachtsNewDesign;
