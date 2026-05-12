# Personal Site Design Spec

## Overview

This spec defines a new experimental personal website for Haiyang Zhang. The existing resume project is treated as a content source only and will not be modified as part of the website work. The site will be built as a separate GitHub Pages project.

The goal is to create a visually distinctive, future-tech, interactive one-page site that balances strong first impressions with clear hiring-oriented communication. The site should feel like a polished front-end engineering showcase rather than a generic portfolio template.

## Goals

- Create a memorable first impression with a high-end experimental front-end presentation
- Preserve professional clarity so recruiters or hiring managers can still quickly understand experience and strengths
- Reuse the current resume content as the primary source of truth for messaging
- Keep deployment simple and reliable on GitHub Pages
- Make the visual language feel custom, not template-derived

## Non-Goals

- Rebuilding or modifying the current resume repository
- Creating a multi-page CMS, blog platform, or full personal brand system
- Adding project case studies beyond what is already represented in the resume
- Building a heavy 3D-first experience that sacrifices readability or performance

## Audience

Primary audience:

- Recruiters
- Hiring managers
- Senior engineers or engineering leaders reviewing front-end capability

Secondary audience:

- Peers or collaborators interested in front-end craft and presentation

## Product Direction

The site should optimize for both personal branding and hiring conversion:

- The first portion of the experience should feel bold, polished, and technically impressive
- The later sections should translate that attention into credibility through experience, technical depth, and contact pathways

This is a resume-enhanced personal site, not a broad content platform.

## Experience Principles

The site should follow these principles:

1. Environment feels alive
2. Content stays readable and stable
3. Interaction feels precise rather than noisy
4. Visual ambition should support the story, not compete with it
5. Mobile experience should preserve tone without forcing full desktop effects

## Information Architecture

The site will be a single-page narrative experience with five sections.

### 1. Hero

Purpose:

- Establish a strong first impression
- Communicate name, seniority, and front-end identity immediately

Content:

- Name
- Role line such as Senior Frontend Engineer
- Short positioning statement
- Primary calls to action for resume and contact

Presentation:

- Full-screen layout
- Future-tech animated background
- Strong typography hierarchy
- Cinematic entrance animation

### 2. Identity Strip

Purpose:

- Deliver rapid signal density after the hero

Content examples:

- 8 Years
- Senior Frontend Engineer
- Enterprise Systems
- Healthcare + FHIR
- React / Vue / React Native

Presentation:

- Compact, high-contrast metric or signal band
- Feels like a system status panel rather than a standard bio section

### 3. Experience Chapters

Purpose:

- Turn resume experience into a stronger narrative arc

Content source:

- Novo Vivo experience grouped into three major chapters:
  - Distributed Privacy Computing Data Service Platform
  - Standardized Privacy Computing Platform
  - Lavita Health App

Presentation:

- Three high-impact chapter cards or narrative panels
- Each chapter should highlight:
  - System domain
  - Complexity handled
  - Responsibilities owned
  - Outcomes or measurable improvements
  - Select technical keywords

This section should avoid looking like a plain chronological resume.

### 4. Skills Constellation

Purpose:

- Show depth and structure in technical capability

Content grouping:

- Frontend Systems
- Performance and Architecture
- Healthcare and Data Integration
- Cross-Platform and Product Engineering

Presentation:

- Structured skill map or grouped system view
- Avoid simple tag cloud styling

### 5. Contact and Resume Exit

Purpose:

- End the experience with clear conversion actions

Content:

- LinkedIn
- Email
- Resume download

Presentation:

- Clean and restrained closing block
- Product-style CTA framing

## Visual Direction

The visual style should be future-tech, high-contrast, and precise.

Keywords:

- Future-tech
- High-contrast
- Calm but powerful
- Premium engineering aesthetic

The site should not drift into low-end cyberpunk styling. It should feel modern, sharp, and intentional.

## Color System

Suggested palette:

- Background: deep black-blue such as `#050816`
- Primary text: cool near-white such as `#EAF2FF`
- Accent: electric cyan such as `#5BE7FF` or `#3BCBFF`
- Secondary accent: limited blue-violet such as `#7A5CFF`

Rules:

- Cyan should be the dominant highlight color
- Violet should only be used sparingly
- Contrast must remain high for readability

## Typography

Typography should carry a significant amount of the visual identity.

Guidelines:

- Use a more distinctive display face for headlines
- Use a highly readable modern face for body text
- Create clear scale contrast between hero, section titles, and supporting text
- Avoid a default SaaS-style typographic feel

## Visual Elements

The visual system should primarily use these elements:

- Fine grid background
- Soft radial glow fields
- Glass-like information cards
- Thin borders with controlled light accents
- Subtle particle motion
- Layered depth and blur

These should be used consistently rather than adding many unrelated effects.

## Motion Language

Motion should feel deliberate and engineered.

