import type { Lesson } from './lessons';

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

export const lessonMetadata = {
  'developer-environment-setup': {
    tags: ['ux-process'],
  },
  'website-process': {
    tags: ['ux-process'],
  },
  'file-paths-and-site-structure': {
    tags: ['html'],
  },
  'basic-html-structure-and-elements': {
    tags: ['html'],
  },
  'intro-to-css': {
    demoSourceFile: 'SelectorPlayground.astro',
    tags: ['css'],
  },
  'styling-text-with-css': {
    tags: ['css'],
  },
  'css-working-with-fonts': {
    tags: ['css'],
  },
  'html-forms-building-interactive-user-interfaces': {
    demoSourceFile: 'FormAccessibilityLab.astro',
    tags: ['html', 'accessibility'],
  },
  'box-model-and-layout': {
    demoSourceFile: 'BoxModelVisualizer.astro',
    tags: ['css'],
  },
  flexbox: {
    demoSourceFile: 'FlexboxPlayground.astro',
    tags: ['css'],
  },
  'responsive-web-design': {
    demoSourceFile: 'ResponsiveLayoutVisualizer.astro',
    tags: ['css'],
  },
  'javascript-in-the-dom': {
    demoSourceFile: 'DomInteractionLab.astro',
    tags: ['javascript'],
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
    tags: ['css'],
  },
  'css-animation': {
    demoSourceFile: 'AnimationKeyframeLab.astro',
    tags: ['css'],
  },
  'gsap-web-animation': {
    demoSourceFile: 'GsapTimelineLab.astro',
    tags: ['javascript', 'css'],
  },
  'image-optimization': {
    demoSourceFile: 'ImageOptimizationLab.astro',
    tags: ['ux-process', 'accessibility'],
  },
  'page-types-templates-and-navigation': {
    tags: ['ux-process'],
  },
  'building-effective-site-navigation': {
    demoSourceFile: 'NavigationPatternLab.astro',
    tags: ['html', 'accessibility'],
  },
  'item-listing-and-details': {
    tags: ['ux-process', 'html'],
  },
  'mastering-carousels': {
    demoSourceFile: 'CarouselAccessibilityLab.astro',
    tags: ['javascript', 'accessibility'],
  },
  'web-accessibility': {
    demoSourceFile: 'AccessibilityCheckLab.astro',
    tags: ['accessibility'],
  },
};

export function getLessonTags(lesson: Lesson) {
  const metadata = lessonMetadata[lesson.slug] ?? { tags: [] };
  const tags = [...metadata.tags];

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
