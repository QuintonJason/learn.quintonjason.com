import type { Lesson } from './lessons';

type TeacherNotes = {
  demo: string[];
  tryInClass: string[];
  check: string[];
  watchFor: string[];
};

type DemoGuidance = {
  try: string[];
  changes: string[];
  notice: string[];
  apply: string[];
};

export type LessonTag =
  | 'accessibility'
  | 'css'
  | 'html'
  | 'interactive'
  | 'javascript'
  | 'ux-process';

type LessonMetadata = {
  checkpoint?: string[];
  demoGuidance?: Partial<DemoGuidance>;
  demoSourceFile?: string;
  tags: LessonTag[];
  teacherNotes?: Partial<TeacherNotes>;
};

export const filterOptions = [
  { label: 'All lessons', value: 'all' },
  { label: 'Interactive demos', value: 'interactive' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'UX / Process', value: 'ux-process' },
  { label: 'Accessibility', value: 'accessibility' },
];

export const tagLabels = {
  accessibility: 'Accessibility',
  css: 'CSS',
  html: 'HTML',
  interactive: 'Interactive',
  javascript: 'JavaScript',
  'ux-process': 'UX / Process',
};

export const lessonMetadata: Record<string, LessonMetadata> = {
  'developer-environment-setup': {
    checkpoint: [
      'I can open the correct project folder in VS Code.',
      'I can commit and push a small change through GitHub Desktop.',
      'I can find and refresh my published GitHub Pages URL.',
    ],
    tags: ['ux-process'],
    teacherNotes: {
      demo: [
        'Create a small throwaway repository live so students see GitHub Desktop, VS Code, commit, push, and Pages as one workflow.',
        'Narrate the difference between the local folder, the GitHub repository, and the published website URL.',
      ],
      tryInClass: [
        'Have students open their project folder in VS Code and confirm they can find the same files in GitHub Desktop.',
        'Have students make a tiny homepage text change, commit it, push it, and refresh the live GitHub Pages URL.',
      ],
      check: [
        'Every student should have a GitHub repo, a local folder, and a live Pages URL before moving on.',
        'Ask students to paste their live URL somewhere visible so broken setup can be caught early.',
      ],
      watchFor: [
        'Students editing the extracted starter ZIP folder instead of the GitHub Desktop repository folder.',
        'GitHub Pages publishing from the wrong branch or waiting on the first deploy without refreshing the Pages settings.',
      ],
    },
  },
  'website-process': {
    tags: ['ux-process'],
  },
  'file-paths-and-site-structure': {
    checkpoint: [
      'I can link CSS, images, and pages using relative paths.',
      'I can fix a broken asset by reading the folder structure.',
      'I can confirm the paths work after publishing.',
    ],
    tags: ['html'],
    teacherNotes: {
      demo: [
        'Draw the folder tree first, then write the matching HTML paths beside it.',
        'Break one image path on purpose and use the browser dev tools network panel to show what file the browser tried to find.',
      ],
      tryInClass: [
        'Have students link one CSS file, one image, and one internal page using relative paths.',
        'Ask students to move an image into a folder and update the path until it works again.',
      ],
      check: [
        'Students should be able to explain where the current HTML file is and where the target file is.',
        'Verify paths still work after publishing, not only on the local machine.',
      ],
      watchFor: [
        'Backslashes from Windows paths being copied into HTML instead of forward slashes.',
        'Case mismatches that work locally for some students but fail after publishing.',
      ],
    },
  },
  'basic-html-structure-and-elements': {
    tags: ['html'],
  },
  'intro-to-css': {
    checkpoint: [
      'I can connect an external stylesheet to an HTML page.',
      'I can identify the selector, property, and value in a CSS rule.',
      'I can choose a class selector when I need reusable styling.',
    ],
    demoSourceFile: 'SelectorPlayground.astro',
    demoGuidance: {
      try: [
        'Choose different selectors from the menu and watch which preview elements get highlighted.',
        'Compare a type selector with a class selector and a descendant selector.',
      ],
      changes: [
        'The highlighted elements change based on which selector matches the preview markup.',
        'The code sample updates so you can connect the selector to the visual result.',
      ],
      notice: [
        'Some selectors are broad and affect many elements.',
        'Classes are reusable hooks that make styling more intentional.',
      ],
      apply: [
        'Add one reusable class to your own page and style it from your external stylesheet.',
      ],
    },
    tags: ['css'],
    teacherNotes: {
      demo: [
        'Use the selector playground to compare type, class, ID, descendant, and hover selectors on the same preview.',
        'Show how one selector can affect many elements while a class creates a reusable styling hook.',
      ],
      tryInClass: [
        'Have students add one class to their HTML and style it from an external stylesheet.',
        'Ask students to create a hover state that changes both color and underline so links have two affordances.',
      ],
      check: [
        'Confirm CSS is external and linked in the document head.',
        'Ask students to point to the selector, property, and value in one rule they wrote.',
      ],
      watchFor: [
        'Inline styles becoming the default habit.',
        'Students using IDs for repeated styles that should be classes.',
      ],
    },
  },
  'styling-text-with-css': {
    tags: ['css'],
  },
  'css-working-with-fonts': {
    tags: ['css'],
  },
  'html-forms-building-interactive-user-interfaces': {
    checkpoint: [
      'I can build a form with labels connected to inputs.',
      'I can choose useful input types and attributes.',
      'I can test the form with a keyboard before styling it.',
    ],
    demoSourceFile: 'FormAccessibilityLab.astro',
    demoGuidance: {
      try: [
        'Toggle each form quality option on and off one at a time.',
        'Tab through the preview after changing the label, required field, and error settings.',
      ],
      changes: [
        'The preview form, checklist, and code sample update together.',
        'Missing labels and weak feedback become visible as accessibility and usability issues.',
      ],
      notice: [
        'A form can look correct while still being hard to use with assistive technology.',
        'Labels, requirements, and errors need to be communicated in markup, not only visually.',
      ],
      apply: [
        'Review one form in your project and confirm every input has a connected label.',
      ],
    },
    tags: ['html', 'accessibility'],
    teacherNotes: {
      demo: [
        'Use the form lab to toggle labels, required fields, errors, and confirmation behavior one at a time.',
        'Show how a label connects to an input through matching for and id values.',
      ],
      tryInClass: [
        'Have students build a small contact form with labels, inputs, a textarea, and a submit button.',
        'Ask students to tab through the form and say each field purpose out loud.',
      ],
      check: [
        'Every input should have a visible label connected with for and id.',
        'The form should point to a confirmation page since server-side processing is outside the class scope.',
      ],
      watchFor: [
        'Labels that look right visually but are not programmatically connected to inputs.',
        'Placeholder text being used as the only label.',
      ],
    },
  },
  'box-model-and-layout': {
    demoSourceFile: 'BoxModelVisualizer.astro',
    demoGuidance: {
      try: [
        'Adjust content width, padding, border, and margin to see each layer change.',
        'Switch box-sizing and compare how the total rendered size responds.',
      ],
      changes: [
        'The visual box updates while the code sample shows the related CSS.',
        'Spacing changes become easier to diagnose when each layer is separated.',
      ],
      notice: [
        'Padding is inside the border, margin is outside the border.',
        'border-box makes element sizing easier to reason about in layouts.',
      ],
      apply: [
        'Inspect one project card or content block and identify its content, padding, border, and margin.',
      ],
    },
    tags: ['css'],
  },
  flexbox: {
    checkpoint: [
      'I can identify the flex container and flex items.',
      'I can explain main axis vs cross axis.',
      'I can use justify-content, align-items, and gap without guessing.',
    ],
    demoSourceFile: 'FlexboxPlayground.astro',
    demoGuidance: {
      try: [
        'Change flex-direction first, then test justify-content and align-items.',
        'Turn wrapping on and off to see how items respond when space gets tight.',
      ],
      changes: [
        'The axis labels and item positions update as the flex settings change.',
        'The code sample mirrors the layout choices in the playground.',
      ],
      notice: [
        'The main axis changes when flex-direction changes.',
        'gap handles spacing between items without adding margins to each child.',
      ],
      apply: [
        'Use flexbox on one navigation row or card row in your current project.',
      ],
    },
    tags: ['css'],
    teacherNotes: {
      demo: [
        'Use the playground to contrast justify-content on the main axis with align-items on the cross axis.',
        'Switch flex-direction from row to column so students see the axes change instead of memorizing property names.',
      ],
      tryInClass: [
        'Have students build a horizontal navigation row with flexbox.',
        'Have students create a card row where items wrap and spacing remains consistent.',
      ],
      check: [
        'Students should be able to identify the flex container and the flex items.',
        'Ask students whether the layout problem is one-dimensional before reaching for flexbox.',
      ],
      watchFor: [
        'Applying flex properties to children when the parent is missing display: flex.',
        'Using margins to fake alignment that flexbox can handle more cleanly.',
      ],
    },
  },
  'responsive-web-design': {
    demoSourceFile: 'ResponsiveLayoutVisualizer.astro',
    demoGuidance: {
      try: [
        'Drag the viewport width control from narrow to wide.',
        'Watch when the layout shifts from one column to multiple columns.',
      ],
      changes: [
        'The preview responds to viewport width instead of a fixed device name.',
        'The code sample shows how media queries and flexible sizing support the change.',
      ],
      notice: [
        'Responsive design is about content adapting to available space.',
        'Breakpoints should respond to layout needs, not only common device sizes.',
      ],
      apply: [
        'Resize your own project in the browser and note the first width where the layout breaks.',
      ],
    },
    tags: ['css'],
  },
  'javascript-in-the-dom': {
    checkpoint: [
      'I can select an element from the DOM.',
      'I can respond to a user event with addEventListener.',
      'I can change content, classes, or attributes without using inline JavaScript.',
    ],
    demoSourceFile: 'DomInteractionLab.astro',
    demoGuidance: {
      try: [
        'Click each action button and watch the preview and code sample update.',
        'Reset the demo, then predict what will change before pressing the next button.',
      ],
      changes: [
        'Text, classes, attributes, and list items update through JavaScript.',
        'The code sample shows the DOM method behind each interaction.',
      ],
      notice: [
        'Most interactions follow the pattern: select something, listen for an event, change something.',
        'Changing classes is usually cleaner than writing many inline styles from JavaScript.',
      ],
      apply: [
        'Add one button to your project that toggles a class on a visible element.',
      ],
    },
    tags: ['javascript'],
    teacherNotes: {
      demo: [
        'Use the DOM lab to show select, change, listen, and respond as the core JavaScript pattern.',
        'Compare textContent, classList, setAttribute, and appendChild as different kinds of DOM changes.',
      ],
      tryInClass: [
        'Have students create a button that toggles a class on one visible element.',
        'Ask students to write one console.log before changing the DOM so they can confirm the event fired.',
      ],
      check: [
        'The interaction should still work after refresh and should not require inline onclick attributes.',
        'Students should be able to point to the selected element, the event listener, and the changed class or content.',
      ],
      watchFor: [
        'Scripts running before the HTML exists because the script is loaded too early.',
        'Students changing inline styles directly when toggling a class would be clearer.',
      ],
    },
  },
  'crafting-captivating-hero-sections': {
    tags: ['ux-process', 'css'],
  },
  'css-positioning': {
    tags: ['css'],
  },
  'transforms-filters-and-transitions': {
    tags: ['css'],
  },
  'css-transitions': {
    demoSourceFile: 'TransitionPlayground.astro',
    demoGuidance: {
      try: [
        'Change the transitioned property, duration, delay, and easing.',
        'Trigger the demo after each setting change and compare the feel.',
      ],
      changes: [
        'The motion changes without changing the layout structure.',
        'The code sample updates with the transition settings.',
      ],
      notice: [
        'Short, focused transitions usually feel better than slow decorative motion.',
        'Opacity and transform are safer animation targets than layout-heavy properties.',
      ],
      apply: [
        'Add one small hover or focus transition to a button or link in your project.',
      ],
    },
    tags: ['css'],
  },
  'css-animation': {
    demoSourceFile: 'AnimationKeyframeLab.astro',
    demoGuidance: {
      try: [
        'Switch between animation names and adjust duration, iteration count, and direction.',
        'Replay the animation after changing one setting at a time.',
      ],
      changes: [
        'The target element follows a different keyframe sequence.',
        'The code sample shows how animation settings connect to @keyframes.',
      ],
      notice: [
        'Keyframes define what changes over time.',
        'Animation settings control how often, how long, and in what direction the keyframes run.',
      ],
      apply: [
        'Create one small animation that supports meaning, feedback, or attention in your project.',
      ],
    },
    tags: ['css'],
  },
  'gsap-web-animation': {
    demoSourceFile: 'GsapTimelineLab.astro',
    demoGuidance: {
      try: [
        'Change duration, stagger, and easing before replaying the timeline.',
        'Compare how CSS-like motion decisions feel when controlled as a sequence.',
      ],
      changes: [
        'Multiple elements animate as part of one coordinated timeline.',
        'The code sample updates with the timeline settings.',
      ],
      notice: [
        'GSAP is useful when motion needs sequencing and control beyond a single CSS transition.',
        'Staggering can make grouped elements feel organized instead of noisy.',
      ],
      apply: [
        'Identify one place where a sequence would communicate better than everything moving at once.',
      ],
    },
    tags: ['javascript', 'css'],
  },
  'image-optimization': {
    demoSourceFile: 'ImageOptimizationLab.astro',
    demoGuidance: {
      try: [
        'Change image format, width, loading behavior, and alt text.',
        'Watch the estimated size and code sample update.',
      ],
      changes: [
        'Image choices affect performance, accessibility, and layout stability.',
        'The code sample shows the markup decisions behind the preview.',
      ],
      notice: [
        'Optimization is not only compression. It includes size, loading, dimensions, and text alternatives.',
        'Alt text should communicate the image purpose in context.',
      ],
      apply: [
        'Pick one image in your project and verify its size, loading behavior, and alt text.',
      ],
    },
    tags: ['ux-process', 'accessibility'],
  },
  'page-types-templates-and-navigation': {
    tags: ['ux-process'],
  },
  'building-effective-site-navigation': {
    checkpoint: [
      'I can build navigation with semantic HTML and clear link labels.',
      'I can show the current page state visually and semantically.',
      'I can test navigation with Tab, Shift+Tab, and Enter.',
    ],
    demoSourceFile: 'NavigationPatternLab.astro',
    demoGuidance: {
      try: [
        'Toggle semantic navigation, current page state, focus visibility, skip link, and mobile button options.',
        'Use Tab to move through the preview after changing settings.',
      ],
      changes: [
        'The checklist and code sample update with each navigation choice.',
        'The preview shows how small markup choices affect usability.',
      ],
      notice: [
        'Navigation must work visually, semantically, and with the keyboard.',
        'Mobile menus need real button state, not only a visual icon.',
      ],
      apply: [
        'Review your project navigation and confirm the current page and focus states are clear.',
      ],
    },
    tags: ['html', 'accessibility'],
    teacherNotes: {
      demo: [
        'Use the navigation lab to show semantic nav, current page state, skip links, visible focus, and menu button state.',
        'Tab through the sample navigation so keyboard access is visible, not theoretical.',
      ],
      tryInClass: [
        'Have students mark up a primary nav with a nav element and meaningful link labels.',
        'Ask students to add or verify a visible focus state for every navigation link.',
      ],
      check: [
        'Current page state should be visible and, when appropriate, exposed with aria-current.',
        'Mobile menus should use a real button with aria-expanded and aria-controls.',
      ],
      watchFor: [
        'Divs or spans acting like menu buttons.',
        'Navigation labels that are visually clever but unclear out of context.',
      ],
    },
  },
  'item-listing-and-details': {
    tags: ['ux-process', 'html'],
  },
  'mastering-carousels': {
    checkpoint: [
      'I can explain what controls, dots, status text, and autoplay each do.',
      'I can verify only one carousel slide is visually active at a time.',
      'I can test carousel navigation without relying on a mouse.',
    ],
    demoSourceFile: 'CarouselAccessibilityLab.astro',
    demoGuidance: {
      try: [
        'Toggle controls, dots, visible status, keyboard support, autoplay, and pause behavior.',
        'Use the previous and next buttons, dots, and arrow keys to change slides.',
      ],
      changes: [
        'The carousel preview, checklist, and Slick code sample update together.',
        'Removing controls or status makes the interaction harder to understand.',
      ],
      notice: [
        'A carousel is not only slides. It needs controls, state, keyboard support, and motion decisions.',
        'Autoplay increases responsibility because users need ways to pause or control motion.',
      ],
      apply: [
        'Check your carousel for visible controls, one active slide, keyboard access, and a pause strategy if autoplay is enabled.',
      ],
    },
    tags: ['javascript', 'accessibility'],
    teacherNotes: {
      demo: [
        'Use the carousel lab to show that controls, pagination, status text, keyboard support, and motion settings are separate concerns.',
        'Show the Slick configuration first, then explain what the hidden teaching JavaScript adds for the interactive lab.',
      ],
      tryInClass: [
        'Have students identify whether their carousel needs previous and next buttons, dots, autoplay, or none of the above.',
        'Ask students to test the carousel with keyboard only before styling it.',
      ],
      check: [
        'There should be a visible way to move between slides without relying on autoplay.',
        'If autoplay exists, students should include a pause strategy and avoid surprising motion.',
      ],
      watchFor: [
        'All slides being visible because the carousel CSS or initialization did not load.',
        'Autoplay treated as decoration while keyboard and status feedback are ignored.',
      ],
    },
  },
  'web-accessibility': {
    checkpoint: [
      'I can test a page using only the keyboard.',
      'I can check contrast, labels, alt text, and heading structure.',
      'I can explain why automated audits do not replace manual testing.',
    ],
    demoSourceFile: 'AccessibilityCheckLab.astro',
    demoGuidance: {
      try: [
        'Toggle each accessibility issue and watch the preview, checklist, and code change.',
        'Use the preview like a mini audit before checking your own project.',
      ],
      changes: [
        'The same UI becomes more or less accessible based on markup, contrast, focus, and control choices.',
        'The checklist turns abstract accessibility language into concrete checks.',
      ],
      notice: [
        'Accessibility problems often come from small implementation choices.',
        'Manual testing catches issues that automated tools may miss.',
      ],
      apply: [
        'Run the same checks against your own project: alt text, contrast, focus, and semantic controls.',
      ],
    },
    tags: ['accessibility'],
    teacherNotes: {
      demo: [
        'Use the accessibility lab to toggle one issue at a time and connect each failure to a user impact.',
        'Run a keyboard-only pass before talking about automated audits.',
      ],
      tryInClass: [
        'Have students navigate their project without a mouse and write down the first place they get stuck.',
        'Ask students to check body text, link, and button contrast before final visual polish.',
      ],
      check: [
        'Projects should have semantic structure, visible focus, useful alt text, labels, and sufficient contrast.',
        'Automated tools can support the review, but students should also perform manual keyboard testing.',
      ],
      watchFor: [
        'Students treating Lighthouse as the whole accessibility process.',
        'Interfaces that rely on color alone to communicate state.',
      ],
    },
  },
};

