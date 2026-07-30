import './CTA.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useBookingModal } from '../../context/BookingModalContext';

export default function CTA() {
  const revealRef = useScrollReveal();
  const { openModal } = useBookingModal();

  return (
    <section id="cta" className="cta-section reveal" ref={revealRef}>
      <div className="cta-glow cta-glow-1" aria-hidden="true"></div>
      <div className="cta-glow cta-glow-2" aria-hidden="true"></div>

      <div className="cta-content">
        <span className="cta-badge">
          <span className="cta-badge-dot"></span>
          Start today
        </span>

        <h2 className="cta-title">
          Start your recovery with a{' '}
          <span className="cta-title-gradient">clear plan</span>
        </h2>

        <p className="cta-subtitle">
          Book a consultation with NeuroPrecision and get a full neurological assessment within your first visit.
        </p>

        <button onClick={openModal} className="cta-button">
          <span>Book a consultation</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <div className="cta-trust-row">
          <span>✓ No referral needed</span>
          <span>✓ Response within 24 hours</span>
          <span>✓ Personalised treatment plan</span>
        </div>
      </div>
    </section>
  );
}