"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      id="about-me"
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="flex flex-col gap-5 justify-center text-start w-full md:max-w-[50%]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center py-2 px-3 border border-[#7042f88b] opacity-90"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-sm">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects on this site
          to see how I bring ideas to life through clean code and powerful
          applications.
        </motion.p>

        <motion.a
          href="/Gabriell Maia Curriculo.pdf"
          download="Gabriell Maia Curriculo.pdf"
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l rounded-lg max-w-[200px] cursor-pointer"
        >
          Download My Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-auto flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Work-related icons"
          height={650}
          width={650}
          className="max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
