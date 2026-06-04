export const lessons = [
  {
    slug: 'start-here',
    number: '00',
    title: 'Start Here',
    eyebrow: 'Course Orientation',
    summary:
      'How this course works, what you will build, and how to think like a designer who codes.',
    goals: [
      'Understand the shape of the course',
      'Set expectations for weekly practice',
      'Connect web foundations to design decisions',
    ],
  },
  {
    slug: 'html-foundations',
    number: '01',
    title: 'HTML Foundations',
    eyebrow: 'Structure',
    summary:
      'Use semantic HTML to give content structure, meaning, and a stronger accessibility baseline.',
    goals: [
      'Write useful document structure',
      'Choose semantic elements with intent',
      'Create links, lists, headings, and media that make sense',
    ],
  },
  {
    slug: 'css-foundations',
    number: '02',
    title: 'CSS Foundations',
    eyebrow: 'Presentation',
    summary:
      'Learn selectors, the cascade, inheritance, custom properties, and the decisions behind visual styling.',
    goals: [
      'Understand how the cascade resolves conflicts',
      'Use custom properties as small design tokens',
      'Style readable, durable interfaces',
    ],
  },
  {
    slug: 'layout',
    number: '03',
    title: 'Layout',
    eyebrow: 'Composition',
    summary:
      'Build layouts with the box model, spacing systems, flexbox, grid, and responsive constraints.',
    goals: [
      'Explain box model behavior',
      'Use flexbox and grid for different layout problems',
      'Create layouts that adapt without falling apart',
    ],
  },
  {
    slug: 'responsive-design',
    number: '04',
    title: 'Responsive Design',
    eyebrow: 'Adaptation',
    summary:
      'Design and build pages that respond to content, viewport, input modes, and user preferences.',
    goals: [
      'Use fluid sizing and media queries carefully',
      'Design mobile and desktop experiences from the same system',
      'Respect user preferences like reduced motion and color scheme',
    ],
  },
  {
    slug: 'accessibility',
    number: '05',
    title: 'Accessibility',
    eyebrow: 'Inclusion',
    summary:
      'Create web experiences that work with keyboards, screen readers, visible focus, and clear semantics.',
    goals: [
      'Build keyboard-accessible interactions',
      'Use landmarks, labels, and alt text well',
      'Audit pages for common accessibility issues',
    ],
  },
  {
    slug: 'javascript',
    number: '06',
    title: 'JavaScript',
    eyebrow: 'Behavior',
    summary:
      'Add progressive behavior without breaking the HTML and CSS foundation underneath it.',
    goals: [
      'Read and write basic JavaScript',
      'Respond to user events',
      'Enhance interfaces while keeping the baseline usable',
    ],
  },
  {
    slug: 'ux-systems-thinking',
    number: '07',
    title: 'UX and Systems Thinking',
    eyebrow: 'Practice',
    summary:
      'Connect frontend decisions to user needs, reusable patterns, accessibility, and product quality.',
    goals: [
      'Evaluate interface decisions through user goals',
      'Recognize reusable patterns',
      'Think about components, tokens, and documentation as systems',
    ],
  },
  {
    slug: 'projects',
    number: '08',
    title: 'Projects',
    eyebrow: 'Application',
    summary:
      'Put the foundations together through portfolio-ready assignments and reflection prompts.',
    goals: [
      'Plan and build a responsive page',
      'Explain design and technical decisions',
      'Prepare work for critique and iteration',
    ],
  },
];

export type Lesson = (typeof lessons)[number];
