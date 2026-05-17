import styles from './AppShell.module.css';
import { HeroSection } from '../sections/HeroSection';
import { SummarySection } from '../sections/SummarySection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { SkillsSection } from '../sections/SkillsSection';
import { EducationSection } from '../sections/EducationSection';
import { ContactSection } from '../sections/ContactSection';

export function AppShell() {
  return (
    <main className={styles.shell}>
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
