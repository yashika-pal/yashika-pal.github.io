import React from "react";
import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Hirely – Job Search and Recruitment Platform",
    image: "/images/Joblify.jpeg",
    description:
      "A full-stack job portal with user/recruiter roles, application tracking, RESTful APIs, and a modern Tailwind CSS UI for a seamless job search and recruitment experience.",
    tags: [
      "React JS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    githubLink: "https://github.com/yashika-pal/Joblify",
  },
  {
    title: " LLM based Cyber Threat Intelligence System",
    image: "/images/cs-prep.png",
    description:
      "An AI-driven cybersecurity assistant using LLMs, ChromaDB, and Sentence Transformers in a RAG workflow to enable real-time threat analysis via a Streamlit interface.",
    tags: ["Python", "Streamlit", "LangChain", "ChromaDB", "Pandas"],
    githubLink: "https://github.com/yashika-pal/LLM-network-analysis",
  },
  {
    title: "Typeit - The Typing Speed Test",
    image: "/images/TypeIt.png",
    description:
      "A web app with real-time typing speed tracking, powered by Google Gemini AI for dynamic sentence generation and enhanced user engagement through instant feedback.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "NOde.js", "Gemini API"],
    githubLink: "https://github.com/yashika-pal/Typeit-The-Typing-Speed-Test",
  },
];

const Projects = () => (
  <section className={styles.projectsSection} id="projects">
    <h2 className={styles.title}>PROJECTS</h2>
    <div className={styles.projectsGrid}>
      {projects.map((project, idx) => (
        <div className={styles.projectCard} key={idx}>
          <div className={styles.projectImageWrapper}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDesc}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span className={styles.tag} key={i}>
                  {tag}
                </span>
              ))}
            </div>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub className={styles.githubIcon} />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
