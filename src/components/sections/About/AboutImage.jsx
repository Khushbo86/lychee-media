import styles from "./About.module.css";
import aboutImage from "../../../assets/about.jpg";
import { FaAward } from "react-icons/fa";

const AboutImage = () => {
  return (
    <div className={styles.imageBox}>
      <img
        src={aboutImage}
        alt="Lychee Media Team"
        className={styles.image}
      />

      <div className={styles.card}>
        <div className={styles.cardIcon}>
          <FaAward />
        </div>

        <div>
          <h3>200+</h3>
          <p>Successful Projects</p>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;