Animation layers:

### Ambient Layer

- Background motion
- Particle drift
- Grid or glow breathing

### Scroll Layer

- Section reveal
- Staggered headings
- Depth-based transitions

### Interaction Layer

- Hover glow
- Light tilt or perspective response
- Pointer-reactive background movement

Rules:

- Keep text readable while effects are active
- Avoid excessive motion competing with content
- Preserve a lighter version on mobile

## 3D and WebGL Strategy

3D should be used selectively.

Recommended boundary:

- Use 3D or WebGL only in the hero background, plus at most one additional transition moment
- Do not build the entire site around full-scene 3D rendering

This preserves performance, keeps implementation focused, and prevents the content from being overshadowed.

## Technical Architecture

The website should be built as a separate repository, for example `haiyang-portfolio`.

Recommended stack:

- Vite
- React
- Motion
- GSAP
- CSS Modules with custom CSS variables
- Optional React Three Fiber

## Library Responsibilities

### Vite

- Project scaffold
- Fast local development
- Static build output for GitHub Pages

### React

- Section composition
- Reusable UI architecture

### Motion

- Primary animation system
- Enter transitions
- Scroll reveal
- Hover interactions

### GSAP

- Limited use for complex hero sequencing or timeline choreography

### React Three Fiber

- Optional hero-only immersive background scene
- Removable if performance or implementation cost is too high

### CSS Modules and CSS Variables

- Custom visual language
- Fine control over layers, tokens, and effect surfaces

## Why Not a Full Template

The site should not start from a generic portfolio template because:

- Template structure often weakens uniqueness
- Many templates overfit to designer or creator portfolios rather than senior engineering storytelling
- The site itself should demonstrate front-end taste and implementation judgment

Borrowing isolated ideas is acceptable, but the final structure and styling should be original.

## Suggested Project Structure

```text
src/
  app/
  components/
  sections/
  styles/
  assets/
public/
```

Guidance:

- `sections` contains major page blocks such as Hero and Experience
- `components` contains reusable UI primitives
- `styles` contains tokens, animation primitives, and global visual rules

## Deployment Strategy

Deployment should use GitHub Pages with GitHub Actions.

Two valid target types:

1. Project pages:
   - URL pattern: `https://<username>.github.io/<repo>/`
   - Vite `base` should be set to `/<repo>/`

2. User or custom domain pages:
   - URL pattern: `https://<username>.github.io/` or custom domain
   - Vite `base` should be `/`

Recommendation:

- Start with a dedicated project repository for easier iteration and isolation

## Responsive Strategy

Desktop:

- Full visual treatment
- Richer ambient motion
- More layered depth effects

Mobile:

- Preserve visual tone
- Reduce 3D intensity and hover dependence
- Simplify heavy motion paths
- Keep sections readable and fast

## Accessibility and Performance

Requirements:

- Maintain strong text contrast
- Support reduced motion gracefully where practical
- Avoid long blocking animation sequences before content is visible
- Keep hero effects lightweight enough for smooth interaction on common devices

## Content Mapping From Current Resume

Resume content should be adapted rather than pasted directly.

Key source material:

- Professional summary
- Core skills
- Novo Vivo chapter experiences
- Education
- LinkedIn and email

The website copy should be tightened for presentation, but it must remain faithful to the resume.

## Risks and Mitigations

### Risk: Effects overpower the story

Mitigation:

- Limit intensive effects to the hero and ambient layers
- Keep experience content in stable, high-contrast panels

### Risk: GitHub Pages path issues

Mitigation:

- Set Vite `base` correctly from the beginning
- Test the production build using the actual repository path assumption

### Risk: Mobile performance degradation

Mitigation:

- Make WebGL optional
- Provide responsive motion fallbacks
- Treat decorative effects as removable layers

### Risk: Visual style feels derivative

Mitigation:

- Build from a clean starter
- Use custom typography, spacing, and motion rhythm instead of relying on a template

## Implementation Sequence

Recommended order:

1. Create the new repository and base Vite app
2. Configure GitHub Pages deployment
3. Build the global visual system and hero section
4. Build Identity Strip and Experience Chapters
5. Build Skills Constellation and Contact section
6. Refine responsive behavior
7. Tune motion, performance, and polish

## Open Decisions Resolved

The following decisions are locked for this spec:

- Build a new site instead of modifying the existing resume repository
- Use a single-page narrative structure
- Optimize for both personal branding and hiring conversion
- Keep scope to a resume-enhanced site, not a full brand platform
- Use a future-tech visual direction
- Prefer custom implementation over a full prebuilt template
- Keep 3D selective rather than site-wide

## Notes

- This spec is written in the current resume workspace only as documentation convenience
- The actual implementation should happen in a separate GitHub Pages repository
- This workspace is not currently a git repository, so the spec cannot be committed from here
