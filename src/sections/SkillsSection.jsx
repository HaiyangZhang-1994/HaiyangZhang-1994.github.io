import { siteContent } from '../data/siteContent';
import { Reveal } from '../components/Reveal';
import { SectionFrame } from '../components/SectionFrame';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  return (
    <SectionFrame eyebrow="Technical Depth" title="Technical Stack" id="skills">
      <div className={styles.grid}>
        {siteContent.skillGroups.map((group, index) => (
          <Reveal
            as="article"
            key={group.title}
            className={`${styles.card} glass-surface`}
            direction={index % 2 === 0 ? 'right' : 'left'}
            delay={index * 0.06}
          >
            <h3>{group.title}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
