"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full h-full overflow-hidden">
      <motion.div
        variants={slideInFromTop}
        className="absolute top-0 z-[5] text-4xl font-medium text-center text-gray-200"
      >
        Performance{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          & Security
        </span>
      </motion.div>

      <div className="relative z-[20] flex flex-col items-center justify-center -translate-y-12">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock Top"
            width={50}
            height={50}
            className="transform transition-transform duration-200 group-hover:translate-y-6"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>
        <div className="Welcome-box px-4 py-1 mt-5 z-[20] border border-[#7042f88b] opacity-90">
          <h1 className="Welcome-text text-xs">Encryption</h1>
        </div>
      </div>

      <div className="absolute bottom-5 z-[20] px-2">
        <div className="cursive text-lg font-medium text-center text-gray-300">
          Secure your data with our advanced encryption technology.
        </div>
      </div>

      <div className="absolute inset-0 z-[1] flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
