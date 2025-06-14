<<<<<<< HEAD
import React from "react";
import styles from "./Navbar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.title}>
        <span className={styles.angle}>&lt;</span>
        Portfolio
        <span className={styles.angle}>&gt;</span>
      </div>
      <ul className={styles.menuItems}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
      </ul>
      <div className={styles.rightSection}>
        <a
          href="/path/to/your-cv.pdf"
          // download="YourName_CV.pdf"
          className={styles.downloadBtn}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
=======
import React from "react";
import styles from "./Navbar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.title}>
        <span className={styles.angle}>&lt;</span>
        Portfolio
        <span className={styles.angle}>&gt;</span>
      </div>
      <ul className={styles.menuItems}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
      </ul>
      <div className={styles.rightSection}>
        <a
          href="/path/to/your-cv.pdf"
          // download="YourName_CV.pdf"
          className={styles.downloadBtn}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> 88fd6b1a82040412f2325c24e6783706bbc537b6
