import { certificates } from "../data.js";

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <h2>Certificates</h2>
      </header>

      <div className="cert-grid">
        {certificates.map((c, i) => (
          <article key={i} className="cert-item">
            <h3 className="cert-title">{c.title}</h3>
            <p className="muted">{c.issuer} • {c.issued}</p>

            {c.credentialId && (
              <p className="tiny muted">Credential ID: {c.credentialId}</p>
            )}

            {c.skills && c.skills.length > 0 && (
              <div className="cert-skills">
                {c.skills.map((s, j) => (
                  <span key={j} className="skill-chip">{s}</span>
                ))}
              </div>
            )}

            <div className="cert-links">
              {c.link && (
                <a className="link" href={c.link} target="_blank" rel="noopener noreferrer">
                  View Credential →
                </a>
              )}
              {c.relatedRepo && (
                <a className="link" href={c.relatedRepo} target="_blank" rel="noopener noreferrer">
                  Related Repo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
