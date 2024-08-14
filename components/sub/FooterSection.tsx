"use client";
import React from "react";

interface LinkItem {
  icon?: React.ComponentType;
  text: string;
  url: string;
}

interface FooterSectionProps {
  title: string;
  links: LinkItem[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
    <div className="font-bold text-[16px]">{title}</div>
    {links.map(({ icon: Icon, text, url }, index) => (
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

export default FooterSection;
