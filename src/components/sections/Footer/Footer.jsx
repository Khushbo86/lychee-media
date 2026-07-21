import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className="container">

        <div className={styles.grid}>

          <div>
            <h2 className={styles.logo}>
              Lychee<span>Media</span>
            </h2>

            <p>
              We create modern websites, branding,
              digital marketing strategies, and
              innovative solutions that help businesses
              grow online.
            </p>

            <div className={styles.socials}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>

            <ul>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>SEO</li>
              <li>Branding</li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>

            <ul>
              <li>Ghaziabad, India</li>
              <li>hello@lycheemedia.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} Lychee Media. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;