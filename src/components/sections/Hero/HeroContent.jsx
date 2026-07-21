import styles from "./Hero.module.css";

const HeroContent = () => {
  return (
    <div className={styles.content}>
      <span className={styles.tag}>
        🚀 Premium Digital Marketing Agency
      </span>

      <h1>
        We Build Brands That
        <span> People Remember.</span>
      </h1>

      <p>
        Lychee Media helps businesses grow with creative branding, websites,
        social media, SEO, and performance marketing.
      </p>

      <div className={styles.buttons}>
        <button className={styles.primaryBtn}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroContent;