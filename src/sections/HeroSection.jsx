import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { Reveal } from '../components/Reveal';
import { BackgroundCanvas } from '../components/BackgroundCanvas';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className={styles.hero}>
      <BackgroundCanvas />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className={styles.title}
          >
            {hero.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className={styles.role}
          >
            {hero.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className={styles.tagline}
          >
            {hero.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.statsGrid}
          >
            {hero.stats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <span className={styles.statValue}>{item.value}</span>
                <span className={styles.statLabel}>{item.label}</span>
              </div>
            ))}
          </motion.div>
          <Reveal className={styles.stackRail} direction="up" delay={0.34}>
            <span className={styles.stackLabel}>Core Stack</span>
            <p className={styles.stackText}>{hero.stackLine}</p>
          </Reveal>
          <ul className={styles.focusList} aria-label="Primary focus areas">
            {hero.focusAreas.map((signal, index) => (
              <Reveal
                as="li"
                key={signal}
                className={styles.focusItem}
                direction={index % 2 === 0 ? 'right' : 'left'}
                delay={0.38 + index * 0.04}
              >
                <span className={styles.focusPill}>{signal}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <motion.div
          className={styles.avatarShell}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.32 }}
        >
          <img className={styles.avatar} src={hero.avatar.src} alt={hero.avatar.alt} />
        </motion.div>
      </div>
    </section>
  );
}
