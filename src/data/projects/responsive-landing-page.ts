import type { Project } from './types';

export const responsiveLandingPage: Project = {
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
    models: [
      {
        title: 'Strong Example',
        label: 'Focused course signup page',
        description:
          'A landing page with a clear audience, strong call to action, responsive layout, and an accessible form.',
        structure: [
          'header with simple navigation',
          'hero with one clear signup message',
          'three benefit cards that reflow from one column to three',
          'contact form with labels, input types, and helpful button text',
          'responsive spacing and readable line lengths',
        ],
        notes: [
          'The form is central to the page goal instead of being dropped at the bottom.',
          'Mobile and desktop layouts both feel intentionally designed.',
          'The visual hierarchy makes the next action obvious.',
        ],
      },
      {
        title: 'Meets Expectations',
        label: 'Local business landing page',
        description:
          'A complete responsive page with the required sections, but some hierarchy and form refinement still needed.',
        structure: [
          'header with navigation links',
          'hero with business name and short intro',
          'feature cards for services',
          'contact form with required fields',
          'basic media queries for mobile and desktop',
        ],
        notes: [
          'The required pieces are present and mostly functional.',
          'The design would improve with tighter spacing and stronger call-to-action language.',
          'The form works, but error and helper text could be clearer.',
        ],
      },
      {
        title: 'Needs Work',
        label: 'Desktop-only page with pasted form',
        description:
          'A page with landing page pieces present, but the layout breaks on mobile and the form is difficult to use.',
        structure: [
          'wide fixed-width layout',
          'navigation that overflows on small screens',
          'hero text with no clear action',
          'form inputs without connected labels',
          'images that stretch or load too large',
        ],
        notes: [
          'The page needs responsive decisions, not just smaller text.',
          'The form should be built semantically before visual polish.',
          'The landing page goal is unclear to the user.',
        ],
      },
    ],
    starterKit: {
      description:
        'A responsive landing page starter with header, hero, featured content, contact form, and mobile-first CSS hooks.',
      files: [
        { label: 'index.html', href: '/starters/project-2/index.html' },
        { label: 'styles.css', href: '/starters/project-2/styles.css' },
      ],
    },
    supportingLessons: [
      { title: 'HTML Forms', href: '/lessons/html-forms-building-interactive-user-interfaces/' },
      { title: 'Box Model and Layout', href: '/lessons/box-model-and-layout/' },
      { title: 'Flexbox', href: '/lessons/flexbox/' },
      { title: 'Responsive Web Design', href: '/lessons/responsive-web-design/' },
      { title: 'Image Optimization', href: '/lessons/image-optimization/' },
      { title: 'Web Accessibility', href: '/lessons/web-accessibility/' },
    ],
  };
