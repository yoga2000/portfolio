import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  md:h-screen  text-gray-300 bg-[#0a1924] "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-500 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2  px-4 gap-8">
          <div>
            <p className="text-4xl font-bold sm:text-right">
              Hi I'm Yogaraj,nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p>
              My journey into frontend development started as a personal
              curiosity that quickly evolved into a full-fledged passion.
              Despite not having a traditional tech education, I've immersed
              myself in the world of coding, design principles, and user
              interfaces, finding joy in bringing ideas to life through code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
