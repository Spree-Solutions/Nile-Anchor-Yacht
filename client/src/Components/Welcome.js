import React from "react";
import styled from "styled-components";
import { Title, TitleBold } from "../Data/WhoAreWe";
import { colors } from "../Styles/Colors";
import Background_Welcome from "../Images/Background_Welcome.png";
import WhoAreWe from "./WhoAreWe";
import NavBar from "./NavBar";

export default function Welcome() {
  return (
    <div>
      <StyledDiv>
        <NavBar />
        <div className="Title">{Title}</div>
        <div className="TitleBold">{TitleBold}</div>
      </StyledDiv>
      <WhoAreWe />
    </div>
  );
}

const StyledDiv = styled.div`
  /* box width and shadow */
  padding: 0vw 0vw 0vw 5.1vw;
  color: ${colors.Merino};
  background-image: url(${Background_Welcome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .Title {
    font-family: "Askan Light" !important;
    text-align: left;
    padding-top: 18vw;
    padding-left: 0.5vw;
    font-size: 4.4vw;
    line-height: 4.4vw;
  }
  .TitleBold {
    font-family: "Askan Bold" !important;
    text-align: left;
    padding-bottom: 11.5vw;
    font-size: 7.4vw;
    line-height: 7.4vw;
  }
`;
