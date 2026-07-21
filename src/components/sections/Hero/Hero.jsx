import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.wrapper}`}>
        <HeroContent />
        <HeroDashboard />
      </div>
    </section>
  );
};

export default Hero;