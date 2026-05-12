import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { GlowButton } from '../components/GlowButton';
import { BackgroundCanvas } from '../components/BackgroundCanvas';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className={styles.hero}>
      <BackgroundCanvas />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className={styles.kicker}>
            Future-tech portfolio
          </motion.p>
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
            className={styles.blurb}
          >
            {hero.tagline}
          </motion.p>
          <div className={styles.actions}>
            <GlowButton href={hero.primaryCta.href}>{hero.primaryCta.label}</GlowButton>
            <GlowButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </GlowButton>
          </div>
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
