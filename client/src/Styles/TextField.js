import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/Colors";

export default function TextField(props) {
  return (
    <StyledDiv>
      <input
        style={{ width: props.width }}
        className={props.language === "EN" ? "Input ENInput" : "Input ARInput"}
        placeholder={props.placeholder}
        type="text"
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        required={props.required}
        pattern={props.pattern}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-bottom: 1.4vw;
  .Input,
  .Input:hover,
  .Input:active {
    text-align-last: left;
    padding: 0.4vw 0.6vw 0.4vw 0.6vw;
    font-family: "Askan Light" !important;
    border: none;
    outline: none;
    font-size: 1vw;
    color: ${colors.Black};
    cursor: pointer;
    background-color: ${colors.Merino} !important;
  }
  .ENInput {
    margin-right: 1.6vw;
  }

  .ARInput {
    margin-left: 1.6vw;
  }
`;
