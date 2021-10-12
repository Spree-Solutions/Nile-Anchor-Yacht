import React, { useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/HomePage/Contact";
import { DataArabic } from "../Data/Arabic/HomePage/Contact";
import { ReservationHandler } from "../Utilities/ReservationHandler";
import { DatePickerComponent } from "../NewComponents/DatePicker/DayDatePicker";

import { colors } from "../Styles/Colors";
import Selector from "../Styles/Selector";
import TextField from "../Styles/TextField";

import call from "../Images/call.png";
import newsletter from "../Images/newsletter.png";
import whatsapp_white from "../Images/whatsapp_white.png";
import egyptian_flag from "../Images/egyptian_flag.png";

export default function Contact(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  const options = [ "Liberty"];
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState(options[0]);
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [startHourOptions, setStartHourOptions] = useState([]);
  const [endHourOptions, setEndHourOptions] = useState([]);
  const [finalPrice, setFinalPrice] = useState(null);
  // initializa reservation handler
  const reservationInstance = ReservationHandler.getInstance();
  console.log("before if condition to available startHours", {
    class: reservationInstance,
    state: startHourOptions,
  });
  if (
    reservationInstance.availableStartHours.length > startHourOptions.length
  ) {
    setStartHourOptions(reservationInstance.availableStartHours);
  }
  if (
    reservationInstance.getAvailableEndHours().length !== endHourOptions.length
  ) {
    setEndHourOptions(reservationInstance.getAvailableEndHours());
  }
  if (typeof window !== typeof undefined) {
    window.TanawyComponentTest = reservationInstance;
  }
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
        <table className="form-table">
          <tbody>
            <tr className="RowMargin">
              <td>
                {" "}
                <TextField
                  width={"20.9vw"}
                  placeholder={Data.FormInput[0]}
                  language={props.language}
                  handleChange={(event) => {
                    let name = event.target.value;
                    reservationInstance.username = name;
                  }}
                />
              </td>
              <td>
                {" "}
                <Selector
                  list={Data.FormSelect.Boats}
                  setSelected={(value) => {
                    reservationInstance.setYacht(value);
                    setSelected(value);
                  }}
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
                          id="special-text"
                          width={"13.6vw"}
                          placeholder={Data.FormInput[1]}
                          handleChange={(event) => {
                            console.log(
                              "phone number input debug",
                              event.target.value
                            );
                            reservationInstance.phoneNumber =
                              event.target.value;
                          }}
                          language={props.language}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ verticalAlign: "baseline", paddingTop: "4px" }}>
                {" "}
                <DatePickerComponent
                  onChange={(date) => {
                    date.setHours(8);
                    let formattedDate = date;
                    reservationInstance.reservationDate = formattedDate;
                    reservationInstance.notifyStartHour = () => {
                      console.log(
                        "notify start hours was called",
                        reservationInstance.availableStartHours
                      );
                      setStartHourOptions(
                        reservationInstance.availableStartHours
                      );
                    };
                    console.log("tanawy is testing", { date });
                    window.tanawyTestingVar = date;
                  }}
                  language={props.language}
                />
              </td>
            </tr>
            <tr className="RowMargin">
              <td>
                {" "}
                <Selector
                  list={startHourOptions}
                  disabledOption={
                    !props.language
                      ? "Starting hour"
                      : props.language === "EN"
                      ? "Starting hour"
                      : "ساعة البداية"
                  }
                  setSelected={(data) => {
                    reservationInstance.notifyEndHour = () => {
                      setEndHourOptions(
                        reservationInstance.getAvailableEndHours()
                      );
                    };
                    reservationInstance.startingHour = data;
                    console.log("event trigger on start hour", data);
                  }}
                  language={props.language}
                />
              </td>
              <td>
                {" "}
                <Selector
                  list={endHourOptions}
                  disabledOption={
                    !props.language
                      ? "Ending hour"
                      : props.language === "EN"
                      ? "Ending hour"
                      : "ساعة النهاية"
                  }
                  setSelected={(data) => {
                    reservationInstance.endingHour = data;
                    setFinalPrice(reservationInstance.calculatedFinalPrice);
                    console.log("event trigger on Ending hour", data);
                  }}
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
                  handleChange={(event) => {
                    console.log(
                      "event trigger on email input",
                      event.target.value
                    );
                    reservationInstance.email = event.target.value;
                  }}
                  language={props.language}
                />
              </td>
              <td>
                {" "}
                <Selector
                  list={Data.FormSelect["Event Type"]}
                  setSelected={(data) => {
                    console.log("event trigger on event type input", data);
                    reservationInstance.serviceName = data;
                    setSelected(data);
                  }}
                  language={props.language}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="action-table-booking">
          <tbody>
            <tr>
              <td className="Col0"></td>
              {/* <tr className="special-row-check"> */}
              <td className="Col1">
                <label class="container">
                  <span class="checkmark">
                    <input
                      type="checkbox"
                      checked={checkboxStatus}
                      onClick={() => setCheckboxStatus(!checkboxStatus)}
                    />
                  </span>
                </label>
              </td>
              <td className="Col2">
                <span onClick={() => setCheckboxStatus(!checkboxStatus)}>
                  {Data.CheckBox}
                </span>
              </td>
              {/* </tr> */}
              <tr>
                <td className="Col3">
                  {" "}
                  <div
                    className="Button"
                    onClick={(e) => {
                      reservationInstance.reserve().then((result) => {
                        if (result.error) {
                          // handle error
                          console.log("error returned from reserve()", result);
                        } else {
                          console.log("reserved successfully", result);
                        }
                      });
                    }}
                  >
                    {finalPrice ? `Pay 50% ( EGP ${finalPrice} )` : Data.Button}
                  </div>{" "}
                </td>
              </tr>
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
  @media (max-width: 768px) {
    * {
      /* margin: 0; */
      padding: 0;
      box-sizing: border-box;
    }
    padding: 8vw;
    .Input:not(#special-text) {
      width: 100% !important;
    }
    #special-text {
      width: 26.2vw !important;
    }
    .action-table-booking {
      width: 100%;
      tbody {
        width: 100%;
        tr {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          &:not(.special-row-check) {
            flex-direction: column;
          }
        }
      }
    }
  }

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
    @media (max-width: 768px) {
      width: 6.13vw;
    }
  }
  .ARicon {
    width: 2.8vw;
    margin-left: 1.2vw;
    @media (max-width: 768px) {
      width: 6.13vw;
    }
  }
  .Icons {
    width: 4vw;
    text-align: left;
  }
  .Action {
    font-size: 1.4vw;
    @media (max-width: 768px) {
      font-size: 2.4vw;
      width: 15.2vw;
    }
  }
  .ButtonLabel {
    font-size: 1vw;
    @media (max-width: 768px) {
      font-size: 2.4vw;
      width: 15.2vw;
    }
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
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8.9vw !important;
      margin: 0;
    }
  }
  .ENflag {
    margin-right: 1vw;
    padding: 0.2vw 5vw 0.15vw 0.8vw;
    @media (max-width: 768px) {
      margin: 0;
      padding: 0;
    }
  }
  .ARflag {
    margin-left: 1vw;
    padding: 0.2vw 0.8vw 0.15vw 5vw;
    @media (max-width: 768px) {
      margin: 0;
      padding: 0;
    }
  }
  .EgyptianFlag {
    width: 1.8vw;
    height: 1.25vw;
    padding-top: 0.15vw;
    @media (max-width: 768px) {
      width: 80%;
      height: 4.8vw;
      padding: 0;
    }
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
    @media (max-width: 768px) {
      width: 52.3vw;
      height: 8.8vw;
      font-size: 3.7vw;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      margin-top: 2.4vw;
    }
  }
  .form-table {
    @media (max-width: 768px) {
      width: 100%;
      font-size: 2.4vw !important;
      margin-bottom: 6.4vw;
      tr {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2.7vw;
      }
      td {
        .custom-selector {
          width: 100%;
          font-size: 2.4vw;
        }
        width: 100%;
        & > * {
          height: 8.8vw;
          width: 100%;
          /* width: 100%; */
        }
      }
    }
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
    @media (max-width: 768px) {
      left: -22vw;
      top: 2vw;
      width: 3.7vw;
      height: 3.7vw;
    }
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
    @media (max-width: 768px) {
      font-size: 3.7vw;
      /* width: 100%; */
      width: 34.4vw;
      margin-left: 1vw;
    }
  }
  .Col3 {
    width: 28.7vw;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
