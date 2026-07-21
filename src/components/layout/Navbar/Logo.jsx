import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import styles from "./Navbar.module.css";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img
        src={logo}
        alt="Lychee Media Logo"
        className={styles.logoImage}
      />
      <span className={styles.logoText}>Lychee Media</span>
    </Link>
  );
};

export default Logo;