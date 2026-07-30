import './Services.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const services = [
  { name: 'Neurological diagnostics', text: 'Advanced imaging and nerve conduction studies to precisely map the extent and cause of paralysis.' },
  { name: 'Personalised recovery plans', text: 'A treatment roadmap built around your specific condition, lifestyle, and recovery goals — not a generic protocol.' },
  { name: 'Physical rehabilitation', text: 'One-on-one movement therapy to rebuild strength, coordination, and functional independence.' },
  { name: 'Nerve stimulation therapy', text: 'Targeted electrical stimulation to support nerve regeneration and slow muscle atrophy.' },
  { name: 'Speech & swallowing therapy', text: 'Dedicated support for patients whose paralysis affects facial muscles, speech clarity, or swallowing.' },
  { name: 'Home recovery support', text: 'A safe, structured plan your family can follow with confidence once care continues at home.' },
];

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="section services-section reveal" ref={revealRef}>
      <span className="section-eyebrow">How we help</span>
      <h2 className="section-title">Our services</h2>
      <div className="card-grid">
        {services.map((s, index) => (
          <div className="card services-card" key={s.name}>
            <span className="services-card-index">{String(index + 1).padStart(2, '0')}</span>
            <div className="card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12h4l2-7 4 14 2-7h4" />
              </svg>
            </div>
            <h3 className="card-title">{s.name}</h3>
            <p className="card-text">{s.text}</p>
            <span className="services-card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}