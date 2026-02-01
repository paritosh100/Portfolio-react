import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data.js';

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  if (!projects || projects.length === 0) return null;

  return (
    <section className="projects-section">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
      </header>

      <div className="bento-grid container">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setExpandedId(expandedId === index ? null : index)}
            layout
          >
            {project.image && (
              <div
                className="project-hero"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            )}

            <div className="project-content">
              <div className="project-copy">
                <h3 className="project-title">{project.title}</h3>

                {project.tech && (
                  <div className="project-tech-row">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-chip">+{project.tech.length - 4}</span>
                    )}
                  </div>
                )}

                <AnimatePresence>
                  {expandedId === index && (
                    <motion.p
                      className="project-desc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {expandedId !== index && (
                  <p className="project-desc" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.description}
                  </p>
                )}
              </div>

              <div className="project-actions">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Live
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