export function getLessonTags(lesson: Lesson): LessonTag[] {
  const metadata = lessonMetadata[lesson.slug] ?? { tags: [] };
  const tags: LessonTag[] = [...metadata.tags];

  if (metadata.demoSourceFile) {
    tags.push('interactive');
  }

  return tags;
}

export function getLessonMeta(lesson: Lesson, lessonIndex: number) {
  const isInteractive = isInteractiveLesson(lesson);
  const estimatedMinutes = Math.min(55, 15 + lesson.sections.length * 2 + (isInteractive ? 8 : 0));
  const difficulty = lessonIndex + 1 >= 12 ? 'Intermediate' : 'Beginner';
  const type = isInteractive ? 'Reading + Interactive' : lesson.practice ? 'Reading + Practice' : 'Reading';

  return {
    difficulty,
    estimatedMinutes,
    type,
  };
}

export function getDemoSourceFile(lesson: Lesson) {
  return lessonMetadata[lesson.slug]?.demoSourceFile;
}

export function getDemoSourceUrl(lesson: Lesson) {
  const sourceFile = getDemoSourceFile(lesson);

  return sourceFile
    ? `https://github.com/QuintonJason/learn.quintonjason.com/blob/master/src/components/${sourceFile}`
    : undefined;
}

export function isInteractiveLesson(lesson: Lesson) {
  return Boolean(getDemoSourceFile(lesson));
}

