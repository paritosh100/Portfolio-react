import { projects } from "../data.js";

export default function Projects() {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <h2>Projects</h2>
      </header>

      <div className="project-container">
        {projects.map((p, i) => (
          <div key={i} className="project-block">
            <h3 className="project-title">{p.title}</h3>

            {/* Tech stack */}
            {p.tech && (
              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            )}

            <p className="project-desc">{p.description}</p>

            <div className="project-links">
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
