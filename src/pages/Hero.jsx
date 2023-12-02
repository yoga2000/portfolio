import { HiArrowNarrowRight } from "react-icons/hi";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion, useInView, useAnimation } from "framer-motion";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Frontend React Developer"],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <div name="home" className=" w-full h-screen bg-[#0a1924] ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center  h-full">
        <p className="max-w-[700px]   text-white leading-8 text-lg tracking-wider">
          <h1>My name is</h1>
          <span className="  text-4xl font-bold uppercase tracking-[20px]  sm:text-6xl text-teal-500 ">
            yogaraj
          </span>
          <br />a passionate
          <span className="font-medium text-teal-400 px-2  ">{text}</span>
          <Cursor cursorColor="pink" />
          <br />
          dedicated to crafting seamless and engaging user experiences. With a
          blend of creativity and technical expertise, I strive to bring ideas
          to life through code.
        </p>
        <div className="">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 duration-150 hover:border-pink-600">
            View Work
            <span className=" group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
