import { useState } from 'react';
import './BookingModal.css';

export default function BookingModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    condition: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        {!submitted ? (
          <>
            <span className="modal-eyebrow">Book a consultation</span>
            <h2 className="modal-title">Tell us a little about your condition</h2>
            <p className="modal-subtitle">
              We'll get back to you within 24 hours to confirm your appointment.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-field">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="modal-field-row">
                <div className="modal-field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div className="modal-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="modal-field">
                <label htmlFor="condition">Condition (if known)</label>
                <select
                  id="condition"
                  name="condition"
                  value={form.condition}
                  onChange={handleChange}
                >
                  <option value="">Select a condition</option>
                  <option value="facial-paralysis">Facial paralysis / Bell's palsy</option>
                  <option value="stroke">Stroke-related paralysis</option>
                  <option value="nerve-injury">Peripheral nerve injury</option>
                  <option value="spinal">Spinal cord paralysis</option>
                  <option value="gbs">Guillain-Barré syndrome</option>
                  <option value="cerebral-palsy">Cerebral palsy</option>
                  <option value="other">Other / not sure</option>
                </select>
              </div>

              <div className="modal-field">
                <label htmlFor="message">Additional details (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Anything that will help us prepare for your visit"
                ></textarea>
              </div>

              <button type="submit" className="modal-submit">Request appointment</button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h2 className="modal-title">Request received</h2>
            <p className="modal-subtitle">
              Thank you, {form.name.split(' ')[0] || 'there'}. Our team will contact you at{' '}
              {form.phone || form.email} within 24 hours to confirm your appointment.
            </p>
            <button className="modal-submit" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}