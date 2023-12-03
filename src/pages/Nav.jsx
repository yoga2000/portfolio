import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-scroll";
const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className=" fixed w-full h-[80px]  justify-around items-center flex text-gray-300 px-4 bg-[#0a192f] "
    >
      <p className=" uppercase tracking-[10px]">portfolio </p>
      {/* menu */}
      <ul className=" hidden md:flex">
        <li className=" hover:border-b-4 border-pink-500 transition ease-in-out delay-150 duration-150 w-fit">
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=" hover:border-b-4  border-pink-500 transition ease-in-out duration-150 w-fit">
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" hover:border-b-4  border-pink-500 transition ease-in-out duration-150 w-fit">
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" hover:border-b-4 border-pink-500 transition ease-in-out duration-150 w-fit">
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=" hover:border-b-4 border-pink-500 transition ease-in-out duration-150 w-fit">
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="  cursor-pointer md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobileMenu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0  left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* socialIcons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-xl  duration-300 bg-blue-600 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/yogaraj0310/"
            >
              <span> Linkedin</span>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-xl  duration-300 bg-[#333333] ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/yoga2000"
            >
              <span> Github</span>
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-xl  duration-300 bg-teal-500 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:rajyoga0310@gmail.com"
            >
              <span> Email</span>
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-xl  duration-300 bg-purple-500 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              <span> Resume</span>
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
