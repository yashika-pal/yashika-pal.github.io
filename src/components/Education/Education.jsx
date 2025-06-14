<<<<<<< HEAD
import React from "react";
import styles from "./Education.module.css";

const educationItems = [
  {
    degree: "Bachelor of Engineering – Information Science and Engineering",
    institution: "CMR Institute of Technology, AECS Layout, Bengaluru",
    score: "9.26",
    period: "2022-2026",
  },
  {
    degree: "12th Standard (CBSE) – Science",
    institution: "Kendriya Vidyalaya DRDO, Bengaluru",
    score: "92%",
    period: "2021-2022",
  },
  {
    degree: "10th Standard (CBSE)",
    institution: "Kendriya Vidyalaya DRDO, Bengaluru",
    score: "89.6%",
    period: "2019-2020",
  },
];

const Education = () => (
  <section className={styles.educationSection} id="education">
    <h2 className={styles.title}>EDUCATION</h2>
    <div className={styles.outerBox}>
      <div className={styles.educationBox}>
        {educationItems.map((item, idx) => (
          <div className={styles.educationItem} key={idx}>
            <div className={styles.rowTop}>
              <div>
                <div className={styles.degree}>{item.degree}</div>
              </div>
              <div className={styles.score}>{item.score}</div>
            </div>
            <div className={styles.rowBottom}>
              <div className={styles.institution}>{item.institution}</div>
              <div className={styles.period}>{item.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
=======
import React from "react";
import styles from "./Education.module.css";

const educationItems = [
  {
    degree: "Bachelor of Engineering – Information Science and Engineering",
    institution: "CMR Institute of Technology, AECS Layout, Bengaluru",
    score: "9.26",
    period: "2022-2026",
  },
  {
    degree: "12th Standard (CBSE) – Science",
    institution: "Kendriya Vidyalaya DRDO, Bengaluru",
    score: "92%",
    period: "2021-2022",
  },
  {
    degree: "10th Standard (CBSE)",
    institution: "Kendriya Vidyalaya DRDO, Bengaluru",
    score: "89.6%",
    period: "2019-2020",
  },
];

const Education = () => (
  <section className={styles.educationSection} id="education">
    <h2 className={styles.title}>EDUCATION</h2>
    <div className={styles.outerBox}>
      <div className={styles.educationBox}>
        {educationItems.map((item, idx) => (
          <div className={styles.educationItem} key={idx}>
            <div className={styles.rowTop}>
              <div>
                <div className={styles.degree}>{item.degree}</div>
              </div>
              <div className={styles.score}>{item.score}</div>
            </div>
            <div className={styles.rowBottom}>
              <div className={styles.institution}>{item.institution}</div>
              <div className={styles.period}>{item.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
>>>>>>> 88fd6b1a82040412f2325c24e6783706bbc537b6
