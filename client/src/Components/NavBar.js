import React, { useState } from "react";
import styled from "styled-components";
import { NavTags } from "../Data/NavBar";
import { colors } from "../Styles/Colors";
import Main_Logo from "../Images/Main_Logo.png";

export default function NavBar(props) {
  const [language, setLanguage] = useState("EN");
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
      <table className="Table">
        <tbody>
          <tr>
            <td className="LogoCell">
              <img src={Main_Logo} alt="logo" className="LogoNavBar" />
            </td>

            <td className="NavCell">
              <span
                className={
                  selectedTag === "whoWeAre" ? "whoWeAre BoldText" : "whoWeAre"
                }
                onClick={() =>
                  handleClick(props.References.WelceomeRef, "whoWeAre")
                }
              >
                {NavTags[0]}{" "}
              </span>
              <span
                className={
                  selectedTag === "OurYacht" ? "OurYacht BoldText" : "OurYacht"
                }
                onClick={() =>
                  handleClick(props.References.OurYachtsRef, "OurYacht")
                }
              >
                {NavTags[1]}{" "}
              </span>
              <span
                className={
                  selectedTag === "Gallery" ? "Gallery BoldText" : "Gallery"
                }
                onClick={() =>
                  handleClick(props.References.GalleryRef, "Gallery")
                }
              >
                {NavTags[2]}{" "}
              </span>
              <span
                className={
                  selectedTag === "OurServices"
                    ? "OurServices BoldText"
                    : "OurServices"
                }
                onClick={() =>
                  handleClick(props.References.OurServicesRef, "OurServices")
                }
              >
                {NavTags[3]}{" "}
              </span>
              <span
                className={
                  selectedTag === "Contact" ? "Contact BoldText" : "Contact"
                }
                onClick={() =>
                  handleClick(props.References.ContactRef, "Contact")
                }
              >
                {NavTags[4]}{" "}
              </span>
              <span
                className={language === "EN" ? "EN BoldText" : "EN NormalText"}
                onClick={changeToEN}
              >
                EN
              </span>
              <span className="BoldText">| </span>
              <span
                className={language === "AR" ? "AR BoldText" : "AR NormalText"}
                onClick={changeToAR}
              >
                عربي
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 2.2vw 5.6vw 2.1vw 0vw;
  font-family: "Askan Regular" !important;
  color: ${colors.Black};
  font-size: 1.25vw;

  td {
    vertical-align: top;
  }
  .Table {
    width: 100%;
  }
  .LogoCell {
    width: 25%;
    text-align: left;
  }
  .NavCell {
    width: 75%;
    text-align: right;
    padding-top: 0.5vw;
  }
  .whoWeAre {
    margin-right: 1.7vw;
    min-width: 6.6vw;
    cursor: pointer;
  }
  .OurYacht {
    margin-right: 1vw;
    min-width: 6.6vw;
    cursor: pointer;
  }
  .Gallery {
    margin-right: 1.1vw;
    min-width: 4.5vw;
    cursor: pointer;
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
