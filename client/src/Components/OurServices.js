import React from "react";
import styled from "styled-components";
import { DataEnglish } from "../Data/English/OurServices";
import { DataArabic } from "../Data/Arabic/OurServices";

import { colors } from "../Styles/Colors";
import Wedding from "../Images/Wedding.png";
import Business from "../Images/Business.png";
import Parties from "../Images/Parties.png";

export default function OurServices(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  return (
    <StyledDiv>
      <div className="Titles">
        <span className="Title">{Data.Title}&nbsp;</span>
        <span className="TitleBold">{Data.TitleBold}</span>
      </div>
      <table className="Table">
        <tbody>
          <tr>
            <td className="Wedding">Weddings</td>
            <td className="Business">Business Events</td>
            <td className="Parties">Gatherings & Parties</td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
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
    padding-bottom: 7vw;
  }
  .Titles {
    padding: 1.8vw 0vw 1.3vw 5.3vw;
    text-align: left;
  }

  .Table {
    width: 100%;
    height: 41.6vw;
    border: none;
    border-collapse: collapse;
  }
  .Wedding {
    width: 33.3%;
    background-image: url(${Wedding});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 13vw 1.5vw 0vw 0vw;
  }
  .Business {
    width: 33.3%;
    color: ${colors.Merino};
    background-image: url(${Business});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    padding: 2.5vw 0vw 0vw 1.7vw;
  }
  .Parties {
    width: 33.3%;
    background-image: url(${Parties});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    padding: 15vw 4.5vw 0vw 8vw;
  }
`;
