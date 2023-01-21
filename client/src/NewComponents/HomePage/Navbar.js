import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { DataEnglish } from "../../Data/English/HomePage/NavBar";
import { DataArabic } from "../../Data/Arabic/HomePage/NavBar";

import { colors } from "../../Styles/Colors";
import Main_Logo from "../../Images/Main_Logo.png";
import { Link } from "react-router-dom";
import feather from "../../Icons/search.svg";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
  const history = useHistory();
  const location = useLocation();
  console.log(history);
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  const { language, setLanguage } = props;
  // eslint-disable-next-line no-unused-vars
  const [selectedTag, setSelectedTag] = useState("whoWeAre");
  const [navVisible, setNavvisible] = useState(true);
  useEffect(() => {
    setNavvisible(false);
  }, [location]);
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

  function handleClickByHistory(tagId) {
    history.push(`/#${tagId}`);
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
                    ? "LogoCell LeftTextAlign  logo-td"
                    : "LogoCell RightTextAlign logo-td"
                }
              >
                <Link to="/">
                  <img src={Main_Logo} alt="logo" className="LogoNavBar" />
                </Link>
                <div className="mobile-nav">
                  <img
                    className={`feather-icon  ${
                      navVisible ? "rotated-feather" : ""
                    }`}
                    src={feather}
                    onClick={() => setNavvisible(!navVisible)}
                  />
                  <div
                    className={`mobile-nav-list ${
                      navVisible ? "" : "hidden-nav"
                    }`}
                  >
                    <a href="/About" className="NavSpan">
                      {Data.NavTags[0]}{" "}
                    </a>
                    <a href="/#our-yachts" className="NavSpan">
                      {Data.NavTags[1]}{" "}
                    </a>
                    <a href="/#gallery" className="NavSpan">
                      {Data.NavTags[2]}{" "}
                    </a>
                    <a
                      href="/#our-services"
                      className={
                        language === "EN"
                          ? "NavSpan"
                          : "OurServices CenterTextAlign"
                      }
                    >
                      {Data.NavTags[3]}{" "}
                    </a>
                    {/* <a href="/#additional-services" className="NavSpan">
                      {Data.NavTags[4]}{" "}
                    </a> */}
                    <a href="/contact-us" className="NavSpan">
                      {Data.NavTags[5]}{" "}
                    </a>
                  </div>
                </div>
              </td>

              <td
                className={
                  language === "EN"
                    ? "NavCell RightTextAlign"
                    : "NavCell LeftTextAlign"
                }
              >
                <a href="/About" className="NavSpan">
                  {Data.NavTags[0]}{" "}
                </a>
                <a href="/#our-yachts" className="NavSpan">
                  {Data.NavTags[1]}{" "}
                </a>
                <a href="/#gallery" className="NavSpan">
                  {Data.NavTags[2]}{" "}
                </a>
                <a
                  href="/#our-services"
                  className={
                    language === "EN"
                      ? "NavSpan"
                      : "OurServices CenterTextAlign"
                  }
                >
                  {Data.NavTags[3]}{" "}
                </a>
                {/* <a href="/#additional-services" className="NavSpan">
                  {Data.NavTags[4]}{" "}
                </a> */}
                <a href="/contact-us" className="NavSpan">
                  {Data.NavTags[5]}{" "}
                </a>
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
  // font-family: "Lato Regular" !important;
  color: ${colors.Black};
  font-size: 1.1vw;
  background-color: #E6E1D6;
  // border-bottom: solid 0.22vw black;
  height: 5vw;
  @media (max-width: 768px) {
    height: 20.8vw;
  }
  /* position: sticky;
  top: 0; */

  .EnglishNavComponentPadding {
    padding: 0.18vw 5.56vw 0vw 4vw;
  }
  .ArabicNavComponentPadding {
    padding: 1.53vw 4vw 1.46vw 5.56vw;
  }
  td {
    vertical-align: top;
    @media (max-width: 768px) {
      &.logo-td {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-content: center;
        padding: 5.33vw 0vw 5.9vw 0vw;
      }
    }
    .mobile-nav {
      position: relative;
      .feather-icon {
        display: none;
        cursor: pointer;
        @media (max-width: 768px) {
          transition: transform 0.2s ease-in;
          &.rotated-feather {
            transform: rotate(-90deg);
          }
          display: unset;
          width: 8.5vw;
          height: 8.9vw;
        }
      }
      .mobile-nav-list {
        display: none;
        transition: all 0.2s ease-in;
        * {
          transition: all 0.5s ease-in;
        }
        @media (max-width: 768px) {
          &.hidden-nav {
            /* display: none; */
            height: 0;
            padding: 0;
            overflow: hidden;
            box-shadow: none;

            a {
              opacity: 0;
            }
          }
          width: 70vw;
          height: 50vw;
          padding: 2vw;
          background: ${colors.MainBeige};
          display: flex;
          flex-direction: column;
          font-size: 4vw;
          position: absolute;
          right: 0;
          top: 15vw;
          box-shadow: 0vw 0vw 2vw 0.5vw #525252;
          a {
            width: 100%;
            text-align: center;
            margin-bottom: 2.2vw;
          }
        }
      }
    }
  }
  .Table {
    width: 100%;
  }
  .LogoCell {
    width: 22vw;
  }
  .NavCell {
    width: 68vw;
    padding-top: 1.5vw;
    font-weight: 700;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .NavSpan {
    margin-right: 1.4vw;
    cursor: pointer;
    text-align: right;
    text-decoration: none;
    color: black;
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
    font-weight : Bold;
    // font-family: "Lato Bold" !important;
  }
  .NormalText {
    // font-family: "Lato Regular" !important;
    opacity: 0.8;
  }
  .LogoNavBar {
    width: 16.5vw;
    /* height: 2.36vw; */
    @media (max-width: 768px) {
      width: 47.7vw;
      height: 9.6vw;
    }
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
