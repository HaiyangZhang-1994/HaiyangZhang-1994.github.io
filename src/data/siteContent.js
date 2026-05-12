const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const siteContent = {
  hero: {
    name: 'Haiyang Zhang',
    role: 'Senior Frontend Engineer',
    tagline: 'Crafting complex systems into elegant, high-performance product experiences.',
    blurb:
      'Frontend engineer with 8 years of experience across enterprise workflow platforms, healthcare apps, and performance-driven product systems.',
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
    'Enterprise Systems',
    'Healthcare + FHIR',
    'React / Vue / RN',
    'Web3',
    'Blockchain',
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
    resumeHref: publicAsset('resume.pdf'),
  },
};
