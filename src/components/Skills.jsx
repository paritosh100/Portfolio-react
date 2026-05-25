import { motion } from 'framer-motion';
import { skills } from '../data.js';

export default function Skills() {
  const easeOut = [0.23, 1, 0.32, 1]; // Emil's custom easing

  if (!skills || Object.keys(skills).length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          Technical Expertise
        </motion.h2>
      </header>

      <div className="skills-container">
        {/* Skill Categories */}
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            className="skill-group"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: index * 0.08 }}
          >
            <h3 className="skill-category">{category}</h3>
            <div className="skill-chips">
              {skillList.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="skill-chip"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
