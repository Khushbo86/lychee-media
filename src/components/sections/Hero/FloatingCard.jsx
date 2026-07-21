import styles from "./Hero.module.css";

const FloatingCard = ({ title, value }) => {
  return (
    <div className={styles.card}>
      <small>{title}</small>
      <h3>{value}</h3>
    </div>
  );
};

export default FloatingCard;