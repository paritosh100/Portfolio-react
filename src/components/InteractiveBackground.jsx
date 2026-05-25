import { motion } from 'framer-motion';

export default function InteractiveBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 800px 600px at 20% 30%, var(--orb-1) 0%, transparent 50%),
          radial-gradient(ellipse 600px 800px at 80% 70%, var(--orb-2) 0%, transparent 50%),
          radial-gradient(ellipse 400px 400px at 50% 50%, var(--orb-3) 0%, transparent 50%)
        `,
      }}
    >
      {/* Animated gradient orbs (Animate exclusively using hardware accelerated transforms) */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--orb-1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--orb-2) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          position: 'absolute',
          top: '45%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--orb-3) 0%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />
    </motion.div>
  );
}
