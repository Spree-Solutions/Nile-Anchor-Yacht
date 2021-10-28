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
          <p>- Bassel El Batouty CEO</p>
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
  padding: 2vw 2.5vw;
  padding-bottom: 0;
  font-family: "Lato Regular";
  color: ${colors.DarkGrey};
  @media (max-width: 768px) {
    padding: 8vw 7.5vw;
    padding-bottom: 0;
  }
  h1 {
    font-size: 4.2vw;
    font-family: "Askan DemiBold";
  }
  p {
    font-size: 2vw;
    padding: 0 vw;
    text-align: justify;
    @media (max-width: 768px) {
      font-size: 3.7vw;
    }
  }
  .ceo-image {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 4vw;
    padding: 0;
    transform: translateY(1vw);
    @media (max-width: 768px) {
      justify-content: center;
    }
    .ceo {
      width: 15vw;
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
        top: 8vw;
        left: 20vw;
        margin: 0;
        font-size: 2vw;
        font-weight: 700;
        font-family: "Askan DemiBold";

        @media (max-width: 768px) {
          top: 13vw;
        }
      }
    }
  }
`;

export default CeoMessage;
