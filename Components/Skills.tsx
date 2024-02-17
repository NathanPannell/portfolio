import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div>
          <SkillsItem title="React Developer" year="2014 - 2018" />
          <SkillsItem title="MERN Stack Developer" year="2016 - 2020" />
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[70%]"
            level2="w-[50%]"
            level3="w-[30%]"
          />
        </div>
        <div>
          <SkillsItem title="NumPy Engineer" year="2018 - 2022" />
          <SkillsItem title="Python Developer" year="2020 - 2024" />
          <SkillsLanguage
            skill1="numpy"
            skill2="python"
            skill3="keras"
            level1="w-[60%]"
            level2="w-[40%]"
            level3="w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
