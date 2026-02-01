import { motion } from 'framer-motion';
import { experiences } from '../data.js';

export default function Experience() {
  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
      </header>
      
      <div className="stack">
        {experiences.map((exp, i) => (
          <motion.article
            className="card"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <header className="card-header">
              <h3 className="card-title">{exp.role}</h3>
              <div className="muted mono" style={{ fontSize: '0.9rem' }}>
                {exp.company} • {exp.start} – {exp.end}
              </div>
            </header>
            <ul className="bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
