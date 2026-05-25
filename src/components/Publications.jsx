import { motion } from 'framer-motion';
import { publications } from '../data.js';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Publications() {
  const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing

  if (!publications || publications.length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          Publications
        </motion.h2>
      </header>

      <div className="stack" style={{ gap: '24px' }}>
        {publications.map((pub, i) => (
          <motion.article
            key={i}
            className="card pub-card"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
            style={{ padding: '32px', display: 'flex', flexDirection: pub.image ? 'row' : 'column', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start' }}
          >
            {pub.image && (
              <div style={{ flex: '1 1 300px', maxWidth: '400px', height: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img src={pub.image} alt={pub.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            )}
            <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ 
                  color: 'var(--accent-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  minWidth: '48px', 
                  height: '48px', 
                  borderRadius: '8px', 
                  background: 'var(--bg-primary)', 
                  border: '1px solid var(--border-color)' 
                }}>
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="card-title" style={{ margin: 0, fontSize: '1.45rem', lineHeight: 1.3 }}>{pub.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '4px', marginBottom: 0 }}>
                    {pub.venue} {pub.year && !pub.venue.includes(pub.year) ? `— ${pub.year}` : ''}
                  </p>
                </div>
              </div>

              {pub.summary && (
                <p className="pub-summary" style={{ margin: '0 0 24px 0', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {pub.summary}
                </p>
              )}

              <div style={{ marginTop: 'auto' }}>
                {pub.link && (
                  <a
                    className="btn secondary"
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 24px'
                    }}
                  >
                    Read Publication <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
