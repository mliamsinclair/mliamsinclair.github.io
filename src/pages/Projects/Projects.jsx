import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";
import projectIcon from "./project-icon.svg";

function Projects({ id, title }) {
  return (
    <div className="Projects" id={id}>
      <div className="page-icon-title">
        <img src={projectIcon} alt="About Icon" className="page-icon" />
        <h1>{title}</h1>
      </div>
      <p>Here are some of the projects I've worked on.</p>
      <ProjectCard
        projectName="PumpPals"
        imageUrl="https://picsum.photos/200/300"
        description="Fitness social media application that allows users to share their workouts and progress with friends. Built with React, Spring Boot, and MongoDB."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Skybin"
        imageUrl="https://picsum.photos/200/300"
        description="A cloud storage application that allows users to upload and download files, as well as manage their own personal directory. Built with React, Spring Boot, and MySQL."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Object Detection Robot"
        imageUrl="https://picsum.photos/200/300"
        description="A robotic arm that can detect and pick up colored balls as well as move freely via controller input. Built with Arduino IDE, C++, and Python."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Distributed and Network Programming"
        imageUrl="https://picsum.photos/200/300"
        description="A directory of various projects that demonstrate my knowledge of distributed and network programming. Built with Java and Swing."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Portfolio Page"
        imageUrl="https://picsum.photos/200/300"
        description="This website! Built with React and CSS."
        projectLink="https://google.com"
      />
    </div>
  );
}

export { Projects };