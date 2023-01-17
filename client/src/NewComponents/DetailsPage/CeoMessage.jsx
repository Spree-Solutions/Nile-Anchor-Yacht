import React from "react";
import styled from "styled-components";
import { colors } from "../../Styles/Colors";
import ceo from "../../Images/ceo.png";
import illustration from "../../Images/illust.png";

const CeoMessage = () => {
  return (
    <StyledSection>
      <h1>CEO's Message</h1>
      <p>
        “For thousands of years the Nile River has been bestowing its generosity
        to Egyptians through its everlasting water and never ending greenery. It
        grants people joy and happiness through its breathtaking distance which
        covers over 1500 kilos across Egypt. This remarkable river will forever
        remain within the hearts and souls of every Egyptian even for the next
        thousands of years that are yet to come”
      </p>
      <div className="ceo-image">
        <img src={ceo} alt="ceo" className="ceo" />
        <div className="illustration">
          <img src={illustration} alt="" />
          <p>Bassel El Batouty</p>
          <p>Chief Executive Officer</p>
        </div>
      </div>
    </StyledSection>
  );
};
const StyledSection = styled.div`
  border-top: 0.3vw solid ${colors.DarkGrey};
  border-bottom: 0.3vw solid ${colors.DarkGrey};
  overflow-y: hidden;
  /* height: 90vh; */
  padding: 2vw 0vw;
  padding-bottom: 0;
  // font-family: "Lato Regular";
  color: ${colors.DarkGrey2};
  @media (max-width: 768px) {
    padding: 8vw 0vw;
    padding-bottom: 0;
  }
  h1 {
    font-size: 2.5vw;
    font-weight : Bold;
    // font-family: "Askan DemiBold";
    margin: 0;
    padding: 0;
    background: ${colors.MainBeige};
    width: fit-content;
    padding-left: 12vw;
    padding-right: 1vw;
    @media (max-width: 768px) {
      font-size: 5.9vw;
    }
  }
  p {
    font-size: 1.9vw;
    line-height: 2.5vw;
    padding: 0 2.5vw;
    text-align: justify;
    @media (max-width: 768px) {
      font-size: 3.7vw;
      line-height: 5.3vw;
    }
  }
  .ceo-image {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 4vw;
    padding: 0 2.5vw;
    transform: translateY(1vw);
    @media (max-width: 768px) {
      justify-content: center;
    }
    .ceo {
      width: 20vw;
      @media (max-width: 768px) {
        width: 30vw;
      }
    }
    .illustration {
      position: relative;
      margin-left: 5vw;
      img {
        width: 50vw;
        @media (max-width: 768px) {
          height: 35vw;
        }
      }
      p {
        position: absolute;
        top: 9vw;
        left: 20vw;
        font-size: 1vw;
        opacity: 0.8;
        @media (max-width: 768px) {
          top: 15vw;
          font-size: 2.5vw;
          left: 0;
        }

        &:first-of-type {
          opacity: 1;
          top: 8vw;
          /* left: 6vw; */
          margin: 0;
          font-size: 2vw;
          font-weight: 700;
          font-weight : Bold;
          // font-family: "Askan DemiBold";
          @media (max-width: 768px) {
            top: 13vw;
            font-size: 5vw;
          }
        }
      }
    }
  }
`;

export default CeoMessage;
