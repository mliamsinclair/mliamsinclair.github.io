import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";
import projectIcon from "./project-icon.svg";
import testPic from "./test.png";
import skybinPic from "./skybin.png";
import armPic from "./arm.png";
import pumppalsPic from "./pumppals.png";
import armDoc from "./arm-doc.pdf";

function Projects({ id, title }) {
  return (
    <div className="Projects" id={id}>
      <div className="project-icon-title">
        <img src={projectIcon} alt="About Icon" className="project-icon" />
        <h1>{title}</h1>
      </div>
      <ProjectCard
        projectName="Skybin"
        imageUrl={skybinPic}
        description="A cloud storage application that allows users to upload and download files, as well as manage their own personal directory. Built with React, Spring Boot, and MySQL."
        projectLink="https://github.com/mliamsinclair/skybin"
      />
      <ProjectCard
        projectName="PumpPals"
        imageUrl={pumppalsPic}
        description="Fitness social media application that allows users to share their workouts and progress with friends. Built with React, Spring Boot, and MongoDB."
        projectLink="https://github.com/mliamsinclair/PumpPals"
      />
      <ProjectCard
        projectName="Object Detection Robot"
        imageUrl={armPic}
        description="A robotic arm that can detect and pick up colored balls as well as move freely via controller input. Built with Arduino IDE, C++, and Python."
        projectLink="https://github.com/mliamsinclair/Object-Detection-Robotic-Arm"
        documentationLink={armDoc}
      />
      <ProjectCard
        projectName="Distributed and Network Programming"
        imageUrl={testPic}
        description="A directory of various projects that demonstrate my knowledge of distributed and network programming. Built with Java and Swing."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Twitter Sentiment Analysis"
        imageUrl={testPic}
        description="My senior portfolio project. An analysis of the use of DistilBERT and a six-layer CNN to classify the sentiment of tweets. Built with Python, TensorFlow, and Keras. Currently in progress."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Portfolio Page"
        imageUrl={testPic}
        description="This webpage! Built with React, JavaScript, and CSS. Hosted on GitHub Pages."
        projectLink="https://google.com"
      />
    </div>
  );
}

export { Projects };
