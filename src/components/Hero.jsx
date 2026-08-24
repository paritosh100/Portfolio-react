import { motion } from 'framer-motion';
import { identity, social } from '../data.js';
import { Github, Linkedin, Mail, FileText, Briefcase, Play } from 'lucide-react';
import TerminalComponent from './TerminalComponent.jsx';
import { useState, useRef } from 'react';

export default function Hero() {
  const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

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
          <div className="video-container">
            <video
              ref={videoRef}
              src="/portfolio-vid-optimized.mp4"
              alt={`${identity.name} profile video`}
              className="avatar"
              muted
              loop
              playsInline
              width="380"
              height="475"
              onPause={handleVideoPause}
              onClick={handlePlayClick}
            />
            {!isPlaying && (
              <button className="video-play-btn" onClick={handlePlayClick} aria-label="Play video">
                <Play size={48} />
              </button>
            )}
          </div>
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
            <a
              href={`mailto:${identity.email}?subject=Let%27s%20Work%20Together`}
              className="hero-capsule open-to-work"
            >
              <Briefcase size={12} style={{ marginRight: '4px' }} />
              Open to work
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
