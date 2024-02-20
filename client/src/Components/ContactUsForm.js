import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { colors } from "../Styles/Colors";

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
      <p className="head">Your voice matters to us</p>
      <p className="statement">
        Kindly fill out this form for any inquires and we’ll get back to you as
        soon as possible.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="container">
          <div className="form-item">
            <label htmlFor="subject">Subject *</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              language={props.language}
              type="text"
              name="subject"
              value={data.subject}
              // placeholder="Subject"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="yacht">Yacht *</label>

            <select
              onChange={(e) => setData({ ...data, yacht: e.target.value })}
              value={data.yacht}
              language={props.language}
              disabledOption="Select yacht"
              list={["Liberty"]}
              name="yacht"
              required
            >
              <option value="" disabled>
                Select Yacht
              </option>
              <option value="Liberty">Liberty</option>
              <option value="Bella">Bella</option>
              <option value="Vida">Vida</option>
              <option value="Zein">Zein</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="name">Name *</label>

            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={data.name}
              name="name"
              language={props.language}
              type="text"
              // placeholder="Name"
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email *</label>

            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              language={props.language}
              type="email"
              name="email"
              value={data.email}
              // placeholder="Email"
            />
          </div>

          <div className="form-item">
            <label htmlFor="pnumber">Phone Number *</label>

            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              language={props.language}
              type="tel"
              pattern="^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$"
              name="number"
              value={data.number}
              // placeholder="Phone number (01XXXXXXXXX)"
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="message">Message *</label>

            <textarea
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              // placeholder="Enter your message here.."
              name="message"
              required
              value={data.message}
            />
          </div>
        </div>
        <button type="submit" className="Button" disabled={loading}>
          {`${loading ? "Loading .." : "Send Message"}`}
        </button>
      </form>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  height: 100vh;
  margin-bottom: 10vw;
  .head {
    padding-left: 12vw;
    padding-right: 1vw;
    text-align: left;
    font-size: 4.2vw;
    background: ${colors.MainBeige};
    width: fit-content;
    color: ${colors.Navy};
    @media (max-width: 768px) {
      font-size: 7.3vw;
    }
  }
  .statement {
    text-align: left;
    width: 90vw;
    margin: auto;
    font-size: 1vw;
    margin-bottom: 2vw;
    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
  form {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 90vw;
      margin: auto;
      grid-gap: 3vw;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
    }
    .form-item {
      // font-family: "Lato Regular";
      font-size: 1vw;
      display: flex;
      flex-direction: column;
      /* align-items: flex-start; */
      width: 100%;
      @media (max-width: 768px) {
        font-size: 3vw;
      }
      &:last-child {
        grid-column: span 2;
      }
      label {
        align-self: flex-start;
        margin-bottom: 0.5vw;
        @media (max-width: 768px) {
          margin-bottom: 1.5vw;
        }
      }
      select,
      input {
        border: none;
        border-bottom: 0.2vw solid ${colors.DarkGrey};
        outline: none;
        // font-family: "Lato Regular";
        font-size: 1vw;
        @media (max-width: 768px) {
          font-size: 3vw;
          border-bottom: 0.4vw solid ${colors.DarkGrey};
        }
      }
      select {
        height: 1.6vw;
        @media (max-width: 768px) {
          height: 4.8vw;
        }
      }
      input {
        height: 1.3vw;
        @media (max-width: 768px) {
          height: 3.9vw;
        }
      }
      textarea {
        height: 15vw;
        font-size: 1vw;
        border: solid 0.2vw ${colors.DarkGrey};
        // font-family: "Lato Regular";

        @media (max-width: 768px) {
          height: 30vw;
          border: solid 0.4vw ${colors.DarkGrey};
          font-size: 3vw;
        }
      }
    }
    button {
      margin-top: 3vw;
      width: 12vw;
      height: 2vw;
      background: ${colors.MainBeige};
      color: ${colors.Navy};
      font-size: 1.3vw;
      outline: none;
      border: 0.1vw solid ${colors.DarkGrey};
      @media (max-width: 768px) {
        width: 35vw;
        height: 8vw;
        font-size: 3.2vw;
      }
    }
  }
`;


export default ContactUsForm;
