import './Footer.css';
import logo from '../../assets/images/logoTT.png';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Footer() {
  const revealRef = useScrollReveal();

  return (
    <footer className="footer reveal" ref={revealRef}>
      <div className="footer-shimmer" aria-hidden="true"></div>
      <div className="footer-glow" aria-hidden="true"></div>

      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-panel">
            <span className="footer-logo">
              <img src={logo} alt="NeuroPrecision logo" className="footer-logo-icon" />
            </span>
          </div>
          <p className="footer-tagline">Where clinical precision meets compassionate recovery.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook" className="footer-social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer-social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer-social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.2 8.75h3.5V21H3.2V8.75zm6.4 0h3.36v1.68h.05c.47-.87 1.6-1.79 3.3-1.79 3.53 0 4.18 2.32 4.18 5.35V21h-3.5v-6.3c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V21H9.6V8.75z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-heading">Explore</span>
            <a href="#about">About</a>
            <a href="#conditions">Conditions</a>
            <a href="#treatment">Treatment</a>
            <a href="#services">Services</a>
          </div>
          <div className="footer-column">
            <span className="footer-heading">Support</span>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a href="#cta">Book a consultation</a>
          </div>
          <div className="footer-column">
            <span className="footer-heading">Contact</span>
            <a href="tel:+911234567890">+91 12345 67890</a>
            <a href="mailto:care@neuroprecision.com">care@neuroprecision.com</a>
            <span className="footer-address">204 Wellness Avenue, Pune, Maharashtra</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NeuroPrecision Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}