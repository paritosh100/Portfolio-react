import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TerminalComponent() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const statements = [
    '> Specializing in Healthcare AI & LLMs...',
    '> Building Agentic AI Systems...',
    '> Developing Voice-First Medical Agents...',
    '> Detecting Healthcare Fraud with Multi-Agent AI...',
    '> Transforming Clinical Data into Insights...',
  ];

  const [statementIndex, setStatementIndex] = useState(0);
  const currentStatement = statements[statementIndex];

  useEffect(() => {
    // Typing effect
    if (currentIndex < currentStatement.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentStatement.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      // Wait before moving to next statement
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setStatementIndex((statementIndex + 1) % statements.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentStatement, statementIndex, statements.length]);

  useEffect(() => {
    // Cursor blink
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="terminal-container"
      style={{
        background: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 217, 255, 0.2)',
        borderRadius: '12px',
        padding: '1.5rem',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.95rem',
        color: '#00d9ff',
        maxWidth: '700px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
        marginTop: '1rem',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
      </div>
      <div style={{ minHeight: '24px' }}>
        {displayText}
        <span
          style={{
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s',
            marginLeft: '2px',
          }}
        >
          ▊
        </span>
      </div>
    </motion.div>
  );
}
