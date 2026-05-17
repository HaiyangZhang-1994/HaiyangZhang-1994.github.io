import { siteContent } from '../data/siteContent';
import { GlowButton } from '../components/GlowButton';
import { Reveal } from '../components/Reveal';
import { SectionFrame } from '../components/SectionFrame';
import styles from './ContactSection.module.css';

export function ContactSection() {
  return (
    <SectionFrame eyebrow="Connection" title="Get in Touch" id="contact">
      <Reveal className={`${styles.panel} glass-surface`} direction="none">
        <p className={styles.copy}>
          Building product experiences across enterprise systems, healthcare workflows, and modern full-stack web
          products.
        </p>
        <div className={styles.actions}>
          <Reveal direction="up" delay={0.08}>
            <GlowButton href={`mailto:${siteContent.contact.email}`}>Email Me</GlowButton>
          </Reveal>
          <Reveal direction="up" delay={0.14}>
            <GlowButton href={siteContent.contact.linkedin} variant="secondary">
              LinkedIn
            </GlowButton>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <GlowButton href={siteContent.contact.resumeHref} variant="secondary">
              Resume PDF
            </GlowButton>
          </Reveal>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
