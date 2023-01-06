import React from "react";
import { useEffect } from "react";
// import GImage from "../photos/GrindingPhotos";
import "../Styles/slider.css";
import { sliderData } from "../photos/GrindingPhotos";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const Slider = () => {
  let [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide < slideLength - 1 ? currentSlide + 1 : 0);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="Slides">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slider"}
            key={index}
          >
            <div className="arrowButtons">
              <FontAwesomeIcon
                className="arrow prev "
                icon={solid("angles-left")}
                onClick={prevSlide}
              />
              <FontAwesomeIcon
                className="arrow next "
                icon={solid("angles-right")}
                onClick={nextSlide}
              />
            </div>
            {index === currentSlide && (
              <div className="imageBox">
                <img src={slide.image} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
