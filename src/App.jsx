import React from "react";
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About.jsx";
import { Projects } from "./pages/Projects/Projects.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import Skill from "./pages/About/Skill.jsx";
import pythonIcon from "./assets/skill-icons/python.svg";
import javaIcon from "./assets/skill-icons/java.svg";
import cPlusPlusIcon from "./assets/skill-icons/c-plusplus.svg";
import javascriptIcon from "./assets/skill-icons/javascript.svg";
import sqlIcon from "./assets/skill-icons/sql.svg";
import htmlIcon from "./assets/skill-icons/file-type-html.svg";
import reactIcon from "./assets/skill-icons/react.svg";
import mysqlIcon from "./assets/skill-icons/mysql.svg";
import mongodbIcon from "./assets/skill-icons/mongodb.svg";
import springIcon from "./assets/skill-icons/spring-boot.svg";
import awsIcon from "./assets/skill-icons/aws.svg";
import restApiIcon from "./assets/skill-icons/api.svg";
import aiIcon from "./assets/skill-icons/openai.svg";
import gitIcon from "./assets/skill-icons/github.svg";
import githubLink from "./assets/skill-icons/github-link.svg";
import homeLink from "./assets/skill-icons/nav-arrow-up.svg";
import contactIcon from "./assets/skill-icons/contact.svg";
import "./App.css";
import "./Footer.css";

function App() {
  return (
    <div className="App">
      <Home id="home" title="Home" />
      <div className="content">
        <Navbar />
        <div className="about-skills-container">
          <div className="about-section">
            <About id="about" title="About" />
          </div>
          <div className="skills">
            <Skill skillName="PYTHON" imageUrl={pythonIcon} />
            <Skill skillName="JAVA" imageUrl={javaIcon} />
            <Skill skillName="C++" imageUrl={cPlusPlusIcon} />
            <Skill skillName="JAVASCRIPT" imageUrl={javascriptIcon} />
            <Skill skillName="SQL" imageUrl={sqlIcon} />
            <Skill skillName="HTML" imageUrl={htmlIcon} />
            <Skill skillName="REACT" imageUrl={reactIcon} />
            <Skill skillName="MYSQL" imageUrl={mysqlIcon} />
            <Skill skillName="MONGODB" imageUrl={mongodbIcon} />
            <Skill skillName="SPRING" imageUrl={springIcon} />
            <Skill skillName="AWS" imageUrl={awsIcon} />
            <Skill skillName="REST API" imageUrl={restApiIcon} />
            <Skill skillName="AI" imageUrl={aiIcon} />
            <Skill skillName="GIT" imageUrl={gitIcon} />
          </div>
        </div>
        <Projects id="projects" title="Projects" />
        <Contact id="contact" title="Contact" />
        <Footer id="footer" title="Footer" />
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
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Footer({ id, title }) {
  return (
    <div className="Footer" id={id}>
      <div className="home-link">
        <a href="#home">
          <img src={homeLink} alt="home" />
        </a>
      </div>
      <div className="img-link-container">
        <a href="https://github.com/mliamsinclair" target="_blank">
          <img src={githubLink} alt="github" />
        </a>
        <a href="mailto:m.liam.sinclair@gmail.com" target="_blank">
          <img src={contactIcon} alt="email" />
        </a>
      </div>
      <p>MICHAEL LIAM SINCLAIR</p>
    </div>
  );
}

export default App;
