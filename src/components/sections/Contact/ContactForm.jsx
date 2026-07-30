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
        alert("✅ Thank you! We'll contact you shortly.");
        form.current.reset();
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Something went wrong.");
        setLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={styles.form}
    >
      <div className={styles.formHeading}>
        <span>FREE CONSULTATION</span>

        <h3>Let's Grow Your Business 🚀</h3>

        <p>
          Fill in your details and our experts will
          get back to you within 24 hours.
        </p>
      </div>

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

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
      />

      <textarea
        rows="4"
        name="message"
        placeholder="Tell us about your project..."
        required
      />

      <button type="submit">
        {loading
          ? "Sending..."
          : "Submit Query"}
      </button>
    </form>
  );
};

export default ContactForm;