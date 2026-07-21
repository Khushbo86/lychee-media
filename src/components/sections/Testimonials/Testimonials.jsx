import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Vision Studio",
    review:
      "Lychee Media transformed our online presence. Their creativity and strategy helped us double our leads within months.",
  },
  {
    name: "David Wilson",
    role: "Founder, FitZone",
    review:
      "Professional team, excellent communication, and outstanding results. Highly recommended for any growing business.",
  },
  {
    name: "Emily Brown",
    role: "Marketing Head, NovaTech",
    review:
      "From branding to website development, everything exceeded our expectations. A fantastic experience!",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">

        <div className={styles.heading}>
          <span>Testimonials</span>

          <h2>
            What Our Clients Say
          </h2>

          <p>
            We build long-term relationships by delivering
            exceptional digital experiences.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;