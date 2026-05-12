import { siteContent } from '../data/siteContent';
import { Reveal } from '../components/Reveal';
import { SignalPill } from '../components/SignalPill';
import styles from './IdentityStripSection.module.css';

export function IdentityStripSection() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {siteContent.identitySignals.map((signal, index) => (
          <Reveal
            as="li"
            key={signal}
            direction={index % 2 === 0 ? 'right' : 'left'}
            delay={index * 0.05}
            className={styles.item}
          >
            <SignalPill label={signal} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
