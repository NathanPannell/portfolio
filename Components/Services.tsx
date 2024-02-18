import {
  ChartBarIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Stack</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <ComputerDesktopIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] my-[1.5rem]">Frontend</h1>
            <ul className="text-[15px] text-[#d3d2d2] font-normal">
              <li>
                Web development with <b>JavaScript</b>, <b>HTML</b>, and{" "}
                <b>CSS</b>.
              </li>
              <br />
              <li>
                Frameworks and libraries including <b>React</b> and{" "}
                <b>Tailwind</b>.
              </li>
              <br />
              <li>
                Managing legacy content with <b>Wordpress</b> and <b>JQuery</b>.
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <LightBulbIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] my-[1.5rem]">
              Machine Learning
            </h1>
            <ul className="text-[15px] text-[#d3d2d2] font-normal">
              <li>
                Project experience with <b>Python</b> and <b>NumPy</b> in{" "}
                <b>Jupyter Notebooks</b>.
              </li>
              <br />
              <li>
                Exposure to <b>PyTorch</b>, <b>TensorFlow / Keras</b>, and{" "}
                <b>Matplotlib</b>.
              </li>
              <br />
              <li>
                Environment modelling with <b>OpenAI Gymnasium</b> for
                reinforcement learning.
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CircleStackIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] my-[1.5rem]">Backend</h1>
            <ul className="text-[15px] text-[#d3d2d2] font-normal">
              <li>
                Relational <b>(SQL)</b> and document <b>(MongoDB)</b> databases.
              </li>
              <br />
              <li>
                Scripting with <b>Python</b>, <b>Node</b>, and <b>VBA</b>.
              </li>
              <br />
              <li>
                Problem solving with <b>Java</b> and <b>C</b>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
