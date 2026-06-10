import type { Project } from './types';

export const interactivePortfolio: Project = {
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
    models: [
      {
        title: 'Strong Example',
        label: 'Portfolio with useful project filtering',
        description:
          'A multi-page portfolio with clear navigation, polished project presentation, and one interaction that helps users browse work.',
        structure: [
          'home page with clear positioning',
          'projects page with cards and filters',
          'about page with concise personal context',
          'contact page with accessible form or contact links',
          'JavaScript interaction that improves project browsing',
        ],
        notes: [
          'The interaction helps users find work, not just watch an effect.',
          'Navigation and page titles make the site easy to understand.',
          'The portfolio feels cohesive across pages.',
        ],
      },
      {
        title: 'Meets Expectations',
        label: 'Multi-page student portfolio',
        description:
          'A complete portfolio with required pages and a working interaction, but some content and polish still developing.',
        structure: [
          'home, projects, about, and contact pages',
          'consistent header and footer',
          'project cards with short descriptions',
          'one modal, gallery, filter, or details toggle',
          'responsive layout adjustments',
        ],
        notes: [
          'The required structure is present and functional.',
          'Project descriptions should become more specific and outcome-focused.',
          'The interaction works but should feel more connected to the content.',
        ],
      },
      {
        title: 'Needs Work',
        label: 'Single-page gallery with unclear navigation',
        description:
          'A portfolio attempt that shows work but does not meet the multi-page structure, navigation, or interaction expectations.',
        structure: [
          'all content placed on one long page',
          'navigation links that do not lead to separate pages',
          'project images without descriptions',
          'interaction that is decorative or broken',
          'responsive issues on mobile',
        ],
        notes: [
          'The project needs real page structure before final styling.',
          'Work samples need context so visitors know what they are seeing.',
          'The interactive element should support the portfolio goal.',
        ],
      },
    ],
    starterKit: {
      description:
        'A multi-page portfolio starter with shared CSS, JavaScript, project navigation, and portfolio page structure.',
      files: [
        { label: 'index.html', href: '/starters/project-4/index.html' },
        { label: 'projects.html', href: '/starters/project-4/projects.html' },
        { label: 'about.html', href: '/starters/project-4/about.html' },
        { label: 'contact.html', href: '/starters/project-4/contact.html' },
        { label: 'styles.css', href: '/starters/project-4/styles.css' },
        { label: 'script.js', href: '/starters/project-4/script.js' },
      ],
    },
    supportingLessons: [
      { title: 'Page Types and Templates', href: '/lessons/page-types-templates-and-navigation/' },
      { title: 'Site Navigation', href: '/lessons/building-effective-site-navigation/' },
      { title: 'Item Listing and Details', href: '/lessons/item-listing-and-details/' },
      { title: 'Carousels', href: '/lessons/mastering-carousels/' },
      { title: 'JavaScript in the DOM', href: '/lessons/javascript-in-the-dom/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  };
