import React from "react";
import styled from "styled-components";
import { Title, TitleBold } from "../Data/English/Gallery";
import { colors } from "../Styles/Colors";
import Bella_Light from "../Images/Bella_Light.png";
import Liberty_Light from "../Images/Liberty_Light.png";
import Love_Story_Light from "../Images/Love_Story_Light.png";
import Liberty_Image from "../Images/Liberty_Image.png";

export default function Gallery() {
  return (
    <StyledDiv>
      <table>
        <tbody>
          <tr>
            <td className="Col1">
              <div className="Title">{Title}</div>
              <div className="TitleBold">{TitleBold}</div>
              <div>
                <img
                  src={Love_Story_Light}
                  alt="Love_Story"
                  className="Love_Story_Light"
                />
              </div>
              <div>
                <img src={Bella_Light} alt="Bella" className="Bella_Light" />
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
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 3vw 12vw 5.2vw 5.6vw;
  background-color: ${colors.Black};
  text-align: left;
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
`;
