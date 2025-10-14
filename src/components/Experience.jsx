import { experiences } from "../data.js";

export default function Experience() {
  return (
    <div className="container">
      <header className="section-header center-text">
        <h2>Experience</h2>
      </header>
      <div className="stack gap-m">
        {experiences.map((exp, i) => (
          <article className="card" key={i}>
            <header className="card-header">
              <h3 className="card-title">{exp.role}</h3>
              <div className="muted">{exp.company} • {exp.start} – {exp.end}</div>
            </header>
            <ul className="bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
