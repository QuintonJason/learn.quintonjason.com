export type CourseModule = {
  number: string;
  title: string;
  summary: string;
  focus: string[];
  lessons: Array<{
    title: string;
    href: string;
  }>;
  projectCheckpoint: {
    title: string;
    href: string;
    tasks: string[];
  };
  inClass: string[];
  beforeYouLeave: string[];
  fixes: Array<{
    title: string;
    href: string;
  }>;
};

export const courseModules: CourseModule[] = [
  {
    number: '01',
    title: 'Setup, Files, and HTML Foundations',
    summary:
      'Get the development environment working, understand site folders, and build the first semantic HTML page.',
    focus: [
      'GitHub, GitHub Desktop, VS Code, and GitHub Pages',
      'Project folders and relative file paths',
      'HTML document structure and core elements',
    ],
    lessons: [
      { title: 'Developer Environment Setup', href: '/lessons/developer-environment-setup/' },
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
      'Create a small repository and publish it with GitHub Pages.',
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
    title: 'Layout, Flexbox, and Responsive Design',
    summary:
      'Build layouts that adapt across screen sizes using flexible containers, wrapping, media queries, and responsive testing.',
    focus: [
      'Flex containers and flex items',
      'Main axis, cross axis, wrapping, and gap',
      'Responsive testing and layout breakpoints',
    ],
    lessons: [
      { title: 'Flexbox', href: '/lessons/flexbox/' },
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
      'Find the first viewport width where a layout breaks.',
      'Refactor one fixed-width layout into a flexible layout.',
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
    title: 'JavaScript and DOM Interaction',
    summary:
      'Add behavior with JavaScript by selecting elements, listening for events, and changing classes, content, or attributes.',
    focus: [
      'DOM selection and event listeners',
      'classList, attributes, and dynamic content',
      'Debugging JavaScript with the Console',
    ],
    lessons: [
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'Page Types and Templates', href: '/lessons/page-types-templates-and-navigation/' },
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
    title: 'Motion, Transitions, Animation, and GSAP',
    summary:
      'Use motion as a design tool with transitions, keyframes, transforms, and sequenced animation.',
    focus: [
      'Transitions and transform-based motion',
      'Keyframes, animation settings, and reduced motion',
      'GSAP timelines for sequenced motion',
    ],
    lessons: [
      { title: 'CSS Transitions', href: '/lessons/css-transitions/' },
      { title: 'CSS Animation', href: '/lessons/css-animation/' },
      { title: 'GSAP Web Animation', href: '/lessons/gsap-web-animation/' },
      { title: 'CSS Transforms', href: '/lessons/transforms-filters-and-transitions/' },
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
    title: 'Listings, Details, Carousels, and Portfolio Structure',
    summary:
      'Organize project content into reusable page types, listing/detail patterns, and interactive portfolio components.',
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
    title: 'Final Portfolio Polish, Testing, and Submission',
    summary:
      'Refine the final portfolio experience, test accessibility and responsiveness, debug deployment, and prepare submission links.',
    focus: [
      'Responsive polish and visual consistency',
      'Manual accessibility testing',
      'GitHub Pages verification and final submission quality',
    ],
    lessons: [
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
      { title: 'Image Optimization', href: '/lessons/image-optimization/' },
      { title: 'Developer Environment Setup', href: '/lessons/developer-environment-setup/' },
    ],
    projectCheckpoint: {
      title: 'Project 4: Interactive Portfolio',
      href: '/projects/interactive-portfolio/',
      tasks: [
        'Review every page on mobile and desktop.',
        'Test links, forms, images, keyboard access, and live deployment.',
        'Commit, push, and confirm the public site URL shows the final work.',
      ],
    },
    inClass: [
      'Run a peer review with one content check, one responsive check, and one accessibility check.',
      'Use the common fixes page to debug final blockers.',
      'Open the live URL, not only the local file.',
    ],
    beforeYouLeave: [
      'The final live URL matches the local version.',
      'No major mobile overflow or broken navigation remains.',
      'The repository and public site URL are ready to submit.',
    ],
    fixes: [
      { title: 'GitHub Pages is not updating', href: '/debugging/#github-pages-not-updating' },
      { title: 'Focus or keyboard behavior is broken', href: '/debugging/#focus-or-keyboard-broken' },
      { title: 'Form is hard to use', href: '/debugging/#form-accessibility' },
    ],
  },
];
