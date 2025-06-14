<<<<<<< HEAD
import React from "react";
import styles from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.greeting}>Hello, I'm</div>
        <div className={styles.title}>Yashika Pal</div>
        <div className={styles.description}>
          A final-year Information Science Engineering student with a strong
          interest in web development and problem-solving. I enjoy building
          efficient, user-centric applications and exploring innovative
          solutions to real-world challenges. Aspiring to begin my career as a
          Software Developer, I aim to contribute to impactful projects while
          continuously learning and growing in a collaborative environment.
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/yashikapal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yashika-pal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className={styles.buttons}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yashikapal2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.heroImgWrapper}>
        <img src="/images/pic.jpg" alt="Profile" className={styles.heroImg} />
      </div>
    </section>
  );
};

export default About;
=======
import React from "react";
import styles from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.greeting}>Hello, I'm</div>
        <div className={styles.title}>Yashika Pal</div>
        <div className={styles.description}>
          A final-year Information Science Engineering student with a strong
          interest in web development and problem-solving. I enjoy building
          efficient, user-centric applications and exploring innovative
          solutions to real-world challenges. Aspiring to begin my career as a
          Software Developer, I aim to contribute to impactful projects while
          continuously learning and growing in a collaborative environment.
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/yashikapal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yashika-pal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className={styles.buttons}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yashikapal2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.heroImgWrapper}>
        <img src="/images/pic.jpg" alt="Profile" className={styles.heroImg} />
      </div>
    </section>
  );
};

export default About;
>>>>>>> 88fd6b1a82040412f2325c24e6783706bbc537b6
