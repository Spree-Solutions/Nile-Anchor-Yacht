import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/OurYachts";
import { DataArabic } from "../Data/Arabic/OurYachts";

import { colors } from "../Styles/Colors";
import Bella_Dark from "../Images/Bella_Dark.png";
import Liberty_Dark from "../Images/Liberty_Dark.png";
import Liberty_Light from "../Images/Liberty_Light.png";
import Liberty_Image from "../Images/Liberty_Image.png";
import Love_Story_Dark from "../Images/Love_Story_Dark.png";

import { isMobileOnly } from "react-device-detect";

export default function OurYachts(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <StyledDiv>
      {isMobileOnly ? (
        <div className="MobileViewPadding">
          <table>
            <tbody>
              <tr>
                <td className="Title_Mobile">
                  <div> {Data.Title}</div>
                  <div className="TitleBold"> {Data.TitleBold}</div>
                </td>
                <td>
                  <img
                    src={Love_Story_Dark}
                    alt="Love Story"
                    className="Love_Story_Dark_Mobile"
                  />
                  <img src={Bella_Dark} alt="Bella" className="Bella_Mobile" />
                  <img
                    src={Liberty_Dark}
                    alt="Liberty"
                    className="Liberty_Dark_Mobile"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <img
              src={Liberty_Image}
              alt="Liberty"
              className="Liberty_Image_Mobile"
            />
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td className="ImageCol">
                    <div className="Liberty_Light_Background">
                      <img
                        src={Liberty_Light}
                        alt="Liberty"
                        className="Liberty_Light_Mobile"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="body_Mobile">{Data.body}</div>
                    <div className="bodyBold_Mobile">{Data.bodyBold}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ListItems_Mobile">
            {Data.List.map((item, index) => (
              <span className="ListItem_Mobile">
                <svg
                  width="1.3vw"
                  height="1.3vw"
                  viewBox="0 0 1.3vw 1.3vw"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bullet_Mobile"
                >
                  <rect width="1.3vw" height="1.3vw" fill={colors.Black} />
                </svg>
                <span> {item}</span>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <table>
          <tbody>
            <tr>
              <td className="Col1">
                <div className="Title"> {Data.Title}</div>
                <div className="TitleBold"> {Data.TitleBold}</div>
                {Data.List.map((item, index) => (
                  <div className="ListItem">
                    <svg
                      width="0.7vw"
                      height="0.7vw"
                      viewBox="0 0 0.7vw 0.7vw"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="bullet"
                    >
                      <rect width="0.7vw" height="0.7vw" fill={colors.Black} />
                    </svg>

                    <span> {item}</span>
                  </div>
                ))}
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <div className="images">
                          <img
                            src={Love_Story_Dark}
                            alt="Love Story"
                            className="Love_Story_Dark"
                          />
                          <img src={Bella_Dark} alt="Bella" className="Bella" />
                          <img
                            src={Liberty_Dark}
                            alt="Liberty"
                            className="Liberty_Dark"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <div className="Col2">
                          <img
                            src={Liberty_Image}
                            alt="Liberty"
                            className="Liberty_Image"
                          />
                        </div>
                      </td>
                      <td className="Col3">
                        {" "}
                        <div className="Liberty_Light_Background">
                          {" "}
                          <img
                            src={Liberty_Light}
                            alt="Liberty"
                            className="Liberty_Light"
                          />
                        </div>
                        <div className="body">{Data.body}</div>
                        <div className="bodyBold">{Data.bodyBold}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 4.1vw 5.9vw 5.3vw 5.9vw;
  background-color: ${colors.Merino};
  text-align: left;
  color: ${colors.Black};
  font-family: "Askan Regular" !important;

  tr,
  td {
    vertical-align: top;
  }
  .bullet {
    margin: 0.3vw 0.5vw 0.2vw 0vw;
  }

  .Title {
    font-family: "Askan Light" !important;
    font-size: 3.75vw;
    line-height: 3.75vw;
  }
  .TitleBold {
    font-family: "Askan DemiBold" !important;
    padding-bottom: 4.8vw;
  }
  .ListItem {
    font-family: "Askan DemiBold" !important;
    font-size: 1.6vw;
    line-height: 2vw;
    padding-bottom: 0.76vw;
  }
  .body {
    font-family: "Askan Light" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    padding: 1.18vw 0vw 1.32vw 0.7vw;
  }
  .bodyBold {
    font-family: "Askan DemiBold" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    padding-left: 0.7vw;
  }

  .Col1 {
    width: 21vw;
  }
  .Col2 {
    width: 51.5vw;
  }
  .Col3 {
    width: 17vw;
  }

  .Love_Story_Dark {
    width: 11.1vw;
    height: 2.8vw;
    padding-right: 2.7vw;
  }
  .Bella {
    width: 7.6vw;
    height: 2.8vw;
    padding-right: 2.6vw;
  }
  .Liberty_Dark {
    width: 9.2vw;
    height: 3.4vw;
  }
  .Liberty_Light {
    width: 12vw;
    height: 5vw;
  }
  .Liberty_Image {
    width: 48.3vw;
    height: 28.6vw;
    padding: 0vw 0vw 0vw 2.4vw;
  }
  .Liberty_Light_Background {
    background-color: ${colors.DarkBlue};
    padding: 2.7vw 2.3vw 2.77vw 2.3vw;
  }
  .images {
    padding: 5vw 2.6vw 2.5vw 2.4vw;
  }
  .MobileViewPadding {
    padding: 2.3vw 2.1vw 10.2vw 2.1vw;
  }

  .Love_Story_Dark_Mobile {
    width: 18.7vw;
    height: 4.8vw;
    padding-right: 4.27vw;
    padding-left: 4vw;
    padding-top: 5.9vw;
  }
  .Bella_Mobile {
    width: 12.8vw;
    height: 4.8vw;
    padding-right: 4vw;
    padding-top: 5.9vw;
  }
  .Liberty_Dark_Mobile {
    width: 15.2vw;
    height: 5.6vw;
    padding-top: 5.1vw;
  }
  .Title_Mobile {
    font-family: "Askan Light" !important;
    font-size: 6.7vw;
    line-height: 6.7vw;
  }
  .Liberty_Image_Mobile {
    width: 84vw;
    height: 49.6vw;
    padding-bottom: 4.3vw;
  }
  .Liberty_Light_Mobile {
    width: 28.5vw;
    height: 11.8vw;
    margin: 3.6vw 3.1vw 3.68vw 3.3vw;
  }
  .body_Mobile {
    font-family: "Askan Light" !important;
    font-size: 3.2vw;
    line-height: 3.6vw;
    padding: 0vw 0vw 0.7vw 5vw;
  }
  .bodyBold_Mobile {
    font-family: "Askan DemiBold" !important;
    font-size: 3.2vw;
    line-height: 3.6vw;
    padding-left: 5vw;
  }
  .ListItem_Mobile {
    font-size: 3.2vw;
    line-height: 3.6vw;
    margin: 0vw 4.54vw 0vw 0vw;
  }
  .bullet_Mobile {
    margin: 0vw 2.2vw 0vw 0vw;
  }
  .ListItems_Mobile {
    margin: 8vw 0vw 0vw 0vw;
    text-align: center;
  }
`;
