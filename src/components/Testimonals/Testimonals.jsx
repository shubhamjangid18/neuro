import React, { useEffect, useRef } from "react";
import "./Testimonals.css";

const testimonials = [
  {
    quote:
      "After my Bell's palsy diagnosis, the team here gave me a clear plan from day one. Full facial movement returned within three months.",
    name: "Priya Sharma",
    role: "Patient, facial paralysis recovery",
  },
  {
    quote:
      "The physiotherapy and nerve stimulation sessions rebuilt strength in my arm faster than I expected after my stroke.",
    name: "Rakesh Verma",
    role: "Patient, stroke rehabilitation",
  },
  {
    quote:
      "They treated my son's cerebral palsy with real patience and a plan that adjusted as he grew. We trust this clinic completely.",
    name: "Anjali Mehta",
    role: "Parent of patient",
  },
];

function getInitials(fullName) {
  return fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function Testimonals() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      className="section testimonials-section"
      ref={sectionRef}
    >
      <span className="section-eyebrow">Patient stories</span>
      <h2 className="section-title">What recovery looks like, in their words</h2>

      <div className="testimonials-grid-premium">
        {testimonials.map((t, i) => (
          <div
            className="testimonial-card-premium"
            key={t.name}
            style={{ "--i": i }}
          >
            <span className="testimonial-quote-mark" aria-hidden="true">
              &ldquo;
            </span>

            <div className="testimonial-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} viewBox="0 0 20 20" className="testimonial-star">
                  <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6z" />
                </svg>
              ))}
            </div>

            <p className="testimonial-quote">{t.quote}</p>

            <div className="testimonial-author">
              <span className="testimonial-avatar">{getInitials(t.name)}</span>
              <div className="testimonial-author-text">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>

            <span className="testimonial-glow" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}