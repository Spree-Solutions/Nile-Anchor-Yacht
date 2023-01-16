import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DataEnglish } from "../../Data/English/HomePage/OurYachts";
import { DataArabic } from "../../Data/Arabic/HomePage/OurYachts";
import { colors } from "../../Styles/Colors";
import Liberty_Light from "../../Images/Liberty_Light.png";
import Liberty_Image from "../../Images/Liberty_Image.png";
import BellaYellow from "../../Images/BellaYellow.png";
import OurYachtsNewDesign, { yachts } from "./OurYachtsNewDesign";

export default function OurYachts(props) {
  const Data = props.language === "EN" ? DataEnglish : DataArabic;
  const [chosenYacht, setChosenYacht] = useState(Data.Options[0]);
  const [vw, setVw] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setVw(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setVw(window.innerWidth);
      });
    };
  }, []);
  return (
    <StyledDiv>
      {vw <= 786 ? (
        <div className="MobileViewPadding">
          <table>
            <tbody>
              <tr>
                <td className="Title_Mobile">
                  <div className="TitleBold"> {Data.TitleBold}</div>
                  <div> {Data.Title}</div>
                </td>
                <td className="links">
                  {Data.Options.map((yacht, index) => {
                    if (index !== 0) {
                      return (
                        <span style={{ marginLeft: "0.7vw" }}>
                          {" | "}
                          <span
                            onClick={() => setChosenYacht(yacht)}
                            className={
                              chosenYacht === yacht
                                ? "chosenButton"
                                : "clickable"
                            }
                          >
                            {yachts[yacht].displayName}
                          </span>
                        </span>
                      );
                    } else {
                      return (
                        <span
                          onClick={() => setChosenYacht(yacht)}
                          className={
                            chosenYacht === yacht ? "chosenButton" : "clickable"
                          }
                        >
                          {yachts[yacht].displayName}
                        </span>
                      );
                    }
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <img
              src={yachts[chosenYacht].image}
              alt="Liberty"
              className="Liberty_Image_Mobile"
            />
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td className="ImageCol">
                    <div
                      className={
                        chosenYacht === "liberty" || chosenYacht === "bella"
                          ? chosenYacht === "liberty"
                            ? "Liberty_Light_Background"
                            : "Bella_Light_Background"
                          : ""
                      }
                    >
                      <img
                        src={yachts[chosenYacht].logo}
                        alt="Liberty"
                        className="Liberty_Light_Mobile"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="body_Mobile">
                      {yachts[chosenYacht].description}
                    </div>
                    {/* <div className="bodyBold_Mobile">{Data.bodyBold}</div> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ListItems_Mobile">
            {Data.List.map((item, index) => (
              <span className="ListItem_Mobile">
                <svg
                  width="1.3vw"
                  height="1.3vw"
                  viewBox="0 0 1.3vw 1.3vw"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bullet_Mobile"
                >
                  <rect width="1.3vw" height="1.3vw" fill={colors.Black} />
                </svg>
                <a href={`${index === 0 ? "/#gallery" : "/#booking"}`}>
                  {" "}
                  {item}
                </a>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <OurYachtsNewDesign />
        // <div
        //   className={
        //     props.language === "EN" ? "LeftTextAlign" : "RightTextAlign"
        //   }
        // >
        //   <table>
        //     <tbody>
        //       <tr>
        //         <td className="Col1 Title">
        //           <div className="Title"> {Data.TitleBold}</div>
        //           <div className="TitleRegular"> {Data.Title}</div>
        //           {Data.List.map((item, index) => (
        //             <div className="ListItem">
        //               <svg
        //                 width="0.7vw"
        //                 height="0.7vw"
        //                 viewBox="0 0 0.7vw 0.7vw"
        //                 fill="none"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 className={
        //                   props.language === "EN" ? "ENbullet" : "ARbullet"
        //                 }
        //               >
        //                 <rect
        //                   width="0.7vw"
        //                   height="0.7vw"
        //                   fill={colors.Black}
        //                 />
        //               </svg>{" "}
        //               <a href={`${index === 0 ? "/#gallery" : "/#booking"}`}>
        //                 {item}
        //               </a>
        //             </div>
        //           ))}
        //         </td>
        //         <td>
        //           <table>
        //             <tbody>
        //               <tr>
        //                 <td>
        //                   {" "}
        //                   <div className="Col2">
        //                     <img
        //                       src={Liberty_Image}
        //                       alt="Liberty"
        //                       className="Liberty_Image"
        //                     />
        //                   </div>
        //                 </td>
        //                 <td className="Col3">
        //                   <div className="buttons">
        //                     {Data.Options.map((yacht, index) => {
        //                       if (index !== 0) {
        //                         return (
        //                           <span>
        //                             {" | "}
        //                             <span
        //                               onClick={() => setChosenYacht(yacht)}
        //                               className={
        //                                 chosenYacht === yacht
        //                                   ? "chosenButton"
        //                                   : "clickable"
        //                               }
        //                             >
        //                               {yacht}
        //                             </span>
        //                           </span>
        //                         );
        //                       } else {
        //                         return (
        //                           <span
        //                             onClick={() => setChosenYacht(yacht)}
        //                             className={
        //                               chosenYacht === yacht
        //                                 ? "chosenButton"
        //                                 : "clickable"
        //                             }
        //                           >
        //                             {yacht}
        //                           </span>
        //                         );
        //                       }
        //                     })}
        //                   </div>
        //                   <div
        //                     className={
        //                       chosenYacht === "Liberty"
        //                         ? "Liberty_Light_Background"
        //                         : "Bella_Light_Background"
        //                     }
        //                   >
        //                     {chosenYacht === "Liberty" ? (
        //                       <img
        //                         src={Liberty_Light}
        //                         alt="Liberty"
        //                         className="Liberty_Light"
        //                       />
        //                     ) : (
        //                       <img
        //                         src={BellaYellow}
        //                         alt="Bella"
        //                         className="BellaYellow"
        //                       />
        //                     )}
        //                   </div>
        //                   <div className="body">
        //                     {chosenYacht === "Liberty"
        //                       ? Data.LibertyBody
        //                       : Data.BellaBody}
        //                   </div>
        //                   {/* <div className="bodyBold">{Data.ReadMore}</div> */}
        //                 </td>
        //               </tr>
        //             </tbody>
        //           </table>
        //         </td>
        //       </tr>
        //     </tbody>
        //   </table>
        // </div>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 3.7vw 5.7vw 5.8vw 5.5vw;
  background-color: ${colors.White};
  color: ${colors.Navy};
  // font-family: "Askan Regular" !important;
  .LeftTextAlign {
    text-align: left;
  }
  .RightTextAlign {
    text-align: right;
  }
  tr,
  td {
    vertical-align: top;
  }
  .ENbullet {
    margin: 0.3vw 0.5vw 0.2vw 0vw;
  }
  .ARbullet {
    margin: 0.3vw 0vw 0.2vw 0.5vw;
  }
  .Title {
    // font-family: "Askan DemiBold" !important;
    font-size: 4vw;
    line-height: 3.5vw;
    color: #404040;
  }
  .TitleRegular {
    // font-family: "Askan Light" !important;
    padding-bottom: 6.5vw;
    color: #404040;
  }
  .ListItem {
    // font-family: "Askan DemiBold" !important;
    font-size: 1.8vw;
    line-height: 1.8vw;
    padding-bottom: 0.76vw;
    /* cursor: pointer; */
    a {
      text-decoration: none;
      color: black;
    }
  }
  .body {
    // font-family: "Askan Light" !important;
    font-size: 1.4vw;
    line-height: 2vw;
    padding: 1.875vw 0vw 1.32vw 0vw;
  }
  .bodyBold {
    // font-family: "Askan DemiBold" !important;
    font-size: 1.1vw;
    line-height: 1.35vw;
    cursor: pointer;
  }
  .Col1 {
    width: 21vw;
  }
  .Col2 {
    width: 51.5vw;
  }
  .Col3 {
    width: 17vw;
  }
  .Liberty_Light {
    width: 12vw;
    height: 5vw;
  }
  .Liberty_Image {
    width: 48.3vw;
    height: 28.6vw;
    padding: 11.45vw 0vw 0vw 2.4vw;
  }
  .Liberty_Light_Background {
    background-color: ${colors.DarkBlue};
    padding: 2.7vw 2.3vw 2.77vw 2.3vw;
  }
  .Bella_Light_Background {
    background-color: #e8d88b;
    padding: 0.58vw 0vw 0.58vw 0vw;
  }
  .buttons {
    padding: 7.8vw 0vw 1.875vw 0vw;
    font-size: 1.4vw;
    line-height: 1.8vw;
    text-transform: uppercase;
    // font-family: "Askan Light" !important;
  }
  .chosenButton {
    // font-family: "Askan DemiBold" !important;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .clickable {
    cursor: pointer;
  }
  .BellaYellow {
    width: 16.6vw;
    height: 9.3vw;
  }
  .MobileViewPadding {
    padding: 2.3vw 2.1vw 1vw 2.1vw;
    table {
      margin-bottom: 4.5vw;
      width: 100%;
      tr {
        display: flex;
        justify-content: space-between;
        .links {
          align-self: flex-end;
          display: flex;
          p {
            &:not(:first-child) {
              margin-left: 1vw;
            }
          }
        }
      }
    }
  }
  .Love_Story_Dark_Mobile {
    width: 18.7vw;
    height: 4.8vw;
    padding-right: 4.27vw;
    padding-left: 4vw;
    padding-top: 5.9vw;
  }
  .Bella_Mobile {
    width: 12.8vw;
    height: 4.8vw;
    padding-right: 4vw;
    padding-top: 5.9vw;
  }
  .Liberty_Dark_Mobile {
    width: 15.2vw;
    height: 5.6vw;
    padding-top: 5.1vw;
  }
  .Title_Mobile {
    // font-family: "Askan Light" !important;
    font-size: 6.7vw;
    line-height: 6.7vw;
    text-align: left;
    margin-bottom: 4.5vw;
    .TitleBold {
      font-weight: 600;
    }
  }
  .Liberty_Image_Mobile {
    width: 84vw;
    height: 49.6vw;
    padding-bottom: 4.3vw;
  }
  .Liberty_Light_Mobile {
    width: 28.5vw;
    height: 11.8vw;
    margin: 3.6vw 3.1vw 3.68vw 3.3vw;
  }
  .body_Mobile {
    // font-family: "Askan Light" !important;
    font-size: 3.2vw;
    line-height: 6vw;
    padding: 0vw 0vw 0.7vw 5vw;
    text-align: left;
  }
  .bodyBold_Mobile {
    // font-family: "Askan DemiBold" !important;
    font-size: 3.2vw;
    line-height: 3.6vw;
    padding-left: 5vw;
  }
  .ListItem_Mobile {
    font-size: 3.2vw;
    line-height: 3.6vw;
    margin: 0vw 4.54vw 0vw 0vw;
    a {
      text-decoration: none;
      color: black;
    }
  }
  .bullet_Mobile {
    margin: 0vw 2.2vw 0vw 0vw;
  }
  .ListItems_Mobile {
    margin: 8vw 0vw 0vw 0vw;
    text-align: center;
    a{
      font-weight : Bold;
    }
  }
`;
