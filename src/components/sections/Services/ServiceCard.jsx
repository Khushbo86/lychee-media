import styles from "./Services.module.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>

      <div className={styles.icon}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
};

export default ServiceCard;