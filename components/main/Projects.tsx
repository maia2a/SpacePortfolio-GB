import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio"
          description="My space portfolio made with Next.js and Tailwind.css"
        />
        <ProjectCard
          src="/findparty.png"
          title="FindParty App"
          description="An app that connects people to the party"
        />
        <ProjectCard
          src="/newhorizon.png"
          title="NewHorizon App"
          description="An app that find races to the company, making easier to find the driver of the company"
        />
      </div>
    </div>
  );
};

export default Projects;
