import styles from "./About.module.css";
import { FaCheckCircle } from "react-icons/fa";

const AboutContent = () => {
  return (
    <div className={styles.content}>

      <span className={styles.tag}>
        ABOUT US
      </span>

      <h2>
        We Create Digital
        Experiences That
        Drive Growth.
      </h2>

      <p>
        At Lychee Media, we combine creativity,
        technology, and marketing to help businesses
        establish a powerful online presence.
      </p>

      <div className={styles.features}>

        <div>
          <FaCheckCircle />
          Creative Team
        </div>

        <div>
          <FaCheckCircle />
          Data-Driven Strategy
        </div>

        <div>
          <FaCheckCircle />
          Fast Delivery
        </div>

        <div>
          <FaCheckCircle />
          24/7 Support
        </div>

      </div>

      <button className={styles.button}>
        Learn More
      </button>

    </div>
  );
};

export default AboutContent;