import './StatsBar.css';
import useCountUp from '../../hooks/useCountUp';

const stats = [
  { target: 24, suffix: '+', label: 'Years Experience' },
  { target: 97, suffix: '%', label: 'Client Satisfaction' },
  { target: 35, suffix: '+', label: 'Certified Specialists' },
  { target: 22, suffix: '+', label: 'Awards' },
];

function StatItem({ target, suffix, label }) {
  const [count, ref] = useCountUp(target);

  return (
    <div className="stats-item" ref={ref}>
      <span className="stats-accent-dot"></span>
      <span className="stats-number">{count}{suffix}</span>
      <span className="stats-label">{label}</span>
      <span className="stats-underline"></span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar-inner">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}