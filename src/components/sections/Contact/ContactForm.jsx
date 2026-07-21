import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={styles.form}
    >
      <div className={styles.row}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>

      <div className={styles.row}>
        <input
          type="text"
          name="company"
          placeholder="Company"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
        />
      </div>

      <textarea
        rows="6"
        name="message"
        placeholder="Tell us about your project..."
        required
      ></textarea>

      <button type="submit">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;