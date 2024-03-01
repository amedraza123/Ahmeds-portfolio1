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
              ReactJS, HTML, CSS, NPM,
             BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents, JavaScript, Word Press
            </span>
            <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java script
            </span>
          </li>
            
            <section id="languages">
  <div class="container">
    <div class="row">
      <h1 class="section__title"> <span class="text--purple"></span></h1>
      <div class="language__list">
        <div class="language">
          <figure class="language__img--wrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              alt="Html Logo" class="language__img" />
          </figure>
          <span class="language__name">HTML</span>
        </div>
        <div class="language">
          <figure class="language__img--wrapper">
            <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="CSS Logo"
              class="language__img" />
          </figure>
          <span class="language__name">CSS</span>
        </div>
        <div class="language">
          <figure class="language__img--wrapper">
            <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="JavaScript Logo"
              class="language__img" />
          </figure>
          <span class="language__name">JavaScript</span>
        </div>
        <div class="language">
          <figure class="language__img--wrapper">
            <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
              alt="TypeScript Logo" class="language__img" />
          </figure>
          <span class="language__name">TypeScript</span>
        </div>
        <div class="language">
          <figure class="language__img--wrapper">
            <img src="https://raw.githubusercontent.com/praveenpuglia/tailwind-breeze/master/assets/logo.svg" alt="Vue Logo"
              class="language__img" />
          </figure>
          <span class="language__name">Tailwind CSS</span>
        </div>
        <div class="language">
          <figure class="language__img--wrapper">
            <img src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/bootstrap-stack.png?itok=BdTnonBB" alt="Nuxt Logo"
              class="language__img" />
          </figure>
          <span class="language__name">Boots Strap</span>
        </div>
        <div class="language">
          <figure class="language__img--wrapper">
            <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png" alt="React Logo"
              class="language__img" />
          </figure>
          <span class="language__name">React</span>
        </div>
        <div class="language">
          <figure class="language__img--wrapper">
            <img src="https://tse1.mm.bing.net/th?id=OIP.zNUSFf1aeErMeOFY9s1--QHaHa&pid=Api&P=0&h=220" alt="MobX Logo" class="language__img" />
          </figure>
          <span class="language__name">Word Press</span>
        </div>
      </div>
    </div>
  </div>
</section>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;



