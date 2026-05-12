# Haiyang Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new GitHub Pages-ready React site in a separate `Haiyang-Website` project that turns the approved design spec into a polished one-page future-tech personal website.

**Architecture:** The site is a Vite + React single-page application with section-based composition, content stored in a dedicated data module, CSS variables and CSS Modules for a custom visual system, Motion for most interactions, and optional hero-only WebGL/R3F effects behind a clean abstraction boundary.

**Tech Stack:** Vite, React, Motion, GSAP, CSS Modules, Vitest, Testing Library, GitHub Actions, optional React Three Fiber and Drei

---

## File Structure

Planned project structure inside `C:\Users\Haiyang\Desktop\Haiyang-Website`:

- `package.json`
  Defines scripts, dependencies, and project metadata.
- `vite.config.js`
  Configures React plugin, Pages base path, and Vitest.
- `index.html`
  App mount, theme color, and font preload shell.
- `.gitignore`
  Ignores build output, dependencies, and local artifacts.
- `.github/workflows/deploy.yml`
  Builds and deploys the site to GitHub Pages.
- `public/resume.pdf`
  Final exported resume artifact used by the Resume CTA.
- `src/main.jsx`
  Mounts the app and loads global styles.
- `src/App.jsx`
  Root entry that renders the app shell.
- `src/app/AppShell.jsx`
  High-level page composition and section ordering.
- `src/data/siteContent.js`
  Centralized content adapted from the resume.
- `src/components/SectionFrame.jsx`
  Reusable section wrapper with consistent spacing and heading layout.
- `src/components/GlowButton.jsx`
  CTA button primitive for hero and footer actions.
- `src/components/SignalPill.jsx`
  Small reusable stat/signal block for the identity strip.
- `src/components/BackgroundCanvas.jsx`
  Optional hero-only visual background layer.
- `src/sections/HeroSection.jsx`
  Fullscreen hero copy and CTA layer.
- `src/sections/IdentityStripSection.jsx`
  High-density signal strip.
- `src/sections/ExperienceSection.jsx`
  Narrative chapter cards for Novo Vivo work.
- `src/sections/SkillsSection.jsx`
  Grouped technical capability system view.
- `src/sections/ContactSection.jsx`
  Final contact and resume CTA section.
- `src/styles/tokens.css`
  Color, spacing, typography, blur, and shadow variables.
- `src/styles/globals.css`
  Reset, layout, base typography, utilities, and page-wide background styling.
- `src/styles/motion.css`
  Shared effect classes such as grid overlays and glow helpers.
- `src/app/AppShell.module.css`
  Shell-specific layout styles.
- `src/sections/*.module.css`
  Section-scoped styles.
- `src/components/*.module.css`
  Primitive component styles.
- `src/test/setup.js`
  Vitest DOM matchers setup.
- `src/test/app.test.jsx`
  Render smoke test and CTA visibility checks.
- `src/test/content.test.js`
  Validates required content groups are present.

## Task 1: Scaffold the project and install dependencies

**Files:**
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\package.json`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\vite.config.js`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\index.html`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\.gitignore`

- [ ] **Step 1: Create the base React project**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm create vite@latest . -- --template react
```

Expected:

- `package.json`, `vite.config.js`, `index.html`, `src`, and `public` are created
- Command exits with a success message and no interactive prompt

- [ ] **Step 2: Install runtime dependencies**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm install motion gsap
```

Expected:

- `package-lock.json` is created
- `package.json` now lists `motion` and `gsap`

