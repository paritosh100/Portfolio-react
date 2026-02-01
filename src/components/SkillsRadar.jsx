import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillsRadar() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'Python & ML', value: 95, color: '#00d9ff' },
    { name: 'Healthcare AI', value: 90, color: '#00ffcc' },
    { name: 'LLMs & Agents', value: 88, color: '#00d9ff' },
    { name: 'Cloud & MLOps', value: 85, color: '#00ffcc' },
    { name: 'Data Visualization', value: 82, color: '#00d9ff' },
  ];

  useEffect(() => {
    if (!isInView) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 40;

    let animationProgress = 0;
    const animationDuration = 1500;
    let startTime = null;

    function drawRadar(progress) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw concentric circles (grid)
      const levels = 5;
      for (let i = 1; i <= levels; i++) {
        const radius = (maxRadius / levels) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 217, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw level labels
        if (i === levels) {
          ctx.fillStyle = 'rgba(160, 160, 160, 0.6)';
          ctx.font = '10px JetBrains Mono';
          ctx.textAlign = 'center';
          ctx.fillText('100%', centerX, centerY - radius - 5);
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
        ctx.strokeStyle = 'rgba(0, 217, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Skill label
        const labelX = centerX + Math.cos(angle) * (maxRadius + 25);
        const labelY = centerY + Math.sin(angle) * (maxRadius + 25);
        
        ctx.fillStyle = skill.color;
        ctx.font = '12px Space Grotesk';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.name, labelX, labelY);
      });

      // Draw skill polygon
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

      // Fill
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      gradient.addColorStop(0, 'rgba(0, 217, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 255, 204, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Stroke
      ctx.strokeStyle = '#00d9ff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw points
      skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const value = (skill.value / 100) * maxRadius * progress;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = skill.color;
        ctx.fill();
        ctx.strokeStyle = '#0a0a0a';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      animationProgress = Math.min(elapsed / animationDuration, 1);

      // Easing function
      const eased = 1 - Math.pow(1 - animationProgress, 3);
      drawRadar(eased);

      if (animationProgress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, skills]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        background: 'rgba(18, 18, 18, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 217, 255, 0.2)',
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}
    >
      <h3
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#00d9ff',
          margin: 0,
        }}
      >
        Skills Proficiency
      </h3>
      
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              background: hoveredSkill === skill.name ? 'rgba(0, 217, 255, 0.2)' : 'rgba(0, 217, 255, 0.1)',
              border: `1px solid ${skill.color}`,
              color: skill.color,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
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
