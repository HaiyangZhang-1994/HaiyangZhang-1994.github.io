import styles from './SignalPill.module.css';

export function SignalPill({ label }) {
  return <span className={styles.pill}>{label}</span>;
}
