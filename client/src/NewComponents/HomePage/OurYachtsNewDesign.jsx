import React, { useState } from "react";
import styled from "styled-components";
import Liberty_Image from "../../Images/Liberty_Image.png";
import Bella_Image from "../../Images/bella-image.jpeg";
import { colors } from "../../Styles/Colors";
import BellaYellow from "../../Images/BellaYellow.png";
import Liberty_Dark from "../../Images/libDark.png";

const OurYachtsNewDesign = () => {
  const [selectedYacht, setSelectedYacht] = useState("liberty");
  return (
    <StyledSection>
      <div className="column column-1">
        <div className="title">
          <h1>Yacht</h1>
          <h1>Collection</h1>
        </div>
        <img
          src={selectedYacht === "liberty" ? Liberty_Image : Bella_Image}
          alt=""
        />
        <a href="/#booking">- Book Now</a>
      </div>
      <div className="column column-2">
        <div className="heading">
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
          <div className="separator"></div>
          <img
            src={selectedYacht === "bella" ? BellaYellow : Liberty_Dark}
            alt="logo"
          />
        </div>
        <div className="text">
          {selectedYacht === "liberty" ? (
            <p>
              Liberty - Liberating one’s self to a moment of happiness. The two-story yacht is designed to comfortably accommodate guests who seek to host large; events, celebrations, marriage ceremonies, wedding parties, corporate outings and private meetings on Cairo’s Nile River. The yacht’s exterior and interior design is exquisitely designed to provide our guests with a sense of European luxury on the Nile.
            </p>
          ) : (
            <p>
              Bella – Italian for beauty, an inner reflection of the yacht’s
              overall look. Smaller than the liberty yacht in size yet
              stands-out elegantly as it cruises throughout Cairo’s Nile River.
              The yacht offers three decks with a classic high- end interior and
              exterior design with the capacity to cater around 30 passengers.
              The upper deck comes with tinted windows and a 360-degree
              panoramic view, giving our delightful guests the chance to
              privately experience Cairo’s Nile River.
            </p>
          )}
        </div>
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
