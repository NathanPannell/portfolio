import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[100] bottom-0 md:top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <a
          href="/"
          className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold"
        >
          N<span className="text-yellow-300">P</span>
        </a>
        <a className="nav-link" href="#home">
          HOME
        </a>
        <a className="nav-link" href="#about">
          ABOUT
        </a>
        <a className="nav-link" href="#skills">
          SKILLS
        </a>
        <a className="nav-link" href="#projects">
          PROJECTS
        </a>
        {/* <a className="nav-link" href="#blog">
          BLOG
        </a> */}
        <a className="nav-link" href="#contact">
          CONTACT
        </a>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
