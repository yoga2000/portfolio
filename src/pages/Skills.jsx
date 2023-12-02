import React from "react";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { motion, useInView, useAnimation } from "framer-motion";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen flex justify-center items-center text-gray-300 bg-[#0a1924] "
    >
      <div className="w-full sm:max-w-[1000px] max-w-[500px] mx-auto px-8 py-4">
        <div className="w-fit mx-auto mb-2">
          <h1 className="text-4xl text-center border-pink-500 font-bold  border-b-4">
            Skills
          </h1>
        </div>
        <p className=" text-lg pl-[14px] md:text-center mb-2 ">
          These are the technologies I've worked with
        </p>
        {/* mobileDevice */}
        <div className="flex flex-col sm:flex-row  gap-2   lg:hidden   ">
          <ul className="flex uppercase  list-none  font-medium ">
            <li className="cursor-default">html</li>
            <li className="cursor-default">css</li>
            <li className="cursor-default">javascript</li>
            <li className="cursor-default">tailwind</li>
          </ul>
          <ul className="flex uppercase  list-none font-medium ">
            <li className="cursor-default">Github</li>
            <li className="cursor-default">react</li>
            <li className="cursor-default">firebase</li>
            <li className="cursor-default">redux</li>
          </ul>
        </div>
        {/* Largerscreen */}
        <div className="hidden     w-full   lg:grid grid-cols-4 gap-8 ">
          <div className="flex flex-col  gap-2 shadow-md shadow-[#040c16] py-4 px-6 hover:scale-110 duration-500  items-center">
            <FaHtml5 size={50} className="text-blue-500" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col gap-2 shadow-md shadow-[#040c16] py-4 px-6 hover:scale-110 duration-500 items-center">
            <FaCss3 size={50} className="text-blue-500" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col gap-2 shadow-md shadow-[#040c16] py-4 px-6 hover:scale-110 duration-500 items-center">
            <IoLogoJavascript size={50} className="text-yellow-500" />
            <p>Javascript</p>
          </div>
          <div className="flex flex-col gap-2 shadow-md shadow-[#040c16] py-4 px-6 hover:scale-110 duration-500 items-center">
            <SiTailwindcss size={50} className="text-sky-500" />
            <p>Tailwindcss</p>
          </div>
          <div className="flex flex-col gap-2 shadow-md shadow-[#040c16] py-4 px-6 hover:scale-110 duration-500 items-center">
            <FaReact size={50} className="text-blue-500" />
            <p>React</p>
          </div>
          <div className="flex flex-col shadow-md shadow-[#040c16] py-4 px-6 hover:scale-110 duration-500 gap-2 items-center">
            <FaGithub size={50} className="bg-[#333333] rounded-full" />
            <p>Github</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] py-4 px-6 hover:scale-110 duration-500 flex flex-col gap-2 items-center">
            <IoLogoFirebase size={50} className="text-amber-500" />
            <p>Firebase </p>
          </div>
          <div className=" shadow-md shadow-[#040c16] py-4 px-6 hover:scale-110 duration-500 rounded-lg flex flex-col gap-2 items-center">
            <SiRedux size={50} className="text-purple-500" />
            <p>Redux </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
