"use client";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const FooterSection = ({ title, links }: any) => (
  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
    <div className="font-bold text-[16px]">{title}</div>
    {links.map(({ icon: Icon, text, url }: any, index: any) => (
      <a
        key={index}
        href={url}
        target="_blank"
        className="flex flex-row items-center my-[15px] cursor-pointer"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "center",
        }}
      >
        {Icon && <Icon />}
        <span className="text-[15px] ml-[6px]">{text}</span>
      </a>
    ))}
  </div>
);

const Footer = () => {
  const communityLinks = [
    {
      icon: FaYoutube,
      text: "@GabriellDev",
      url: "https://www.youtube.com/@GabriellDeveloper",
    },
    {
      icon: RxGithubLogo,
      text: "MA1A01",
      url: "https://github.com/MA1A01",
    },
    {
      icon: RxDiscordLogo,
      text: "biellmaaia",
      url: "https://discord.com/users/biellmaaia",
    },
  ];
  const aboutLinks = [
    {
      text: "Become a sponsor",
      url: "#",
    },
    {
      text: "Learning about me",
      url: "#",
    },
    {
      text: "Send me a email: gabrielldeveloper@gmail.com",
      url: "mailto:gabrielldeveloper@gmail.com",
    },
  ];
  const socialMediaLinks = [
    {
      icon: RxInstagramLogo,
      text: "@gb.maia",
      url: "https://instagram.com/gb.maia",
    },
    {
      icon: RxTwitterLogo,
      text: "@biellmaaia",
      url: "https://twitter.com/biellmaaia",
    },
    {
      icon: RxLinkedinLogo,
      text: "@biellmaaia",
      url: "https://linkedin.com/in/biellmaaia",
    },
  ];

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  z-30 relative">
      <div className="w-full flex flex-col items-center justify-center m-auto ">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <FooterSection title="Community" links={communityLinks} />
          <FooterSection title="Social Media" links={socialMediaLinks} />
          <FooterSection title="About" links={aboutLinks} />
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Gabriell Maia Dev 2024. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
