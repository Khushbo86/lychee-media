import styles from "./Testimonials.module.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, role, review }) => {
  return (
    <div className={styles.card}>

      <FaQuoteLeft className={styles.quote} />

      <div className={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p className={styles.review}>
        "{review}"
      </p>

      <div className={styles.author}>
        <h4>{name}</h4>
        <span>{role}</span>
      </div>

    </div>
  );
};

export default TestimonialCard;