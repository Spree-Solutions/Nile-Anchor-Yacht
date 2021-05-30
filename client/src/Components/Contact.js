import React, { useState } from "react";

import styled from "styled-components";
import {
  Title,
  TitleBold,
  ButtonLabel,
  ButtonAction,
  FormInput,
  FormSelect,
  CheckBox,
  Button,
} from "../Data/Contact";

import { colors } from "../Styles/Colors";
import Selector from "../Styles/Selector";
import TextField from "../Styles/TextField";

import call from "../Icons/call.svg";
import newsletter from "../Icons/newsletter.svg";
import whatsapp_white from "../Icons/whatsapp_white.svg";
import egyptian_flag from "../Icons/egyptian_flag.svg";

export default function Contact() {
  const options = ["Love Story", "Bella", "Liberty"];
  const [selected, setSelected] = useState(options[0]);
  return (
    <StyledDiv>
      <div className="Titles">
        <span className="Title">{Title}&nbsp;</span>
        <span className="TitleBold">{TitleBold}</span>
      </div>
      <table className="ActionTable">
        <tbody>
          <tr>
            <td className="Icons">
              <img src={call} alt="call" className="icon" />
            </td>
            <td className="Action Call">
              <div className="ButtonLabel">{ButtonLabel[0]}</div>
              <div>{ButtonAction[0]}</div>
            </td>
            <td className="Icons">
              <img src={newsletter} alt="newsletter" className="icon" />
            </td>
            <td className="Action Newsletter">
              {" "}
              <div className="ButtonLabel">{ButtonLabel[1]}</div>
              <div>{ButtonAction[1]}</div>
            </td>
            <td className="Icons">
              <img src={whatsapp_white} alt="whatsapp" className="icon" />
            </td>
            <td className="Action Whatsapp">
              {" "}
              <div className="ButtonLabel">{ButtonLabel[2]}</div>
              <div>{ButtonAction[2]}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr className="RowMargin">
            <td>
              {" "}
              <TextField width={"20.9vw"} placeholder={FormInput[0]} />
            </td>
            <td>
              {" "}
              <Selector list={FormSelect.Boats} setSelected={setSelected} />
            </td>
          </tr>
          <tr className="RowMargin">
            <td>
              {" "}
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="Flag">
                        {" "}
                        <img
                          src={egyptian_flag}
                          alt="lag"
                          className="EgyptianFlag"
                        />
                      </div>
                    </td>
                    <td>
                      <TextField width={"13.8vw"} placeholder={FormInput[1]} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              {" "}
              <Selector list={FormSelect.Time} setSelected={setSelected} />
            </td>
          </tr>
          <tr className="RowMargin">
            <td>
              {" "}
              <TextField width={"20.9vw"} placeholder={FormInput[2]} />
            </td>
            <td>
              {" "}
              <Selector
                list={FormSelect["Event Type"]}
                setSelected={setSelected}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        {CheckBox}
      </div>
      <div>{Button}</div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 4vw 27vw 4.3vw 27vw;
  background-color: ${colors.DarkGrey};

  color: ${colors.White};
  font-family: "Askan Light" !important;
  font-size: 1vw;
  text-align: center;

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
  }
  .icon {
    width: 2.8vw;
    margin-right: 1.2vw;
  }
  .Icons {
    width: 4vw;
    text-align: left;
  }
  .Action {
    font-size: 1.4vw;
    text-align: left;
  }
  .ButtonLabel {
    font-size: 1vw;
  }
  .Call {
    padding-right: 4.4vw;
    width: 9.1vw;
  }
  .Newsletter {
    padding-right: 3vw;
    width: 9vw;
  }
  .Whatsapp {
    width: 7vw;
  }
  .Flag {
    width: 0px;
    margin-right: 1vw;
    text-align-last: left;
    background-color: ${colors.Merino} !important;
    height: unset;
    padding: 0.2vw 5vw 0.15vw 0.8vw;
    margin-bottom: 1.4vw;
  }
  .EgyptianFlag {
    width: 1.8vw;
    height: 1.25vw;
    padding-top: 0.15vw;
  }
`;
