"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import qutLogo from "@/public/uel-logo.jpeg";
import bitLogo from "@/public/bitsince1979_logo.jpeg";
import ssmrvLogo from "@/public/ssmrv_degree_college_logo.jpeg";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[850px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={qutLogo} alt="QUT" width="130" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Msc in Cloud Computing
          </p>
          <p>University of East London</p>
          <p className="mt-1">Graduate in 2025</p>
          {/* <p className="my-1">GPA 6.2/7</p> */}
          <p className="mt-1">Major in Cloud technologies, AI and Machine Vision, Big data analytics, computer security.</p>
          {/* <ul className="list-disc pl-6">
            <li>Major in Cloud technologies, AI and Machine Vision, Big data analytics, computer security.</li>
          </ul> */}
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={bitLogo} alt="QUT" width="200" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Masters of Computer Application
          </p>
          <p>Bangalore Institue of Technology</p>
          <p className="mt-1">Graduated in 2018</p>
          {/* <p className="my-1">percentage 68%</p> */}
          <p className="my-1">Major in Computer Science, Networks & Security, Fundamentals of programing languages, Data structures & algorithms, Database, Web Programming</p>
          {/* <ul className="list-disc pl-6">
            <li>Major in Computer Science, Networks & Security, Fundamentals of programing languages, Data structures & algorithms,Database, Web Programming</li>
          </ul> */}
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={ssmrvLogo} alt="QUT" width="120" />
        </div>

        <div>
          <p className="text-lg font-medium">
          Bachelores of Computer Application
          </p>
          <p>S.S.M.R.V Degree College</p>
          <p className="mt-1">Graduated in 2015</p>
          {/* <p className="my-1">Percentage 58%</p> */}
          <p className="my-1">Major in Computer Science</p> 
        </div>
      </div>
    </motion.section>
  );
}
