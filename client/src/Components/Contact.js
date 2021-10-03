import React, { useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/Contact";
import { DataArabic } from "../Data/Arabic/Contact";
import ReservationHandler from "../Utilities/ReservationHandler";

import { colors } from "../Styles/Colors";
import Selector from "../Styles/Selector";
import TextField from "../Styles/TextField";

import call from "../Images/call.png";
import newsletter from "../Images/newsletter.png";
import whatsapp_white from "../Images/whatsapp_white.png";
import egyptian_flag from "../Images/egyptian_flag.png";

export default function Contact(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  const options = ["Love Story", "Bella", "Liberty"];
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState(options[0]);
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  // initializa reservation handler
  const reservationInstance = new ReservationHandler();
  return (
    <StyledDiv>
      <div
        className={
          props.language === "EN"
            ? "EnglishComponentPadding"
            : "ArabicComponentPadding"
        }
      >
        <div className="Titles">
          <span className="Title">{Data.Title}&nbsp;</span>
          <span className="TitleBold">{Data.TitleBold}</span>
        </div>
        <table className="ActionTable">
          <tbody>
            <tr>
              <td className="Icons">
                <img
                  src={call}
                  alt="call"
                  className={props.language === "EN" ? "ENicon" : "ARicon"}
                />
              </td>
              <td
                className={
                  props.language === "EN" ? "Action ENcall" : "Action ARcall"
                }
              >
                <div className="ButtonLabel">{Data.ButtonLabel[0]}</div>
                <div>{Data.ButtonAction[0]}</div>
              </td>
              <td className="Icons">
                <img
                  src={newsletter}
                  alt="newsletter"
                  className={props.language === "EN" ? "ENicon" : "ARicon"}
                />
              </td>
              <td
                className={
                  props.language === "EN"
                    ? "Action ENnewsletter"
                    : "Action ARnewsletter"
                }
              >
                {" "}
                <div className="ButtonLabel">{Data.ButtonLabel[1]}</div>
                <div>{Data.ButtonAction[1]}</div>
              </td>
              <td className="Icons">
                <img
                  src={whatsapp_white}
                  alt="whatsapp"
                  className={props.language === "EN" ? "ENicon" : "ARicon"}
                />
              </td>
              <td className="Action Whatsapp">
                {" "}
                <div className="ButtonLabel">{Data.ButtonLabel[2]}</div>
                <div>{Data.ButtonAction[2]}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr className="RowMargin">
              <td>
                {" "}
                <TextField
                  width={"20.9vw"}
                  placeholder={Data.FormInput[0]}
                  language={props.language}
                />
              </td>
              <td>
                {" "}
                <Selector
                  list={Data.FormSelect.Boats}
                  setSelected={setSelected}
                  language={props.language}
                />
              </td>
            </tr>
            <tr className="RowMargin">
              <td>
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className={
                            props.language === "EN"
                              ? "Flag ENflag"
                              : "Flag ARflag"
                          }
                        >
                          {" "}
                          <img
                            src={egyptian_flag}
                            alt="lag"
                            className="EgyptianFlag"
                          />
                        </div>
                      </td>
                      <td>
                        <TextField
                          width={"13.6vw"}
                          placeholder={Data.FormInput[1]}
                          language={props.language}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                {" "}
                <Selector
                  list={Data.FormSelect.Time}
                  setSelected={setSelected}
                  language={props.language}
                />
              </td>
            </tr>
            <tr className="RowMargin">
              <td>
                {" "}
                <TextField
                  width={"20.9vw"}
                  placeholder={Data.FormInput[2]}
                  language={props.language}
                />
              </td>
              <td>
                {" "}
                <Selector
                  list={Data.FormSelect["Event Type"]}
                  setSelected={setSelected}
                  language={props.language}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="Col0"></td>
              <td className="Col1">
                <label class="container">
                  <input
                    type="checkbox"
                    checked={checkboxStatus}
                    onClick={() => setCheckboxStatus(!checkboxStatus)}
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td className="Col2">
                <span onClick={() => setCheckboxStatus(!checkboxStatus)}>
                  {Data.CheckBox}
                </span>
              </td>
              <td className="Col3">
                {" "}
                <div className="Button">{Data.Button}</div>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 4vw 27vw 4.3vw 27vw;
  background-color: ${colors.DarkGrey};
  color: ${colors.White};
  font-family: "Askan Light" !important;
  font-size: 1vw;

  .EnglishComponentPadding {
    text-align: left !important;
  }
  .ArabicComponentPadding {
    text-align: right !important;
  }

  .ActionTable {
    padding-bottom: 2.1vw;
  }
  .TitleBold {
    font-family: "Askan DemiBold" !important;
    padding-bottom: 7vw;
  }
  .Titles {
    font-size: 3.75vw;
    line-height: 3.75vw;
    padding-bottom: 3.6vw;
    text-align: center;
  }
  .ENicon {
    width: 2.8vw;
    margin-right: 1.2vw;
  }
  .ARicon {
    width: 2.8vw;
    margin-left: 1.2vw;
  }
  .Icons {
    width: 4vw;
    text-align: left;
  }
  .Action {
    font-size: 1.4vw;
  }
  .ButtonLabel {
    font-size: 1vw;
  }
  .ENcall {
    padding-right: 4.4vw;
    width: 9.1vw;
  }
  .ARcall {
    padding-left: 4.4vw;
    width: 9.1vw;
  }
  .ENnewsletter {
    padding-right: 3vw;
    width: 9vw;
  }
  .ARnewsletter {
    padding-left: 3vw;
    width: 9vw;
  }
  .Whatsapp {
    width: 7vw;
  }
  .Flag {
    width: 0px;
    background-color: ${colors.Merino} !important;
    height: unset;
    margin-bottom: 1.4vw;
  }
  .ENflag {
    margin-right: 1vw;
    padding: 0.2vw 5vw 0.15vw 0.8vw;
  }
  .ARflag {
    margin-left: 1vw;
    padding: 0.2vw 0.8vw 0.15vw 5vw;
  }
  .EgyptianFlag {
    width: 1.8vw;
    height: 1.25vw;
    padding-top: 0.15vw;
  }
  .Button {
    width: 13.6vw;
    padding: 0.4vw 0vw 0.4vw 0vw;
    font-family: "Askan Light" !important;
    border: none;
    outline: none;
    font-size: 1vw;
    color: ${colors.Merino};
    cursor: pointer;
    background-color: ${colors.LightBlue};
    text-align: center;
  }

  /* The container */
  .container {
    position: relative;
    cursor: pointer;
    font-size: 3.75vw;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1vw;
    width: 1vw;
    background-color: ${colors.Merino};
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: ${colors.Merino};
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 0.28vw;
    top: 0.08vw;
    width: 0.2vw;
    height: 0.6vw;
    border: solid ${colors.DarkGrey};
    border-width: 0 0.2vw 0.2vw 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .Col0 {
    width: 3.7vw;
  }
  .Col1 {
    width: 1.5vw;
    padding-bottom: 1vw;
  }
  .Col2 {
    width: 10.8vw;
    font-size: 1vw;
    color: ${colors.Merino};
  }
  .Col3 {
    width: 28.7vw;
  }

  @media screen and (max-width: 480px) {
    .Flag {
      margin-right: 0vw;
      margin-left: 0vw;
      padding: 0.2vw 5vw 0.26vw 0.8vw;
    }
  }
`;
