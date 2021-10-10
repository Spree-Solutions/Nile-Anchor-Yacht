import React, { useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/NavBar";
import { DataArabic } from "../../Data/Arabic/HomePage/NavBar";

import { colors } from "../../Styles/Colors";
import Main_Logo from "../../Images/Main_Logo.png";

export default function Navbar(props) {
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
                  className="NavSpan"
                  onClick={() =>
                    handleClick(props.References.AboutUsRef, "AboutUs")
                  }
                >
                  {Data.NavTags[0]}{" "}
                </span>
                <span
                  className="NavSpan"
                  onClick={() =>
                    handleClick(props.References.OurYachtsRef, "OurYacht")
                  }
                >
                  {Data.NavTags[1]}{" "}
                </span>
                <span
                  className="NavSpan"
                  onClick={() =>
                    handleClick(props.References.GalleryRef, "Gallery")
                  }
                >
                  {Data.NavTags[2]}{" "}
                </span>
                <span
                  className={
                    language === "EN"
                      ? "NavSpan"
                      : "OurServices CenterTextAlign"
                  }
                  onClick={() =>
                    handleClick(props.References.OurServicesRef, "OurServices")
                  }
                >
                  {Data.NavTags[3]}{" "}
                </span>
                <span
                  className="NavSpan"
                  onClick={() =>
                    handleClick(
                      props.References.AdditionalServicesRef,
                      "AdditionalServices"
                    )
                  }
                >
                  {Data.NavTags[4]}{" "}
                </span>
                <span
                  className="NavSpan"
                  onClick={() =>
                    handleClick(props.References.ContactRef, "Contact")
                  }
                >
                  {Data.NavTags[5]}{" "}
                </span>
                {/* Changing language is commented out, pending arabic content */}
                {/* <span
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
                </span> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  font-family: "Lato Regular" !important;
  color: ${colors.Black};
  font-size: 0.97vw;
  background-color: ${colors.MainBeige};

  .EnglishNavComponentPadding {
    padding: 1.53vw 5.56vw 1.46vw 4vw;
  }
  .ArabicNavComponentPadding {
    padding: 1.53vw 4vw 1.46vw 5.56vw;
  }
  td {
    vertical-align: top;
  }
  .Table {
    width: 100%;
  }
  .LogoCell {
    width: 22vw;
  }
  .NavCell {
    width: 68vw;
    padding-top: 1vw;
  }
  .NavSpan {
    margin-right: 1.4vw;
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
    font-family: "Lato Bold" !important;
  }
  .NormalText {
    font-family: "Lato Regular" !important;
    opacity: 0.8;
  }
  .LogoNavBar {
    width: 11.3vw;
    height: 2.36vw;
  }
  span {
    display: inline-block;
  }
  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
    text-transform: uppercase;
  }
  .CenterTextAlign {
    text-align: center;
  }
`;
