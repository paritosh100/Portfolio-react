import { motion } from 'framer-motion';
import { publications } from '../data.js';

export default function Publications() {
  if (!publications || publications.length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Publications
        </motion.h2>
      </header>

      <div className="stack">
        {publications.map((pub, i) => (
          <motion.article
            key={i}
            className="card pub-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="card-title">{pub.title}</h3>
            <p className="muted mono" style={{ fontSize: '0.9rem' }}>
              {pub.venue} — {pub.year}
            </p>
            {pub.summary && <p className="pub-summary">{pub.summary}</p>}
            {pub.link && (
              <a
                className="link"
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--accent-teal)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginTop: '1rem',
                  display: 'inline-block',
                }}
              >
                View Publication →
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
