export type DebugFix = {
  slug: string;
  title: string;
  symptom: string;
  likelyCauses: string[];
  checks: string[];
  fix: string[];
  relatedLessons: Array<{
    title: string;
    href: string;
  }>;
  relatedProjects?: Array<{
    title: string;
    href: string;
  }>;
};

export const debuggingFixes: DebugFix[] = [
  {
    slug: 'css-not-loading',
    title: 'CSS is not loading',
    symptom: 'The HTML appears in the browser, but the page looks unstyled or only partly styled.',
    likelyCauses: [
      'The stylesheet path in the link tag is wrong.',
      'The CSS file name or folder name does not match exactly.',
      'The link tag is outside the head or missing rel="stylesheet".',
      'The file was changed locally but not committed, pushed, or deployed.',
    ],
    checks: [
      'Open DevTools and check the Network tab for a missing CSS file.',
      'Compare the HTML file location with the CSS file location.',
      'Confirm the path uses forward slashes, not Windows backslashes.',
      'Confirm capitalization matches the actual file name.',
    ],
    fix: [
      'Move the CSS file into the expected folder or update the href path.',
      'Use a simple path first, such as styles.css when the file sits next to index.html.',
      'Save, refresh, commit, push, and check the live URL after GitHub Pages updates.',
    ],
    relatedLessons: [
      { title: 'File Paths and Site Structure', href: '/lessons/file-paths-and-site-structure/' },
      { title: 'Intro to CSS', href: '/lessons/intro-to-css/' },
    ],
    relatedProjects: [
      { title: 'Project 1: Basic Webpage', href: '/projects/basic-webpage/' },
      { title: 'Project 2: Responsive Landing Page', href: '/projects/responsive-landing-page/' },
    ],
  },
  {
    slug: 'image-not-showing',
    title: 'Image is not showing',
    symptom: 'The image area is empty, broken, or works locally but disappears after publishing.',
    likelyCauses: [
      'The img src path points to the wrong folder.',
      'The image file was not moved into the project folder.',
      'The file name extension is different, such as .jpg instead of .png.',
      'The live site is case-sensitive even if the local computer is forgiving.',
    ],
    checks: [
      'Right-click the broken image area and inspect the src path.',
      'Find the image file in the project folder and compare the exact name.',
      'Open the image directly from the browser if possible.',
      'Check whether the image is too large and slow to load.',
    ],
    fix: [
      'Place images in a clear folder such as images/.',
      'Update the src path to match the folder and file exactly.',
      'Add useful alt text after the image loads correctly.',
      'Optimize large images before final submission.',
    ],
    relatedLessons: [
      { title: 'File Paths and Site Structure', href: '/lessons/file-paths-and-site-structure/' },
      { title: 'Image Optimization', href: '/lessons/image-optimization/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  },
  {
    slug: 'github-pages-not-updating',
    title: 'GitHub Pages is not updating',
    symptom: 'The local site looks correct, but the public GitHub Pages site still shows an older version.',
    likelyCauses: [
      'The latest changes were not committed.',
      'The commit was created but not pushed.',
      'GitHub Pages is building from a different branch or folder.',
      'The browser is showing a cached version of the page.',
    ],
    checks: [
      'Open GitHub Desktop and confirm there are no uncommitted changes.',
      'Check whether the button says Push origin.',
      'Open the GitHub repository and confirm the changed files are visible online.',
      'Go to repository Settings, then Pages, and confirm the publishing source.',
    ],
    fix: [
      'Commit the current changes with a clear message.',
      'Push the commit to GitHub.',
      'Wait a few minutes, then refresh the Pages URL.',
      'Try a hard refresh or private window if the repository shows the latest files.',
    ],
    relatedLessons: [
      { title: 'Developer Environment Setup', href: '/lessons/developer-environment-setup/' },
      { title: 'File Paths and Site Structure', href: '/lessons/file-paths-and-site-structure/' },
    ],
  },
  {
    slug: 'mobile-layout-overflowing',
    title: 'Mobile layout is overflowing',
    symptom: 'The page creates sideways scrolling, clipped content, or cards that do not fit on small screens.',
    likelyCauses: [
      'A container has a fixed width that is wider than the viewport.',
      'Images or embedded media are not constrained with max-width.',
      'A flex or grid layout does not wrap or change at smaller widths.',
      'Long words, URLs, or code snippets are not allowed to wrap.',
    ],
    checks: [
      'Use responsive design mode and slowly shrink the viewport.',
      'Look for the first width where the layout breaks.',
      'Inspect the widest element and check width, min-width, and grid settings.',
      'Temporarily outline elements to see which one is forcing the page wide.',
    ],
    fix: [
      'Replace fixed widths with max-width and flexible units.',
      'Set images and media to max-width: 100%.',
      'Use flex-wrap, responsive grid columns, or media queries when the content needs a new layout.',
      'Allow long text to wrap when needed.',
    ],
    relatedLessons: [
      { title: 'Box Model and Layout', href: '/lessons/box-model-and-layout/' },
      { title: 'Flexbox', href: '/lessons/flexbox/' },
      { title: 'Responsive Web Design', href: '/lessons/responsive-web-design/' },
    ],
    relatedProjects: [
      { title: 'Project 2: Responsive Landing Page', href: '/projects/responsive-landing-page/' },
      { title: 'Project 4: Interactive Portfolio', href: '/projects/interactive-portfolio/' },
    ],
  },
  {
    slug: 'javascript-not-running',
    title: 'JavaScript is not running',
    symptom: 'Buttons, toggles, menus, or interactive elements appear on the page but do nothing.',
    likelyCauses: [
      'The script path is wrong.',
      'The script runs before the HTML exists.',
      'The selector does not match the element in the HTML.',
      'There is a JavaScript error earlier in the file.',
    ],
    checks: [
      'Open the Console and read the first error message.',
      'Check the Network tab to confirm the JavaScript file loads.',
      'Confirm the selector in JavaScript matches the class, id, or data attribute in HTML.',
      'Add a temporary console.log to verify the event listener runs.',
    ],
    fix: [
      'Use a correct script src path.',
      'Load the script with defer or place it near the end of the body.',
      'Use stable selectors such as data attributes for interactive hooks.',
      'Fix the first console error before chasing later behavior.',
    ],
    relatedLessons: [
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'File Paths and Site Structure', href: '/lessons/file-paths-and-site-structure/' },
    ],
    relatedProjects: [
      { title: 'Project 3: Interactive Web Experience', href: '/projects/interactive-web-experience/' },
      { title: 'Project 4: Interactive Portfolio', href: '/projects/interactive-portfolio/' },
    ],
  },
  {
    slug: 'carousel-not-working',
    title: 'Carousel is not working',
    symptom: 'All slides show at once, buttons do nothing, dots do not update, or autoplay behaves strangely.',
    likelyCauses: [
      'The carousel CSS is missing.',
      'The carousel JavaScript or jQuery dependency is missing.',
      'The carousel is initialized before the slides exist.',
      'The markup does not match the plugin or class selector being initialized.',
    ],
    checks: [
      'Confirm only one slide should be active or visible at a time.',
      'Check the Console for missing function, jQuery, or plugin errors.',
      'Check the Network tab for missing Slick CSS or JavaScript files.',
      'Compare the selector in the initialization code with the carousel container class.',
    ],
    fix: [
      'Load required CSS and JavaScript files in the correct order.',
      'Initialize the carousel after the DOM and dependencies are ready.',
      'Start with a basic Slick example before adding custom options.',
      'Add visible controls, status, keyboard support, and pause behavior when needed.',
    ],
    relatedLessons: [
      { title: 'Mastering Carousels', href: '/lessons/mastering-carousels/' },
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  },
  {
    slug: 'form-accessibility',
    title: 'Form is hard to use or fails accessibility checks',
    symptom: 'Fields are confusing, labels are not announced correctly, or keyboard users cannot complete the form smoothly.',
    likelyCauses: [
      'Inputs do not have connected label elements.',
      'Placeholder text is being used as the only label.',
      'Required fields or errors are only communicated visually.',
      'Focus states are missing or difficult to see.',
    ],
    checks: [
      'Click each label and confirm it focuses the matching field.',
      'Tab through the entire form using only the keyboard.',
      'Check whether required fields are clear before submission.',
      'Confirm errors and instructions are written in text, not color alone.',
    ],
    fix: [
      'Connect labels with matching for and id values.',
      'Use appropriate input types such as email, text, checkbox, and textarea.',
      'Keep labels visible even when placeholders are present.',
      'Add clear focus styling and readable helper or error text.',
    ],
    relatedLessons: [
      { title: 'HTML Forms', href: '/lessons/html-forms-building-interactive-user-interfaces/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
    relatedProjects: [
      { title: 'Project 2: Responsive Landing Page', href: '/projects/responsive-landing-page/' },
      { title: 'Project 4: Interactive Portfolio', href: '/projects/interactive-portfolio/' },
    ],
  },
  {
    slug: 'focus-or-keyboard-broken',
    title: 'Focus or keyboard behavior is broken',
    symptom: 'Links, buttons, menus, or interactive elements are hard to reach or use without a mouse.',
    likelyCauses: [
      'Interactive behavior was built with non-interactive elements.',
      'Focus styles were removed or hidden.',
      'The visual order and keyboard order do not match.',
      'A menu or modal opens without managing focus.',
    ],
    checks: [
      'Put the mouse away and use Tab, Shift+Tab, Enter, Space, and Escape.',
      'Watch where focus goes and whether it is visible.',
      'Confirm clickable things are real links or buttons.',
      'Check whether opened content can be closed with the keyboard.',
    ],
    fix: [
      'Use links for navigation and buttons for actions.',
      'Restore or add visible focus styles.',
      'Avoid changing visual order in ways that confuse keyboard order.',
      'Add keyboard handling for menus, modals, and custom interactions.',
    ],
    relatedLessons: [
      { title: 'Building Effective Site Navigation', href: '/lessons/building-effective-site-navigation/' },
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  },
];
