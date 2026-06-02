const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const siteContent = {
  hero: {
    name: 'Haiyang Zhang',
    role: 'Senior Full-Stack Engineer',
    tagline: 'Building elegant product experiences across enterprise platforms, healthcare apps, and modern full-stack web systems.',
    blurb:
      'Senior full-stack engineer with 8 years of experience shipping React, TypeScript, React Native, and cloud-deployed applications with strong depth in front-end architecture, API integration, performance optimization, and product-minded execution.',
    avatar: { src: publicAsset('avatar.jpg'), alt: 'Haiyang Zhang portrait' },
    primaryCta: { label: 'Download Resume', href: publicAsset('resume.pdf') },
    secondaryCta: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/haiyang-zhang-122687135/',
    },
  },
  identitySignals: [
    '8 Years',
    'Senior Full-Stack Engineer',
    'React / TypeScript',
    'Healthcare + FHIR',
    'Next.js / FastAPI',
    'React Native / Expo',
    'Enterprise Platforms',
    'Cloud Deployment',
  ],
  summaryParagraphs: [
    'Senior Full-Stack Engineer with 8 years of experience building React, TypeScript, and React Native applications for enterprise platforms, healthcare products, and cloud-deployed full-stack web systems.',
    'Strong in front-end architecture, reusable component systems, API integration, performance optimization, testing strategy, and hands-on backend development with Python, FastAPI, PostgreSQL, authentication flows, and Google Cloud-based deployment.',
  ],
  summaryHighlights: [
    'Product-minded front-end architecture for workflow-heavy applications',
    'Cross-platform healthcare delivery with FHIR and EHR integrations',
    'Hands-on full-stack implementation across Next.js, FastAPI, and PostgreSQL',
    'Production ownership spanning testing, CI/CD, and app release workflows',
  ],
  experienceChapters: [
    {
      subtitle: 'Lavita · Senior Full-Stack Engineer',
      title: 'Lavita Health App',
      period: 'Jan 2023 - Present',
      summary:
        'Built a privacy-focused cross-platform healthcare app with 100,000+ downloads across iOS and Android, delivering AI-driven health guidance based on user medical data.',
      highlights: [
        'Supported 100,000+ downloads across iOS and Android',
        'Implemented FHIR-based transformation and normalization logic for imported medical records from major EHR systems including Epic and Cerner',
        'Built mobile ingestion flows for personal health records so users could import data from major EHR systems without leaving the product experience',
        'Added resilient fallback handling across multi-step import flows so one failure would not block later API requests or downstream data retrieval',
        'Improved cross-platform quality with Jest coverage for critical user flows and managed App Store plus Google Play release workflows independently',
        'Integrated Google NotebookLM content workflows and Web3 token flows on Theta subchain including registration, balance retrieval, and transfer',
      ],
      stack: ['React Native', 'Expo', 'FHIR', 'EHR Integration', 'Jest', 'Web3'],
    },
    {
      subtitle: 'Novo Vivo · Software Engineer',
      title: 'Privacy Computing Platform Modernization',
      period: 'Aug 2018 - Jan 2023',
      summary:
        'Built complex enterprise platform products focused on privacy computing, workflow orchestration, and front-end architecture across multiple interconnected subsystems.',
      highlights: [
        'Evolved an early project-based implementation into a standardized platform by abstracting shared capabilities across data resources, federated modeling, privacy-preserving query, approval workflows, and system management',
        'Built interfaces for model listing, inference configuration, execution history, task orchestration, and result inspection, improving workflow usability and reducing manual steps for enterprise users',
        'Partnered with backend and algorithm teams on REST and GraphQL API contracts plus asynchronous task flows for model deployment, runtime tracking, and result delivery',
        'Reduced duplicated front-end implementation by an estimated 30% to 40% through shared business components and design-system standards',
        'Improved workflow-canvas responsiveness and first-screen rendering by an estimated 30%+ while strengthening regression confidence with Cypress and Playwright',
        'Mentored up to 4 engineers while improving CI/CD release confidence for complex operational workflows',
      ],
      stack: ['Vue.js', 'Workflow Systems', 'REST API', 'GraphQL', 'Cypress', 'Playwright'],
    },
    {
      subtitle: 'Personal Project · Creator / Full-Stack Engineer',
      title: 'Birding Copilot',
      period: '2026 - Present',
      projectLink: {
        label: 'Visit Project',
        href: 'https://birdingcopilot.com/',
      },
      summary:
        'Created a bird-finding web application that turns structured search into recommendation-first result pages backed by real eBird data, pairing a Next.js front end with a FastAPI service layer.',
      highlights: [
        'Designed the backend query pipeline with FastAPI, SQLAlchemy, and PostgreSQL for normalization, evidence collection, report generation, and persistence',
        'Integrated server-side eBird lookups for species, region, hotspot, and recent or notable observations while ranking candidate sightings with recency-first logic',
        'Implemented the web layer with Next.js App Router, TypeScript, Prisma, Auth.js, anonymous search support, and saved report retrieval',
        'Added Google Analytics to track search behavior and result-page engagement, creating a feedback loop for improving recommendation UX and future product decisions',
        'Deployed the application on Google Cloud Platform with Docker Compose and Nginx reverse proxy, establishing separate web, API, and database runtime boundaries',
      ],
      stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Auth.js', 'Docker Compose', 'Google Cloud Platform'],
    },
  ],
  skillGroups: [
    {
      title: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'],
    },
    {
      title: 'Frontend & Mobile',
      items: [
        'Vue.js',
        'Nuxt',
        'Vue Router',
        'React',
        'Next.js',
        'React Router',
        'React Native',
        'Expo',
        'Responsive Web Applications',
        'Cross-Platform iOS/Android Development',
      ],
    },
    {
      title: 'Backend & Integration',
      items: [
        'Node.js',
        'Express.js',
        'Python',
        'FastAPI',
        'REST API Integration',
        'GraphQL',
        'PostgreSQL',
        'Supabase',
        'SQLAlchemy',
        'Prisma',
        'Auth.js',
        'Axios',
      ],
    },
    {
      title: 'AI & Automation',
      items: ['LangGraph', 'AI Agent Workflows'],
    },
    {
      title: 'State Management',
      items: ['Vuex', 'Pinia', 'Redux', 'Zustand'],
    },
    {
      title: 'Testing & Quality',
      items: ['Jest', 'Cypress', 'Playwright', 'React Testing Library', 'End-to-End Testing', 'UI Testing'],
    },
    {
      title: 'Tooling',
      items: ['Webpack', 'Vite', 'Tailwind CSS', 'Sass / SCSS', 'Docker Compose', 'Nginx'],
    },
    {
      title: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'Google Cloud Platform', 'AWS', 'Microsoft Azure'],
    },
    {
      title: 'Architecture & UX',
      items: ['Front-End Architecture', 'Reusable Components', 'Component Design', 'Design Systems', 'Workflow Systems', 'Performance Optimization', 'Accessibility'],
    },
    {
      title: 'Delivery',
      items: ['CI/CD', 'App Store', 'Google Play'],
    },
    {
      title: 'Collaboration',
      items: ['Linear', 'GitHub', 'Slack', 'Notion'],
    },
    {
      title: 'Healthcare & Security',
      items: ['FHIR', 'EHR Integration', 'Healthcare Data Processing', 'Data Privacy', 'Application Security'],
    },
    {
      title: 'Additional',
      items: ['ethers.js', 'Blockchain Application Development', 'Theta Subchain Integration'],
    },
  ],
  education: [
    {
      school: 'Syracuse University',
      degree: 'M.S.E. in Computer and Information Science',
      year: '2018',
    },
    {
      school: 'Beijing University of Technology',
      degree: 'B.S.E. in Internet of Things',
      year: '2016',
    },
  ],
  contact: {
    email: 'oceanzhang1994@gmail.com',
    linkedin: 'https://www.linkedin.com/in/haiyang-zhang-122687135/',
    resumeHref: publicAsset('resume.pdf'),
  },
};
