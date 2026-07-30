import { useState } from 'react';
import './FAQ.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const faqs = [
  {
    question: 'How long does recovery from neuro-paralysis usually take?',
    answer: 'It depends on the cause and severity. Facial paralysis often improves within weeks to a few months, while stroke or spinal cord related paralysis can take longer with structured rehabilitation.',
  },
  {
    question: 'Do I need a referral to book a consultation?',
    answer: 'No referral is required. You can book a consultation directly, and we will guide you through the diagnostic process from there.',
  },
  {
    question: 'Will my movement fully recover?',
    answer: 'Recovery varies by condition and how early treatment begins. Many patients regain significant or full function, especially with prompt diagnosis and consistent therapy.',
  },
  {
    question: 'What does the first appointment involve?',
    answer: 'Your first visit includes a full neurological assessment, a review of your medical history, and a discussion of a personalised treatment plan.',
  },
  {
    question: 'Is treatment covered by insurance?',
    answer: 'Coverage varies by provider and plan. Our front desk team can help verify your insurance details before your first appointment.',
  },
  {
    question: 'Can children be treated here?',
    answer: 'Yes, we treat pediatric conditions including cerebral palsy and Erb\'s palsy, with treatment plans adjusted as the child grows.',
  },
  {
    question: 'How often will I need therapy sessions?',
    answer: 'Frequency depends on your condition and treatment plan — typically two to three sessions per week during active recovery, tapering as you improve.',
  },
];

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);
  const revealRef = useScrollReveal();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <span className="section-eyebrow">Questions</span>
      <h2 className="section-title">Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={item.question}>
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}