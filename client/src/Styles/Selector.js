import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/Colors";

export default function Selector(props) {
  return (
    <StyledDiv>
      <select
        onChange={(e) => props.setSelected(e.target.value)}
        className="Selector"
      >
        {props.list.map((item) => (
          <option className="Option" value={item}>
            {item}
          </option>
        ))}
      </select>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-bottom: 1.4vw;
  .Selector,
  .Selector:hover,
  .Selector:active {
    width: 21.4vw;
    text-align-last: left;
    padding: 0.4vw 0vw 0.4vw 0.6vw;
    font-family: "Askan Light" !important;
    border-color: ${colors.Merino}!important;
    outline: none;
    font-size: 1vw;
    color: ${colors.Black};
    cursor: pointer;

    /* adding new arrow    */

    background: ${colors.Merino}
      url('data:image/svg+xml;utf8,<svg width="10" height="5" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0H15.5L8 8L0 0Z" fill="%234D4D4F"/></g></svg>')
      no-repeat;
    background-position-x: 19vw !important;
    background-position-y: 50% !important;

    /* remove preexisiting arrow  */

    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    -ms-appearance: none !important;
    -o-appearance: none !important;
    appearance: none !important;
  }
`;
