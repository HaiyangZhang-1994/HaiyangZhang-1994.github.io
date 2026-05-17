const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const siteContent = {
  hero: {
    name: 'Haiyang Zhang',
    role: 'Senior Frontend Engineer',
    tagline: 'Building elegant product experiences across enterprise platforms, healthcare apps, and modern full-stack web systems.',
    blurb:
      'Senior frontend engineer with 8 years of experience shipping React, TypeScript, React Native, and cloud-deployed applications with strong depth in front-end architecture, API integration, performance optimization, and product-minded execution.',
    avatar: { src: publicAsset('avatar.jpg'), alt: 'Haiyang Zhang portrait' },
    primaryCta: { label: 'Download Resume', href: publicAsset('resume.pdf') },
    secondaryCta: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/haiyang-zhang-122687135/',
    },
  },
  identitySignals: [
    '8 Years',
    'Senior Frontend Engineer',
    'React / TypeScript',
    'Healthcare + FHIR',
    'Next.js / FastAPI',
    'React Native / Expo',
    'Enterprise Platforms',
    'Cloud Deployment',
  ],
  experienceChapters: [
    {
      title: 'Privacy Computing Platform Modernization',
      period: '2018 - Present',
      summary:
        'Led front-end development for a large-scale privacy computing platform spanning model management, inference testing, workflow orchestration, access control, service monitoring, and operational dashboards across multiple interconnected subsystems.',
      highlights: [
        'Evolved an early project implementation into a standardized platform by abstracting reusable capabilities across workflow-heavy modules',
        'Reduced duplicated front-end implementation by an estimated 30% to 40% through shared business components and design-system standards',
        'Improved workflow-canvas responsiveness and first-screen rendering by an estimated 30%+ while strengthening regression confidence with Cypress and Playwright',
      ],
      stack: ['Vue', 'Workflow Systems', 'Playwright', 'Platform Architecture'],
    },
    {
      title: 'Lavita Health App',
      period: '2023 - Present',
      summary:
        'Built a privacy-focused cross-platform healthcare app with Expo and React Native, supporting AI-driven health guidance, EHR ingestion, FHIR transformation, and secure downstream integrations.',
      highlights: [
        'Supported 100,000+ downloads across iOS and Android',
        'Implemented FHIR-based transformation and normalization logic for imported medical records from major EHR systems including Epic and Cerner',
        'Added resilient fallback handling across multi-step import flows and managed App Store plus Google Play release workflows',
      ],
      stack: ['React Native', 'Expo', 'FHIR', 'EHR Integration'],
    },
    {
      title: 'Birding Copilot',
      period: '2026 - Present',
      summary:
        'Created a bird-finding web application that turns structured search into recommendation-first result pages backed by real eBird data, pairing a Next.js front end with a FastAPI service layer.',
      highlights: [
        'Designed the backend query pipeline with FastAPI, SQLAlchemy, and PostgreSQL for normalization, evidence collection, report generation, and persistence',
        'Implemented the web layer with Next.js App Router, TypeScript, Prisma, Auth.js, anonymous search support, and saved report retrieval',
        'Deployed the application on Google Cloud Platform with Docker Compose and Nginx, and added analytics to improve recommendation UX and product decisions',
      ],
      stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'GCP'],
    },
  ],
  skillGroups: [
    {
      title: 'Frontend Systems',
      items: ['React', 'Next.js', 'Vue', 'TypeScript'],
    },
    {
      title: 'Mobile & Product Delivery',
      items: ['React Native', 'Expo', 'App Store', 'Google Play'],
    },
    {
      title: 'Architecture & Quality',
      items: ['Design Systems', 'Workflow Systems', 'Playwright', 'Cypress'],
    },
    {
      title: 'Backend, Cloud & Data',
      items: ['Python', 'FastAPI', 'PostgreSQL', 'FHIR / EHR Integration'],
    },
  ],
  contact: {
    email: 'oceanzhang1994@gmail.com',
    linkedin: 'https://www.linkedin.com/in/haiyang-zhang-122687135/',
    resumeHref: publicAsset('resume.pdf'),
  },
};
