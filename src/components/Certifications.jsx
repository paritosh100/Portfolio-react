import { motion } from 'framer-motion';
import { certificates } from '../data.js';

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
      </header>

      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <motion.article
            key={i}
            className="cert-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <h3 className="cert-title">{cert.title}</h3>
            <p className="muted mono" style={{ fontSize: '0.85rem' }}>
              {cert.issuer} • {cert.issued}
            </p>

            {cert.credentialId && (
              <p className="tiny muted">Credential ID: {cert.credentialId}</p>
            )}

            {cert.skills && cert.skills.length > 0 && (
              <div className="cert-skills">
                {cert.skills.map((skill, j) => (
                  <span key={j} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div className="cert-links">
              {cert.link && (
                <a
                  className="link"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-teal)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  View Credential →
                </a>
              )}
              {cert.relatedRepo && (
                <a
                  className="link"
                  href={cert.relatedRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-cyan)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  Related Repo →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
