"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import githubdp from "../public/ranjith-biswas.jpg";
// import myPDF from '../public/'

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={githubdp}
              alt="Ranjith portrait"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-24 w-24 w-[9.5rem] h-[9.5rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-3xl !leading-[1.5] sm:text-3xl text-white max-w-[68rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ranjith Biswas.</span> I'm a{" "}
        <span className="font-bold">FullStack software engineer</span>{" "} with over 6 years of experience in delivering high-performance, scalable solutions that stand the test of time. With expertise in JavaScript, Node.js, React, Angular, SQL, and NoSQL, I build intuitive, reliable applications that exceed client expectations. My approach blends precision and creativity, ensuring every project is crafted with a focus on efficiency, security, and user experience.<br />
        <span className="font-bold">Let’s turn ideas into impactful digital solutions!</span>
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/biswasRanjith"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/ranjithbiswas755/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>

       
          <a href="./RANJITH_BISWAS_FullStack.pdf" target="_blank" rel="noopener noreferrer">
          <button
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          // href="https://www.linkedin.com/in/ranjithbiswas755/"
          // target="_blank"
        >
          <span className="opacity-70">View CV</span>
          <BsDownload className="opacity-70" />
          </button>
          </a>
          
        


       
        
          

      </motion.div>
    </section>
  );
}
