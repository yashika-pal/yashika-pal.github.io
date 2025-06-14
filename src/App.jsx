import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Education from "./components/Education/Education.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.centerContainer}>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;
