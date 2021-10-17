import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { colors } from "../Styles/Colors";
import Selector from "../Styles/Selector";
import TextArea from "../Styles/TextArea";
import TextField from "../Styles/TextField";

const ContactUsForm = (props) => {
  const form = useRef();
  const initData = {
    subject: "",
    yacht: "",
    name: "",
    email: "",
    number: "",
    message: "",
  };
  const [data, setData] = useState(initData);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_eycsyta",
        "template_y37hw6j",
        form.current,
        "user_YYZe4M4TQI47Pn7XPcZkf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setData(initData);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.");
          setLoading(false);
        }
      );
  };
  return (
    <StyledContainer>
      <form ref={form} onSubmit={sendEmail}>
        <div className="container">
          <TextField
            handleChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            language={props.language}
            type="text"
            name="subject"
            value={data.subject}
            placeholder="Subject"
            required
          />
          <Selector
            setSelected={(choice) => setData({ ...data, yacht: choice })}
            value={data.yacht}
            language={props.language}
            disabledOption="Select yacht"
            list={["Liberty"]}
            name="yacht"
            required
          />
          <TextField
            handleChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            value={data.name}
            name="name"
            language={props.language}
            type="text"
            placeholder="Name"
            required
          />
          <TextField
            handleChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            language={props.language}
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
          />
          <TextField
            handleChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            language={props.language}
            type="tel"
            pattern="^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$"
            name="number"
            value={data.number}
            placeholder="Phone number (01XXXXXXXXX)"
            required
          />
        </div>
        <TextArea
          handleChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          placeholder="Enter your message here.."
          name="message"
          required
          value={data.message}
        />
        <button type="submit" className="Button" disabled={loading}>
          {`${loading ? "Loading .." : "Submit"}`}
        </button>
      </form>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  background-color: ${colors.DarkGrey};
  padding: calc(25vh) 0vw;
  form {
    width: 40vw;
    margin: auto;
    @media (max-width: 768px) {
      width: 90%;
      select {
        height: 10vw !important;
        font-size: 5vw !important;
        margin-top: 4vw !important;
      }
      input {
        height: 10vw !important;
        font-size: 5vw !important;
        margin-top: 4vw !important;
      }
      textarea {
        height: 20vw !important;
        font-size: 5vw !important;
        margin-top: 4vw !important;
      }
      button {
        height: 10vw;
        width: 50vw !important;
        margin-top: 4vw !important;
        font-size: 5vw !important;
      }
    }
    textarea {
      width: 100%;
      margin-top: 1vw;
    }
    .container {
      /* display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5vw; */
      margin: auto;
      input,
      select {
        margin-top: 1vw;
        width: 100% !important;
      }
      .ENInput,
      .ARInput {
        margin-left: 0;
        margin-right: 0;
      }
    }
    .Button {
      width: 13.6vw;
      padding: 0.4vw 0vw 0.4vw 0vw;
      font-family: "Askan Light" !important;
      border: none;
      outline: none;
      font-size: 1vw;
      color: #e6dbce;
      cursor: pointer;
      background-color: #5cc5ef;
      text-align: center;
      margin: 1vw auto 0 auto;
    }
  }
`;

export default ContactUsForm;
