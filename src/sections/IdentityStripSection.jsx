import { siteContent } from '../data/siteContent';
import { SignalPill } from '../components/SignalPill';
import styles from './IdentityStripSection.module.css';

export function IdentityStripSection() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {siteContent.identitySignals.map((signal) => (
          <SignalPill key={signal} label={signal} />
        ))}
      </ul>
    </section>
  );
}
