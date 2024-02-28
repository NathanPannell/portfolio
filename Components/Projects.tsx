import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <a
          href="https://github.com/uvicaiclub/WildfireManagementRL"
          data-aos="fade-up"
        >
          <p className="text-white text-center uppercase font-semibold pb-4 md:pb-0">
            Wildfire Simulation
          </p>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/wildfire.gif"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7162925129960816640/"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-white text-center uppercase font-semibold pb-4 md:pb-0">
            UVic AI 2024 Hackathon
          </p>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/uttt.gif"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </a>
        <a
          href="https://nathanpannell.github.io/virtual-cube/cube.html"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="text-white text-center uppercase font-semibold pb-4 md:pb-0">
            Virtual Rubik&#39;s Cube
          </p>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/cube.gif"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </a>
        {/* <a href="https://sidekickplayers.ca" data-aos="fade-up">
          <p className="text-white text-center uppercase font-semibold pb-4 md:pb-0">
            <span className="italic">The Sidekick Players</span> Website
          </p>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/sidekick.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Projects;
