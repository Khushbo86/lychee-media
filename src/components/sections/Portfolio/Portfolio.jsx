import styles from "./Portfolio.module.css";
import PortfolioCard from "./PortfolioCard";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    image: "https://picsum.photos/600/500?random=1",
  },
  {
    title: "Restaurant Branding",
    category: "Brand Identity",
    image: "https://picsum.photos/600/500?random=2",
  },
  {
    title: "SEO Campaign",
    category: "Digital Marketing",
    image: "https://picsum.photos/600/500?random=3",
  },
  {
    title: "Fitness App",
    category: "UI / UX Design",
    image: "https://picsum.photos/600/500?random=4",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className={styles.heading}>
          <span>Portfolio</span>

          <h2>
            Some of Our
            <br />
            Recent Work
          </h2>

          <p>
            Every project reflects our passion for creativity,
            innovation, and delivering exceptional results.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;