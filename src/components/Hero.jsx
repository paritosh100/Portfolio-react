import { motion } from 'framer-motion';
import { identity, social } from '../data.js';
import { Github, Linkedin, Mail, FileText, Briefcase } from 'lucide-react';
import TerminalComponent from './TerminalComponent.jsx';

// Real, verifiable metrics pulled directly from src/data.js (experiences/about) —
// no fabricated numbers.
const METRICS = [
  { value: '<1000ms', label: 'p95 latency' },
  { value: '99.9%', label: 'production SLA' },
  { value: '-80%', label: 'TTS cost' },
  { value: '95%+', label: 'cache hit rate' },
  { value: '2,000+', label: 'automated tests' },
  { value: '90%+', label: 'test coverage' },
  { value: '12+', label: 'language pairs' },
  { value: 'Zero', label: 'cross-org incidents' },
];

const FOCUS_AREAS = [
  'Real-time voice AI (ASR → NMT → TTS)',
  'LLM-as-judge evaluation & model selection',
  'Inference optimization & caching',
  'Multi-tenant production infrastructure',
];

// Derived from companies/roles in src/data.js experiences — real history, not aspirational.
const INDUSTRIES = [
  'Voice AI & Conversational Tech',
  'Healthcare & Bioinformatics',
  'Social Media & Trust/Safety',
  'Food Service & Supply Chain',
  'Manufacturing',
];

export default function Hero() {
  const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing

  return (
    <div className="hero container">
      <div className="hero-grid">

        {/* Copy Column (Left) */}
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
              href="https://marathi-tts-text-normalization.vercel.app/"
              className="hero-capsule"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marathi TTS Text Normalization
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

          <motion.div
            className="metrics-strip-wrap"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
          >
            <span className="metrics-source-pill">Most recent work @ OViiE AI (STELLA™)</span>
            <div className="metrics-strip">
              {METRICS.map((m) => (
                <div className="metric-tile" key={m.label}>
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Focus panel (Right) */}
        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
        >
          <div className="hero-video-frame">
            <img
              src={identity.profileImage}
              alt={`${identity.name} profile photo`}
              className="avatar"
            />
          </div>

          <div>
            <div className="hero-panel-header">
              <span className="hero-panel-label">Focus areas</span>
            </div>
            <ul className="hero-focus-list">
              {FOCUS_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="hero-panel-header">
              <span className="hero-panel-label">Industries</span>
            </div>
            <div className="hero-industry-chips">
              {INDUSTRIES.map((industry) => (
                <span className="industry-chip" key={industry}>{industry}</span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
