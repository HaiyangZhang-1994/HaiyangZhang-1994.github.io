import { useReducedMotion } from 'motion/react';
import styles from './BackgroundCanvas.module.css';

export function BackgroundCanvas() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.background} aria-hidden="true" data-reduced={reduceMotion ? 'true' : 'false'}>
      <div className="grid-overlay" />
      <div className={styles.glowA} />
      <div className={styles.glowB} />
      {!reduceMotion ? <div className={styles.scanline} /> : null}
    </div>
  );
}
