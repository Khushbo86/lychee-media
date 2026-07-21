import styles from "./Pricing.module.css";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({
  title,
  price,
  features,
  featured,
}) => {
  return (
    <div
      className={`${styles.card} ${
        featured ? styles.featured : ""
      }`}
    >
      {featured && (
        <span className={styles.badge}>
          Most Popular
        </span>
      )}

      <h3>{title}</h3>

      <h2>{price}</h2>

      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <FaCheck />
            {feature}
          </li>
        ))}
      </ul>

      <button>
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;