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
      font-family: "Lato Regular";
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
        font-family: "Lato Regular";
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
        font-family: "Lato Regular";

        @media (max-width: 768px) {
          height: 30vw;
          border: solid 0.4vw ${colors.DarkGrey};
          font-size: 3vw;
        }
      }
    }
    button {
      margin-top: 3vw;
      width: 10vw;
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
// const StyledContainer = styled.div`
//   * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//   }
//   background-color: ${colors.DarkGrey};
//   padding: calc(25vh) 0vw;
//   form {
//     width: 40vw;
//     margin: auto;
//     @media (max-width: 768px) {
//       width: 90%;
//       select {
//         height: 10vw !important;
//         font-size: 5vw !important;
//         margin-top: 4vw !important;
//       }
//       input {
//         height: 10vw !important;
//         font-size: 5vw !important;
//         margin-top: 4vw !important;
//       }
//       textarea {
//         height: 20vw !important;
//         font-size: 5vw !important;
//         margin-top: 4vw !important;
//       }
//       button {
//         height: 10vw;
//         width: 50vw !important;
//         margin-top: 4vw !important;
//         font-size: 5vw !important;
//       }
//     }
//     textarea {
//       width: 100%;
//       margin-top: 1vw;
//     }
//     .container {
//       /* display: grid;
//       grid-template-columns: 1fr 1fr;
//       grid-gap: 0.5vw; */
//       margin: auto;
//       input,
//       select {
//         margin-top: 1vw;
//         width: 100% !important;
//       }
//       .ENInput,
//       .ARInput {
//         margin-left: 0;
//         margin-right: 0;
//       }
//     }
//     .Button {
//       width: 13.6vw;
//       padding: 0.4vw 0vw 0.4vw 0vw;
//       font-family: "Askan Light" !important;
//       border: none;
//       outline: none;
//       font-size: 1vw;
//       color: #e6dbce;
//       cursor: pointer;
//       background-color: #5cc5ef;
//       text-align: center;
//       margin: 1vw auto 0 auto;
//     }
//   }
// `;

export default ContactUsForm;
