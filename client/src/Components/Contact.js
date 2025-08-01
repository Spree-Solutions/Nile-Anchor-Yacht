import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/HomePage/Contact";
import { DataArabic } from "../Data/Arabic/HomePage/Contact";
import { ReservationHandler } from "../Utilities/ReservationHandler";
import { DatePickerComponent } from "../NewComponents/DatePicker/DayDatePicker";

import { colors } from "../Styles/Colors";
import Selector from "../Styles/Selector";
import TextField from "../Styles/TextField";

import call from "../Images/Phone.png";
import newsletter from "../Images/Email.png";
import whatsapp_white from "../Images/Whatsaap.png";
import PaymentModal from "./PaymentModal";

export default function Contact(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  const options = ["Liberty"];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(true);
  };
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState(options[0]);
  const [errorCount, setCountError] = useState(false);
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

  useEffect(() => {
    if (
      selected === "Liberty" &&
      reservationInstance.countHours < 2 &&
      finalPrice !== null
    ) {
      setCountError(true);
    } else {
      setCountError(false);
    }
  }, [selected, reservationInstance.countHours, finalPrice]);

  return (
    <StyledDiv id="booking">
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
                <div className="ButtonLabel">Contact Us</div>
                <div>
                  <a href="tel:+201211140222">01211140222</a>
                </div>
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
                <div className="ButtonLabel">E-mail</div>
                <div>
                  <a
                    href="mailto:Reservation@thenileanchor.com
"
                  >
                    Reservation@thenileanchor.com
                  </a>
                </div>
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
                <div className="ButtonLabel">Chat with us on</div>
                <div>
                  <a target="__blank" href="https://wa.me/+201211140222">
                    WhatsApp
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!reservationInstance.isReserveReady() || errorCount) {
              return;
            }
            handleSubmit();
            // reservationInstance.reserve().then((result) => {
            //   if (result.error) {
            //     // handle error
            //     console.log("error returned from reserve()", result);
            //   } else {
            //     console.log("reserved successfully", result);
            //   }
            // });
          }}
        >
          <table className="form-table">
            <tbody>
              <tr className="RowMargin">
                <td>
                  {" "}
                  <TextField
                    required={true}
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
                    required={true}
                    list={Data.FormSelect.Boats}
                    setSelected={(value) => {
                      reservationInstance.setYacht(value);
                      setSelected(value);
                      setFinalPrice(reservationInstance.calculatedFinalPrice);
                    }}
                    language={props.language}
                  />
                  {selected === "Liberty" && (
                    <span className="text-alert">
                      This Yacht At Least 2 Hours
                    </span>
                  )}
                </td>
              </tr>
              <tr className="RowMargin">
                <td className="flag-td">
                  <TextField
                    required={true}
                    placeholder={Data.FormInput[1]}
                    handleChange={(event) => {
                      console.log(
                        "phone number input debug",
                        event.target.value
                      );
                      reservationInstance.phoneNumber = event.target.value;
                    }}
                    language={props.language}
                  />
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
                    required={true}
                    list={startHourOptions.map((hour) =>
                      hour > 12
                        ? hour === 24
                          ? "12 AM"
                          : hour === 25
                          ? "1 AM"
                          : `${hour % 12} PM`
                        : hour === 12
                        ? "12 PM"
                        : `${hour} AM`
                    )}
                    id="start-hour"
                    // style={{ width: "39.2vw" }}
                    disabledOption={
                      !props.language
                        ? "Starting hour"
                        : props.language === "EN"
                        ? "Starting hour"
                        : "ساعة البداية"
                    }
                    setSelected={(data) => {
                      let formattedData = data;
                      if (typeof data === typeof "" && data.length > 2) {
                        let lastElem = data[data.length - 1];
                        if (lastElem === "M") {
                          if (data === "12 AM") {
                            formattedData = 24;
                          } else if (data === "12 PM") {
                            formattedData = 12;
                          } else if (data === "1 AM") {
                            formattedData = 25;
                          } else if (data[data.length - 2] === "P") {
                            formattedData = Number(data.split(" ")[0]) + 12;
                          } else {
                            formattedData = Number(data.split(" ")[0]);
                          }
                        }
                      }
                      reservationInstance.notifyEndHour = () => {
                        setEndHourOptions(
                          reservationInstance.getAvailableEndHours()
                        );
                      };
                      reservationInstance.startingHour = formattedData;
                      console.log("event trigger on start hour", data);
                    }}
                    language={props.language}
                  />
                </td>
                <td>
                  {" "}
                  <Selector
                    required={true}
                    list={endHourOptions.map((hour) =>
                      hour > 12
                        ? hour === 24
                          ? "12 AM"
                          : hour === 25
                          ? "1 AM"
                          : `${hour % 12} PM`
                        : hour === 12
                        ? "12 PM"
                        : `${hour} AM`
                    )}
                    disabledOption={
                      !props.language
                        ? "Ending hour"
                        : props.language === "EN"
                        ? "Ending hour"
                        : "ساعة النهاية"
                    }
                    setSelected={(data) => {
                      let formattedData = data;
                      if (typeof data === typeof "" && data.length > 2) {
                        let lastElem = data[data.length - 1];
                        if (lastElem === "M") {
                          if (data === "12 AM") {
                            formattedData = 24;
                          } else if (data === "12 PM") {
                            formattedData = 12;
                          } else if (data === "1 AM") {
                            formattedData = 25;
                          } else if (data[data.length - 2] === "P") {
                            formattedData = Number(data.split(" ")[0]) + 12;
                          } else {
                            formattedData = Number(data.split(" ")[0]);
                          }
                        }
                      }

                      reservationInstance.endingHour = formattedData;
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
                    required={true}
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
                    required={true}
                    list={Data.FormSelect["Event Type"]}
                    disabledOption="Event type"
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
                <tr className="btns-final">
                  <td className="Col3">
                    {" "}
                    <button
                      type="submit"
                      // disabled={!finalPrice}
                      className={`final-button ${
                        !finalPrice || errorCount ? "ButtonDisabled" : ""
                      }`}
                    >
                      {finalPrice
                        ? `Pay 50% ( EGP ${finalPrice / 2} )`
                        : Data.Button}
                    </button>{" "}
                  </td>
                  {finalPrice > 0 && (
                    <td>
                      {" "}
                      <div className="final-msg">
                        {`Initial price EGP  ${finalPrice}`}
                      </div>{" "}
                    </td>
                  )}
                </tr>
                {errorCount && (
                  <span>Please At Least 2 Hours For Liberty Yacht</span>
                )}
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 4vw 5vw 4.3vw 5vw;
  background-color: ${colors.MainBeige};
  color: ${colors.Navy};
  font-family: "Askan Light" !important;
  font-size: 1vw;
  .action-table-booking {
    margin: auto;
  }
  @media (max-width: 768px) {
    * {
      padding: 0;
      box-sizing: border-box;
    }
    padding: 8vw 0;
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
    margin: auto;
    padding-bottom: 2.1vw;
    @media (max-width: 768px) {
      width: 100vw;
    }
  }
  .TitleBold {
    font-weight: Bold;
    // font-family: "Askan DemiBold" !important;
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
    a {
      text-decoration: none;
      color: ${colors.Navy};
    }
  }
  .ARcall {
    padding-left: 4.4vw;
    width: 9.1vw;
  }
  .ENnewsletter {
    padding-right: 3vw;
    width: 9vw;
    a {
      text-decoration: none;
      color: ${colors.Navy};
    }
  }
  .ARnewsletter {
    padding-left: 3vw;
    width: 9vw;
  }
  .Whatsapp {
    width: 7vw;
    a {
      text-decoration: none;
      color: ${colors.Navy};
    }
  }
  /* .FlagTable {
    margin: 0;
    padding: 0;
    tbody {
    }
    tr {
      display: flex;
      justify-content: space-between;
      .Number {
        width: 80%;
        .ENInput {
          padding: 0.4vw 0;
          margin: 0;
        }
      }
    }
  } */

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
  .ButtonDisabled {
    background: grey;
    cursor: not-allowed;
  }
  .final-message {
    font-size: 1vw;
    @media (max-width: 768px) {
      font-size: 2.4vw;
      margin-top: 2vw;
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
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .form-table {
    margin: auto;
    width: 80%;

    tbody {
      tr {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1vw;
        @media screen and (max-width: 786px) {
          flex-direction: column;
          margin-bottom: 0;
          td {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            margin-bottom: 4vw !important;
            input,
            select {
              height: 8.8vw !important;
            }
          }
        }
        td {
          width: 47%;
          &.flag-td {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .Flag {
              width: 10%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
