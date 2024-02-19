import {
  ArrowDownTrayIcon,
  FireIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const About2 = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div
          data-aos="fade-right"
          className="xl:w-[500px] xl:h-[500px] mx-auto md:mx-0 mt-[2rem] xl:mt-0  w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/logo.png"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] object-contain"
          />
          <div className="rounded-full absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-1rem] right-[-1rem]"></div>
        </div>
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Environmental <span className="text-yellow-400">Advocate</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              As a resident of Vancouver and Victoria, BC&#39;s nature is
              particularly precious to me. I have worked with the UVic AI club
              to develop a wildfire spread simulation and reinforcement learning
              agent to contribute to a novel field of AI research.
            </p>
          </div>

          <a href="https://github.com/uvicaiclub/WildfireManagementRL">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[10px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p className="text-xl">Check Out Our Progress</p>
              <FireIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About2;
