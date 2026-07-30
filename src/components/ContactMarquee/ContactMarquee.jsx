import './ContactMarquee.css';

const items = [
  { icon: '✉', label: 'Email us', text: 'care@neuroprecision.com' },
  { icon: '☎', label: 'Call us', text: '+91 12345 67890' },
  { icon: '🕒', label: 'Support', text: '24/7 Patient Support' },
  { icon: '📍', label: 'Visit us', text: '204 Wellness Avenue, Pune' },
];

// Quadruplicated to guarantee a long, seamless scroll track
const marqueeItems = [...items, ...items, ...items, ...items];

export default function ContactMarquee() {
  return (
    <div className="contact-marquee">
      <div className="contact-marquee-track">
        {marqueeItems.map((item, index) => (
          <span className="contact-marquee-item" key={index}>
            <span className="contact-marquee-icon">{item.icon}</span>
            <span className="contact-marquee-text">
              <span className="contact-marquee-label">{item.label}</span>
              <span className="contact-marquee-value">{item.text}</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}