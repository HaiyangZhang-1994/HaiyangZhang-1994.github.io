import styles from './AppShell.module.css';
import { HeroSection } from '../sections/HeroSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ContactSection } from '../sections/ContactSection';

export function AppShell() {
  return (
    <main className={styles.shell}>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
