import { useState } from "react";
import React from "react";
import ProjectCard from "./ProjectCard";
import Skill from "./Skill.jsx";
import "./App.css";
import "./Skill.css";

function App() {
  return (
    <div className="App">
      <Home id="home" title="Home" />
      <Navbar />
      <div className="content">
        <About id="about" title="About" />
        <div className="skills">
          <Skill
            skillName="Python"
            imageUrl="https://example.com/python-logo.png"
          />
          <Skill
            skillName="Python"
            imageUrl="https://example.com/python-logo.png"
          />
          <Skill
            skillName="Python"
            imageUrl="https://example.com/python-logo.png"
          />
          <Skill
            skillName="Python"
            imageUrl="https://example.com/python-logo.png"
          />
          <Skill
            skillName="Python"
            imageUrl="https://example.com/python-logo.png"
          />
          <Skill
            skillName="Python"
            imageUrl="https://example.com/python-logo.png"
          />
          <Skill
            skillName="Python"
            imageUrl="https://example.com/python-logo.png"
          />
        </div>
        <Projects id="projects" title="Projects" />
        <div className="project-cards">
          <ProjectCard className="project-card-left"
            projectName="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://example.com/project-image.jpg"
            projectLink="https://example.com/project-site"
          />
          <ProjectCard className="project-card-right"
            projectName="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://example.com/project-image.jpg"
            projectLink="https://example.com/project-site"
          />
          <ProjectCard className="project-card-left"
            projectName="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://example.com/project-image.jpg"
            projectLink="https://example.com/project-site"
          />
          <ProjectCard className="project-card-right"
            projectName="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://example.com/project-image.jpg"
            projectLink="https://example.com/project-site"
          />
        </div>
        <Skills id="skills" title="Skills" />
        <Contact id="contact" title="Contact" />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="Navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Home({ id, title }) {
  return (
    <div className="Home" id={id}>
      <h1>{"Hi,"}</h1>
      <h1>{"I'm Liam."}</h1>
      <p>
        My name is <span className="highlight">Liam</span> and I'm a{" "}
        <span className="highlight">software engineer</span> based in{" "}
        <span className="highlight">Greenville, South Carolina</span>.
      </p>
    </div>
  );
}

function About({ id, title }) {
  return (
    <div className="About" id={id}>
      <h1>{title}</h1>
      <p>
        I'm a software engineer with a background in{" "}
        <span className="highlight">data science</span> and{" "}
        <span className="highlight">machine learning</span>. I'm passionate
        about building <span className="highlight">beautiful</span>,{" "}
        <span className="highlight">intuitive</span>, and{" "}
        <span className="highlight">accessible</span> applications.
      </p>
    </div>
  );
}

function Projects({ id, title }) {
  return (
    <div className="Projects" id={id}>
      <h1>{title}</h1>
      <p>Here are some of the projects I've worked on.</p>
    </div>
  );
}

function Skills({ id, title }) {
  return (
    <div className="Skills" id={id}>
      <h1>{title}</h1>
      <p>Here are some of the skills I've developed.</p>
    </div>
  );
}

function Contact({ id, title }) {
  return (
    <div className="Contact" id={id}>
      <h1>{title}</h1>
      <p>Feel free to reach out to me at </p>
    </div>
  );
}

export default App;
