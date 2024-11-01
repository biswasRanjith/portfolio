import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

export default function Footer() {
  return <footer className=" fixed top-60 right-3 ">
    {/* <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"> */}
    <a className="mb-12 px-5"
    href="https://www.linkedin.com/in/ranjithbiswas755/" target="_blank">
          <FaGithub className="opacity-90 h-5 w-5"/>
    </a>
    <a className="mb-12 px-4"
    href="https://github.com/biswasRanjith" target="_blank">
    <BsLinkedin className="opacity-90 h-5 w-5" />
        </a>

    <a className="mb-12 px-4"
    href="https://leetcode.com/u/biswasranjith755" target="_blank" >
    <SiLeetcode className="opacity-90 h-5 w-5"/>
        </a>

        <a className="mb-12 px-4"
        href="https://www.hackerrank.com/profile/biswasranjith755" target="_blank" >
    <FaHackerrank className="opacity-90 h-5 w-5"/>
        </a>

        <a className="mb-12 px-4"
        href="https://stackoverflow.com/users/9316292/ranjith-biswas?tab=profile" target="_blank" >
    <ImStackoverflow className="opacity-90 h-5 w-5"/>
        </a>


    {/* </ul>    */}
  </footer>;
}
