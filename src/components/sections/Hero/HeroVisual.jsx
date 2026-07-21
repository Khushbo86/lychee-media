import styles from "./Hero.module.css";
import FloatingCard from "./FloatingCard";

const HeroVisual = () => {
  return (
    <div className={styles.visual}>
      <FloatingCard
        title="Leads"
        value="+284%"
      />

      <FloatingCard
        title="SEO Rank"
        value="#1"
      />

      <FloatingCard
        title="Engagement"
        value="+42%"
      />

      <FloatingCard
        title="AI Automation"
        value="Active"
      />
    </div>
  );
};

export default HeroVisual;