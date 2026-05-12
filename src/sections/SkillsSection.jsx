import { siteContent } from '../data/siteContent';
import { SectionFrame } from '../components/SectionFrame';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  return (
    <SectionFrame eyebrow="Technical Depth" title="Skills Constellation" id="skills">
      <div className={styles.grid}>
        {siteContent.skillGroups.map((group) => (
          <article key={group.title} className={`${styles.card} glass-surface`}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
