import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/Colors";

export default function TextField(props) {
  return (
    <StyledDiv>
      <input
        className={
          props.language === "EN"
            ? `${props.className || ""}Input ENInput`
            : "Input ARInput"
        }
        placeholder={props.placeholder}
        type="text"
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        required={props.required}
        pattern={props.pattern}
        id={props.id}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  .Input,
  .Input:hover,
  .Input:active {
    width: 100%;
    text-align-last: left;
    padding: 0.4vw 0.6vw 0.4vw 0.6vw;
    font-family: "Askan Light" !important;
    border: none;
    outline: none;
    font-size: 1vw;
    color: ${colors.Black};
    cursor: pointer;
    background-color: ${colors.Merino} !important;
    @media (max-width: 768px) {
      font-size: 2.4vw;
    }
  }
  .ENInput {
    /* margin-right: 1.6vw; */
    box-sizing: border-box;
    @media (max-width: 768px) {
      margin: 0;
    }
  }

  .ARInput {
    margin-left: 1.6vw;
    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;
