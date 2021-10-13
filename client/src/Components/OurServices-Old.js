import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/OurServices";
import { DataArabic } from "../Data/Arabic/OurServices";

import { colors } from "../Styles/Colors";

// import Wedding from "../Images/Wedding.jpeg";
// import Business from "../Images/Business.jpeg";
// import Parties from "../Images/Parties.jpeg";

// import Wedding_Mobile from "../Images/Wedding_Mobile.jpeg";
// import Business_Mobile from "../Images/Business_Mobile.jpeg";
// import Parties_Mobile from "../Images/Parties_Mobile.jpeg";

import { isMobileOnly } from "react-device-detect";

export default function OurServices(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <div>
      <StyledDiv>
        <div
          className={isMobileOnly ? "Titles TitlesMobile" : "Titles TitlesWeb"}
        >
          <span className="Title">{Data.Title}&nbsp;</span>
          <span className="TitleBold">{Data.TitleBold}</span>
        </div>
        {isMobileOnly ? (
          <div>
            <div className="WeddingMobile">{Data.SubTitles[0]}</div>
            <div className="BusinessMobile">{Data.SubTitles[1]}</div>
            <div className="PartiesMobile">{Data.SubTitles[2]}</div>
          </div>
        ) : (
          <table className="Table">
            <tbody>
              <tr>
                <td className="WeddingWeb">{Data.SubTitles[0]}</td>
                <td className="BusinessWeb">{Data.SubTitles[1]}</td>
                <td className="PartiesWeb">{Data.SubTitles[2]}</td>
              </tr>
            </tbody>
          </table>
        )}
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  background-color: ${colors.Merino};
  color: ${colors.Black};
  font-family: "Askan Light" !important;
  font-size: 3.75vw;
  line-height: 3.75vw;
  tr,
  td {
    vertical-align: top;
    border: none;
  }
  .TitleBold {
    font-family: "Askan DemiBold" !important;
  }
  .Titles {
    text-align: left;
  }
  .TitlesWeb {
    padding: 1.8vw 0vw 1.3vw 5.3vw;
  }
  .TitlesMobile {
    padding: 7.2vw 0vw 7.2vw 8vw;
    font-size: 6.7vw;
    line-height: 6.7vw;
  }
  .Table {
    width: 100%;
    height: 41.6vw;
    border: none;
    border-collapse: collapse;
  }
  .WeddingWeb {
    width: 33.3%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 13vw 1.5vw 0vw 0vw;
  }
  .BusinessWeb {
    width: 33.3%;
    color: ${colors.Merino};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    padding: 2.5vw 0vw 0vw 1.7vw;
  }
  .PartiesWeb {
    width: 33.3%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    padding: 15vw 4.5vw 0vw 8vw;
  }
  .WeddingMobile {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 6.4vw 0vw 16.5vw 7.47vw;
    text-align: left;
    font-size: 10.7vw;
    line-height: 14.7vw;
  }
  .BusinessMobile {
    color: ${colors.Merino};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    padding: 7.3vw 30vw 4.75vw 7.2vw;
    text-align: left;
    font-size: 10.7vw;
    line-height: 12vw;
  }
  .PartiesMobile {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    padding: 7.6vw 32vw 5vw 8vw;
    text-align: left;
    font-size: 10.7vw;
    line-height: 12vw;
  }
`;
