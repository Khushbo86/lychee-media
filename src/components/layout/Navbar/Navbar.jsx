import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import styles from "./Navbar.module.css";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        sticky ? styles.sticky : ""
      }`}
    >
      <div className={`container ${styles.wrapper}`}>
        <Logo />

        <div className={styles.desktopNav}>
          <NavLinks />
        </div>

        <HashLink
          smooth
          to="/#contact"
          className={styles.cta}
        >
          Get Started
        </HashLink>

        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </header>
  );
};

export default Navbar;