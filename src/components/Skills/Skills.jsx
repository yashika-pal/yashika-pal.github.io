import React from "react";
import styles from "./Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTableau,
  SiPostman,
  SiPython,
  SiC,
} from "react-icons/si";
import { BiBarChart } from "react-icons/bi";

const skillCategories = [
  {
    title: "Frontend",
    items: [
      { icon: <FaHtml5 />, label: "HTML" },
      { icon: <FaCss3Alt />, label: "CSS" },
      { icon: <FaJs />, label: "JavaScript" },
      { icon: <FaBootstrap />, label: "Bootstrap" },
      { icon: <SiReact />, label: "React" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <SiNodedotjs />, label: "Node.js" },
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiMongodb />, label: "MongoDB" },
    ],
  },
  {
    title: "Languages",
    items: [
      { icon: null, label: "Java" },
      { icon: <FaJs />, label: "JavaScript" },
      { icon: <SiPython />, label: "Python" },
      { icon: <SiC />, label: "C" },
    ],
  },
  {
    title: "Software and Tools",
    items: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: null, label: "VS Code" },
      { icon: <SiPostman />, label: "Postman" },
      { icon: <BiBarChart />, label: "Power BI" },
      { icon: <SiTableau />, label: "Tableau" },
    ],
  },
];

const Skills = () => (
  <section className={styles.skillsSection} id="skills">
    <h2 className={styles.title}>SKILLS</h2>
    <div className={styles.skillsBox}>
      {skillCategories.map((category, idx) => (
        <div key={idx} className={styles.category}>
          <h3 className={styles.categoryTitle}>{category.title}</h3>
          <div className={styles.skillsGrid}>
            {category.items.map((item, i) => (
              <div className={styles.skillItem} key={i}>
                {item.icon && (
                  <span className={styles.skillIcon}>{item.icon}</span>
                )}
                <span className={styles.skillLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
