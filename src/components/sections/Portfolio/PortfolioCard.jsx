import styles from "./Portfolio.module.css";

const PortfolioCard = ({ title, category, image }) => {
  return (
    <div className={styles.card}>

      <img src={image} alt={title} />

      <div className={styles.overlay}>
        <span>{category}</span>

        <h3>{title}</h3>

        <button>
          View Project →
        </button>
      </div>

    </div>
  );
};

export default PortfolioCard;