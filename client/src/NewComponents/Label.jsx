import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/Colors";

const Label = () => {
  // Clipped shape, the container position must be set as relative
  return (
    <Styled>
      <div>
        <p>HOTLINE : 012 1114 0222</p>
      </div>
    </Styled>
  );
};
const Styled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  div {
    font-family: "Lato Regular";
    font-size: 2vw;
    position: relative;
    background: ${colors.Navy};
    color: white;
    width: 30vw;
    height: 14vw;
    clip-path: polygon(20% 68%, 100% 68%, 100% 100%, 0% 100%);
    @media (max-width: 768px) {
      width: 60vw;
      height: 30vw;
      font-size: 4vw;
    }
    p {
      position: absolute;
      bottom: 0.8vw;
      right: 0.5vw;
      margin: 0;
      @media (max-width: 768px) {
        bottom: 1.9vw;
        right: 1vw;
      }
    }
  }
`;
export default Label;
