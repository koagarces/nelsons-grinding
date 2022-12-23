import React, { useEffect, useState } from "react";
import GImage from "../photos/GrindingPhotos";

//Component that displays a photo carousel

function Slides() {
  let [currentImage, setCurrentImage] = useState(0);
  const path = `${GImage[currentImage]}`;

  //function to return current image to image 1 out of 6
  const resetPhotos = () => {
    if (currentImage === 7) {
      setCurrentImage(0);
    }
    if (currentImage === -1) {
      setCurrentImage(6);
    }
  };
  // const autoChangePhoto = () => {
  //   setCurrentImage(currentImage + 1);
  // };
  useEffect(() => {
    // setInterval(autoChangePhoto, 8000);
    resetPhotos();
  });

  return (
    <div className="Slides">
      <div className="arrowButtons slideChild">
        <button
          className="leftArrow "
          onClick={() => setCurrentImage(currentImage - 1)}
        >
          <div className="centerButton"></div>
        </button>
        <button
          className="rightArrow "
          onClick={() => setCurrentImage(currentImage + 1)}
        >
          <div className="centerButton"></div>
        </button>
      </div>
      <img className="slideImage slideChild" src={path} alt="unavailable" />
    </div>
  );
}

export default Slides;
