import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Experience & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div>
          <SkillsItem
            title="Simulation Executive"
            year="2024 - PRESENT"
            body="A leadership role at the UVic AI club with a focus on simulation and visualizations. This included development of a full-stack application for the 2024 Hackathon and fire spread model for the Canadian Undergraduate Conference on AI."
          />
          <SkillsItem
            title="Freelance Web Developer"
            year="2023 - PRESENT"
            body="This role includes a broad range of application areas from modern, custom websites with React and Tailwind, maintenance of legacy Wordpress sites, or simpler projects with JavaScript, JQuery, HTML, and CSS."
          />
          <SkillsLanguage
            skill1="Python"
            skill2="Java"
            skill3="JavaScript"
            level1="w-[90%]"
            level2="w-[70%]"
            level3="w-[60%]"
          />
        </div>
        <div>
          <SkillsItem
            title="Business Automation Developer"
            year="2023"
            body="Developing a suite of automation tools and macros for the AMJ Campbell Vancouver accounting department. This includes primarily Excel templates for presenting data and VBA scripts for processing data and managing APIs."
          />
          <SkillsItem
            title="Accounting Clerk"
            year="2022"
            body="In this role, I learned about how business finances work including creating invoices and managing payables. Significant attention to detail is required when working with sensitive financial data."
          />
          <SkillsLanguage
            skill1="Power BI"
            skill2="SQL"
            skill3="React"
            level1="w-[80%]"
            level2="w-[70%]"
            level3="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
