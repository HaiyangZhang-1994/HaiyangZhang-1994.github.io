import { siteContent } from '../data/siteContent';
import { Reveal } from '../components/Reveal';
import { SectionFrame } from '../components/SectionFrame';
import styles from './EducationSection.module.css';

export function EducationSection() {
  return (
    <SectionFrame eyebrow="Foundation" title="Education" id="education">
      <div className={styles.grid}>
        {siteContent.education.map((entry, index) => (
          <Reveal
            as="article"
            key={entry.school}
            className={`${styles.card} glass-surface`}
            direction={index % 2 === 0 ? 'right' : 'left'}
            delay={index * 0.08}
          >
            <p className={styles.year}>{entry.year}</p>
            <h3>{entry.school}</h3>
            <p className={styles.degree}>{entry.degree}</p>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
