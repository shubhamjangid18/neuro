import './Treatment.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Consultation & diagnosis',
    text: 'A comprehensive neurological assessment to identify exactly which nerves and muscles are affected.',
  },
  {
    number: '02',
    title: 'Personalised treatment plan',
    text: 'Our specialists design a recovery roadmap tailored to your condition, age, and daily life.',
  },
  {
    number: '03',
    title: 'Active therapy',
    text: 'Hands-on rehabilitation — physical therapy, nerve stimulation, or speech therapy, based on your plan.',
  },
  {
    number: '04',
    title: 'Progress monitoring',
    text: 'Regular clinical reviews to track measurable progress and fine-tune the treatment as you recover.',
  },
  {
    number: '05',
    title: 'Long-term recovery support',
    text: 'Ongoing guidance to maintain strength and independence well after active treatment ends.',
  },
];

export default function Treatment() {
  const revealRef = useScrollReveal();

  return (
    <section id="treatment" className="section treatment-section reveal" ref={revealRef}>
      <span className="section-eyebrow">Our process</span>
      <h2 className="section-title">How treatment works, step by step</h2>
      <div className="treatment-steps">
        {steps.map((step) => (
          <div className="treatment-step" key={step.number}>
            <span className="treatment-step-bg" aria-hidden="true"></span>
            <span className="treatment-number">{step.number}</span>
            <div className="treatment-step-content">
              <h3 className="treatment-step-title">{step.title}</h3>
              <p className="treatment-step-text">{step.text}</p>
            </div>
            <span className="treatment-step-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}