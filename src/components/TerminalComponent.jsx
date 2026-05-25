import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TerminalComponent() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const statements = [
    'Specializing in Healthcare AI & LLMs...',
    'Building Agentic AI Systems...',
    'Developing Voice-First Medical Agents...',
    'Detecting Healthcare Fraud with Multi-Agent AI...',
    'Transforming Clinical Data into Insights...',
  ];

  const [statementIndex, setStatementIndex] = useState(0);
  const currentStatement = statements[statementIndex];

  useEffect(() => {
    // Typing effect
    if (currentIndex < currentStatement.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentStatement.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 45); // Snappier typing speed
      return () => clearTimeout(timeout);
    } else {
      // Wait before moving to next statement
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setStatementIndex((prev) => (prev + 1) % statements.length);
      }, 3200);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentStatement, statementIndex, statements.length]);

  useEffect(() => {
    // Cursor blink
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
      className="terminal-container"
      style={{
        background: 'oklch(14% 0.004 350 / 0.95)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '18px 24px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.885rem',
        color: 'var(--text-primary)',
        maxWidth: '650px',
        boxShadow: 'var(--shadow-md)',
        marginTop: '8px',
        transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
      }}
    >
      {/* Title Bar Controls */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', opacity: 0.8 }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', opacity: 0.8 }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', opacity: 0.8 }} />
      </div>
      
      {/* Terminal Line */}
      <div style={{ display: 'flex', alignItems: 'flex-start', minHeight: '24px', lineHeight: '1.5' }}>
        <span style={{ color: 'var(--accent-primary)', marginRight: '10px', userSelect: 'none', fontWeight: 600 }}>&gt;</span>
        <span style={{ color: 'oklch(93% 0.003 350)' }}>
          {displayText}
          <span
            style={{
              opacity: showCursor ? 1 : 0,
              transition: 'opacity 0.1s',
              marginLeft: '3px',
              color: 'var(--accent-primary)',
            }}
          >
            ▊
          </span>
        </span>
      </div>
    </motion.div>
  );
}
