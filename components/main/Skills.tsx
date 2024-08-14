import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constant";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

//Function criada para reduzir a duplicacao do codigo
const renderSkillSection = (skillArray) => {
  return (
    <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      {skillArray.map((image, index) => (
        <SkillDataProvider
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      {renderSkillSection(Skill_data)}
      {renderSkillSection(Frontend_skill)}
      {renderSkillSection(Backend_skill)}
      {renderSkillSection(Full_stack)}
      {renderSkillSection(Other_skill)}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[10px] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
