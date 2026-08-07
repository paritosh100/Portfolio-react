import { motion } from 'framer-motion';
import { Mail, Briefcase } from 'lucide-react';
import { identity } from '../data.js';

export default function OpenToWork() {
  const easeOut = [0.23, 1, 0.32, 1];

  return (
    <motion.div
      className="open-to-work-banner"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <a
        href={`mailto:${identity.email}?subject=Let's%20Work%20Together`}
        className="open-to-work-link"
      >
        <div className="open-to-work-content">
          <Briefcase size={16} />
          <span>Open to work – let's connect</span>
          <Mail size={14} />
        </div>
      </a>
    </motion.div>
  );
}
