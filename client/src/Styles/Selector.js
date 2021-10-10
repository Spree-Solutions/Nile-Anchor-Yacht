import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/Colors";

export default function Selector(props) {
  return (
    <StyledDiv>
      <select
        onChange={(e) => props.setSelected(e.target.value)}
        className={props.language === "EN" ? "SelectorEN" : "SelectorAR"}
        name={props.name}
        required={props.required}
      >
        {props.disabledOption && (
          <option className="Option" value="" selected disabled>
            {props.disabledOption}
          </option>
        )}
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
  .SelectorEN,
  .SelectorEN:hover,
  .SelectorEN:active {
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
      url('data:image/svg+xml;utf8,<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0H15.5L8 8L0 0Z" fill="%234D4D4F"/></g></svg>')
      no-repeat;
    background-position-x: 95% !important;
    /* background-position-x: 19vw !important; */
    background-position-y: 50% !important;

    /* remove preexisiting arrow  */

    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    -ms-appearance: none !important;
    -o-appearance: none !important;
    appearance: none !important;
  }

  @media screen and (max-width: 620px) {
    .SelectorEN,
    .SelectorEN:hover,
    .SelectorEN:active {
      background: ${colors.Merino}
        url('data:image/svg+xml;utf8,<svg width="8" height="4" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0H15.5L8 8L0 0Z" fill="%234D4D4F"/></g></svg>')
        no-repeat;
      background-position-x: 96% !important;
      /* background-position-x: 17vw !important; */
      background-position-y: 50% !important;
    }
  }

  .SelectorAR,
  .SelectorAR:hover,
  .SelectorAR:active {
    width: 21.4vw;
    text-align-last: right;
    padding: 0.4vw 0.6vw 0.4vw 0vw;
    font-family: "Askan Light" !important;
    border-color: ${colors.Merino}!important;
    outline: none;
    font-size: 1vw;
    color: ${colors.Black};
    cursor: pointer;

    /* adding new arrow    */

    background: ${colors.Merino}
      url('data:image/svg+xml;utf8,<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0H15.5L8 8L0 0Z" fill="%234D4D4F"/></g></svg>')
      no-repeat;
    background-position-x: 1vw !important;
    background-position-y: 50% !important;

    /* remove preexisiting arrow  */

    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    -ms-appearance: none !important;
    -o-appearance: none !important;
    appearance: none !important;
  }

  @media screen and (max-width: 620px) {
    .SelectorAR,
    .SelectorAR:hover,
    .SelectorAR:active {
      background: ${colors.Merino}
        url('data:image/svg+xml;utf8,<svg width="8" height="4" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0H15.5L8 8L0 0Z" fill="%234D4D4F"/></g></svg>')
        no-repeat;
      background-position-x: 0.9vw !important;
      background-position-y: 50% !important;
    }
  }
`;
