import { motion } from 'framer-motion';
import { social } from '../data.js';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing

  return (
    <footer className="footer">
      <div className="footer-content container">
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <a
            href={social.email}
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={15} />
            <span>Email</span>
          </a>
          {social.github && (
            <a
              href={social.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} />
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
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          )}
        </motion.div>

        <motion.p
          className="footer-copy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
        >
          © {new Date().getFullYear()} Paritosh Gandre • Crafted with React & Framer Motion
        </motion.p>
      </div>
    </footer>
  );
}
