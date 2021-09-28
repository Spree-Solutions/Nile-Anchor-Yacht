import React, { useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/OurYachts";
import { DataArabic } from "../../Data/Arabic/HomePage/OurYachts";
import { colors } from "../../Styles/Colors";
import Liberty_Light from "../../Images/Liberty_Light.png";
import Liberty_Image from "../../Images/Liberty_Image.png";
import BellaYellow from "../../Images/BellaYellow.png";

export default function OurYachts(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  const [chosenYacht, setChosenYacht] = useState(Data.Options[0]);
  return (
    <StyledDiv>
      <div
        className={props.language === "EN" ? "LeftTextAlign" : "RightTextAlign"}
      >
        <table>
          <tbody>
            <tr>
              <td className="Col1 Title">
                <div> {Data.TitleBold}</div>
                <div className="TitleRegular"> {Data.Title}</div>
                {Data.List.map((item, index) => (
                  <div className="ListItem">
                    <svg
                      width="0.7vw"
                      height="0.7vw"
                      viewBox="0 0 0.7vw 0.7vw"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        props.language === "EN" ? "ENbullet" : "ARbullet"
                      }
                    >
                      <rect width="0.7vw" height="0.7vw" fill={colors.Black} />
                    </svg>

                    <span
                      onClick={() => {
                        index === 0
                          ? props.executeScroll(props.References.GalleryRef)
                          : props.executeScroll(props.References.ContactRef);
                      }}
                    >
                      {" "}
                      {item}
                    </span>
                  </div>
                ))}
              </td>
              <td>
                <table>
                  <tbody>
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
                        <div className="buttons">
                          {Data.Options.map((yacht, index) => {
                            if (index !== 0) {
                              return (
                                <span>
                                  {" | "}
                                  <span
                                    onClick={() => setChosenYacht(yacht)}
                                    className={
                                      chosenYacht === yacht
                                        ? "chosenButton"
                                        : "clickable"
                                    }
                                  >
                                    {yacht}
                                  </span>
                                </span>
                              );
                            } else {
                              return (
                                <span
                                  onClick={() => setChosenYacht(yacht)}
                                  className={
                                    chosenYacht === yacht
                                      ? "chosenButton"
                                      : "clickable"
                                  }
                                >
                                  {yacht}
                                </span>
                              );
                            }
                          })}
                        </div>
                        <div
                          className={
                            chosenYacht === "Liberty"
                              ? "Liberty_Light_Background"
                              : "Bella_Light_Background"
                          }
                        >
                          {chosenYacht === "Liberty" ? (
                            <img
                              src={Liberty_Light}
                              alt="Liberty"
                              className="Liberty_Light"
                            />
                          ) : (
                            <img
                              src={BellaYellow}
                              alt="Bella"
                              className="BellaYellow"
                            />
                          )}
                        </div>
                        <div className="body">
                          {chosenYacht === "Liberty"
                            ? Data.LibertyBody
                            : Data.BellaBody}
                        </div>
                        <div className="bodyBold">{Data.ReadMore}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 3.7vw 5.7vw 5.8vw 5.5vw;
  background-color: ${colors.White};
  color: ${colors.Navy};
  font-family: "Askan Regular" !important;
  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
  }
  tr,
  td {
    vertical-align: top;
  }
  .ENbullet {
    margin: 0.3vw 0.5vw 0.2vw 0vw;
  }
  .ARbullet {
    margin: 0.3vw 0vw 0.2vw 0.5vw;
  }
  .Title {
    font-family: "Askan DemiBold" !important;
    font-size: 2vw;
    line-height: 2.2vw;
  }
  .TitleRegular {
    font-family: "Askan Light" !important;
    padding-bottom: 6.5vw;
  }
  .ListItem {
    font-family: "Askan DemiBold" !important;
    font-size: 1.1vw;
    line-height: 1.35vw;
    padding-bottom: 0.76vw;
    cursor: pointer;
  }
  .body {
    font-family: "Askan Light" !important;
    font-size: 1vw;
    line-height: 1.2vw;
    padding: 1.875vw 0vw 1.32vw 0vw;
  }
  .bodyBold {
    font-family: "Askan DemiBold" !important;
    font-size: 1.1vw;
    line-height: 1.35vw;
    cursor: pointer;
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
  .Liberty_Light {
    width: 12vw;
    height: 5vw;
  }
  .Liberty_Image {
    width: 48.3vw;
    height: 28.6vw;
    padding: 11.45vw 0vw 0vw 2.4vw;
  }
  .Liberty_Light_Background {
    background-color: ${colors.DarkBlue};
    padding: 2.7vw 2.3vw 2.77vw 2.3vw;
  }
  .Bella_Light_Background {
    background-color: #e8d88b;
    padding: 0.58vw 0vw 0.58vw 0vw;
  }
  .buttons {
    padding: 7.8vw 0vw 1.875vw 0vw;
    font-size: 1.4vw;
    line-height: 1.8vw;
    text-transform: uppercase;
    font-family: "Askan Light" !important;
  }
  .chosenButton {
    font-family: "Askan DemiBold" !important;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .clickable {
    cursor: pointer;
  }
  .BellaYellow {
    width: 16.6vw;
    height: 9.3vw;
  }
`;
