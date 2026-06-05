import type { Project } from './types';

export const interactiveWebExperience: Project = {
    slug: 'interactive-web-experience',
    number: '03',
    title: 'Project 3: Interactive Web Experience',
    shortTitle: 'Interactive Web Experience',
    summary:
      'Design and build a creative interactive web-based experience that uses motion, interaction, and visual design to communicate a mood, story, or concept.',
    overview:
      'This is not a traditional website with pages and navigation. Think of it as a digital artwork, ecard, playable SVG scene, responsive poem, or short interactive moment that blends design, motion, media, and user input.',
    considerations: [
      'Start with a clear creative concept, mood, message, or idea.',
      'Use motion as a primary design tool, not as decoration.',
      'Make interactions purposeful so users discover, reveal, trigger, remix, or navigate the experience.',
      'Use layout, scale, spacing, color, contrast, and pacing intentionally.',
      'If using audio or video, make it user-initiated and avoid autoplaying sound.',
    ],
    milestones: [
      {
        title: 'Concept',
        description: 'Define the mood, story, or idea and collect references for motion and interaction.',
      },
      {
        title: 'Prototype',
        description: 'Build a small proof of concept for the main motion and at least one interaction.',
      },
      {
        title: 'Compose',
        description: 'Refine the visual composition, timing, responsiveness, and interaction flow.',
      },
      {
        title: 'Document',
        description: 'Publish the project and write the README with concept, interactions, animation approach, and assets.',
      },
    ],
    requirements: [
      {
        title: 'Creative concept',
        items: ['Define a clear mood, message, or idea that drives the design decisions.'],
      },
      {
        title: 'Motion and animation',
        items: [
          'Make animation central to the experience.',
          'Use CSS transitions, keyframes, transforms, GSAP timelines, or a thoughtful combination.',
        ],
      },
      {
        title: 'Interaction',
        items: [
          'Include at least two distinct interactive behaviors that respond to user input.',
          'Interaction may include hover, click, drag, scroll, keyboard input, device motion, or pointer movement.',
        ],
      },
      {
        title: 'Responsive design',
        items: [
          'Adapt the experience across different screen sizes.',
          'It does not need to look identical everywhere, but it should feel intentional on mobile and desktop.',
        ],
      },
      {
        title: 'Code and documentation',
        items: [
          'Use clean, organized HTML, CSS, and JavaScript.',
          'Use readable structure, consistent naming, and comments where helpful.',
          'Include a README.md describing the concept, interactions, animation approach, and external assets.',
        ],
      },
    ],
    submission: [
      'Organize files in a dedicated folder with clear naming conventions.',
      'Include HTML, external CSS, and JavaScript files as needed.',
      'Host the project on GitHub Pages.',
      'Submit the GitHub repository link and public site URL.',
    ],
    grading: [
      'Concept and creative clarity.',
      'Motion design quality, including purpose, pacing, and polish.',
      'Meaningful interaction design that invites exploration.',
      'Technical execution with HTML, CSS, JavaScript, and optional GSAP.',
      'Visual cohesion across design elements.',
      'Performance and accessibility awareness.',
    ],
    rubric: [
      {
        category: 'Concept',
        strong: 'The experience communicates a clear mood, message, or idea through design decisions.',
        meets: 'A concept is present and mostly understandable.',
        needsWork: 'The experience feels like disconnected effects without a clear idea.',
      },
      {
        category: 'Motion',
        strong: 'Animation has purpose, pacing, rhythm, and supports the concept.',
        meets: 'Motion is central to the experience and mostly supports the idea.',
        needsWork: 'Motion is missing, random, distracting, or only decorative.',
      },
      {
        category: 'Interaction',
        strong: 'Interactions feel intentional and invite discovery or participation.',
        meets: 'At least two interactions are present and understandable.',
        needsWork: 'Interactions are missing, confusing, or do not respond reliably.',
      },
      {
        category: 'Technical execution',
        strong: 'HTML, CSS, JavaScript, and optional GSAP are organized, readable, and stable.',
        meets: 'The experience works with some rough edges in code or behavior.',
        needsWork: 'Code or behavior is fragile, incomplete, or difficult to follow.',
      },
      {
        category: 'Cohesion and accessibility',
        strong: 'Visual choices, performance, and accessibility awareness support a polished experience.',
        meets: 'The experience is cohesive with some usability or polish gaps.',
        needsWork: 'The experience has major visual, performance, or accessibility issues.',
      },
    ],
    models: [
      {
        title: 'Strong Example',
        label: 'Interactive animated scene',
        description:
          'A focused web experience where motion, interaction, and visual design all support one clear idea.',
        structure: [
          'single immersive scene with a clear title',
          'click interaction that changes the scene state',
          'hover or pointer movement that reveals secondary detail',
          'motion using transform and opacity',
          'reduced-motion handling for animation-heavy behavior',
        ],
        notes: [
          'The interaction reveals meaning instead of acting like decoration.',
          'Animation timing feels intentional and supports the mood.',
          'The project is small enough to be polished.',
        ],
      },
      {
        title: 'Meets Expectations',
        label: 'Animated ecard or poem',
        description:
          'A working interactive piece with a clear concept, though the motion and responsiveness need more polish.',
        structure: [
          'introductory message or prompt',
          'two user-triggered interactions',
          'CSS keyframes or transitions',
          'JavaScript class toggles',
          'basic mobile adjustments',
        ],
        notes: [
          'The concept is understandable and the interactions work.',
          'The piece would improve with better pacing and fewer competing effects.',
          'The responsive state should be tested beyond one screen size.',
        ],
      },
      {
        title: 'Needs Work',
        label: 'Random effects board',
        description:
          'A collection of animations and buttons that lacks a clear concept or stable interaction model.',
        structure: [
          'multiple unrelated animations',
          'buttons with unclear labels',
          'effects that trigger unexpectedly',
          'no reduced-motion consideration',
          'layout that overlaps at small sizes',
        ],
        notes: [
          'The project needs one central idea before adding more effects.',
          'Interaction should be predictable and explainable.',
          'Motion should support a user experience goal.',
        ],
      },
    ],
    starterKit: {
      description:
        'An interactive experience starter with HTML, CSS, JavaScript, motion hooks, and reduced-motion guardrails.',
      files: [
        { label: 'index.html', href: '/starters/project-3/index.html' },
        { label: 'styles.css', href: '/starters/project-3/styles.css' },
        { label: 'script.js', href: '/starters/project-3/script.js' },
      ],
    },
    supportingLessons: [
      { title: 'CSS Transitions', href: '/lessons/css-transitions/' },
      { title: 'CSS Animation', href: '/lessons/css-animation/' },
      { title: 'GSAP Web Animation', href: '/lessons/gsap-web-animation/' },
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'Transforms, Filters, and Transitions', href: '/lessons/transforms-filters-and-transitions/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  };
