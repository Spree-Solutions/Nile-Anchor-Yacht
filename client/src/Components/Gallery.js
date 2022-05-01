import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/Gallery";
import { DataArabic } from "../Data/Arabic/Gallery";

import { colors } from "../Styles/Colors";
import Bella_Light from "../Images/Bella_Light.png";
import Liberty_Light from "../Images/Liberty_Light.png";
import Love_Story_Light from "../Images/Love_Story_Light.png";

import Liberty_Image from "../Images/Liberty_Image.png";
import Liberty_Image1 from "../Images/Liberty_Image1.jpeg";
import Liberty_Image2 from "../Images/Liberty_Image2.jpeg";

import { isMobileOnly } from "react-device-detect";

export default function Gallery(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <div>
      {isMobileOnly ? (
        <StyledMobileDiv>
          <div className="TitleMobile">{Data.Title}</div>
          <div className="TitleBoldMobile">{Data.TitleBold}</div>
          <img
            src={Liberty_Image1}
            alt="Liberty"
            className="Liberty_Image_Large"
          />
          <div className="BoatName">
            <img
              src={Love_Story_Light}
              alt="Love_Story"
              className="Love_Story_Mobile"
            />
          </div>
          <div>
            <img
              src={Liberty_Image}
              alt="Liberty"
              className="Liberty_Image_Small LeftImage"
            />
            <img
              src={Liberty_Image2}
              alt="Liberty"
              className="Liberty_Image_Small"
            />
          </div>
        </StyledMobileDiv>
      ) : (
        <StyledDiv>
          <div
            className={
              props.language === "EN"
                ? "EnglishComponentPadding"
                : "ArabicComponentPadding"
            }
          >
            <table>
              <tbody>
                <tr>
                  <td className="Col1">
                    <div className="Title">{Data.Title}</div>
                    <div className="TitleBold">{Data.TitleBold}</div>
                    <div>
                      <img
                        src={Love_Story_Light}
                        alt="Love_Story"
                        className="Love_Story_Light"
                      />
                    </div>
                    <div>
                      <img
                        src={Bella_Light}
                        alt="Bella"
                        className="Bella_Light"
                      />
                    </div>
                    <div>
                      <img
                        src={Liberty_Light}
                        alt="Liberty"
                        className="Liberty_Light"
                      />
                    </div>
                  </td>
                  <td className="Col2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                          <td className="ImageCell">
                            {" "}
                            <img
                              src={Liberty_Image}
                              alt="Liberty"
                              className="Liberty_Image"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="ServicesTitle Title">
              <span>{Data.ServicesTitle}</span>
              <span className="TitleBold">{Data.ServicesTitleBold}</span>
            </div>
          </div>
        </StyledDiv>
      )}
    </div>
  );
}
const StyledDiv = styled.div`
  background-color: ${colors.DarkGrey};
  color: ${colors.White};
  font-family: "Askan Regular" !important;

  tr,
  td {
    vertical-align: top;
  }
  .Col1 {
    width: 26vw;
  }
  .Col2 {
    padding-top: 3.2vw;
  }
  .ImageCell {
    padding: 1.25vw 1.04vw 1.25vw 1.04vw;
  }

  .Title {
    font-family: "Askan Light" !important;
    font-size: 3.75vw;
    line-height: 3.75vw;
  }
  .TitleBold {
    font-family: "Askan DemiBold" !important;
    font-size: 3.75vw;
    line-height: 3.75vw;
    padding-bottom: 7vw;
  }

  .EnglishComponentPadding {
    padding: 3vw 12vw 1.7vw 5.6vw;
    text-align: left;
  }
  .ArabicComponentPadding {
    padding: 3vw 5.6vw 1.7vw 12vw;
    text-align: right;
  }

  .Love_Story_Light {
    width: 11vw;
    height: 2.85vw;
    padding: 1vw 0vw 1vw 0.9vw;
  }
  .Bella_Light {
    width: 8.55vw;
    height: 3.2vw;
    padding: 1vw 0vw 1vw 1.4vw;
  }
  .Liberty_Light {
    width: 9.15vw;
    height: 3.9vw;
    padding: 1vw 0vw 1vw 1.1vw;
  }
  .Liberty_Image {
    width: 18vw;
    height: 9.7vw;
  }

  .ServicesTitle {
    margin-top: 8vw;
    color: ${colors.Merino};
  }
`;

const StyledMobileDiv = styled.div`
  padding: 6.4vw 8.27vw 8.27vw 7.73vw;
  background-color: ${colors.DarkBlack};
  text-align: left;
  color: ${colors.Merino};
  font-family: "Askan Regular" !important;

  .TitleMobile {
    font-size: 6.7vw;
    line-height: 6.7vw;
  }
  .TitleBoldMobile {
    font-family: "Askan DemiBold" !important;
    font-size: 6.7vw;
    line-height: 6.7vw;
    padding-bottom: 4.53vw;
  }
  .Liberty_Image_Large {
    width: 84vw;
    height: 49.6vw;
    padding-bottom: 6.93vw;
  }
  .Liberty_Image_Small {
    width: 39.2vw;
    height: 22.93vw;
  }
  .LeftImage {
    margin-right: 5.6vw;
  }
  .Love_Story_Mobile {
    width: 31.47vw;
    height: 8vw;
    padding-bottom: 7.2vw;
  }
  .BoatName {
    text-align: center;
  }
`;
