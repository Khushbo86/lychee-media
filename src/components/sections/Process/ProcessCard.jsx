import styles from "./Process.module.css";

const ProcessCard = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>

      <div className={styles.number}>
        {number}
      </div>

      <div className={styles.icon}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
};

export default ProcessCard;