export function getTeacherNotes(lesson: Lesson): TeacherNotes {
  const hasDemo = isInteractiveLesson(lesson);
  const firstGoal = lesson.goals[0] ?? `Understand ${lesson.title.toLowerCase()}.`;
  const practiceItem = lesson.practice?.[0] ?? 'Apply the lesson to the current class project.';
  const fallbackNotes = {
    demo: hasDemo
      ? [
          `Walk through the interactive demo before students start changing their own project files.`,
          `Connect the demo back to the first goal: ${firstGoal}`,
        ]
      : [
          `Model the core workflow from the lesson using a small class example.`,
          `Connect the example back to the first goal: ${firstGoal}`,
        ],
    tryInClass: [
      practiceItem,
      'Have students make one visible change, save, refresh, and explain what changed.',
    ],
    check: [
      'Ask students to show the work in the browser, not only in the editor.',
      'Have students commit their progress with a clear message when the checkpoint is stable.',
    ],
    watchFor: [
      'Students copying code without checking file paths, spelling, or capitalization.',
      'Visual changes that work locally but break when the project is published.',
    ],
  };
  const customNotes = lessonMetadata[lesson.slug]?.teacherNotes ?? {};

  return {
    demo: customNotes.demo ?? fallbackNotes.demo,
    tryInClass: customNotes.tryInClass ?? fallbackNotes.tryInClass,
    check: customNotes.check ?? fallbackNotes.check,
    watchFor: customNotes.watchFor ?? fallbackNotes.watchFor,
  };
}

