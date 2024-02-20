import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Bella1 from "../../Images/Bella1.jpeg";
import Bella2 from "../../Images/Bella2.jpeg";
import Bella3 from "../../Images/Bella3.jpeg";
import Bella4 from "../../Images/Bella4.jpeg";
import Liberty1 from "../../Images/Liberty1.jpeg";
import Liberty2 from "../../Images/Liberty2.jpeg";
import Liberty3 from "../../Images/Liberty3.jpeg";
import Liberty4 from "../../Images/Liberty4.jpeg";

import left_button from "../../Icons/left_button.svg";
import right_button from "../../Icons/right_button.svg";
import { colors } from "../../Styles/Colors";

export default function CarouselComponent(props) {
  const [value, setValue] = useState(0);
  const bellaImages = [
    <img src={Bella1} alt="" className="image" />,
    <img src={Bella2} alt="" className="image" />,
    <img src={Bella3} alt="" className="image" />,
    <img src={Bella4} alt="" className="image" />,
  ];

  const [slides, setSlides] = useState(bellaImages);
  const [main, setMain] = useState([
    <img src={Bella1} alt="" className="main" />,
    <img src={Bella2} alt="" className="main" />,
    <img src={Bella3} alt="" className="main" />,
    <img src={Bella4} alt="" className="main" />,
  ]);
  const [render, setRender] = useState([0, 1, 2, 3]);

  const [mainOpacity, setMainOpacity] = useState(0);
  const [animate, setAnimate] = useState(false);

  const pressNext = () => {
    let tempValue = value + 1;
    if (tempValue >= slides.length) tempValue = 0;
    delay(200).then(() => setValue(tempValue));

    // setValue(tempValue);
    setAnimate(!animate);

    getRenderValue(tempValue);
  };

  const pressPrev = () => {
    let tempValue = value - 1;
    if (tempValue < 0) tempValue = slides.length - 1;
    // setValue(tempValue);
    delay(200).then(() => setValue(tempValue));
    setAnimate(!animate);
    getRenderValue(tempValue);
  };
  const handleClick = (itemIndex) => {
    delay(200).then(() => setValue(itemIndex));
    // setValue(itemIndex);
    setAnimate(!animate);
  };

  const getRenderValue = (correctValue) => {
    let currentValue = correctValue;
    let tempArray = [];

    for (let i = 0; i < 4; i++) {
      tempArray[i] = currentValue;
      if (currentValue === slides.length - 1) {
        currentValue = 0;
      } else {
        currentValue = currentValue + 1;
      }
    }
    setRender(tempArray);
  };

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  useEffect(() => {
    getRenderValue(0);
  }, []);

  useEffect(() => {
    setMainOpacity(0);
    delay(300).then(() => setMainOpacity(1));
  }, [animate]);

  console.log(render);

  return (
    <StyledDiv>
      <div style={{ opacity: mainOpacity }} className="centered animated">
        {main[value]}
      </div>
      <table className="Table">
        <tbody>
          <tr>
            <td>
              {props.language === "EN" ? (
                <img
                  src={left_button}
                  alt=""
                  className="icon"
                  onClick={pressPrev}
                />
              ) : (
                <img
                  src={right_button}
                  alt=""
                  className="icon"
                  onClick={pressPrev}
                />
              )}
            </td>

            {render.map((itemIndex) => {
              return itemIndex !== value ? (
                <td onClick={() => handleClick(itemIndex)}>
                  {slides[itemIndex]}
                </td>
              ) : (
                <td className="chosen">{slides[itemIndex]}</td>
              );
            })}

            <td>
              {props.language === "EN" ? (
                <img
                  src={right_button}
                  alt=""
                  className="icon"
                  onClick={pressNext}
                />
              ) : (
                <img
                  src={left_button}
                  alt=""
                  className="icon"
                  onClick={pressNext}
                />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .image {
    width: 9vw;
    height: 5.7vw;
    object-fit: cover;
    padding: 0vw 0.625vw 0vw 0.625vw;
  }
  .main {
    animation: fade-in 1s linear 2s;
    width: 44vw;
    height: 27.6vw;
    object-fit: cover;
    padding: 4.2vw 0vw 0vw 0vw;
    @media (max-width: 768px) {
      width: 80vw;
      height: 60vw;
    }
  }
  .centered {
    text-align: center;
  }
  .animated {
    transition: all 0.2s ease-in-out;
  }
  .Table {
    margin-left: auto;
    margin-right: auto;
    transition: border-width 5s linear;
    @media (max-width: 768px) {
      height: 10vw;
      /* width: 80vw; */
      img {
        width: 16.5vw;
        height: 9.7vw;
        &.icon {
          width: 2.4vw;
        }
      }
    }
  }
  .icon {
    width: 0.67vw;
    height: 1.52vw;
    cursor: pointer;
  }
  td {
    transition: all 0.5s ease-in-out;
    border-bottom: 2px solid ${colors.DarkGrey};
  }
  .chosen {
    border-bottom: 2px solid ${colors.White};
  }
`;
