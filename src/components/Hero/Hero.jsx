import { useEffect, useRef } from 'react';
import './Hero.css';
import { useBookingModal } from '../../context/BookingModalContext';

export default function Hero() {
  const canvasRef = useRef(null);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width, height;
    let nodes = [];

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function initNodes() {
      const count = width < 768 ? 26 : 45;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 1,
      }));
    }

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(47, 184, 172, ${1 - dist / 140})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(47, 184, 172, 0.8)';
        ctx.fill();
      });
    }

    function animate() {
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });
      drawFrame();
      animationId = requestAnimationFrame(animate);
    }

    resize();
    initNodes();

    if (prefersReducedMotion) {
      drawFrame();
    } else {
      animate();
    }

    const handleResize = () => {
      resize();
      initNodes();
      if (prefersReducedMotion) drawFrame();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true"></canvas>

      <div className="hero-glow hero-glow-1" aria-hidden="true"></div>
      <div className="hero-glow hero-glow-2" aria-hidden="true"></div>

      <div className="hero-content">
        <span className="hero-badge hero-anim hero-anim-1">
          <span className="hero-badge-dot"></span>
          Trusted neurological care since day one
        </span>

        <h1 className="hero-title hero-anim hero-anim-2">
          Precision care for<br />
          <span className="hero-title-gradient">neuro-paralysis recovery</span>
        </h1>

        <p className="hero-subtitle hero-anim hero-anim-3">
          Evidence-based treatment plans, built by specialists who treat the
          nervous system as a whole — not a single symptom.
        </p>

        <div className="hero-actions hero-anim hero-anim-4">
          <button onClick={openModal} className="hero-btn-primary">Book a consultation</button>
          <a href="#about" className="hero-btn-secondary">Learn how we treat →</a>
        </div>

        <div className="hero-floating-stats hero-anim hero-anim-5">
          <div className="hero-stat-card hero-stat-card-1">
            <span className="hero-stat-number">15+</span>
            <span className="hero-stat-label">Years of practice</span>
          </div>
          <div className="hero-stat-card hero-stat-card-2">
            <span className="hero-stat-number">94%</span>
            <span className="hero-stat-label">Improvement rate</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}