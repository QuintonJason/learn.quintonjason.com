export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  considerations: string[];
  milestones: Array<{
    title: string;
    description: string;
  }>;
  requirements: Array<{
    title: string;
    items: string[];
  }>;
  submission: string[];
  grading: string[];
  rubric: Array<{
    category: string;
    strong: string;
    meets: string;
    needsWork: string;
  }>;
  models?: Array<{
    title: string;
    label: string;
    description: string;
    structure: string[];
    notes: string[];
  }>;
  examples?: Array<{
    title: string;
    items: string[];
  }>;
  supportingLessons: Array<{
    title: string;
    href: string;
  }>;
};

export const projects: Project[] = [
  {
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
          'External links should open in a new tab or window.',
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
          'h1: Grandma’s Chocolate Chip Cookies',
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
    supportingLessons: [
      { title: 'Developer Environment Setup', href: '/lessons/developer-environment-setup/' },
      { title: 'File Paths and Site Structure', href: '/lessons/file-paths-and-site-structure/' },
      { title: 'Basic HTML Structure and Elements', href: '/lessons/basic-html-structure-and-elements/' },
      { title: 'Intro to CSS', href: '/lessons/intro-to-css/' },
      { title: 'Styling Text with CSS', href: '/lessons/styling-text-with-css/' },
    ],
  },
  {
    slug: 'responsive-landing-page',
    number: '02',
    title: 'Project 2: Responsive Landing Page with Contact Form Focus',
    shortTitle: 'Responsive Landing Page',
    summary:
      'Create a responsive landing page with a header, hero, featured content, and a contact or signup form that works across mobile, tablet, and desktop layouts.',
    overview:
      'This project focuses on intentional responsive design, tested layout changes, and user-centered form design. The page should adapt smoothly across screen sizes and make the form easy to find, understand, and complete.',
    considerations: [
      'Design a flexible layout that adapts across screen sizes and orientations.',
      'Use media queries to optimize layout and form presentation.',
      'Prioritize readability, navigation, and usability on small and large screens.',
      'Optimize images and content for loading performance.',
      'Use clear labels, appropriate input types, and accessible form markup.',
      'Follow accessibility expectations for alt text, semantic HTML, and contrast.',
    ],
    milestones: [
      {
        title: 'Plan',
        description: 'Define the landing page goal, audience, call to action, and form purpose.',
      },
      {
        title: 'Wireframe',
        description: 'Sketch mobile, tablet, and desktop layout states before writing final CSS.',
      },
      {
        title: 'Build',
        description: 'Create the header, hero, featured content, form, and responsive layout system.',
      },
      {
        title: 'Test',
        description: 'Resize the page, test the form with a keyboard, check contrast, and optimize images.',
      },
    ],
    requirements: [
      {
        title: 'Header and navigation',
        items: [
          'Create a header section with navigation.',
          'Navigation should stack vertically or otherwise adapt on smaller screens.',
        ],
      },
      {
        title: 'Hero section',
        items: [
          'Design a visually engaging hero section with a clear call to action.',
          'Maintain the hero purpose and visual clarity across devices.',
        ],
      },
      {
        title: 'Featured content',
        items: [
          'Include featured content, products, services, or information.',
          'Use responsive layout techniques to maintain balance and readability.',
        ],
      },
      {
        title: 'Contact or signup form',
        items: [
          'Include a form that fits well across screen sizes.',
          'Use properly labeled fields and user-friendly controls.',
          'The form does not need to submit real data and may use a placeholder action.',
          'Include a text input, email input, textarea, and submit button.',
        ],
      },
      {
        title: 'Responsive styling',
        items: [
          'Use cohesive typography, color, and spacing.',
          'Include at least three layout states, such as mobile, tablet, and desktop.',
          'Define at least two states with media queries.',
          'Use Flexbox or Grid at least once.',
          'Make the layout shift meaningfully between desktop and mobile.',
        ],
      },
    ],
    submission: [
      'Organize files in a dedicated project folder with clear naming conventions.',
      'Include an HTML file and an external CSS file.',
      'Publish the finished work for review.',
    ],
    grading: [
      'Successful implementation of responsive design principles.',
      'Navigation adapts for desktop and mobile screens.',
      'Consistent and visually appealing landing page styling.',
      'Effective use of media queries.',
      'Efficient image optimization for performance.',
      'Accessible, properly labeled form controls.',
    ],
    rubric: [
      {
        category: 'Responsive layout',
        strong: 'Layout adapts meaningfully across mobile, tablet, and desktop with clear design intent.',
        meets: 'Layout includes required responsive states and works across common viewport sizes.',
        needsWork: 'Layout breaks, overflows, or does not meaningfully adapt across sizes.',
      },
      {
        category: 'Form quality',
        strong: 'Form is easy to find, complete, and understand with connected labels and appropriate input types.',
        meets: 'Form includes required fields and labels with minor usability issues.',
        needsWork: 'Form fields are missing, labels are disconnected, or the form is hard to use.',
      },
      {
        category: 'Visual design',
        strong: 'Typography, color, spacing, and hierarchy create a polished landing page.',
        meets: 'Design is cohesive and readable with some refinement needed.',
        needsWork: 'Design feels inconsistent, default, or hard to scan.',
      },
      {
        category: 'Media queries and layout systems',
        strong: 'Media queries, Flexbox, or Grid are used intentionally to solve layout problems.',
        meets: 'Required CSS techniques are present and mostly effective.',
        needsWork: 'Responsive behavior is mostly accidental or missing required CSS techniques.',
      },
      {
        category: 'Accessibility and performance',
        strong: 'Images, contrast, labels, and loading choices support a usable and efficient page.',
        meets: 'Accessibility and performance basics are addressed with minor gaps.',
        needsWork: 'The page has avoidable accessibility or performance problems.',
      },
    ],
    examples: [
      {
        title: 'Product launch',
        items: ['Features', 'benefits', 'testimonials', 'FAQs', 'early access or waitlist form'],
      },
      {
        title: 'Local business',
        items: ['Services or menu', 'photos', 'reviews', 'location details', 'booking or mailing list form'],
      },
      {
        title: 'Online course or workshop',
        items: ['Curriculum', 'instructor bio', 'testimonials', 'pricing', 'registration form'],
      },
    ],
    supportingLessons: [
      { title: 'HTML Forms', href: '/lessons/html-forms-building-interactive-user-interfaces/' },
      { title: 'Box Model and Layout', href: '/lessons/box-model-and-layout/' },
      { title: 'Flexbox', href: '/lessons/flexbox/' },
      { title: 'Responsive Web Design', href: '/lessons/responsive-web-design/' },
      { title: 'Image Optimization', href: '/lessons/image-optimization/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  },
  {
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
    supportingLessons: [
      { title: 'CSS Transitions', href: '/lessons/css-transitions/' },
      { title: 'CSS Animation', href: '/lessons/css-animation/' },
      { title: 'GSAP Web Animation', href: '/lessons/gsap-web-animation/' },
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'Transforms, Filters, and Transitions', href: '/lessons/transforms-filters-and-transitions/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  },
  {
    slug: 'interactive-portfolio',
    number: '04',
    title: 'Project 4: Portfolio: Interactive Digital Showcase',
    shortTitle: 'Interactive Portfolio',
    summary:
      'Create a multi-page portfolio website that showcases your design skills and programming ability through responsive layout, strong presentation, and at least one interactive element.',
    overview:
      'This project brings your portfolio to life. The goal is to present your work clearly while demonstrating creativity, user interaction, responsive design, performance awareness, and accessible implementation.',
    considerations: [
      'Make the portfolio an experience instead of a passive display of work.',
      'Use JavaScript to create meaningful animations, modals, filters, galleries, or other dynamic features.',
      'Prioritize navigation, information architecture, and intuitive interactions.',
      'Optimize for speed and avoid a slow-loading portfolio.',
      'If using a contact form, design it with clear labels and accessible feedback.',
      'Use semantic HTML and follow accessibility expectations.',
    ],
    milestones: [
      {
        title: 'Inventory',
        description: 'Gather portfolio content, project descriptions, imagery, contact information, and page needs.',
      },
      {
        title: 'Architecture',
        description: 'Create the site map, page structure, navigation plan, and reusable layout patterns.',
      },
      {
        title: 'Interaction',
        description: 'Prototype the required interactive element and confirm it supports the portfolio experience.',
      },
      {
        title: 'Polish',
        description: 'Review responsive behavior, visual identity, performance, accessibility, repository, and public URL.',
      },
    ],
    requirements: [
      {
        title: 'Multi-page portfolio layout',
        items: [
          'Do not create a single-page site.',
          'Include dedicated pages or sections for Projects, About Me, and Contact.',
          'Optional additions may include blog, resume, or client list pages.',
        ],
      },
      {
        title: 'Cohesive visual identity',
        items: [
          'Use consistent typography, color, imagery, and layout.',
          'Build a visual style that reflects your personal brand.',
          'Use high-quality images and graphics that support your work.',
        ],
      },
      {
        title: 'Interactive elements',
        items: [
          'Implement at least one interactive element using HTML, CSS, and JavaScript.',
          'Possible options include sliders, lightboxes, project filters, animated transitions, timelines, dynamic galleries, micro-interactions, custom modals, or data visualizations.',
        ],
      },
      {
        title: 'Navigation system',
        items: [
          'Design clear, easy-to-use navigation.',
          'Help users find projects, about information, and contact details quickly.',
        ],
      },
      {
        title: 'Responsive design',
        items: [
          'Optimize for desktop, tablet, and mobile orientations.',
          'Use media queries to adapt layout, typography, imagery, navigation, and interactive elements.',
        ],
      },
    ],
    submission: [
      'Organize project files in a dedicated folder with clear naming conventions.',
      'Include HTML, CSS, and JavaScript files as needed.',
      'Provide the GitHub repository link.',
      'Provide the public site URL.',
    ],
    grading: [
      'Quality and effectiveness of interactive elements.',
      'Intuitive and smooth navigation system.',
      'Responsive design across devices and screen sizes.',
      'Visual appeal and consistency of styling and presentation.',
      'Performance optimization and loading efficiency.',
      'Accessible and semantic implementation.',
    ],
    rubric: [
      {
        category: 'Portfolio structure',
        strong: 'Multi-page structure makes projects, about information, and contact paths easy to find.',
        meets: 'Required pages are present and mostly clear.',
        needsWork: 'The portfolio is single-page, incomplete, or difficult to navigate.',
      },
      {
        category: 'Interactive element',
        strong: 'Interaction adds value to the portfolio and demonstrates thoughtful JavaScript use.',
        meets: 'At least one interactive element works and supports the presentation.',
        needsWork: 'Interaction is missing, broken, or feels unrelated to the portfolio goal.',
      },
      {
        category: 'Navigation',
        strong: 'Navigation is intuitive, consistent, responsive, and keyboard accessible.',
        meets: 'Navigation works across pages with minor usability issues.',
        needsWork: 'Navigation is confusing, inconsistent, or difficult to use.',
      },
      {
        category: 'Responsive design',
        strong: 'Portfolio layout, typography, imagery, navigation, and interactions adapt across devices.',
        meets: 'Portfolio is mostly responsive with some rough spots.',
        needsWork: 'Important content or interaction breaks on smaller or larger screens.',
      },
      {
        category: 'Visual polish and performance',
        strong: 'Visual identity is cohesive, assets are optimized, and the site feels efficient and professional.',
        meets: 'Visual presentation is clear with some polish or performance gaps.',
        needsWork: 'The portfolio feels unfinished, slow, inconsistent, or inaccessible.',
      },
    ],
    examples: [
      {
        title: 'Design portfolio interaction ideas',
        items: ['Before-and-after slider', 'animated project gallery', 'dynamic color palette explorer'],
      },
      {
        title: 'Front-end portfolio interaction ideas',
        items: ['Interactive code snippets', 'embedded live demo', 'dynamic chart or visualization'],
      },
    ],
    supportingLessons: [
      { title: 'Page Types, Templates, and Navigation', href: '/lessons/page-types-templates-and-navigation/' },
      { title: 'Building Effective Site Navigation', href: '/lessons/building-effective-site-navigation/' },
      { title: 'Item Listing and Details', href: '/lessons/item-listing-and-details/' },
      { title: 'Mastering Carousels', href: '/lessons/mastering-carousels/' },
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  },
];
