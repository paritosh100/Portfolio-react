import { motion } from 'framer-motion';
import { identity, social } from '../data.js';
import { Github, Linkedin, Mail, FileText, Briefcase } from 'lucide-react';
import TerminalComponent from './TerminalComponent.jsx';

export default function Hero() {
  const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing

  return (
    <div className="hero container">
      <div className="hero-grid">
        
        {/* Profile Image Column (Left) */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <img
            src={identity.profileImage}
            alt={`${identity.name} profile photo`}
            className="avatar"
            loading="eager"
            width="380"
            height="475"
          />

          {/* Open to Work Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
          >
            <a
              href={`mailto:${identity.email}?subject=Let's%20Work%20Together`}
              className="open-to-work-badge"
            >
              <Briefcase size={16} />
              <span>Open to work</span>
              <Mail size={14} />
            </a>
          </motion.div>
        </motion.div>

        {/* Copy Column (Right) */}
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          >
            <h1 className="hero-title">
              <span className="gradient-text">{identity.name}</span>
              <span className="hero-title-accent">{identity.title}</span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          >
            {identity.shortIntro}{' '}
            <a
              href="https://youtu.be/szNQj8By6nU?si=w1lElktr-YsBqtTn"
              className="hero-capsule"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle Course Capstone Project
            </a>
          </motion.p>

          <TerminalComponent />

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
          >
            <a
              href={identity.resumeUrl}
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={15} style={{ marginRight: '8px' }} />
              Download Resume
            </a>

            <div className="hero-icons">
              <a
                href={social.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>
              <a
                href={social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={social.email}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
