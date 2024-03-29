import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <a className="nav-link-mobile" href="#home" onClick={closeNav}>
          HOME
        </a>
        <a className="nav-link-mobile" href="#about" onClick={closeNav}>
          ABOUT
        </a>
        <a className="nav-link-mobile" href="#skills" onClick={closeNav}>
          SKILLS
        </a>
        <a className="nav-link-mobile" href="#projects" onClick={closeNav}>
          PROJECTS
        </a>
        {/* <a className="nav-link-mobile" href="#blog" onClick={closeNav}>
          BLOG
        </a> */}
        <a className="nav-link-mobile" href="#contact" onClick={closeNav}>
          CONTACT
        </a>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000] cursor-pointer bottom-[1rem] right-[1rem] w-[4rem] h-[4rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
