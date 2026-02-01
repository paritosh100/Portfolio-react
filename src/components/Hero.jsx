import { motion } from 'framer-motion';
import { identity, social } from '../data.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import TerminalComponent from './TerminalComponent.jsx';

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-grid">
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={identity.profileImage}
            alt={`${identity.name} profile photo`}
            className="avatar"
            loading="eager"
            width="280"
            height="280"
          />
        </motion.div>

        <div className="hero-copy">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">{identity.name}</span>
            <span className="hero-title-accent">{identity.title}</span>
          </motion.h1>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/PARITOSH_GANDRE.pdf"
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <a
              href="/PARITOSH_GANDRE_CV.pdf"
              className="btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>

            <div className="hero-icons">
              <a
                href={social.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={social.email}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
