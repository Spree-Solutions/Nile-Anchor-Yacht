import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../Styles/Colors";

const OurYachtsNewDesign = ({ yachts }) => {
  const [selectedYacht, setSelectedYacht] = useState(Object.keys(yachts)[0]);
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
            {Object.keys(yachts).map((yacht, index) => (
              <div>
                <p
                  onClick={() => setSelectedYacht(yacht)}
                  className={`y-name ${
                    selectedYacht === yacht ? "selected" : ""
                  }`}
                >
                  {yachts[yacht].displayName}
                </p>

                {index != Object.keys(yachts).length - 1 && index % 2 === 0 && (
                  <p>|</p>
                )}
              </div>
            ))}
          </div>
          <div className="separator"></div>
          <img
            src={yachts[selectedYacht].logo}
            alt="logo"
            key={yachts[selectedYacht].logo}
            className={`${selectedYacht === "zein" ? "zein-logo" : ""}`}
          />
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
        display: grid;
        grid-template-columns: repeat(
          2,
          1fr
        ); /* Two columns with equal width */
        grid-template-rows: repeat(2, 1fr);
        div {
          display: flex;
          // text-align: left;
        }
        // flex-wrap: wrap;
        .y-name {
          width: 10vw;
        }
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
    .zein-logo {
      object-fit: contain;
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
