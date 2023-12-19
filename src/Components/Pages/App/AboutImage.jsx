import React from "react";
import aboutImage from "../../../assets/about_image.jpg"

function AboutImage() {
  return (
    <img
      src={aboutImage}
      alt="ok"
      className="w-full h-full object-cover"
    />
  );
}

export default AboutImage;
