import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // 24-hour format, user's local time zone, with seconds
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime(); // Set immediately on mount
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={styles.Navbar}>
      <div className={styles.timeTitle}>{currentTime}</div>
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
