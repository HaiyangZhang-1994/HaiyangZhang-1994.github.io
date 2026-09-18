const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const siteContent = {
  hero: {
    name: 'Haiyang Zhang',
    role: 'Senior Frontend / Full-Stack Engineer',
    tagline:
      'Frontend-first engineer building React and React Native products across AI-powered healthcare, enterprise workflow platforms, and full-stack systems.',
    stats: [
      { value: '8', label: 'Years' },
      { value: '100,000+', label: 'Downloads' },
      { value: '$5.9M', label: 'Platform Value' },
    ],
    stackLine:
      'React, React Native, TypeScript, Next.js, Node.js, FastAPI, PostgreSQL',
    focusAreas: [
      'React Product Engineering',
      'AI-Powered Healthcare',
      'Workflow Platforms',
    ],
    avatar: { src: publicAsset('avatar.jpg'), alt: 'Haiyang Zhang portrait' },
    primaryCta: { label: 'Download Resume', href: publicAsset('resume.pdf') },
    secondaryCta: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/haiyang-zhang-122687135/',
    },
  },
  summaryParagraphs: [
    'As an early engineering hire at Lavita AI, I have grown over 8 years from hands-on product delivery into senior frontend and full-stack ownership across mobile, AI, backend API, and enterprise platform work.',
    'My strongest edge is combining React and React Native product engineering with frontend system thinking, production AI workflows, data-heavy orchestration, and cross-team technical leadership.',
  ],
  summaryHighlights: [
    'Owned React Native product surfaces and AI chat experiences for a healthcare app supporting 100,000+ downloads across iOS and Android.',
    'Delivered key workflow systems within a $5.9M enterprise platform across 123 scoped requirements and 107 implementation-complete items.',
    'Built production RAG, hybrid retrieval, streaming response, output validation, and bounded retry workflows for an AI health assistant.',
    'Raised frontend engineering standards across a 6-person frontend group within a 50-person delivery team while reducing duplicated implementation by 30% to 40%.',
  ],
  experienceChapters: [
    {
      subtitle: 'Mobile, Backend API, and AI Product Delivery',
      title: 'Healthcare Mobile App Platform — AI Chat, RAG, and Health Data',
      period: 'Lavita AI · Sep 2018 - Present',
      summary:
        'Owned core mobile product surfaces for a React Native and Expo healthcare app with 100,000+ downloads, shipping onboarding, health-data upload, AI chat, and account flows across iOS and Android.',
      highlights: [
        'Built Express.js middleware and Python/FastAPI REST APIs backed by PostgreSQL, supporting 15+ endpoints across AI chat, RAG retrieval, health-data processing, file processing, reporting, and account workflows',
        'Built a Retrieval-Augmented Generation (RAG) pipeline combining semantic search and keyword retrieval with reranking for relevant healthcare knowledge',
        'Designed Server-Sent Events (SSE) streaming for AI chat, reducing perceived response latency by 40% through incremental rendering and smoother real-time UI updates',
        'Implemented AI output validation and bounded retry workflows that automatically re-ran failed generations with quality feedback',
        'Led Electronic Health Record (EHR) ingestion workflows across Epic, Cerner, and other systems, including FHIR transformation that reduced medical-record payload size by 70%',
        'Expanded Jest coverage to 65%+ across 80+ utility, API, and UI-state functions and 12 critical health-data flows, reducing release-blocking regressions by 35%',
      ],
      stack: ['React Native', 'Expo', 'RAG', 'Express.js', 'FastAPI', 'PostgreSQL', 'SSE', 'FHIR'],
    },
    {
      subtitle: 'Frontend Engineering and Workflow Platform Development',
      title: 'Workflow Automation Platform — $5.9M Enterprise Delivery',
      period: 'Lavita AI · Sep 2018 - Present',
      summary:
        'Designed and developed major frontend modules within a $5.9M B2B workflow automation platform spanning 8 interconnected subsystems, with direct ownership of compute node management and data collaboration management.',
      highlights: [
        'Delivered 107 implementation-complete items, including 53 compute-node items and 54 data-collaboration items',
        'Built Compute Node Management workflows across 61 scoped requirements, covering node connectivity, resource and container monitoring, data sources, preprocessing, permissions, and logs',
        'Built the workflow orchestration layer within Data Collaboration Management across 7 workflow modules and 30 completed workflow requirements',
        'Expanded Cypress and Playwright coverage across 20+ critical workflow, node, data-source, and permission paths, reducing manual regression testing time by 40%',
      ],
      stack: ['Frontend Architecture', 'Workflow Automation', 'GraphQL', 'Cypress', 'Playwright', 'Platform Delivery'],
    },
    {
      subtitle: 'Senior Frontend and Platform Architecture Ownership',
      title: 'Workflow Platform Refactor — Standardized Delivery Foundation',
      period: 'Lavita AI · Sep 2018 - Present',
      summary:
        'Led the refactor of 2 subsystem families within the broader 8-subsystem workflow platform, converting patterns from 107 feature requirements into a reusable foundation for customer-specific delivery.',
      highlights: [
        'Abstracted 10+ repeated product patterns into shared platform modules for RBAC, table and search flows, approval workflows, audit logs, monitoring dashboards, workflow tasks, and canvas interactions',
        'Standardized 6 reusable workflow templates across project management, task management, data-source selection, execution tracking, and result publishing',
        'Reduced duplicated implementation by 30% to 40%, conservatively saving 3 frontend engineer-years in annual delivery effort',
        'Raised frontend engineering standards for a 6-person frontend group within a 50-person delivery team through technical proposals, onboarding, and code reviews',
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
      title: 'AI and LLM Applications',
      items: ['Retrieval-Augmented Generation (RAG)', 'Hybrid Retrieval', 'Semantic Search', 'Keyword Search', 'Reranking', 'LLM Context Assembly', 'AI Output Validation', 'Retry Policies'],
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
