import { motion } from 'framer-motion';
import { experiences } from '../data.js';

export default function Experience() {
  const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing

  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          Experience
        </motion.h2>
      </header>
      
      <div className="timeline-container">
        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.article
              className="timeline-item"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
            >
              {/* Desktop timeline dates (left offset) */}
              <div className="timeline-date-aside">
                {exp.start} – {exp.end}
              </div>

              {/* Mobile-only timeline header */}
              <div className="timeline-meta-mobile">
                {exp.start} – {exp.end} • {exp.company}
              </div>

              {/* Timeline Connector Dot */}
              <div className="timeline-dot" />

              <h3 className="timeline-title">{exp.role}</h3>
              <div className="timeline-subtitle">
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{exp.company}</span>
              </div>

              <ul className="bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
