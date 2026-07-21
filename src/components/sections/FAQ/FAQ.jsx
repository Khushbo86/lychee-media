import styles from "./FAQ.module.css";
import FAQItem from "./FAQItem.jsx";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Depending on the project scope, most websites take between 2 to 6 weeks."
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. We provide complete SEO solutions including technical SEO, on-page optimization, and keyword research."
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We can modernize your current website while improving speed, UI, and user experience."
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer maintenance, updates, security monitoring, and performance optimization."
  }
];

const FAQ = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className="container">

        <div className={styles.heading}>
          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before working with us.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;