export function getLessonCheckpoint(lesson: Lesson) {
  return lessonMetadata[lesson.slug]?.checkpoint ?? [
    'I can explain the main concept in my own words.',
    'I can apply this lesson to my current project.',
    'I can verify the result in the browser.',
    'I can commit the change with a clear message.',
  ];
}

export function getDemoGuidance(lesson: Lesson): DemoGuidance {
  const customGuidance = lessonMetadata[lesson.slug]?.demoGuidance ?? {};

  const fallbackGuidance: DemoGuidance = {
    try: [
      'Change one control at a time and watch the preview before moving to the next option.',
      'Compare the generated code with the visual result.',
    ],
    changes: [
      'The preview updates so you can connect the concept to a visible outcome.',
      'The code sample changes to show the implementation pattern.',
    ],
    notice: [
      'Small implementation choices can create large behavior differences.',
      'The demo is a teaching tool. Your project may need a simpler version of the same idea.',
    ],
    apply: [
      `Use one idea from this demo in your current project and verify it in the browser.`,
    ],
  };

  return {
    try: customGuidance.try ?? fallbackGuidance.try,
    changes: customGuidance.changes ?? fallbackGuidance.changes,
    notice: customGuidance.notice ?? fallbackGuidance.notice,
    apply: customGuidance.apply ?? fallbackGuidance.apply,
  };
}
