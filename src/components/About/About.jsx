import './About.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import doctorImg from '../../assets/images/doctor.png';

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="section about-section reveal" ref={revealRef}>
      <div className="about-text">
        <span className="section-eyebrow">Who we are</span>
        <h2 className="section-title">Care built around the nervous system, not just the symptom</h2>
        <p className="about-paragraph">
          NeuroPrecision was founded to close a gap we kept seeing: patients
          treated for a single symptom, when paralysis is rarely ever just
          one thing. Every patient here starts with a full diagnostic
          assessment — no guesswork, no generic protocols.
        </p>
        <p className="about-paragraph">
          Our neurologists, physiotherapists, and speech specialists work
          from one shared recovery plan per patient. We measure success the
          same way you would — strength regained, movement restored,
          independence returned.
        </p>

        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-number">15+</span>
            <span className="about-stat-label">Years of clinical practice</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">6,500+</span>
            <span className="about-stat-label">Patients treated</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">94%</span>
            <span className="about-stat-label">Reported measurable improvement</span>
          </div>
        </div>
      </div>

      <div className="about-image-wrap">
        <div className="about-image-glow" aria-hidden="true"></div>
        <img
          src={doctorImg}
          alt="Dr. Sidhartha Rao, Lead Neurologist at NeuroPrecision"
          className="about-image"
        />
        <div className="doctor-info">
          <span className="doctor-name">Dr. Sidhartha Rao</span>
          <span className="doctor-title">MD, DM Neurology · Founder &amp; Lead Neurologist</span>
          <p className="doctor-bio">
            Leads every patient's recovery plan personally, treating
            paralysis as a whole-nervous-system condition rather than a
            single symptom to manage.
          </p>
        </div>
      </div>
    </section>
  );
}