import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../Styles/Colors";

const CustomCarousel = ({ imagesArray }) => {
  const [imageSelected, setImageSelected] = useState(0);
  useEffect(() => {
    const carouselImages = imagesArray
      ? document.querySelector("#image-container-carousel")
      : null;
    const size = imagesArray ? carouselImages.clientWidth : null;

    if (carouselImages)
      carouselImages.style.transform = `translateX(${-imageSelected * size}px)`;
  }, [imageSelected]);
  useEffect(() => {
    setImageSelected(0);
  }, [imagesArray]);
  return (
    <StyledCarousel>
      {imagesArray && imagesArray.length > 0 && (
        <div className="slider">
          {/* Next and previous buttons */}
          <div
            onClick={() =>
              setImageSelected(
                imageSelected === imagesArray.length - 1 ? 0 : imageSelected + 1
              )
            }
            className="btn-next"
          >
            {">"}
          </div>
          <div
            className="btn-prev"
            onClick={() =>
              setImageSelected(
                imageSelected === 0 ? imagesArray.length - 1 : imageSelected - 1
              )
            }
          >
            {"<"}
          </div>
          <div className="images" id="image-container-carousel">
            {imagesArray.map((src) => (
              <img src={src} />
            ))}
          </div>
          <div className="bullets">
            {imagesArray.map((img, index) => (
              <div
                className={`bullet ${
                  imageSelected === index ? "selected-bullet" : 0
                }`}
                onClick={() => setImageSelected(index)}
              ></div>
            ))}
          </div>
        </div>
      )}
    </StyledCarousel>
  );
};
const StyledCarousel = styled.div`
  * {
    all: unset;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  height: 30vw;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 60vw;
  }
  .slider {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 90%;
    }
    .images {
      display: flex;
      transition: 1s;
      width: 100%;
      height: 100%;
      /* transform: translateX(-100px); */
    }
    img {
      min-width: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }
  .bullets {
    position: absolute;
    display: flex;
    bottom: 1vw;
    right: 50%;
    transform: translateX(50%);
    @media (max-width: 768px) {
      bottom: 2vw;
    }
    .bullet {
      display: flex;
      border: 0.1vw solid white;
      width: 1vw;
      height: 1vw;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.5s;
      @media (max-width: 768px) {
        width: 3vw;
        height: 3vw;
      }
      &:hover {
        background: ${colors.Navy};
      }
      &:not(:first-child) {
        margin-left: 0.5vw;
        @media (max-width: 768px) {
          margin-left: 2vw;
        }
      }
      &.selected-bullet {
        background: white;
      }
    }
  }
  .btn-next,
  .btn-prev {
    font-family: unset;
    font-size: 4vw;
    color: ${colors.MainBeige};
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
    @media (max-width: 768px) {
      font-size: 12vw;
    }
    &:hover {
      opacity: 1;
      color: ${colors.Navy};
    }
  }
  .btn-next {
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform: translateY(-50%);

    right: 1vw;
  }
  .btn-prev {
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1vw;
  }
`;
export default CustomCarousel;
