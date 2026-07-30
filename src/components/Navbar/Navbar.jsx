import { useState, useEffect } from "react";
import "./Navbar.css";
import { useBookingModal } from "../../context/BookingModalContext";
import logo from "../../assets/images/logoTT.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoAnimate, setLogoAnimate] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useBookingModal();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setLogoAnimate(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
    setTimeout(() => setLogoAnimate(false), 600);
  };

  return (
    <header className={`navbar-wrap ${scrolled ? "navbar-wrap-scrolled" : ""}`}>
      <div className="navbar-floating">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLogoClick}
          className={`navbar-logo ${logoAnimate ? "logo-clicked" : ""}`}
        >
          <img src={logo} alt="NeuroPrecision logo" className="navbar-logo-icon" />
        </a>

        {/* Pill nav links (desktop) */}
        <nav className="navbar-pill">
          <a href="#about" onClick={closeMenu}><span>About</span></a>
          <a href="#conditions" onClick={closeMenu}><span>Conditions</span></a>
          <a href="#treatment" onClick={closeMenu}><span>Treatment</span></a>
          <a href="#services" onClick={closeMenu}><span>Services</span></a>
          <a href="#faq" onClick={closeMenu}><span>FAQ</span></a>
        </nav>

        {/* CTA — solid pill, like "Contact" in the reference */}
        <button className="navbar-cta" onClick={openModal}>
          <span>Book a Consultation</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className={`navbar-toggle ${menuOpen ? "navbar-toggle-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav className={`navbar-mobile-links ${menuOpen ? "navbar-mobile-links-open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#conditions" onClick={closeMenu}>Conditions</a>
        <a href="#treatment" onClick={closeMenu}>Treatment</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <button
          className="navbar-cta-mobile"
          onClick={() => {
            openModal();
            closeMenu();
          }}
        >
          Book a Consultation
        </button>
      </nav>
    </header>
  );
}