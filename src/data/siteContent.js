const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const siteContent = {
  hero: {
    name: 'Haiyang Zhang',
    role: 'Senior Frontend / Full-Stack Engineer',
    tagline:
      'Frontend-first engineer building healthcare, workflow, and product systems with deep React and React Native experience plus full-stack delivery depth.',
    stats: [
      { value: '8', label: 'Years' },
      { value: '100,000+', label: 'Downloads' },
      { value: '$5.9M', label: 'Platform Value' },
    ],
    stackLine:
      'React, React Native, TypeScript, Next.js, FastAPI, PostgreSQL',
    focusAreas: [
      'Healthcare Products',
      'Workflow Platforms',
      'React Interfaces',
    ],
    avatar: { src: publicAsset('avatar.jpg'), alt: 'Haiyang Zhang portrait' },
    primaryCta: { label: 'Download Resume', href: publicAsset('resume.pdf') },
    secondaryCta: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/haiyang-zhang-122687135/',
    },
  },
  summaryParagraphs: [
    'Over 8 years, I have grown from hands-on full-stack delivery into senior ownership across healthcare apps, enterprise workflow systems, and platform architecture work.',
    'My strongest edge is combining React-heavy product delivery with frontend system thinking across mobile apps, backend APIs, data-heavy workflows, and cross-team execution.',
  ],
  summaryHighlights: [
    'Owned core product surfaces for a healthcare app supporting 100,000+ downloads across iOS and Android.',
    'Delivered key workflow systems within a $5.9M enterprise platform across 123 scoped requirements and 107 implementation-complete items.',
    'Improved engineering efficiency with 30% to 40% less duplicated implementation and 30%+ workflow-canvas performance gains.',
    'Led healthcare data ingestion with FHIR transformations that reduced EHR payload size by 70%.',
  ],
  experienceChapters: [
    {
      subtitle: 'Lavita | Full-Stack Engineer',
      title: 'Healthcare AI App Foundations',
      period: 'Sep 2018 - Dec 2022',
      summary:
        'Owned core mobile product surfaces for a React Native and Expo healthcare app with 100,000+ downloads, shipping onboarding, health-data upload, AI chat, and account flows across iOS and Android.',
      highlights: [
        'Built Express.js middleware for Lavita AI and Python/FastAPI REST APIs connected to PostgreSQL-backed data workflows, supporting 15+ backend and API endpoints',
        'Designed Server-Sent Events (SSE) AI chat interactions that reduced perceived response latency by 40% through streaming message rendering and smoother loading states',
        'Led Electronic Health Record (EHR) ingestion workflows across Epic, Cerner, and other systems, including FHIR transformation that reduced medical-record payload size by 70%',
        'Expanded Jest coverage to 65%+ across 80+ utility, API, and UI-state functions and 12 critical health-data flows',
      ],
      stack: ['React Native', 'Expo', 'Express.js', 'FastAPI', 'PostgreSQL', 'FHIR'],
    },
    {
      subtitle: 'Lavita | Senior Full-Stack Engineer',
      title: 'Workflow Automation Platform Core Delivery',
      period: 'Jan 2023 - Feb 2025',
      summary:
        'Designed and developed major frontend modules within a $5.9M B2B workflow automation platform spanning 8 interconnected subsystems, with direct ownership of compute node management and data collaboration management.',
      highlights: [
        'Delivered 107 implementation-complete items across 123 scoped requirements, including 53 compute-node items and 54 data-collaboration items',
        'Built Compute Node Management workflows across 61 scoped requirements, covering node connectivity, resource and container monitoring, data sources, preprocessing, permissions, and logs',
        'Built the workflow orchestration layer within Data Collaboration Management across 7 workflow modules and 30 completed workflow requirements',
        'Expanded Cypress and Playwright coverage across 20+ critical workflow, node, data-source, and permission paths, reducing manual regression testing time by 40%',
      ],
      stack: ['Frontend Architecture', 'Workflow Automation', 'GraphQL', 'Cypress', 'Playwright', 'Platform Delivery'],
    },
    {
      subtitle: 'Lavita | Senior Full-Stack Engineer',
      title: 'Workflow Automation Platform Refactor Leadership',
      period: 'Mar 2025 - Present',
      summary:
        'Led the refactor of 2 subsystem families within the broader workflow platform, converting repeated delivery patterns into a reusable foundation for customer-specific implementations.',
      highlights: [
        'Abstracted 10+ repeated product patterns into shared platform modules for RBAC, table and search flows, approval workflows, audit logs, monitoring dashboards, workflow tasks, and canvas interactions',
        'Standardized 6 reusable workflow templates across project management, task management, data-source selection, execution tracking, and result publishing',
        'Reduced duplicated implementation by 30% to 40%, conservatively saving 0.8 to 1.5 frontend engineer-years and $100K to $180K in annual delivery effort',
        'Raised frontend engineering standards for a 4-person frontend group within a 30-person delivery team through technical proposals, onboarding, and code reviews',
      ],
      stack: ['Modular Frontend Architecture', 'RBAC', 'Workflow Canvas', 'Platform Refactor', 'Webpack', 'Vite'],
    },
  ],
  skillGroups: [
    {
      title: 'Programming Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frontend and Mobile',
      items: ['React.js', 'Next.js', 'React Native', 'Expo', 'Vue.js', 'Nuxt.js', 'Vue Router', 'D3.js', 'Tailwind CSS', 'Sass / SCSS'],
    },
    {
      title: 'Backend and APIs',
      items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'RESTful APIs', 'GraphQL', 'PostgreSQL', 'Middleware Development', 'Database-Backed API Development'],
    },
    {
      title: 'Real-Time and Data Integration',
      items: ['Server-Sent Events (SSE)', 'WebSocket', 'Streaming APIs', 'Streaming UI', 'Electronic Health Records (EHR)', 'FHIR', 'Epic', 'Cerner'],
    },
    {
      title: 'Frontend Architecture and Platforms',
      items: ['Modular Frontend Architecture', 'Reusable Component Systems', 'Workflow Automation', 'Workflow Orchestration', 'Workflow Canvas', 'Multi-Tenant B2B Platforms'],
    },
    {
      title: 'Enterprise Data and Security',
      items: ['Compute Node Management', 'Data Collaboration Systems', 'Data-Source Management', 'Role-Based Access Control (RBAC)', 'Audit Logging', 'Multi-Party Computation (MPC)'],
    },
    {
      title: 'State Management',
      items: ['Vuex', 'Pinia', 'Redux', 'Zustand'],
    },
    {
      title: 'Testing and Quality',
      items: ['Jest', 'Cypress', 'Playwright', 'End-to-End (E2E) Testing', 'Browser-Based Test Automation'],
    },
    {
      title: 'Cloud and DevOps',
      items: ['Microsoft Azure', 'Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)', 'Docker', 'Docker Compose', 'Nginx', 'CI/CD'],
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
