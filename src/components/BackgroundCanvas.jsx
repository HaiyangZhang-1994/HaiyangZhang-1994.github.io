import styles from './BackgroundCanvas.module.css';

export function BackgroundCanvas() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className="grid-overlay" />
      <div className={styles.glowA} />
      <div className={styles.glowB} />
    </div>
  );
}
