import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Data Scientist",
        1500,
        "Problem Solver",
        1500,
        "Speedcuber",
        1500,
      ]}
      speed={50}
      repeat={Infinity}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
    />
  );
};

export default TextEffect;
