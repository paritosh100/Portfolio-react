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
            <a href="/PARITOSH_GANDRE.pdf" className="btn primary" target="_blank" rel="noopener noreferrer">
  Download Resume
</a>  
<a href="/PARITOSH_GANDRE_CV.pdf" className="btn primary" target="_blank" rel="noopener noreferrer">
  Download CV
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
