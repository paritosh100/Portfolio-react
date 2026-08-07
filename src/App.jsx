import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certifications.jsx';
import Publications from './components/Publications.jsx';
import Footer from './components/Footer.jsx';
import InteractiveBackground from './components/InteractiveBackground.jsx';
import { nav, education } from './data.js';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  // Active section highlight
  const [active, setActive] = useState('home');
  
  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id);
            break;
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <InteractiveBackground />

      <Nav active={active} />
      
      <main style={{ position: 'relative', zIndex: 10 }}>
        <section id="home">
          <Hero />
        </section>

        {/* Education */}
        <section id="education" className="section">
          <div className="container">
            <header className="section-header center-text">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                Education
              </motion.h2>
            </header>
            <div className="timeline-container">
              <div className="timeline">
                {education.map((ed, i) => (
                  <motion.article
                    key={i}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 }}
                  >
                    {/* Desktop timeline dates (left offset) */}
                    <div className="timeline-date-aside">
                      {ed.dates}
                    </div>

                    {/* Mobile timeline header */}
                    <div className="timeline-meta-mobile">
                      {ed.dates} • {ed.school}
                    </div>

                    {/* Timeline Connector Dot */}
                    <div className="timeline-dot" />

                    <h3 className="timeline-title">{ed.degree}</h3>
                    <div className="timeline-subtitle">
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{ed.school}</span>
                    </div>

                    {ed.details && (
                      <p style={{ 
                        whiteSpace: 'pre-line', 
                        marginTop: '0.75rem',
                        fontSize: '0.925rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.65'
                      }}>
                        {ed.details}
                      </p>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="certifications" className="section">
          <Certificates />
        </section>

        <section id="publications" className="section">
          <Publications />
        </section>
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
