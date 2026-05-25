import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillsRadar() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [themeVersion, setThemeVersion] = useState(0);

  // MutationObserver to trigger dynamic redraws on Dark/Light toggle
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setThemeVersion((prev) => prev + 1);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python & ML', value: 95 },
    { name: 'Healthcare AI', value: 90 },
    { name: 'LLMs & Agents', value: 88 },
    { name: 'Cloud & MLOps', value: 85 },
    { name: 'Data Visualization', value: 82 },
  ];

  useEffect(() => {
    if (!isInView) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 40;

    // Read colors dynamically from CSS variables
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue('--accent-primary').trim() || '#DE005F';
    const accentGlow = styles.getPropertyValue('--accent-glow').trim() || 'rgba(222, 0, 95, 0.15)';
    const textPrimary = styles.getPropertyValue('--text-primary').trim() || '#1A1A1A';
    const textMuted = styles.getPropertyValue('--text-muted').trim() || '#888888';
    const border = styles.getPropertyValue('--border-color').trim() || '#E5E5E3';
    const bg = styles.getPropertyValue('--bg-secondary').trim() || '#FFFFFF';

    let animationProgress = 0;
    const animationDuration = 1000; // Snappier draw
    let startTime = null;

    function drawRadar(progress) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw concentric circles (grid)
      const levels = 5;
      for (let i = 1; i <= levels; i++) {
        const radius = (maxRadius / levels) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = border;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Level labels
        if (i === levels) {
          ctx.fillStyle = textMuted;
          ctx.font = '10px JetBrains Mono, monospace';
          ctx.textAlign = 'center';
          ctx.fillText('100%', centerX, centerY - radius - 8);
        }
      }

      // Draw axes
      const angleStep = (Math.PI * 2) / skills.length;
      skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const x = centerX + Math.cos(angle) * maxRadius;
        const y = centerY + Math.sin(angle) * maxRadius;

        // Axis line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = border;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Skill labels (typographically premium Cormorant italic display or clean Instrument sans)
        const labelX = centerX + Math.cos(angle) * (maxRadius + 26);
        const labelY = centerY + Math.sin(angle) * (maxRadius + 26);
        
        ctx.fillStyle = textPrimary;
        ctx.font = '500 11.5px Instrument Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.name, labelX, labelY);
      });

      // Draw skill polygon path
      ctx.beginPath();
      skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const value = (skill.value / 100) * maxRadius * progress;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.closePath();

      // Polygon Fill ( Editorial semi-transparent overlay )
      ctx.fillStyle = accentGlow;
      ctx.fill();

      // Polygon Outline
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw Points
      skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const value = (skill.value / 100) * maxRadius * progress;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;

        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.fill();
        ctx.strokeStyle = bg;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      animationProgress = Math.min(elapsed / animationDuration, 1);

      // Emil's ease-out curve mapping
      const eased = 1 - Math.pow(1 - animationProgress, 3);
      drawRadar(eased);

      if (animationProgress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, themeVersion]); // Re-run when appearing or when class theme transitions

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'background var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base)',
      }}
    >
      <h3
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '1.45rem',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--text-primary)',
          margin: 0,
        }}
      >
        Skills Proficiency
      </h3>
      
      <canvas
        ref={canvasRef}
        width={380}
        height={380}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="skill-chip"
            style={{
              borderColor: hoveredSkill === skill.name ? 'var(--accent-primary)' : 'var(--border-color)',
              color: hoveredSkill === skill.name ? 'var(--accent-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              transform: hoveredSkill === skill.name ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            {skill.name}: {skill.value}%
          </div>
        ))}
      </div>
    </motion.div>
  );
}
