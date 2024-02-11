import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Ahmed</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          
          <a href="https://www.linkedin.com/in/ahmed-raza-a974ab28a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          
          <a href="mailto:your.uniformedtornado@gmail.com">
            <FaEnvelope />
          </a>

          <a href="https://github.com/amedraza123" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, \HTml,CSS,Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

