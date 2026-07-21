import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard";

import {
  HiOutlineCode,
  HiOutlineDeviceMobile,
  HiOutlineColorSwatch,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const services = [
  {
    icon: <HiOutlineCode />,
    title: "Web Development",
    description:
      "Modern, fast and responsive websites built with the latest technologies.",
  },
  {
    icon: <HiOutlineDeviceMobile />,
    title: "Social Media Management",
    description:
      "Strategic management of your social media presence to engage audiences and drive growth.",
  },
  {
    icon: <HiOutlineColorSwatch />,
    title: "Performance Marketing",
    description:
      "Data-driven strategies to optimize your marketing efforts and maximize ROI.",
  },
  {
    icon: <HiOutlineTrendingUp />,
    title: "Digital Marketing",
    description:
      "SEO, branding and growth strategies that help your business scale.",
  },
  {
    icon: <HiOutlineTrendingUp />,
    title: "AI Automated Growth",
    description:
      "Leverage artificial intelligence to automate and optimize your growth strategies.",
  },
  {
    icon: <HiOutlineTrendingUp />,
    title: "Brand & Identity",
    description:
      "Build a brand people remember, trust and engage with through compelling design and messaging.",
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.heading}>
          <span>SERVICES</span>

          <h2>
            Digital Solutions
            <br />
            For Every Business
          </h2>

          <p>
            We create modern digital experiences that help businesses grow,
            attract customers, and build a strong online presence.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;