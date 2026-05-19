import { siteContent } from '../data/siteContent';
import { Reveal } from '../components/Reveal';
import { SectionFrame } from '../components/SectionFrame';
import styles from './SummarySection.module.css';

export function SummarySection() {
  return (
    <SectionFrame eyebrow="Snapshot" title="Summary" id="summary">
      <div className={styles.grid}>
        <Reveal className={`${styles.panel} glass-surface`} direction="right">
          {siteContent.summaryParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal className={`${styles.panel} glass-surface`} direction="left" delay={0.08}>
          <h3 className={styles.subheading}>Core Strengths</h3>
          <ul className={styles.list}>
            {siteContent.summaryHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
