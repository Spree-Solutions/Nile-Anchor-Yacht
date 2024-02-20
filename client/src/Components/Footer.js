import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/HomePage/Footer";
import { DataArabic } from "../Data/Arabic/HomePage/Footer";

import { colors } from "../Styles/Colors";
import Logo from "../Images/Logo.png";
import fb from "../Icons/fb.svg";
import instagram from "../Icons/instagram.svg";
import whatsapp from "../Icons/whatsapp.svg";

export default function Footer(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <StyledDiv>
      <div
        className={
          props.language === "EN"
            ? "EnglishComponentPadding"
            : "ArabicComponentPadding"
        }
      >
        <table>
          <tbody>
            <tr>
              <td className="Col1">
                <img src={Logo} alt="Logo" className="Logo" />
              </td>
             
              <td className="Col3">
                <a
                  target="__blank"
                  href="https://www.facebook.com/Thenileanchor"
                  rel="noreferrer"
                >
                  <img src={fb} alt="fb" className="fb" />
                </a>
                {/* <img src={twitter} alt="twitter" className="twitter" /> */}
                <a target="__blank" href="https://wa.me/+201211140222" rel="noreferrer">
                  <img src={whatsapp} alt="whatsapp" className="whatsapp" />
                </a>
                <a
                  target="__blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/thenileanchor"
                >
                  <img src={instagram} alt="instagram" className="instagram" />
                </a>
              </td>

              <td className="Col4">
                <a
                  href="https://maps.app.goo.gl/H9gLHWJKUEoDYUcY6"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "blue" }}
                >
                  <div>{Data.body1}</div>
                  <div>{Data.body2}</div>
                </a>
                <div>
                  Tel: <a href="tel:+201211140222">01211140222</a>
                </div>
                <div>
                  <a href="mailto:reservation@thenileanchor.com">
                    reservation@thenileanchor.com
                  </a>
                </div>
                <div>{Data.body5}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  // font-family: "Askan Light" !important;
  font-size: 1.25vw;
  color: ${colors.DarkGrey};
  /* background-color: ${colors.Merino}; */
  a {
    text-decoration: none;
    color: black;
  }

  .EnglishComponentPadding {
    padding: 3.75vw 3vw 5vw 3vw;
    @media (max-width: 768px) {
      padding: 7.73vw 30vw 10.4vw 30vw;
    }
    text-align: left;
  }
  .ArabicComponentPadding {
    padding: 3.75vw 7vw 5vw 5.6vw;
    text-align: right;
  }

  tr,
  td {
    vertical-align: top;
  }
  table {
    width: 100%;
    tr {
      /* width: 100%; */
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @media (max-width: 768px) {
      width: 100%;
      tr {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .Logo {
    width: 14.6vw;
    height: 8vw;
    @media (max-width: 768px) {
      width: 26.1vw;
      height: 14.13vw;
    }
  }

  .Col3 {
    @media (max-width: 768px) {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding-top: 12.8vw;
      padding-left: 0;
      padding-right: 0;
      margin: auto;
      & > * {
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  .Col4 {
    /* width: 18.5vw; */
    font-size: 1.1vw;
    padding: 2vw 0vw 0vw 0vw;
    @media (max-width: 768px) {
      font-size: 3.2vw;
      width: 38.7vw;
      padding-top: 9.1vw;
    }
  }

  .Item {
    margin-left: 1.4vw;
    // font-family: "Askan Regular" !important;
    font-size: 1.25vw;
    cursor: pointer;
  }

  .fb {
    width: 2.43vw;
    margin-right: 3.75vw;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 4.5vw;
    }
  }
  .twitter {
    width: 2.43vw;
    margin-right: 3.75vw;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 4.5vw;
    }
  }
  .whatsapp {
    width: 2.43vw;
    margin-right: 3.75vw;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 4.5vw;
    }
  }
  .instagram {
    width: 2.43vw;
    margin-right: 3.75vw;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 4.5vw;
    }
  }
`;
