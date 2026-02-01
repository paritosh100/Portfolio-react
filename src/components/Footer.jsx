import { motion } from 'framer-motion';
import { social } from '../data.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={`mailto:${social.email}`}
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={18} />
            <span>Email</span>
          </a>
          {social.github && (
            <a
              href={social.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
          )}
        </motion.div>
        <motion.p
          className="footer-copy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {new Date().getFullYear()} Paritosh Gandre • Built with React & Three.js
        </motion.p>
      </div>
    </footer>
  );
}
