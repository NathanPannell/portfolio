import React from "react";
import Particle from "./Particle";
import Image from "next/image";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  const handleDownload = () => {
    fetch(
      "https://raw.githubusercontent.com/NathanPannell/NathanPannellCV/main/Nathan%20Pannell%20Resume%202024.pdf"
    )
      .then((response) => response.blob())
      .then((blob) => {
        // Create a URL for the blob object
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Nathan Pannell Resume 2024.pdf"; // Set the file name for the download
        document.body.appendChild(a); // Append the anchor to the body
        a.click(); // Trigger the download
        document.body.removeChild(a); // Clean up
        window.URL.revokeObjectURL(url); // Free up memory by revoking the blob URL
      })
      .catch((error) => console.error("Download error:", error));
  };

  return (
    <div className="mt-0 md:mt-[12vh] h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI I&#39;M <span className="text-yellow-400">NATHAN!</span>
          </h1>
          <TextEffect />
          <p className="my-[2rem] text-[18px] text-white opacity-80">
            I am a fourth year Computer Science student at the University of
            Victoria with experience in Web Development and Automation. I am
            actively seeking out summer internships for 2024 in Vancouver and
            Victoria BC.
            <br />
            Check out my resume below 👇.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              onClick={handleDownload}
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[10px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            >
              <p className="text-xl">Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            {/* <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              <p className="text-[20px] font-semibold text-white">
                Watch The Video
              </p>
            </button> */}
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/headshot.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
