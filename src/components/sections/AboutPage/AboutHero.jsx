import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.tag}>About Lychee Media</span>

          <h1>
            We Build Brands That
            <span> Inspire & Grow</span>
          </h1>

          <p>
            We're a creative digital agency helping startups and businesses
            establish powerful online identities through strategy, design,
            development, and marketing.
          </p>

          <Link to="/contact" className={styles.heroBtn}>
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;