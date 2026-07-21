import styles from "./Stats.module.css";
import StatCard from "./StatCard";
import {
  FaUsers,
  FaProjectDiagram,
  FaAward,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "250+",
    title: "Happy Clients",
  },
  {
    icon: <FaProjectDiagram />,
    number: "500+",
    title: "Projects Completed",
  },
  {
    icon: <FaAward />,
    number: "10+",
    title: "Awards Won",
  },
  {
    icon: <FaChartLine />,
    number: "98%",
    title: "Client Satisfaction",
  },
];

const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;