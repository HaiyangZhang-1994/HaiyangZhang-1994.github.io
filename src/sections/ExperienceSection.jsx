import { siteContent } from '../data/siteContent';
import { Reveal } from '../components/Reveal';
import { SectionFrame } from '../components/SectionFrame';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  return (
    <SectionFrame eyebrow="Career Narrative" title="Selected Experience" id="experience">
      <div className={styles.grid}>
        {siteContent.experienceChapters.map((chapter, index) => (
          <Reveal
            as="article"
            key={chapter.title}
            className={`${styles.card} glass-surface`}
            direction={index === 1 ? 'left' : 'up'}
            delay={index * 0.08}
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
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
