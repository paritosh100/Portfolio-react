// Projects.jsx
import { projects } from "../data.js";

export default function Projects() {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="projects-section ">
      <header className="section-header center-text">
        <h2>Projects</h2>
      </header>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            {/* Top hero section like the screenshot */}
            <div className="project-hero"
            style={{ backgroundImage: `url(${p.image})` }}>   

              {/* <div className="project-hero-window">
                <span className="project-hero-text">
                  {p.title}
                </span>
              </div> */}

              
            </div>

            {/* Bottom content row */}
            <div className="project-content">
              <div className="project-copy">
                <h3 className="project-title">{p.title}</h3>
                {p.tech && (
                <div className="project-tech-row">
                  {p.tech.map((t, j) => (
                    <span key={j} className="tech-chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}  
                <p className="project-desc">{p.description}</p>
              </div>

              <div className="project-actions">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    View
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
