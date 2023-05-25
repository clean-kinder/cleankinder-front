import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/animation.json";

const Animation: React.FC = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      // style={{ width: 800, height: 800 }}
    />
  );
};

export default Animation;
