import HeroContent from "./HeroContent";
import ContactForm from "../Contact/ContactForm";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.wrapper}`}>
        <HeroContent />

        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;