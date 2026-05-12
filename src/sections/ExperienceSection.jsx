import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { SectionFrame } from '../components/SectionFrame';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  return (
    <SectionFrame eyebrow="Career Narrative" title="Selected Experience" id="experience">
      <div className={styles.grid}>
        {siteContent.experienceChapters.map((chapter, index) => (
          <motion.article
            key={chapter.title}
            className={`${styles.card} glass-surface`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
          >
            <p className={styles.period}>{chapter.period}</p>
            <h3>{chapter.title}</h3>
            <p className={styles.summary}>{chapter.summary}</p>
            <ul className={styles.highlights}>
              {chapter.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {chapter.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionFrame>
  );
}
