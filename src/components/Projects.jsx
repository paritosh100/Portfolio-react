import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useSpring, useMotionValue } from 'framer-motion';
import { projects } from '../data.js';
import { ExternalLink, Github, X } from 'lucide-react';

const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing

// Spotlight Card component
function ProjectCard({ project, index, onClick }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring for magnetic/smooth spotlight following
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Generate a pattern to make it an asymmetric grid
  // e.g. every 1st of 5 items is featured
  const isFeatured = index % 5 === 0;

  return (
    <motion.article
      layoutId={`project-container-${index}`}
      className={`project-card ${isFeatured ? 'project-featured' : ''}`}
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: easeOut, delay: (index % 5) * 0.08 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.98 }} // tactile feedback
      style={{ originY: 0 }}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="project-spotlight"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${springX}px ${springY}px,
              var(--accent-glow),
              transparent 80%
            )
          `,
        }}
      />
      {/* Inner refraction border */}
      <div className="project-refraction" />

      {project.video ? (
        <video
          className="project-hero project-hero-video"
          src={project.video}
          poster={project.image}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
        />
      ) : project.image && (
        <motion.div
          layoutId={`project-image-${index}`}
          className="project-hero"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      )}

      <div className="project-content">
        <div className="project-copy">
          <motion.h3 layoutId={`project-title-${index}`} className="project-title">{project.title}</motion.h3>

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

          <motion.div layoutId={`project-desc-${index}`}>
            <p className="project-desc" style={{ 
              display: '-webkit-box',
              WebkitLineClamp: isFeatured ? 3 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandedIndex]);

  if (!projects || projects.length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          Featured Projects
        </motion.h2>
      </header>

      <div className="bento-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={project}
            onClick={() => setExpandedIndex(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="project-backdrop"
              onClick={() => setExpandedIndex(null)}
            />
            
            <div className="project-modal-container">
              <motion.article
                layoutId={`project-container-${expandedIndex}`}
                className="project-modal"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {projects[expandedIndex].video ? (
                  <div className="project-modal-hero project-modal-hero-video">
                    <video
                      src={projects[expandedIndex].video}
                      poster={projects[expandedIndex].image}
                      controls
                      playsInline
                      preload="none"
                    />
                    <button
                      className="project-modal-close"
                      onClick={() => setExpandedIndex(null)}
                      aria-label="Close project details"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : projects[expandedIndex].image && (
                  <motion.div
                    layoutId={`project-image-${expandedIndex}`}
                    className="project-modal-hero"
                    style={{ backgroundImage: `url(${projects[expandedIndex].image})` }}
                  >
                    <button
                      className="project-modal-close"
                      onClick={() => setExpandedIndex(null)}
                      aria-label="Close project details"
                    >
                      <X size={20} />
                    </button>
                  </motion.div>
                )}

                <div className="project-modal-content">
                  <motion.h3 layoutId={`project-title-${expandedIndex}`} className="project-modal-title">
                    {projects[expandedIndex].title}
                  </motion.h3>

                  {projects[expandedIndex].tech && (
                    <div className="project-modal-tech">
                      {projects[expandedIndex].tech.map((tech, i) => (
                        <span key={i} className="tech-chip">{tech}</span>
                      ))}
                    </div>
                  )}

                  <motion.div layoutId={`project-desc-${expandedIndex}`}>
                    <p className="project-modal-desc">
                      {projects[expandedIndex].description}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3, ease: easeOut }}
                    className="project-modal-actions"
                  >
                    {projects[expandedIndex].live && (
                      <a
                        href={projects[expandedIndex].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn primary"
                        style={{ flex: 1 }}
                      >
                        <ExternalLink size={16} style={{ marginRight: '8px' }} />
                        View Live
                      </a>
                    )}
                    {projects[expandedIndex].repo && (
                      <a
                        href={projects[expandedIndex].repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn secondary"
                        style={{ flex: 1 }}
                      >
                        <Github size={16} style={{ marginRight: '8px' }} />
                        Source Code
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.article>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
