import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`${styles.mobileMenu} ${
        isOpen ? styles.showMenu : ""
      }`}
    >
      <NavLinks />
    </div>
  );
};

export default MobileMenu;