import { motion } from 'framer-motion';
import { certificates } from '../data.js';
import { Award, ExternalLink, GitBranch } from 'lucide-react';

export default function Certificates() {
  const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing

  if (!certificates || certificates.length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          Certifications
        </motion.h2>
      </header>

      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <motion.article
            key={i}
            className="cert-item"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.04 }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
              <div style={{ color: 'var(--accent-primary)', marginTop: '3px' }}>
                <Award size={18} strokeWidth={2} />
              </div>
              <h3 className="cert-title" style={{ margin: 0, lineHeight: 1.3 }}>{cert.title}</h3>
            </div>
            
            <p className="muted mono" style={{ fontSize: '0.8rem', marginBottom: '12px', marginLeft: '30px' }}>
              {cert.issuer} • {cert.issued}
            </p>

            {cert.credentialId && (
              <p className="tiny muted" style={{ fontSize: '0.75rem', marginLeft: '30px', marginBottom: '12px' }}>
                Credential ID: {cert.credentialId}
              </p>
            )}

            {cert.skills && cert.skills.length > 0 && (
              <div className="cert-skills" style={{ marginLeft: '30px', marginBottom: '16px' }}>
                {cert.skills.map((skill, j) => (
                  <span key={j} className="skill-chip" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div className="cert-links" style={{ marginLeft: '30px', marginTop: 'auto', display: 'flex', gap: '16px' }}>
              {cert.link && (
                <a
                  className="link"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-primary)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Credential <ExternalLink size={12} />
                </a>
              )}
              {cert.relatedRepo && (
                <a
                  className="link"
                  href={cert.relatedRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Repository <GitBranch size={12} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
