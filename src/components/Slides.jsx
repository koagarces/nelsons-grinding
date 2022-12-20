import React, { useEffect, useState } from "react";
import GImage from "../photos/GrindingPhotos";

//Component that displays a photo carousel

function Slides() {
  let [currentImage, setCurrentImage] = useState(0);
  const path = `${GImage[currentImage]}`;

  //function to return current image to image 1 out of 6
  const resetPhotos = () => {
    if (currentImage === 6) {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    resetPhotos();
  });

  return (
    <div className="Slides">
      <img
        className="image"
        src={path}
        alt="dont know how will fix this, we dont have a way to generate alt content"
      />
      <div className="panel">
        <button onClick={() => setCurrentImage(currentImage - 1)}>Left</button>
        <button onClick={() => setCurrentImage(currentImage + 1)}>Right</button>
      </div>
    </div>
  );
}

export default Slides;
