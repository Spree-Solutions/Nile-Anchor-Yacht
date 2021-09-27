import React, { useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/NavBar";
import { DataArabic } from "../Data/Arabic/NavBar";

import { colors } from "../Styles/Colors";
import Main_Logo from "../Images/Main_Logo.png";

export default function NavBar(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  const { language, setLanguage } = props;
  // eslint-disable-next-line no-unused-vars
  const [selectedTag, setSelectedTag] = useState("whoWeAre");
  const changeToAR = () => {
    if (language !== "AR") {
      setLanguage("AR");
    }
  };
  const changeToEN = () => {
    if (language !== "EN") {
      setLanguage("EN");
    }
  };

  function handleClick(Reference, Tag) {
    props.executeScroll(Reference);
    setSelectedTag(Tag);
  }
  return (
    <StyledDiv>
      <div
        className={
          language === "EN"
            ? "EnglishNavComponentPadding"
            : "ArabicNavComponentPadding"
        }
      >
        <table className="Table">
          <tbody>
            <tr>
              <td
                className={
                  language === "EN"
                    ? "LogoCell LeftTextAlign"
                    : "LogoCell RightTextAlign"
                }
              >
                <img src={Main_Logo} alt="logo" className="LogoNavBar" />
              </td>

              <td
                className={
                  language === "EN"
                    ? "NavCell RightTextAlign"
                    : "NavCell LeftTextAlign"
                }
              >
                <span
                  className="whoWeAre"
                  onClick={() =>
                    handleClick(props.References.WelceomeRef, "whoWeAre")
                  }
                >
                  {Data.NavTags[0]}{" "}
                </span>
                <span
                  className="OurYacht"
                  onClick={() =>
                    handleClick(props.References.OurYachtsRef, "OurYacht")
                  }
                >
                  {Data.NavTags[1]}{" "}
                </span>
                <span
                  className="Gallery"
                  onClick={() =>
                    handleClick(props.References.GalleryRef, "Gallery")
                  }
                >
                  {Data.NavTags[2]}{" "}
                </span>
                <span
                  className={
                    language === "EN"
                      ? "OurServices"
                      : "OurServices CenterTextAlign"
                  }
                  onClick={() =>
                    handleClick(props.References.OurServicesRef, "OurServices")
                  }
                >
                  {Data.NavTags[3]}{" "}
                </span>
                <span
                  className="Contact"
                  onClick={() =>
                    handleClick(props.References.ContactRef, "Contact")
                  }
                >
                  {Data.NavTags[4]}{" "}
                </span>
                <span
                  className={
                    language === "EN" ? "EN BoldText" : "EN NormalText"
                  }
                  onClick={changeToEN}
                >
                  EN
                </span>
                <span className="BoldText">| </span>
                <span
                  className={
                    language === "AR" ? "AR BoldText" : "AR NormalText"
                  }
                  onClick={changeToAR}
                >
                  عربي
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  font-family: "Askan Regular" !important;
  color: ${colors.Black};
  font-size: 1.25vw;

  .EnglishNavComponentPadding {
    padding: 2.2vw 5.6vw 2.1vw 0vw;
  }
  .ArabicNavComponentPadding {
    padding: 2.2vw 0vw 2.1vw 5.6vw;
  }

  td {
    vertical-align: top;
  }
  .Table {
    width: 100%;
  }
  .LogoCell {
    width: 25%;
  }
  .NavCell {
    width: 75%;
    padding-top: 0.5vw;
  }
  .whoWeAre {
    margin-right: 1.7vw;
    min-width: 6.6vw;
    cursor: pointer;
    text-align: right;
  }
  .OurYacht {
    margin-right: 1vw;
    min-width: 6.6vw;
    cursor: pointer;
    text-align: right;
  }
  .Gallery {
    margin-right: 1.1vw;
    min-width: 4.5vw;
    cursor: pointer;
    text-align: right;
  }
  .OurServices {
    margin-right: 0.88vw;
    min-width: 7.4vw;
    cursor: pointer;
  }
  .Contact {
    margin-right: 1.65vw;
    min-width: 5.1vw;
    cursor: pointer;
    text-align: right;
  }
  .EN {
    min-width: 2.4vw;
    cursor: pointer;
  }
  .AR {
    min-width: 3vw;
    cursor: pointer;
  }
  .BoldText {
    font-family: "Askan DemiBold" !important;
  }
  .NormalText {
    font-family: "Askan Regular" !important;
    opacity: 0.8;
  }
  .LogoNavBar {
    width: 17.7vw;
    height: 3.68vw;
  }
  span {
    display: inline-block;
  }
`;
