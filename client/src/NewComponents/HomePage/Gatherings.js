import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { DataEnglish } from "../../Data/English/HomePage/Gatherings";
import { DataArabic } from "../../Data/Arabic/HomePage/Gatherings";

import { colors } from "../../Styles/Colors";

import Birthday from "../../Images/Birthday.png";
import Party from "../../Images/Party.png";
import Gatherings_Background from "../../Images/Gatherings_Background.jpeg";

export default function Gatherings(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;

  return (
    <StyledDiv>
      <table>
        <tbody>
          <tr>
            <td className={props.language === "EN" ? "ENcol1" : "ARcol1"}>
              <div className="TitleBold">{Data.Title} </div>
              <div className="body">{Data.body} </div>
              <div className="bodyBold">
                <Link to="/gathering">{Data.ReadMore}</Link>
              </div>
            </td>
            <tr className="images-row">
              <td>
                <img
                  src={Party}
                  alt="Party"
                  className={`Party ${
                    props.language === "EN" ? "ENcol2" : "ARcol2"
                  }`}
                />
              </td>
              <td>
                <img src={Birthday} alt="Kids_Birthday" className="Birthday" />
              </td>
            </tr>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  /* padding: 3.96vw 5.6vw 3.6vw 5.63vw; */
  padding: 2.5vw 3vw 7vw 5.63vw;

  color: ${colors.DarkGrey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: url(${Gatherings_Background}); */
  height: 15vw;
  @media (max-width: 768px) {
    padding: 8vw;
    height: auto;
  }

  table {
    @media (max-width: 768px) {
      width: 84vw;
    }
  }
  tr,
  td {
    vertical-align: top;
    border: none;
  }
  tr {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      &.images-row {
        /* display: flex; */
        margin-top: 12.5vw;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
  .TitleBold {
    width: 13vw;
    font-size: 3vw;
    font-family: "Askan Bold" !important;
    /* color: ${colors.Black}; */
    @media (max-width: 768px) {
      font-size: 5.9vw;
      line-height: 6.5vw;
      width: 26.4vw;
    }
  }
  .body {
    font-family: "Lato Regular" !important;
    font-size: 1.3vw;
    line-height: 1.5vw;
    padding: 1.88vw 0vw 1.88vw 0vw;
    @media (max-width: 768px) {
      font-size: 3.2vw;
      line-height: normal;
      margin-top: 4.5vw;
      margin-bottom: 4.3vw;
    }
  }
  .bodyBold {
    font-family: "Lato Bold" !important;
    font-size: 1.1vw;
    line-height: 1.4vw;
    a {
      color: ${colors.DarkGrey};
      font-size: 1.3vw;
    }
    @media (max-width: 768px) {
      a {
        font-size: 3.2vw;
      }
      line-height: normal;
    }
  }

  .ENcol1 {
    width: 52.5vw;
    padding-right: 17vw;
    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }
  }
  .ARcol1 {
    width: 52.5vw;
    padding-left: 23.9vw;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  .ENcol2 {
    padding-right: 1.4vw;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  .ARcol2 {
    padding-left: 1.4vw;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  .Birthday {
    /* width: 13.68vw; */
    width: 17.7vw;
    height: 19vw;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 44.8vw;
      height: 31.75vw;
    }
  }
  .Party {
    /* width: 21.25vw; */
    width: 27vw;
    height: 19vw;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 33.9vw;
      height: 31.75vw;
    }
  }
`;

// const StyledDiv = styled.div`
//   padding: 3.47vw 5.48vw 3.75vw 5.42vw;
//   color: ${colors.Black};
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-image: url(${Gatherings_Background});

//   tr,
//   td {
//     vertical-align: top;
//     border: none;
//   }
//   .TitleBold {
//     font-size: 2.8vw;
//     font-family: "Askan Bold" !important;
//   }
//   .body {
//     font-family: "Lato Regular" !important;
//     font-size: 0.97vw;
//     line-height: 1.4vw;
//     padding: 1.88vw 0vw 1.88vw 0vw;
//   }
//   .bodyBold {
//     font-family: "Lato Bold" !important;
//     font-size: 1.1vw;
//     line-height: 1.4vw;
//   }

//   .ENcol1 {
//     width: 41vw;
//     padding-right: 16vw;
//   }
//   .ARcol1 {
//     width: 41vw;
//     padding-left: 16vw;
//   }
//   .ENcol2 {
//     padding-right: 1.4vw;
//   }
//   .ARcol2 {
//     padding-left: 1.4vw;
//   }
//   .Kids_Birthday {
//     width: 33vw;
//     height: 21vw;
//   }
//   .Party_Bags {
//     width: 13.75vw;
//     height: 21vw;
//   }
// `;
