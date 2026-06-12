export type CourseModule = {
  beforeYouLeave: string[];
  fixes: Array<{
    title: string;
    href: string;
  }>;
  focus: string[];
  inClass: string[];
  lessons: Array<{
    title: string;
    href: string;
  }>;
  meetingRange: string;
  number: string;
  projectCheckpoint: {
    title: string;
    href: string;
    tasks: string[];
  };
  summary: string;
  title: string;
};

export const courseModules: CourseModule[] = [
  {
    number: '01',
    meetingRange: 'Classes 1-3',
    title: 'Setup, Process, Files, and HTML Foundations',
    summary:
      'Get the toolchain working, understand the project workflow, and build a first semantic HTML page that can be published.',
    focus: [
      'GitHub, GitHub Desktop, VS Code, and GitHub Pages',
      'Website process, project folders, and relative paths',
      'HTML document structure and core content elements',
    ],
    lessons: [
      { title: 'Developer Environment Setup', href: '/lessons/developer-environment-setup/' },
      { title: 'Website Process', href: '/lessons/website-process/' },
      { title: 'File Paths', href: '/lessons/file-paths-and-site-structure/' },
      { title: 'HTML Structure and Elements', href: '/lessons/basic-html-structure-and-elements/' },
    ],
    projectCheckpoint: {
      title: 'Project 1: Basic Webpage',
      href: '/projects/basic-webpage/',
      tasks: [
        'Create the project folder and starter files.',
        'Build a clear page topic with headings, paragraphs, lists, links, and an image.',
        'Publish the page and confirm the live URL works.',
      ],
    },
    inClass: [
      'Publish a small repository with GitHub Pages.',
      'Break and fix one image path together.',
      'Review the difference between local files, GitHub files, and the live site.',
    ],
    beforeYouLeave: [
      'GitHub Desktop shows no uncommitted setup changes.',
      'The live site URL opens in the browser.',
      'One HTML page links to CSS or an image with the correct relative path.',
    ],
    fixes: [
      { title: 'CSS is not loading', href: '/debugging/#css-not-loading' },
      { title: 'Image is not showing', href: '/debugging/#image-not-showing' },
      { title: 'GitHub Pages is not updating', href: '/debugging/#github-pages-not-updating' },
    ],
  },
  {
    number: '02',
    meetingRange: 'Classes 4-5',
    title: 'CSS, Text, Fonts, and the Box Model',
    summary:
      'Move from raw HTML to intentional visual presentation with selectors, typography, spacing, and box-model reasoning.',
    focus: [
      'External stylesheets and selector strategy',
      'Text styling, font stacks, and font loading',
      'Content, padding, border, margin, and box sizing',
    ],
    lessons: [
      { title: 'CSS Basics', href: '/lessons/intro-to-css/' },
      { title: 'CSS Text Styling', href: '/lessons/styling-text-with-css/' },
      { title: 'CSS Fonts', href: '/lessons/css-working-with-fonts/' },
      { title: 'Box Model and Layout', href: '/lessons/box-model-and-layout/' },
    ],
    projectCheckpoint: {
      title: 'Project 1: Basic Webpage',
      href: '/projects/basic-webpage/',
      tasks: [
        'Add an external stylesheet.',
        'Improve readability with typography, spacing, color, and layout constraints.',
        'Check that styling supports the content instead of fighting it.',
      ],
    },
    inClass: [
      'Use the selector playground to compare broad and reusable selectors.',
      'Inspect one page section and identify content, padding, border, and margin.',
      'Make one text system decision and apply it consistently.',
    ],
    beforeYouLeave: [
      'CSS is linked from the head and loads in the browser.',
      'The page has readable line length and spacing.',
      'The project uses classes for reusable styling.',
    ],
    fixes: [
      { title: 'CSS is not loading', href: '/debugging/#css-not-loading' },
      { title: 'Mobile layout is overflowing', href: '/debugging/#mobile-layout-overflowing' },
    ],
  },
  {
    number: '03',
    meetingRange: 'Classes 6-8',
    title: 'Layout, Flexbox, Grid, and Responsive Design',
    summary:
      'Build layouts that adapt across screen sizes using flexible containers, wrapping, grid tracks, media queries, and responsive testing.',
    focus: [
      'Flexbox for one-dimensional alignment',
      'Grid for page regions, card grids, and two-dimensional layout',
      'Responsive testing, breakpoints, and image optimization',
    ],
    lessons: [
      { title: 'Flexbox', href: '/lessons/flexbox/' },
      { title: 'CSS Grid', href: '/lessons/css-grid/' },
      { title: 'Responsive Web Design', href: '/lessons/responsive-web-design/' },
      { title: 'Image Optimization', href: '/lessons/image-optimization/' },
    ],
    projectCheckpoint: {
      title: 'Project 2: Responsive Landing Page',
      href: '/projects/responsive-landing-page/',
      tasks: [
        'Define the landing page goal, audience, and call to action.',
        'Build mobile, tablet, and desktop layout states.',
        'Test for overflow, image scaling, and readable spacing.',
      ],
    },
    inClass: [
      'Use the Flexbox playground to explain main axis and cross axis.',
      'Build a small card grid and inspect it with DevTools.',
      'Find the first viewport width where a layout breaks.',
    ],
    beforeYouLeave: [
      'The page has no sideways scrolling on mobile.',
      'Images scale within their containers.',
      'The layout changes intentionally across at least two breakpoints.',
    ],
    fixes: [
      { title: 'Mobile layout is overflowing', href: '/debugging/#mobile-layout-overflowing' },
      { title: 'Image is not showing', href: '/debugging/#image-not-showing' },
    ],
  },
  {
    number: '04',
    meetingRange: 'Classes 9-10',
    title: 'Forms, Navigation, and Accessibility',
    summary:
      'Design interactive page structure that works for mouse, keyboard, and assistive technology users.',
    focus: [
      'Accessible labels, input types, and form structure',
      'Navigation patterns and current-page state',
      'Keyboard testing, contrast, semantics, and POUR',
    ],
    lessons: [
      { title: 'HTML Forms', href: '/lessons/html-forms-building-interactive-user-interfaces/' },
      { title: 'Site Navigation', href: '/lessons/building-effective-site-navigation/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
    projectCheckpoint: {
      title: 'Project 2: Responsive Landing Page',
      href: '/projects/responsive-landing-page/',
      tasks: [
        'Build the contact or signup form with connected labels.',
        'Test navigation and form controls with the keyboard.',
        'Check contrast, focus visibility, and field clarity.',
      ],
    },
    inClass: [
      'Tab through a form before styling it.',
      'Compare visual labels with programmatically connected labels.',
      'Review current-page navigation state and visible focus.',
    ],
    beforeYouLeave: [
      'Every form field has a visible connected label.',
      'Interactive elements can be reached with Tab.',
      'Focus states are visible and contrast is checked.',
    ],
    fixes: [
      { title: 'Form is hard to use', href: '/debugging/#form-accessibility' },
      { title: 'Focus or keyboard behavior is broken', href: '/debugging/#focus-or-keyboard-broken' },
    ],
  },
  {
    number: '05',
    meetingRange: 'Classes 11-12',
    title: 'JavaScript, DevTools, and Debugging',
    summary:
      'Add behavior with JavaScript, then use browser tools and a repeatable debugging process to keep projects moving.',
    focus: [
      'DOM selection, event listeners, and class toggles',
      'Console, Elements, responsive mode, and Network panels',
      'Describe, inspect, fix, and test as a debugging routine',
    ],
    lessons: [
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'DevTools for Designers', href: '/lessons/devtools-for-designers/' },
      { title: 'Debugging Web Projects', href: '/lessons/debugging-web-projects/' },
    ],
    projectCheckpoint: {
      title: 'Project 3: Interactive Web Experience',
      href: '/projects/interactive-web-experience/',
      tasks: [
        'Define the concept, mood, or interaction goal.',
        'Prototype one click, hover, pointer, or keyboard interaction.',
        'Use JavaScript to toggle state instead of hardcoding multiple page versions.',
      ],
    },
    inClass: [
      'Write one button that toggles a class on a visible element.',
      'Use console.log to confirm an event listener fires.',
      'Debug a selector mismatch together.',
    ],
    beforeYouLeave: [
      'The script file loads without console errors.',
      'The interaction has a clear user trigger.',
      'The JavaScript selector matches the HTML element.',
    ],
    fixes: [
      { title: 'JavaScript is not running', href: '/debugging/#javascript-not-running' },
      { title: 'Focus or keyboard behavior is broken', href: '/debugging/#focus-or-keyboard-broken' },
    ],
  },
  {
    number: '06',
    meetingRange: 'Classes 13-15',
    title: 'Position, Transforms, Motion, Animation, and GSAP',
    summary:
      'Use positioning and motion as design tools with transforms, transitions, keyframes, and optional sequenced animation.',
    focus: [
      'Positioning and layered interface elements',
      'Transform and opacity-based motion',
      'Transitions, keyframes, reduced motion, and GSAP timelines',
    ],
    lessons: [
      { title: 'Hero Sections', href: '/lessons/crafting-captivating-hero-sections/' },
      { title: 'CSS Positioning', href: '/lessons/css-positioning/' },
      { title: 'CSS Transforms and Filters', href: '/lessons/transforms-filters-and-transitions/' },
      { title: 'CSS Transitions', href: '/lessons/css-transitions/' },
      { title: 'CSS Animation', href: '/lessons/css-animation/' },
      { title: 'GSAP Web Animation', href: '/lessons/gsap-web-animation/' },
    ],
    projectCheckpoint: {
      title: 'Project 3: Interactive Web Experience',
      href: '/projects/interactive-web-experience/',
      tasks: [
        'Make motion central to the concept.',
        'Include at least two meaningful interactive behaviors.',
        'Add reduced-motion handling for animation-heavy work.',
      ],
    },
    inClass: [
      'Compare transition timing choices on the same element.',
      'Build one keyframe animation and explain each animation setting.',
      'Sequence a small group of elements with a timeline.',
    ],
    beforeYouLeave: [
      'Motion supports the concept instead of feeling random.',
      'Animations use transform and opacity where possible.',
      'Reduced-motion users are considered.',
    ],
    fixes: [
      { title: 'JavaScript is not running', href: '/debugging/#javascript-not-running' },
      { title: 'Focus or keyboard behavior is broken', href: '/debugging/#focus-or-keyboard-broken' },
    ],
  },
  {
    number: '07',
    meetingRange: 'Classes 16-18',
    title: 'Page Types, Listings, Details, and Carousels',
    summary:
      'Organize content into reusable page types, listing/detail patterns, and interactive portfolio components.',
    focus: [
      'Page types and template consistency',
      'Item listing and detail page patterns',
      'Carousel behavior, controls, status, and accessibility',
    ],
    lessons: [
      { title: 'Page Types and Templates', href: '/lessons/page-types-templates-and-navigation/' },
      { title: 'Item Listing and Details', href: '/lessons/item-listing-and-details/' },
      { title: 'Carousels', href: '/lessons/mastering-carousels/' },
    ],
    projectCheckpoint: {
      title: 'Project 4: Interactive Portfolio',
      href: '/projects/interactive-portfolio/',
      tasks: [
        'Plan the portfolio site map and reusable page structure.',
        'Create project listing and detail patterns.',
        'Choose one interaction that helps visitors explore the work.',
      ],
    },
    inClass: [
      'Map portfolio pages before writing final markup.',
      'Compare a project card with a project detail page.',
      'Use the carousel lab to inspect controls, dots, status, keyboard, and autoplay.',
    ],
    beforeYouLeave: [
      'The portfolio is multi-page, not a single long page.',
      'Project cards explain what each project is.',
      'Any carousel or interaction has visible controls and keyboard support.',
    ],
    fixes: [
      { title: 'Carousel is not working', href: '/debugging/#carousel-not-working' },
      { title: 'JavaScript is not running', href: '/debugging/#javascript-not-running' },
      { title: 'Mobile layout is overflowing', href: '/debugging/#mobile-layout-overflowing' },
    ],
  },
  {
    number: '08',
    meetingRange: 'Classes 19-20',
    title: 'Project Planning, Design Systems, SEO, and Reusable Patterns',
    summary:
      'Turn a portfolio idea into a manageable system with content strategy, reusable components, consistent styles, and basic metadata.',
    focus: [
      'Audience, goals, sitemap, and content inventory',
      'Reusable color, spacing, type, button, card, and form patterns',
      'Page titles, descriptions, Open Graph, and findability basics',
    ],
    lessons: [
      { title: 'Project Planning', href: '/lessons/project-planning-and-content-strategy/' },
      { title: 'Design Systems', href: '/lessons/design-systems-and-reusable-components/' },
      { title: 'SEO and Metadata', href: '/lessons/seo-and-metadata-basics/' },
    ],
    projectCheckpoint: {
      title: 'Project 4: Interactive Portfolio',
      href: '/projects/interactive-portfolio/',
      tasks: [
        'Write the portfolio goal, audience, and page list.',
        'Create a small style system before polishing every page.',
        'Add titles and descriptions that make each page understandable.',
      ],
    },
    inClass: [
      'Review a project sitemap before students continue building.',
      'Turn repeated one-off button and card styles into reusable classes.',
      'Write one stronger page title and meta description together.',
    ],
    beforeYouLeave: [
      'The portfolio has a clear page plan.',
      'Repeated UI pieces share reusable styles.',
      'Important pages have useful titles and descriptions.',
    ],
    fixes: [
      { title: 'Mobile layout is overflowing', href: '/debugging/#mobile-layout-overflowing' },
      { title: 'CSS is not loading', href: '/debugging/#css-not-loading' },
    ],
  },
  {
    number: '09',
    meetingRange: 'Classes 21-22',
    title: 'Launch QA, Performance, and UI Feedback',
    summary:
      'Run final checks against the live site, improve performance, and make interactive states clear before submission.',
    focus: [
      'Live URL testing and launch QA',
      'Performance checks for images, fonts, scripts, and layout stability',
      'Hover, focus, loading, empty, error, success, and disabled states',
    ],
    lessons: [
      { title: 'Deployment and Launch QA', href: '/lessons/deployment-and-launch-qa/' },
      { title: 'Web Performance Basics', href: '/lessons/web-performance-basics/' },
      { title: 'UI States and Feedback', href: '/lessons/ui-states-and-feedback/' },
    ],
    projectCheckpoint: {
      title: 'Project 4: Interactive Portfolio',
      href: '/projects/interactive-portfolio/',
      tasks: [
        'Review every page on mobile and desktop.',
        'Check links, images, forms, keyboard access, and loading behavior.',
        'Fix the most visible issues before adding anything new.',
      ],
    },
    inClass: [
      'Open the live URL and test it separately from the local version.',
      'Sort assets by size in DevTools Network.',
      'Audit one button, input, or card for missing states.',
    ],
    beforeYouLeave: [
      'The live URL matches the local version.',
      'No major mobile overflow or broken navigation remains.',
      'Interactive elements communicate state clearly.',
    ],
    fixes: [
      { title: 'GitHub Pages is not updating', href: '/debugging/#github-pages-not-updating' },
      { title: 'Focus or keyboard behavior is broken', href: '/debugging/#focus-or-keyboard-broken' },
      { title: 'Form is hard to use', href: '/debugging/#form-accessibility' },
    ],
  },
  {
    number: '10',
    meetingRange: 'Class 23',
    title: 'Portfolio Polish and Presentation',
    summary:
      'Finish the portfolio with critique, final polish, working links, and a clear explanation of the project decisions.',
    focus: [
      'Portfolio clarity, hierarchy, consistency, and presentation',
      'Final accessibility, responsiveness, and performance checks',
      'Explaining the project goal, audience, process, and result',
    ],
    lessons: [
      { title: 'Portfolio Polish and Presentation', href: '/lessons/portfolio-polish-and-presentation/' },
    ],
    projectCheckpoint: {
      title: 'Project 4: Interactive Portfolio',
      href: '/projects/interactive-portfolio/',
      tasks: [
        'Submit the repository link and public site URL.',
        'Prepare a short explanation of the portfolio and strongest project.',
        'Use critique notes for final revisions.',
      ],
    },
    inClass: [
      'Run a final peer review with one content check, one responsive check, and one accessibility check.',
      'Make the smallest high-value fixes first.',
      'Practice explaining project decisions clearly.',
    ],
    beforeYouLeave: [
      'The repository and public site URL are ready to submit.',
      'The strongest work is easy to find.',
      'The student can explain what changed and why.',
    ],
    fixes: [
      { title: 'GitHub Pages is not updating', href: '/debugging/#github-pages-not-updating' },
      { title: 'Mobile layout is overflowing', href: '/debugging/#mobile-layout-overflowing' },
      { title: 'Image is not showing', href: '/debugging/#image-not-showing' },
    ],
  },
];
