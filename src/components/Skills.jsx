import { skills } from "../data.js";

export default function Skills() {
  return (
    <div className="container">
      <header className="section-header center-text">
        <h2>Skills</h2>
      </header>

      <div className="skills-section">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3 className="skill-category">{category}</h3>
            <div className="skill-chips">
              {items.map((s, i) => (
                <span key={i} className="skill-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