- [ ] **Step 3: Install test and optional visual dependencies**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
npm install @react-three/fiber @react-three/drei three
```

Expected:

- Dev dependencies include Vitest and Testing Library packages
- Runtime dependencies include Three-related packages for optional hero visuals

- [ ] **Step 4: Replace `package.json` scripts with the final project scripts**

Write this file content:

```json
{
  "name": "haiyang-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint:content": "vitest run src/test/content.test.js"
  },
  "dependencies": {
    "@react-three/drei": "^10.7.6",
    "@react-three/fiber": "^9.3.0",
    "gsap": "^3.13.0",
    "motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "three": "^0.179.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.8.0",
    "@testing-library/react": "^16.3.0",
    "@vitejs/plugin-react": "^5.0.4",
    "jsdom": "^26.1.0",
    "vite": "^7.1.7",
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 5: Configure Vite and Vitest**

Write this file content:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Haiyang-Website/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
```

- [ ] **Step 6: Add a clean `.gitignore`**

Write this file content:

```gitignore
node_modules
dist
.DS_Store
.superpowers
coverage
```

- [ ] **Step 7: Verify the scaffold runs**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run build
```

Expected:

- Build succeeds
- `dist` folder is generated

- [ ] **Step 8: Commit the scaffold**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
git add package.json package-lock.json vite.config.js index.html .gitignore src public
git commit -m "chore: scaffold Haiyang personal website"
```

## Task 2: Add deployment, tests, and content foundations

**Files:**
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\.github\workflows\deploy.yml`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\data\siteContent.js`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\test\setup.js`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\test\content.test.js`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\test\app.test.jsx`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\App.jsx`

- [ ] **Step 1: Write the failing content validation test**

Create `src/test/content.test.js`:

```js
import { describe, expect, test } from 'vitest';
import { siteContent } from '../data/siteContent';

describe('siteContent', () => {
  test('includes the five required homepage sections', () => {
    expect(siteContent.hero.name).toBeTruthy();
    expect(siteContent.identitySignals).toHaveLength(5);
    expect(siteContent.experienceChapters).toHaveLength(3);
    expect(siteContent.skillGroups).toHaveLength(4);
    expect(siteContent.contact.resumeHref).toBe('/resume.pdf');
  });
});
```

- [ ] **Step 2: Run the test to confirm it fails**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run lint:content
```

Expected:

- FAIL because `src/data/siteContent.js` does not exist yet

- [ ] **Step 3: Add centralized site content from the approved resume**

Create `src/data/siteContent.js`:

```js
export const siteContent = {
  hero: {
    name: 'Haiyang Zhang',
    role: 'Senior Frontend Engineer',
    tagline: 'Crafting complex systems into elegant, high-performance product experiences.',
    blurb:
      'Frontend engineer with 8 years of experience across enterprise workflow platforms, healthcare apps, and performance-driven product systems.',
    primaryCta: { label: 'Download Resume', href: '/resume.pdf' },
    secondaryCta: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/haiyang-zhang-122687135/',
    },
  },
  identitySignals: [
    '8 Years',
    'Senior Frontend Engineer',
    'Enterprise Systems',
    'Healthcare + FHIR',
    'React / Vue / RN',
  ],
  experienceChapters: [
    {
      title: 'Distributed Privacy Computing Data Service Platform',
      period: '2018 - 2021',
      summary:
        'Led front-end delivery for a privacy computing platform spanning model management, inference workflows, access control, monitoring, and cross-system operational dashboards.',
      highlights: [
        'Built complex inference configuration and result inspection interfaces',
        'Improved table and detail-view responsiveness by an estimated 30%+',
        'Reduced key first-screen load times by approximately 25% to 35%',
      ],
      stack: ['Vue', 'Workflow UI', 'Performance', 'Access Control'],
    },
    {
      title: 'Standardized Privacy Computing Platform',
      period: '2021 - Present',
      summary:
        'Helped evolve a first-generation project into a reusable platform with lower coupling, standardized capabilities, and faster front-end delivery for follow-on implementations.',
      highlights: [
        'Abstracted reusable capabilities across workflow-heavy modules',
        'Reduced duplicated implementation by an estimated 30% to 40%',
        'Improved workflow-canvas responsiveness by an estimated 35%+',
      ],
      stack: ['Architecture', 'Component Systems', 'Workflow Canvas', 'Optimization'],
    },
    {
      title: 'Lavita Health App',
      period: '2023 - Present',
      summary:
        'Built privacy-focused cross-platform healthcare experiences with EHR ingestion, FHIR transformation, AI-adjacent flows, and token-based integrations.',
      highlights: [
        'Supported 100,000+ downloads across iOS and Android',
        'Implemented FHIR-based transformation pipelines for imported records',
        'Added resilient fallback handling across multi-step import flows',
      ],
      stack: ['React Native', 'Expo', 'FHIR', 'EHR Integration'],
    },
  ],
  skillGroups: [
    {
      title: 'Frontend Systems',
      items: ['React', 'Vue', 'TypeScript', 'Component Design'],
    },
    {
      title: 'Performance & Architecture',
      items: ['Rendering Optimization', 'Workflow Systems', 'Platform Standardization'],
    },
    {
      title: 'Healthcare & Data',
      items: ['FHIR', 'EHR Integration', 'Healthcare Data Processing'],
    },
    {
      title: 'Cross-platform & Integration',
      items: ['React Native', 'Expo', 'Node.js', 'Express.js'],
    },
  ],
  contact: {
    email: 'oceanzhang1994@gmail.com',
    linkedin: 'https://www.linkedin.com/in/haiyang-zhang-122687135/',
    resumeHref: '/resume.pdf',
  },
};
```

- [ ] **Step 4: Re-run the content test**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run lint:content
```

Expected:

- PASS with one passing test suite

- [ ] **Step 5: Add DOM test setup and an app smoke test**

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom/vitest';
```

Create `src/test/app.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the primary resume CTA', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
});
```

- [ ] **Step 6: Add GitHub Pages deployment workflow**

Create `.github/workflows/deploy.yml`:

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run test
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 7: Verify tests pass**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
```

Expected:

- PASS
- Both `content.test.js` and `app.test.jsx` succeed

- [ ] **Step 8: Commit the foundation**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
git add .github/workflows/deploy.yml src/data/siteContent.js src/test/setup.js src/test/content.test.js src/test/app.test.jsx
git commit -m "chore: add content model and deployment foundation"
```

## Task 3: Build the global visual system and app shell

**Files:**
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\app\AppShell.jsx`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\app\AppShell.module.css`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\styles\tokens.css`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\styles\globals.css`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\styles\motion.css`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\main.jsx`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\App.jsx`

- [ ] **Step 1: Write a failing shell render test**

Update `src/test/app.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the primary resume CTA', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
});

