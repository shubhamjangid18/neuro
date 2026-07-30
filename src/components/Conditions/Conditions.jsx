import React from "react";
import "./Conditions.css";

/**
 * Conditions Section — single row, manually scrollable (drag/swipe
 * left-right), scrollbar hidden, smooth scroll-snap per card.
 */

const conditions = [
  {
    number: "01",
    title: "Eligibility",
    description:
      "Applicants must be at least 18 years of age and able to enter into a legally binding agreement in their jurisdiction.",
  },
  {
    number: "02",
    title: "Accurate Information",
    description:
      "All details provided during onboarding must be true, current, and complete. Misrepresentation may void this agreement.",
  },
  {
    number: "03",
    title: "Confidentiality",
    description:
      "Any proprietary materials shared under this arrangement remain confidential and may not be disclosed to third parties.",
  },
  {
    number: "04",
    title: "Term & Renewal",
    description:
      "This agreement remains active for twelve months and renews automatically unless cancelled thirty days prior to expiry.",
  },
  {
    number: "05",
    title: "Compliance",
    description:
      "All parties agree to operate in accordance with applicable local, national, and international regulations at all times.",
  },
  {
    number: "06",
    title: "Termination",
    description:
      "Either party may terminate this agreement with written notice, subject to the settlement of any outstanding obligations.",
  },
];

export default function Conditions() {
  return (
    <section id="conditions" className="conditions" aria-labelledby="conditions-heading">
      <div className="conditions__inner">
        <p className="conditions__eyebrow">Terms of Engagement</p>
        <h2 id="conditions-heading" className="conditions__heading">
          Conditions
        </h2>
        <div className="conditions__rule" aria-hidden="true" />
      </div>

      <div className="conditions-scroll">
        <div className="conditions-scroll-track">
          {conditions.map((item) => (
            <article className="condition-card" key={item.number}>
              <span className="condition-card__number">{item.number}</span>
              <h3 className="condition-card__title">{item.title}</h3>
              <p className="condition-card__desc">{item.description}</p>
              <span className="condition-card__accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}