import { social } from "../data.js";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-links">
          <a href={`mailto:${social.email}`} aria-label="Email" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={18} /><span>Email</span>
          </a>
          {social.github && (
            <a href={social.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} /><span>GitHub</span>
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} /><span>LinkedIn</span>
            </a>
          )}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} {social.name || "Paritosh Gandre"}</p>
      </div>
    </footer>
  );
}
