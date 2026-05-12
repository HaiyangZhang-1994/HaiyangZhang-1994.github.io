import { siteContent } from '../data/siteContent';
import { GlowButton } from '../components/GlowButton';
import { SectionFrame } from '../components/SectionFrame';
import styles from './ContactSection.module.css';

export function ContactSection() {
  return (
    <SectionFrame eyebrow="Connection" title="Get in Touch" id="contact">
      <div className={`${styles.panel} glass-surface`}>
        <p className={styles.copy}>
          Building product experiences across enterprise systems, healthcare workflows, and high-complexity front-end
          platforms.
        </p>
        <div className={styles.actions}>
          <GlowButton href={`mailto:${siteContent.contact.email}`}>Email Me</GlowButton>
          <GlowButton href={siteContent.contact.linkedin} variant="secondary">
            LinkedIn
          </GlowButton>
          <GlowButton href={siteContent.contact.resumeHref} variant="secondary">
            Resume PDF
          </GlowButton>
        </div>
      </div>
    </SectionFrame>
  );
}
