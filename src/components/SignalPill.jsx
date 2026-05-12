import styles from './SignalPill.module.css';

export function SignalPill({ label }) {
  return <li className={styles.pill}>{label}</li>;
}
