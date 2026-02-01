import { motion } from 'framer-motion';
import { skills } from '../data.js';
import SkillsRadar from './SkillsRadar.jsx';

export default function Skills() {
  if (!skills || Object.keys(skills).length === 0) return null;

  return (
    <div className="container">
      <header className="section-header center-text">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
        </motion.h2>
      </header>

      <div className="skills-container">
        {/* Skills Radar */}
        <div style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>
          <SkillsRadar />
        </div>

        {/* Skill Categories */}
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            className="skill-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="skill-category">{category}</h3>
            <div className="skill-chips">
              {skillList.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="skill-chip"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
