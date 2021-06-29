import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/Footer";
import { DataArabic } from "../Data/Arabic/Footer";

import { colors } from "../Styles/Colors";
import Logo from "../Images/Logo.png";
import fb from "../Icons/fb.svg";
import instagram from "../Icons/instagram.svg";
import twitter from "../Icons/twitter.svg";
import whatsapp from "../Icons/whatsapp.svg";

export default function Footer(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <StyledDiv>
      <table>
        <tbody>
          <tr>
            <td className="Col1">
              <img src={Logo} alt="Logo" className="Logo" />
            </td>
            <td className="Col2">
              {Data.FooterTags.map((item, index) => (
                <span className="Item">{item}</span>
              ))}
            </td>
            <td className="Col3">
              <img src={fb} alt="fb" className="fb" />
              <img src={twitter} alt="twitter" className="twitter" />
              <img src={whatsapp} alt="whatsapp" className="whatsapp" />
              <img src={instagram} alt="instagram" className="instagram" />
            </td>
            <td className="Col4">{Data.body}</td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 3.75vw 5.6vw 5vw 3.55vw;
  font-family: "Askan Light" !important;
  font-size: 1.25vw;
  color: ${colors.Black};
  background-color: ${colors.Merino};
  text-align: left;

  tr,
  td {
    vertical-align: top;
  }

  .Logo {
    width: 14.6vw;
    height: 8vw;
    padding: 0vw 4.1vw 0vw 0vw;
  }

  .Col1 {
    width: 18.75vw;
  }
  .Col2 {
    width: 19vw;
    padding: 4.5vw 0vw 0vw 1vw;
  }
  .Col3 {
    width: 28vw;
    padding: 4.1vw 0vw 2.2vw 5.2vw;
  }
  .Col4 {
    width: 18.5vw;
    font-size: 1.1vw;
  }

  .Item {
    margin-left: 1.4vw;
    font-family: "Askan Regular" !important;
    font-size: 1.25vw;
    cursor: pointer;
  }

  .fb {
    width: 2.43vw;
    margin-right: 3.75vw;
    cursor: pointer;
  }
  .twitter {
    width: 2.43vw;
    margin-right: 3.75vw;
    cursor: pointer;
  }
  .whatsapp {
    width: 2.43vw;
    margin-right: 3.75vw;
    cursor: pointer;
  }
  .instagram {
    width: 2.43vw;
    margin-right: 3.75vw;
    cursor: pointer;
  }
`;
