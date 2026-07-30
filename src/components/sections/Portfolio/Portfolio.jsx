import styles from "./Portfolio.module.css";
import PortfolioCard from "./PortfolioCard";

// Import your local images
import ecommerce from "../../../assets/ecommerce.webp";
import fitness from "../../../assets/fitnessapp.webp";
import restroombranding from "../../../assets/restroombranding.webp";
import seo from "../../../assets/seo.webp";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    image: ecommerce,
  },
  {
    title: "Restroom Branding",
    category: "Brand Identity",
    image: restroombranding,
  },
  {
    title: "SEO Campaign",
    category: "Digital Marketing",
    image: seo,
  },
  {
    title: "Fitness App",
    category: "UI / UX Design",
    image: fitness,
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