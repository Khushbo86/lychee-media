import styles from "./About.module.css";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.wrapper}`}>
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
};

export default About;