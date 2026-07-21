import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";

const NavLinks = () => {
  return (
    <ul className={styles.navLinks}>
      <li>
        <HashLink smooth to="/#home">
          Home
        </HashLink>
      </li>

      <li>
        <HashLink smooth to="/#about">
          About
        </HashLink>
      </li>

      <li>
        <HashLink smooth to="/#services">
          Services
        </HashLink>
      </li>

      <li>
        <HashLink smooth to="/#portfolio">
          Portfolio
        </HashLink>
      </li>

      <li>
        <HashLink smooth to="/#pricing">
          Pricing
        </HashLink>
      </li>

      <li>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </li>
    </ul>
  );
};

export default NavLinks;