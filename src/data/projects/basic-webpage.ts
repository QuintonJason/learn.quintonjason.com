import type { Project } from './types';

export const basicWebpage: Project = {
    slug: 'basic-webpage',
    number: '01',
    title: 'Project 1: Basic Webpage',
    shortTitle: 'Basic Webpage',
    summary:
      'Create a basic webpage using HTML to practice structure, semantic markup, headings, paragraphs, lists, links, images, and basic styling.',
    overview:
      'This project focuses on HTML fundamentals and proper content organization. The goal is to create a clear, coherent, well-structured webpage that communicates information effectively.',
    considerations: [
      'Use semantic HTML elements to structure content correctly.',
      'Organize content logically with headings and paragraphs.',
      'Consider readability through font choices, alignment, and spacing.',
      'Maintain a consistent design and layout.',
      'Keep project files organized in a structured folder system.',
    ],
    milestones: [
      {
        title: 'Plan',
        description: 'Choose a page idea, gather text and images, and sketch the content hierarchy.',
      },
      {
        title: 'Structure',
        description: 'Build the HTML with headings, paragraphs, lists, links, and image markup.',
      },
      {
        title: 'Style',
        description: 'Add basic external CSS that improves readability, spacing, and consistency.',
      },
      {
        title: 'Verify',
        description: 'Check file organization, links, image paths, alt text, and browser output.',
      },
    ],
    requirements: [
      {
        title: 'Headings and paragraphs',
        items: [
          'Include at least three headings: h1, h2, and h3.',
          'Use paragraphs to provide content related to each heading.',
        ],
      },
      {
        title: 'Lists',
        items: [
          'Include one ordered list with at least three items.',
          'Include one unordered list with at least three items.',
        ],
      },
      {
        title: 'Links',
        items: [
          'Include a link to an external website or another page in your own site.',
          'External links that use target="_blank" should include rel="noopener noreferrer".',
        ],
      },
      {
        title: 'Images',
        items: [
          'Include one image using the img element.',
          'Provide appropriate alt text for accessibility.',
        ],
      },
      {
        title: 'Basic styling',
        items: [
          'Use an external stylesheet if you apply CSS.',
          'Styling may include font colors, background colors, or text alignment.',
        ],
      },
    ],
    submission: [
      'Organize files into a dedicated project folder with a clear naming convention.',
      'Include an index.html file as the main webpage.',
      'Place images in a subfolder inside the project directory.',
    ],
    grading: [
      'Proper use of semantic HTML elements.',
      'Logical organization with headings and paragraphs.',
      'Correct implementation of lists and links.',
      'Useful alt text for images.',
      'Bonus consideration for effective basic CSS styling.',
      'Clean, well-structured project folder.',
    ],
    rubric: [
      {
        category: 'HTML structure',
        strong: 'Uses semantic elements and a clear heading hierarchy that makes the page easy to understand.',
        meets: 'Includes required HTML elements with mostly logical structure.',
        needsWork: 'Relies on unclear structure, missing headings, or incorrect element use.',
      },
      {
        category: 'Content organization',
        strong: 'Content is organized into readable sections that communicate a clear topic or purpose.',
        meets: 'Content is present and mostly organized with headings and paragraphs.',
        needsWork: 'Content feels disconnected, hard to scan, or unsupported by headings.',
      },
      {
        category: 'Links and images',
        strong: 'Links work, external links behave appropriately, images load, and alt text is useful.',
        meets: 'Required links and images are present with minor issues.',
        needsWork: 'Links or images are broken, missing, or inaccessible.',
      },
      {
        category: 'File management',
        strong: 'Files are named clearly and organized in a project folder with sensible asset folders.',
        meets: 'Files are present and mostly organized.',
        needsWork: 'Files are scattered, confusingly named, or difficult to review.',
      },
      {
        category: 'Basic styling and readability',
        strong: 'CSS choices improve readability, spacing, and consistency without distracting from the content.',
        meets: 'Basic styling is present and generally readable.',
        needsWork: 'Styling is missing, inconsistent, or makes the page harder to read.',
      },
    ],
    models: [
      {
        title: 'Strong Example',
        label: 'Recipe page with clear hierarchy',
        description:
          'A focused page that uses headings, lists, an image, and links to guide the reader through one complete topic.',
        structure: [
          "h1: Grandma's Chocolate Chip Cookies",
          'intro paragraph explaining the recipe',
          'h2: Ingredients with an unordered list',
          'h2: Instructions with an ordered list',
          'h3: Storage tips with a short paragraph',
          'image with useful alt text',
          'external baking resource link',
        ],
        notes: [
          'The topic is specific enough that all required elements feel connected.',
          'Lists are used because ingredients and steps naturally belong in lists.',
          'The image supports the content instead of acting as decoration only.',
        ],
      },
      {
        title: 'Meets Expectations',
        label: 'Travel page with most required pieces',
        description:
          'A page that includes the required elements and mostly clear organization, but still needs refinement in hierarchy and readability.',
        structure: [
          'h1: Weekend in New Orleans',
          'h2 sections for food, music, and places to visit',
          'paragraphs under each section',
          'one ordered list and one unordered list',
          'landmark image with alt text',
          'tourism website link',
        ],
        notes: [
          'The requirements are present and the topic is understandable.',
          'Some sections may need stronger paragraph writing or more consistent spacing.',
          'The page would improve with clearer visual hierarchy in CSS.',
        ],
      },
      {
        title: 'Needs Work',
        label: 'Disconnected content dump',
        description:
          'A page that technically includes some required tags but does not yet communicate a clear topic or readable structure.',
        structure: [
          'generic h1 like My Website',
          'headings that do not describe the content',
          'lists included only to satisfy the requirement',
          'image missing useful alt text',
          'broken or unclear link',
          'files saved in confusing locations',
        ],
        notes: [
          'The page needs a clearer topic before the HTML can feel organized.',
          'Required elements should support the content, not appear randomly.',
          'Broken paths and vague alt text make the work harder to review and use.',
        ],
      },
    ],
    examples: [
      {
        title: 'Simple recipe page',
        items: ['Recipe title', 'Ingredients list', 'Instructions list', 'Image', 'Related baking resource link'],
      },
      {
        title: 'Travel blog post',
        items: ['Trip title', 'Getting there', 'What to see', 'Where to stay', 'Landmark image', 'Tourism link'],
      },
      {
        title: 'Basic portfolio page',
        items: ['Your name', 'About me', 'Projects', 'Contact methods', 'Optional image', 'GitHub profile link'],
      },
    ],
    starterKit: {
      description:
        'A minimal HTML and CSS starter for Project 1 with folders, comments, and required content placeholders.',
      files: [
        { label: 'index.html', href: '/starters/project-1/index.html' },
        { label: 'styles.css', href: '/starters/project-1/styles.css' },
      ],
    },
    supportingLessons: [
      { title: 'Developer Environment Setup', href: '/lessons/developer-environment-setup/' },
      { title: 'File Paths', href: '/lessons/file-paths-and-site-structure/' },
      { title: 'HTML Structure and Elements', href: '/lessons/basic-html-structure-and-elements/' },
      { title: 'CSS Basics', href: '/lessons/intro-to-css/' },
      { title: 'CSS Text Styling', href: '/lessons/styling-text-with-css/' },
    ],
  };
