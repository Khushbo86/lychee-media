import styles from "./Stats.module.css";

const StatCard = ({ icon, number, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <h2>{number}</h2>

      <p>{title}</p>
    </div>
  );
};

export default StatCard;