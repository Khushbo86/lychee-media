import styles from "./AboutPage.module.css";
import aboutImg from "../../../assets/about-story.jpg";

const OurStory = () => {
  return (
    <section className={styles.story}>
      <div className={`container ${styles.storyWrapper}`}>
        
        <div className={styles.storyImage}>
          <img src={aboutImg} alt="Our Story" />

          <div className={styles.experienceCard}>
            <h2>8+</h2>
            <p>Years of Digital Excellence</p>
          </div>
        </div>

        <div className={styles.storyContent}>
          <span className={styles.sectionTag}>Our Story</span>

          <h2>
            Turning Ideas Into
            <span> Digital Success</span>
          </h2>

          <p>
            At Lychee Media, we believe every brand has a unique story worth
            sharing. Since our inception, we've partnered with startups,
            entrepreneurs, and established businesses to create memorable
            digital experiences that drive real business growth.
          </p>

          <p>
            Our team combines creativity, strategy, and cutting-edge technology
            to deliver websites, branding, digital marketing, and AI-powered
            solutions that help businesses stand out in an increasingly
            competitive market.
          </p>

          <div className={styles.storyStats}>
            <div>
              <h3>250+</h3>
              <span>Projects Delivered</span>
            </div>

            <div>
              <h3>120+</h3>
              <span>Happy Clients</span>
            </div>

            <div>
              <h3>98%</h3>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;