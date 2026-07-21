import styles from "./Process.module.css";
import ProcessCard from "./ProcessCard";
import {
  FaComments,
  FaPenNib,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const process = [
  {
    number: "01",
    icon: <FaComments />,
    title: "Discovery",
    description:
      "We understand your business, goals and audience."
  },
  {
    number: "02",
    icon: <FaPenNib />,
    title: "Strategy",
    description:
      "We create a roadmap tailored to your business."
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "Execution",
    description:
      "Our designers and developers build your solution."
  },
  {
    number: "04",
    icon: <FaRocket />,
    title: "Launch",
    description:
      "We deploy, optimize and help your brand grow."
  }
];

const Process = () => {
  return (
    <section className={styles.process} id="process">
      <div className="container">

        <div className={styles.heading}>
          <span>Our Process</span>

          <h2>
            From Idea To Success
          </h2>

          <p>
            Every project follows a proven workflow to
            ensure quality and measurable results.
          </p>
        </div>

        <div className={styles.timeline}>
          {process.map((item) => (
            <ProcessCard
              key={item.number}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;