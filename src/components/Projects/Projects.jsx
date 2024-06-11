// import React from "react";
import styles from "../Projects/ProjectsStyles.module.css";
import tradeBuddy from "../../assets/Trade-buddy-ai.png";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* <a href="https://github.com/hieunht97/trade-buddy-ai" target="_blank">
          <img className="hover" src={tradeBuddy} alt="Trade Buddy Logo" />
          <h3>Trade Buddy AI</h3>
          <p>Trading App</p>
        </a> */}
        <ProjectCard
          src={tradeBuddy}
          link="https://github.com/hieunht97/trade-buddy-ai"
          h3="Trade Buddy AI"
          p="Trading App"
        />
        <ProjectCard
          src={tradeBuddy}
          link="https://github.com/hieunht97/trade-buddy-ai"
          h3="Crypto Discord Bot"
          p="Discord Bot"
        />
        <ProjectCard
          src={tradeBuddy}
          link="https://github.com/hieunht97/trade-buddy-ai"
          h3="Crypto Wallet Manager"
          p="Web App"
        />
      </div>
    </section>
  );
}

export default Projects;
