import React from "react";
import frontEndIcon from "../../assets/icons/front-end.png";
import backEndIcon from "../../assets/icons/back-end.png";
import toolsIcon from "../../assets/icons/tools.png";
import chromeDevToolsIcon from "../../assets/icons/chrome-dev-tools.png";
import figmaIcon from "../../assets/icons/tools-06-figma.png";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoBootstrap, BiLogoTailwindCss, BiLogoReact, BiLogoNodejs, BiLogoVisualStudio, BiLogoGit,BiLogoGithub, BiLogoNetlify, BiLogoFigma } from "react-icons/bi";
import {SiExpress, SiMongodb, SiFirebase} from 'react-icons/si';

const Skills = () => {
  return (
    <section>
      <div className="bg-gradient-to-tr from-[#05DEA8] to-primary" id="skills">
        <div className="container mx-auto p-5 py-20 pb-40">
          <h2 className="font-source-pro text-4xl font-bold uppercase text-white text-center">
            Skills
          </h2>
          <p className=" max-w-xs rounded-md bg-black bg-opacity-80 text-white p-3 text-center mx-auto mt-3">
            There are the skills I am good at
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-32 p-10">
        <div className="bg-white p-5 rounded-md shadow-lg border">
          <img src={frontEndIcon} alt="frontendicon" className="w-16 mx-auto" />
          <h2 className="text-center text-lg lg:text-2xl my-5 font-semibold text-slate-900">
            Front End Development
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center flex flex-col items-center">
              <BiLogoHtml5 size={60} className=" text-orange-500" />
              <p className=" text-xs text-center">HTML</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <BiLogoCss3 size={60} className=" text-blue-500" />
              <p className=" text-xs text-center">CSS</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <BiLogoJavascript size={60} className=" text-yellow-400" />
              <p className=" text-xs text-center">JS</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <BiLogoBootstrap size={60} className=" text-violet-700" />
              <p className=" text-xs text-center">Bootstrap</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <BiLogoTailwindCss size={60} className=" text-blue-400" />
              <p className=" text-xs text-center">Tailwind CSS</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <BiLogoReact size={60} className="text-[#00CCFF]" />
              <p className=" text-xs text-center">React</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-md shadow-lg border">
          <img src={backEndIcon} alt="backendicon" className="w-16 mx-auto" />
          <h2 className="text-center text-lg lg:text-2xl my-5 font-semibold text-slate-900">
            Back End Development
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center flex flex-col items-center">
              <BiLogoNodejs size={60} className=" text-[#A0D26B]" />
              <p className=" text-xs text-center">Node JS</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <SiExpress size={60} className=" text-black" />
              <p className=" text-xs text-center">Express JS</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <SiMongodb size={60} className=" text-[#4CAF50]" />
              <p className=" text-xs text-center">MongoDB</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <SiFirebase size={50} className=" text-[#FCCA3F]" />
              <p className=" text-xs text-center">Firebase</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-md shadow-lg border">
          <img src={toolsIcon} alt="backendicon" className="w-16 mx-auto" />
          <h2 className="text-center text-lg lg:text-2xl my-5 font-semibold text-slate-900">
            Development Tools
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center flex flex-col items-center">
              <BiLogoVisualStudio size={60} className=" text-[#3C99D4]" />
              <p className=" text-xs text-center">VS Code</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <img src={chromeDevToolsIcon} alt="chrome dev tools" className=" w-14 mb-1"/>
              <p className="text-xs text-center">Chrome Dev Tools</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <BiLogoGit size={60} className=" text-[#DE4C36]" />
              <p className=" text-xs text-center">Git</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <BiLogoGithub size={60} className=" text-[#23272B]" />
              <p className=" text-xs text-center">Github</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <BiLogoNetlify size={60} className=" text-[#25C7B7]" />
              <p className=" text-xs text-center">Netlify</p>
            </div>
            <div className="text-center flex flex-col items-center">
            <img src={figmaIcon} alt="chrome dev tools" className="w-14 mb-1"/>
              <p className=" text-xs text-center">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