test('renders the experience heading', () => {
  render(<App />);
  expect(screen.getByText(/selected experience/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the app test to confirm it fails**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
```

Expected:

- FAIL because the app shell and sections are not wired yet

- [ ] **Step 3: Add global tokens and base styling**

Create `src/styles/tokens.css`:

```css
:root {
  --bg: #050816;
  --bg-elevated: rgba(10, 17, 34, 0.72);
  --surface: rgba(9, 18, 39, 0.58);
  --surface-strong: rgba(10, 18, 38, 0.88);
  --text: #eaf2ff;
  --text-dim: rgba(234, 242, 255, 0.72);
  --accent: #5be7ff;
  --accent-strong: #3bcbff;
  --accent-soft: rgba(91, 231, 255, 0.18);
  --border: rgba(255, 255, 255, 0.12);
  --shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
  --radius-lg: 28px;
  --radius-md: 18px;
  --page-max: 1200px;
}
```

Create `src/styles/globals.css`:

```css
@import './tokens.css';
@import './motion.css';

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top, rgba(59, 203, 255, 0.14), transparent 28%),
    linear-gradient(180deg, #07101f 0%, #050816 45%, #040612 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

#root {
  min-height: 100vh;
}
```

Create `src/styles/motion.css`:

```css
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at center, black 42%, transparent 86%);
}

.glass-surface {
  background: var(--surface);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
```

- [ ] **Step 4: Add the shell layout**

Create `src/app/AppShell.jsx`:

```jsx
import styles from './AppShell.module.css';
import { HeroSection } from '../sections/HeroSection';
import { IdentityStripSection } from '../sections/IdentityStripSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ContactSection } from '../sections/ContactSection';

export function AppShell() {
  return (
    <main className={styles.shell}>
      <HeroSection />
      <IdentityStripSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
```

Create `src/app/AppShell.module.css`:

```css
.shell {
  position: relative;
  overflow: hidden;
}
```

Update `src/App.jsx`:

```jsx
import { AppShell } from './app/AppShell';

function App() {
  return <AppShell />;
}

export default App;
```

Update `src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- [ ] **Step 5: Add temporary stub sections to satisfy the shell**

Create each section file with this starter pattern:

```jsx
export function HeroSection() {
  return <section><a href="/resume.pdf">Download Resume</a></section>;
}
```

```jsx
export function IdentityStripSection() {
  return <section><p>Identity Strip</p></section>;
}
```

```jsx
export function ExperienceSection() {
  return <section><h2>Selected Experience</h2></section>;
}
```

```jsx
export function SkillsSection() {
  return <section><h2>Skills Constellation</h2></section>;
}
```

```jsx
export function ContactSection() {
  return <section><h2>Get in Touch</h2></section>;
}
```

- [ ] **Step 6: Re-run tests**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
```

Expected:

- PASS

- [ ] **Step 7: Commit the shell**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
git add src/App.jsx src/main.jsx src/app src/styles src/sections
git commit -m "feat: add global visual system and app shell"
```

## Task 4: Implement hero, signals, and reusable primitives

**Files:**
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\SectionFrame.jsx`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\SectionFrame.module.css`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\GlowButton.jsx`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\GlowButton.module.css`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\SignalPill.jsx`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\SignalPill.module.css`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\BackgroundCanvas.jsx`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\BackgroundCanvas.module.css`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\HeroSection.jsx`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\IdentityStripSection.jsx`

- [ ] **Step 1: Expand the render test for hero text and signal count**

Update `src/test/app.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the primary resume CTA', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
});

test('renders hero identity and signal strip', () => {
  render(<App />);
  expect(screen.getByText(/haiyang zhang/i)).toBeInTheDocument();
  expect(screen.getAllByText(/react/i).length).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Run the test to confirm it fails on missing hero content**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
```

Expected:

- FAIL because current sections are still stubs

- [ ] **Step 3: Add reusable primitives**

Create `src/components/GlowButton.jsx`:

```jsx
import styles from './GlowButton.module.css';

export function GlowButton({ href, children, variant = 'primary' }) {
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href}>
      {children}
    </a>
  );
}
```

Create `src/components/SectionFrame.jsx`:

```jsx
import styles from './SectionFrame.module.css';

export function SectionFrame({ eyebrow, title, children, id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        {(eyebrow || title) && (
          <header className={styles.header}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            {title ? <h2 className={styles.title}>{title}</h2> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
```

Create `src/components/SignalPill.jsx`:

```jsx
import styles from './SignalPill.module.css';

export function SignalPill({ label }) {
  return <li className={styles.pill}>{label}</li>;
}
```

Create `src/components/BackgroundCanvas.jsx`:

```jsx
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
```

- [ ] **Step 4: Add matching component styles**

Write these style modules:

```css
/* GlowButton.module.css */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid var(--border);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.primary {
  background: linear-gradient(135deg, rgba(91, 231, 255, 0.22), rgba(59, 203, 255, 0.08));
  box-shadow: 0 0 0 1px rgba(91, 231, 255, 0.16), 0 12px 36px rgba(59, 203, 255, 0.18);
}

.secondary {
  background: rgba(255, 255, 255, 0.02);
}
```

```css
/* SectionFrame.module.css */
.section {
  position: relative;
  padding: 88px 24px;
}

.inner {
  width: min(100%, var(--page-max));
  margin: 0 auto;
}

.header {
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--accent);
  font-size: 12px;
}

.title {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.75rem);
}
```

```css
/* SignalPill.module.css */
.pill {
  list-style: none;
  padding: 14px 18px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
}
```

```css
/* BackgroundCanvas.module.css */
.background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.glowA,
.glowB {
  position: absolute;
  border-radius: 999px;
  filter: blur(60px);
}

.glowA {
  width: 420px;
  height: 420px;
  top: 10%;
  left: -8%;
  background: rgba(91, 231, 255, 0.14);
}

.glowB {
  width: 340px;
  height: 340px;
  right: 4%;
  bottom: 12%;
  background: rgba(122, 92, 255, 0.12);
}
```

- [ ] **Step 5: Implement the hero and identity strip against `siteContent`**

Replace `src/sections/HeroSection.jsx`:

```jsx
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
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className={styles.kicker}>
          Future-tech portfolio
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className={styles.title}>
          {hero.name}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className={styles.role}>
          {hero.role}
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className={styles.blurb}>
          {hero.tagline}
        </motion.p>
        <div className={styles.actions}>
          <GlowButton href={hero.primaryCta.href}>{hero.primaryCta.label}</GlowButton>
          <GlowButton href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
```

Replace `src/sections/IdentityStripSection.jsx`:

```jsx
import { siteContent } from '../data/siteContent';
import { SignalPill } from '../components/SignalPill';
import styles from './IdentityStripSection.module.css';

export function IdentityStripSection() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {siteContent.identitySignals.map((signal) => (
          <SignalPill key={signal} label={signal} />
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 6: Add section styles**

Create `src/sections/HeroSection.module.css`:

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 32px 24px;
}

.inner {
  position: relative;
  z-index: 1;
  width: min(100%, var(--page-max));
  margin: 0 auto;
}

.kicker {
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--accent);
}

.title {
  margin: 0;
  font-size: clamp(4rem, 12vw, 8rem);
  line-height: 0.95;
}

.role {
  font-size: clamp(1.25rem, 3vw, 2rem);
  color: var(--text-dim);
}

.blurb {
  max-width: 640px;
  font-size: 1.125rem;
  color: var(--text-dim);
}

.actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
}
```

Create `src/sections/IdentityStripSection.module.css`:

```css
.section {
  padding: 0 24px 48px;
}

.list {
  width: min(100%, var(--page-max));
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
```

- [ ] **Step 7: Re-run tests**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
```

Expected:

- PASS

- [ ] **Step 8: Commit the hero foundation**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
git add src/components src/sections/HeroSection.* src/sections/IdentityStripSection.* src/test/app.test.jsx
git commit -m "feat: implement hero and identity strip"
```

## Task 5: Implement experience, skills, and contact sections

**Files:**
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\ExperienceSection.jsx`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\SkillsSection.jsx`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\ContactSection.jsx`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\ExperienceSection.module.css`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\SkillsSection.module.css`
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\ContactSection.module.css`

- [ ] **Step 1: Write the failing section coverage test**

Update `src/test/app.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the primary resume CTA', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
});

test('renders all section headings', () => {
  render(<App />);
  expect(screen.getByText(/selected experience/i)).toBeInTheDocument();
  expect(screen.getByText(/skills constellation/i)).toBeInTheDocument();
  expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the tests to confirm later sections still need implementation**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
```

Expected:

- PASS or weak coverage at this point, signaling the need to replace stubs with real content-driven sections in the next steps

- [ ] **Step 3: Replace the experience section**

Write `src/sections/ExperienceSection.jsx`:

```jsx
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { SectionFrame } from '../components/SectionFrame';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  return (
    <SectionFrame eyebrow="Career Narrative" title="Selected Experience" id="experience">
      <div className={styles.grid}>
        {siteContent.experienceChapters.map((chapter, index) => (
          <motion.article
            key={chapter.title}
            className={`${styles.card} glass-surface`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
          >
            <p className={styles.period}>{chapter.period}</p>
            <h3>{chapter.title}</h3>
            <p className={styles.summary}>{chapter.summary}</p>
            <ul className={styles.highlights}>
              {chapter.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {chapter.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionFrame>
  );
}
```

- [ ] **Step 4: Replace the skills and contact sections**

Write `src/sections/SkillsSection.jsx`:

```jsx
import { siteContent } from '../data/siteContent';
import { SectionFrame } from '../components/SectionFrame';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  return (
    <SectionFrame eyebrow="Technical Depth" title="Skills Constellation" id="skills">
      <div className={styles.grid}>
        {siteContent.skillGroups.map((group) => (
          <article key={group.title} className={`${styles.card} glass-surface`}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
```

Write `src/sections/ContactSection.jsx`:

```jsx
import { siteContent } from '../data/siteContent';
import { GlowButton } from '../components/GlowButton';
import { SectionFrame } from '../components/SectionFrame';
import styles from './ContactSection.module.css';

export function ContactSection() {
  return (
    <SectionFrame eyebrow="Connection" title="Get in Touch" id="contact">
      <div className={`${styles.panel} glass-surface`}>
        <p className={styles.copy}>
          Building product experiences across enterprise systems, healthcare workflows, and high-complexity front-end platforms.
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
```

- [ ] **Step 5: Add section styles**

Write the module styles:

```css
/* ExperienceSection.module.css */
.grid {
  display: grid;
  gap: 20px;
}

.card {
  padding: 28px;
  border-radius: var(--radius-lg);
}

.period {
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.summary {
  color: var(--text-dim);
}

.highlights {
  padding-left: 18px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tags span {
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
}
```

```css
/* SkillsSection.module.css */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.card {
  padding: 24px;
  border-radius: var(--radius-md);
}

.card ul {
  padding-left: 18px;
  color: var(--text-dim);
}
```

```css
/* ContactSection.module.css */
.panel {
  padding: 32px;
  border-radius: var(--radius-lg);
}

.copy {
  max-width: 720px;
  color: var(--text-dim);
}

.actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
}
```

- [ ] **Step 6: Run tests**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
```

Expected:

- PASS

- [ ] **Step 7: Build the production bundle**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run build
```

Expected:

- PASS
- Production bundle generated successfully

- [ ] **Step 8: Commit the content sections**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
git add src/sections
git commit -m "feat: implement experience skills and contact sections"
```

## Task 6: Polish motion, responsiveness, and optional hero visuals

**Files:**
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\BackgroundCanvas.jsx`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\components\BackgroundCanvas.module.css`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\sections\HeroSection.module.css`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\src\styles\globals.css`

- [ ] **Step 1: Add reduced-motion fallback behavior**

Update `src/components/BackgroundCanvas.jsx`:

```jsx
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
```

- [ ] **Step 2: Add the matching style updates**

Update `src/components/BackgroundCanvas.module.css`:

```css
.background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.scanline {
  position: absolute;
  inset: -20% 0 auto;
  height: 40%;
  background: linear-gradient(180deg, transparent, rgba(91, 231, 255, 0.12), transparent);
  animation: sweep 10s linear infinite;
}

@keyframes sweep {
  from {
    transform: translateY(-10%);
  }
  to {
    transform: translateY(220%);
  }
}
```

Update `src/styles/globals.css`:

```css
@media (max-width: 720px) {
  body {
    background:
      radial-gradient(circle at top, rgba(59, 203, 255, 0.12), transparent 24%),
      linear-gradient(180deg, #07101f 0%, #050816 55%, #040612 100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Run tests after polish changes**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
```

Expected:

- PASS

- [ ] **Step 4: Run the final build verification**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run build
```

Expected:

- PASS
- No unresolved import or CSS module errors

- [ ] **Step 5: Commit the polish pass**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
git add src/components/BackgroundCanvas.* src/sections/HeroSection.module.css src/styles/globals.css
git commit -m "feat: polish motion and responsive behavior"
```

## Task 7: Deployment and handoff

**Files:**
- Create: `C:\Users\Haiyang\Desktop\Haiyang-Website\README.md`
- Modify: `C:\Users\Haiyang\Desktop\Haiyang-Website\public\resume.pdf`

- [ ] **Step 1: Add repository instructions**

Create `README.md`:

```md
# Haiyang Website

Experimental one-page personal website for GitHub Pages.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run test`

## Deployment

This project deploys with GitHub Actions to GitHub Pages.
If the repository name changes, update `base` in `vite.config.js`.
```

- [ ] **Step 2: Copy the final resume PDF into `public/resume.pdf`**

Run:

```powershell
Copy-Item 'C:\Users\Haiyang\Desktop\Haiyang-Resume\dist\Haiyang_Zhang_Resume.pdf' 'C:\Users\Haiyang\Desktop\Haiyang-Website\public\resume.pdf' -Force
```

Expected:

- `public/resume.pdf` exists and matches the current exported resume

- [ ] **Step 3: Run final test and build verification**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
npm run test
npm run build
```

Expected:

- PASS
- Project is ready to push to GitHub and publish

- [ ] **Step 4: Commit handoff files**

Run:

```powershell
Set-Location 'C:\Users\Haiyang\Desktop\Haiyang-Website'
git add README.md public/resume.pdf
git commit -m "docs: add project handoff guidance"
```

## Self-Review

### Spec coverage

- Single-page narrative structure: covered by Tasks 3 through 5
- Future-tech visual system: covered by Tasks 3, 4, and 6
- Hero, identity strip, experience, skills, contact: covered by Tasks 4 and 5
- GitHub Pages deployment: covered by Tasks 1, 2, and 7
- Resume reuse and separate project boundary: covered by Tasks 2 and 7
- Responsive and reduced-motion safeguards: covered by Task 6

No spec gaps remain for the approved scope.

### Placeholder scan

- No `TODO`, `TBD`, or deferred implementation markers remain
- All file paths are explicit
- All commands are concrete
- Each code-editing step includes the intended code content

### Type consistency

- Shared content source is consistently named `siteContent`
- Section component names are consistent across shell and file structure
- CTA paths consistently use `/resume.pdf`

