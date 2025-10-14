import { identity } from "../data.js";
import { social } from "../data.js";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-grid">
        <div className="hero-photo">
          <img
            src={identity.profileImage}
            alt={`${identity.name} profile photo`}
            className="avatar"
            loading="eager"
            width="240"
            height="240"
          />
        </div>
        <div className="hero-copy">
          <h1 className="hero-title">
            {identity.name}
            <span className="hero-title-accent"> — {identity.title}</span>
          </h1>
          <p className="hero-intro">{identity.shortIntro}</p>
          <div className="hero-actions">
            <a
              className="btn primary"
              href={identity.resumeUrl}
              aria-label="Download Resume (PDF)"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Inline SVG icon */}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.004 4.004a1 1 0 0 1-1.414 0l-4.004-4.004A1 1 0 1 1 8.7 11.293L11 13.586V4a1 1 0 0 1 1-1zM5 20a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H5z"/>
              </svg>
              <span>Download Resume</span>
            </a>
            <div className="hero-icons">
              <a href={social.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={22} />
              </a>
              <a href={social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={22} />
              </a>
              <a href={`mailto:${social.email}`} aria-label="Email" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
}
