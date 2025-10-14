import { about } from "../data.js";

export default function About() {
  return (
    <div className="container stack gap-l about-center">
      <header className="section-header center-text">
        <h2>About</h2>
      </header>

      <p className="center-text">{about.bio}</p>

      {/* <div>
        <h3 className="h3 center-text">Key Skills</h3>
        <ul className="chiplist center-wrap" role="list">
          {about.skills.map((s, i) => (
            <li key={i} className="chip" aria-label={`Skill: ${s}`}>
              {s}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
