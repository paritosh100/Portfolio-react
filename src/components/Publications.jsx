import { publications } from "../data.js";

export default function Publications() {
  if (!publications || publications.length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <h2>Publications</h2>
      </header>

      <div className="stack gap-m">
        {publications.map((p, i) => (
          <article key={i} className="card pub-card">
            <h3 className="card-title">{p.title}</h3>
            <p className="muted">{p.venue} — {p.year}</p>
            {p.summary && <p className="pub-summary">{p.summary}</p>}
            {p.link && (
              <a
                className="link"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
