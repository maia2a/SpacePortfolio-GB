import { Socials } from "@/constant";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-2">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="Logo Gabriell Maia"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Gabriell Maia
          </span>
        </a>

        <nav className="flex items-center w-[300px] lg:w-[500px] h-full justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4 lg:px-6 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-white">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-white">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-white">
              Projects
            </a>
          </div>
        </nav>

        <div className="flex flex-row gap-3 sm:gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${social.name}`}
            >
              <Image
                src={social.src}
                alt={`${social.name} logo`}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
