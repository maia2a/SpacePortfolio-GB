import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="w-full flex flex-wrap justify-center gap-10 px-5">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio"
          description="A space-themed portfolio built with Next.js and Tailwind CSS."
        />
        <ProjectCard
          src="/findparty.png"
          title="FindParty App"
          description="An app that connects people to parties."
        />
        <ProjectCard
          src="/newhorizon.png"
          title="NewHorizon App"
          description="An app that helps companies find drivers more easily."
        />
      </div>
    </section>
  );
};

export default Projects;
