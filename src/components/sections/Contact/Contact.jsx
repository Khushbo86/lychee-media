import styles from "./Contact.module.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.heading}>
          <span>Contact Us</span>

          <h2>
            Ready to Grow
            <br />
            Your Business?
          </h2>

          <p>
            Let's discuss your next project and create something extraordinary
            together.
          </p>
        </div>

        <div className={styles.contactWrapper}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;