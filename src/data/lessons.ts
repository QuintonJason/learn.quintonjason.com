export type LessonSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  note?: string;
  code?: string;
  resources?: Array<string | { label: string; href: string }>;
};

export type LessonResource = string | { label: string; href: string };

export type Lesson = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  goals: string[];
  sections: LessonSection[];
  practice?: string[];
  resources?: LessonResource[];
};

export const lessons: Lesson[] = [
  {
    slug: 'developer-environment-setup',
    number: '01',
    title: 'Developer Environment Setup',
    eyebrow: 'Setup',
    summary:
      'A step-by-step guide to setting up GitHub, GitHub Desktop, Visual Studio Code, the starter repository, and GitHub Pages.',
    goals: [
      'Set up a professional-grade web development environment',
      'Create and publish a class website repository',
      'Deploy the site with GitHub Pages',
    ],
    sections: [
      {
        title: 'Step-by-Step Environment Setup for Web Development',
        body: [
          'This guide walks you through setting up a professional-grade developer environment using GitHub, GitHub Desktop, and Visual Studio Code.',
          'By the end of the lesson, you will be prepared to manage code collaboratively and deploy websites.',
        ],
      },
      {
        title: '1. Create a GitHub Account',
        body: [
          'Visit https://github.com/ and click "Sign Up" to create your account.',
        ],
      },
      {
        title: '2. Download and Install GitHub Desktop',
        body: [
          'Visit https://desktop.github.com/ to download GitHub Desktop.',
          'After installation, open Settings, go to the Accounts tab, and sign in with your GitHub credentials.',
        ],
      },
      {
        title: '3. Download Visual Studio Code',
        body: [
          'Visit https://code.visualstudio.com/download to download and install the editor.',
        ],
      },
      {
        title: '4. Access Class Demo Repositories',
        body: [
          'Navigate to https://github.com/LSUWebDesign to browse class demos.',
        ],
      },
      {
        title: '5. Download the Starter Repository',
        body: [
          'Go to https://github.com/LSUWebDesign/starter-site-22.',
          'Click the "Code" button, then "Download ZIP." Extract the ZIP file and remember its location.',
        ],
      },
      {
        title: '6. Prepare Your Project Directory',
        body: [
          'Export the contents of starter-site-22-main.zip.',
          'This folder will be your working website base folder.',
        ],
      },
      {
        title: '7. Create a New Repository in GitHub Desktop',
        body: [
          'Open GitHub Desktop.',
          'Click File -> New Repository.',
          'Name your site using dashes instead of spaces, such as my-website.',
          'Click "Create Repository."',
        ],
      },
      {
        title: '8. Publish Your Repository',
        body: [
          'Click "Publish Repository" to make it accessible on GitHub online.',
        ],
      },
      {
        title: '9. Understanding the GitHub Desktop Interface',
        bullets: [
          'Open in Visual Studio Code: opens the project in VS Code.',
          'Show in Finder: opens the local folder.',
          'View on GitHub: opens the GitHub page in the browser.',
        ],
      },
      {
        title: '10. Move Starter Files',
        body: [
          'With both your empty project folder and the extracted starter folder open, copy all starter files into the new GitHub project folder.',
        ],
      },
      {
        title: '11. Commit and Push Changes',
        body: [
          'Back in GitHub Desktop, verify the file changes listed.',
          'Write a descriptive commit message, then click "Commit to main."',
          'Afterward, click "Push origin" to upload changes to GitHub.',
          'If you have changes and need to find your files, use Repository -> Show in Finder.',
        ],
      },
      {
        title: '12. Enable GitHub Pages',
        body: [
          'On your GitHub repository page, go to Settings -> Pages.',
          'Under Build and Deployment, set the Branch dropdown to main.',
          'Click "Save."',
        ],
      },
      {
        title: '13. Launch Your Website',
        body: [
          'Wait a few minutes, then refresh the Pages settings.',
          'A public URL to your live website will appear.',
          'Click "Visit Site" to see your published work.',
          'Congratulations. You now have a fully functioning developer setup and a live website hosted with GitHub Pages.',
        ],
      },
    ],
    practice: [
      'Create your GitHub account.',
      'Install GitHub Desktop and Visual Studio Code.',
      'Download the class starter repository.',
      'Create a new repository in GitHub Desktop.',
      'Move the starter files into your project folder.',
      'Commit, push, enable GitHub Pages, and open the live URL.',
    ],
    resources: [
      'https://github.com/',
      'https://desktop.github.com/',
      'https://code.visualstudio.com/download',
      'https://github.com/LSUWebDesign',
    ],
  },
  {
    slug: 'website-process',
    number: '02',
    title: 'Website Process',
    eyebrow: 'Planning',
    summary:
      'A thoughtful and systematic approach that aligns user needs, business goals, and technical execution.',
    goals: [
      'Understand the essential stages in the web design process',
      'Connect each step to building an effective, user-centered site',
      'Move from audience and goals through content, structure, design, code, launch, and iteration',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "Creating a successful website doesn't happen by accident. It requires a thoughtful and systematic approach that ensures user needs, business goals, and technical execution all align.",
          'This lesson explores the essential stages in the web design process, focusing on how each step contributes to building an effective, user-centered site.',
        ],
      },
      {
        title: 'Understanding the Target Audience',
        body: [
          'Every successful website starts with understanding its audience. Identifying who will visit your site helps shape the entire user experience.',
        ],
        bullets: [
          'Think about whether your audience is individuals, professionals, companies, or a mix.',
          'Use demographic research to define characteristics like age, interests, and tech savviness.',
          'Create user personas to visualize different user types and guide design decisions.',
        ],
        note:
          'Knowing your audience influences the complexity of the site, the tone of the content, and the functionality offered.',
      },
      {
        title: 'Defining Goals and Objectives',
        body: [
          'With your audience in mind, determine what they want to accomplish. Why are they visiting your site?',
        ],
        bullets: [
          'Start broadly, then narrow down to specific user tasks and objectives.',
          'Create user scenarios to model how different users might interact with your site.',
        ],
        note:
          'These goals inform your content and feature planning, ensuring your site is built with purpose.',
      },
      {
        title: 'Creating and Organizing Content',
        body: [
          "Now it's time to generate the actual content that meets your audience's needs. Content should:",
        ],
        bullets: [
          'Be concise and helpful without overwhelming users.',
          'Support user goals with relevant information, tools, or services.',
          'Be planned around site tasks and organized effectively into pages.',
        ],
      },
      {
        title: 'Designing a Site Map',
        body: [
          "The site map acts as a blueprint, outlining the site's structure and content organization. It helps you:",
        ],
        bullets: [
          'Visualize all necessary pages and their relationships.',
          'Organize navigation logically for usability.',
        ],
        note:
          "Depending on the project's size, your site map can range from simple to highly detailed.",
      },
      {
        title: 'Wireframing the Layout',
        body: [
          'Wireframes help you plan page layouts without focusing on visual design. They allow you to:',
        ],
        bullets: [
          'Prioritize key content and place it in optimal screen locations.',
          'Focus on functionality, not appearance.',
        ],
        note:
          'Wireframes serve as a functional guide, helping you map out content structure and user interaction.',
      },
      {
        title: 'Fleshing Out the Design',
        body: [
          'Once wireframes are approved, you can add visual design elements. This stage:',
        ],
        bullets: [
          'Defines color schemes, typography, imagery, and branding.',
          'Brings the user experience to life visually while adhering to the wireframe structure.',
        ],
        note:
          'Be sure to stay grounded in usability as you develop the visual style.',
      },
      {
        title: 'Coding and Testing',
        body: [
          'With the design finalized, the development phase begins. Tips for successful coding include:',
        ],
        bullets: [
          'Follow your site map to create structured, well-organized HTML files.',
          'Use folders for assets (CSS, JS, images) and comments to clarify your code.',
          'Test across multiple browsers to ensure consistency.',
        ],
        note:
          'Tools like browser testing services help identify compatibility issues early.',
      },
      {
        title: 'Launch and Iteration',
        body: [
          "Launching your site isn't the end. Real users may expose issues that testing missed.",
        ],
        bullets: [
          'Monitor performance and usability after launch.',
          'Collect feedback and be ready to make improvements in a second phase.',
        ],
        note:
          'A successful site continues to evolve based on user behavior and feedback.',
      },
      {
        title: 'Conclusion',
        body: [
          "Designing a website is more than visual flair. It's a structured process that prioritizes users, content, and usability from the ground up.",
          'By following these steps, you can ensure that your site is not only beautiful but also functional, accessible, and effective.',
        ],
      },
    ],
    practice: [
      'Define the audience for your class site.',
      'Create a simple site map.',
      'Sketch one wireframe before writing code.',
    ],
  },
  {
    slug: 'file-paths-and-site-structure',
    number: '03',
    title: 'File Paths',
    eyebrow: 'Folders',
    summary:
      'Understand how files are organized on a computer and how browsers find the resources a webpage needs.',
    goals: [
      'Explain a website as a folder of connected files',
      'Use relative and absolute paths correctly',
      'Link CSS, JavaScript, images, and internal pages from HTML',
    ],
    sections: [
      {
        title: 'What This Teaches',
        body: [
          'This lesson teaches how a website is organized as a folder of connected files.',
          'You will learn how browsers find CSS files, JavaScript files, images, and other pages by reading the paths you write in HTML.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          'Broken images, missing styles, and JavaScript that does not run are often file path problems.',
          'If the browser cannot find a file, the page may still load, but parts of the site will look or behave broken.',
          'Learning file paths early makes debugging much easier because you can ask one clear question: where is this file in relation to the page asking for it?',
        ],
      },
      {
        title: 'Core Concept: A Website Is a Folder',
        body: [
          'Imagine a website as a folder on your computer. That folder can contain different kinds of files that work together to create the site.',
        ],
        bullets: [
          'HTML files: These files contain the structure and content of your webpages. The main page of a website is often named index.html.',
          'CSS files: These files contain the styling rules that determine how the HTML elements look, including colors, fonts, and layout.',
          'JavaScript files: These files contain the scripts that make your website interactive, including animations and user input handling.',
          'Images: These files contain the images displayed on your webpage.',
          'Other files: Websites can also include other files like videos, audio, and documents.',
        ],
      },
      {
        title: 'Core Concept: Paths Tell the Browser Where to Look',
        body: [
          "To access a file within the website's folder, you need to specify its path.",
          'A path tells the browser the location of the file relative to the current file.',
        ],
      },
      {
        title: 'Example Site Folder',
        body: [
          'A small site might use a structure like this:',
        ],
        code: `my-website/
|-- index.html
|-- about.html
|-- styles.css
|-- script.js
|-- icon.png
|-- img/
|   |-- gizmo.jpg
|-- images/
|   |-- logo.png`,
      },
      {
        title: 'What Each File Does',
        bullets: [
          'index.html: This is the main page of your website. Your home page.',
          'about.html: This is another page on your website.',
          'styles.css: This file contains the CSS styles for your website.',
          'script.js: This file contains JavaScript code for your website.',
          'img/gizmo.jpg: This is an image file located within the img subfolder.',
          'images/logo.png: This is an image file located within the images subfolder.',
          'icon.png: This is an image file that will serve as our favicon, located within the root directory.',
        ],
      },
      {
        title: 'Code Example: Link a CSS File',
        body: [
          'If styles.css sits next to index.html, the path is just the file name.',
        ],
        code: `<link rel="stylesheet" href="styles.css">`,
        bullets: [
          'rel="stylesheet": Tells the browser this file is a stylesheet.',
          'href="styles.css": Tells the browser where the CSS file is located.',
        ],
      },
      {
        title: 'Code Example: Link an Image',
        body: [
          'If an image is inside a folder, include the folder name in the path.',
        ],
        code: `<img src="images/logo.png" alt="My Website Logo">`,
        bullets: [
          'src="images/logo.png": Tells the browser to look inside the images folder for logo.png.',
          'alt="My Website Logo": Describes the image for screen readers and browsers that cannot display it.',
        ],
      },
      {
        title: 'Code Example: Link to Another Page',
        body: [
          'If about.html sits next to index.html, link to it by file name.',
        ],
        code: `<a href="about.html">Link to About page</a>`,
      },
      {
        title: 'Relative vs. Absolute Paths',
        body: [
          'Most class projects will use relative paths. A relative path describes where a file is located compared with the current HTML file.',
          'An absolute path uses the complete URL to a file or page.',
        ],
        bullets: [
          'Relative path: images/logo.png',
          'Relative path: about.html',
          'Absolute path: https://www.example.com/images/logo.png',
        ],
        note:
          'Use relative paths for files inside your own project. Use absolute URLs when linking to outside websites or hosted resources.',
      },
      {
        title: 'Code Example: Link JavaScript',
        body: [
          'JavaScript files add interactivity to webpages.',
          'A common pattern is to load your script near the end of the body so the HTML exists before the script runs.',
        ],
        code: `<body>
  <h1>Welcome to My Website</h1>
  <script src="script.js"></script>
</body>`,
        bullets: [
          'src="script.js": Tells the browser where the JavaScript file is located.',
        ],
      },
      {
        title: 'Complete HTML Example',
        body: [
          'Here is how index.html might connect a stylesheet, image, internal page, and JavaScript file.',
        ],
        code: `<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to My Website</h1>
  <img src="images/logo.png" alt="My Website Logo">
  <a href="about.html">Link to About page</a>
  <script src="script.js"></script>
</body>
</html>`,
      },
      {
        title: 'Common Mistakes',
        bullets: [
          'The file name in HTML does not exactly match the real file name.',
          'The file is in a folder, but the folder name is missing from the path.',
          'The path uses the wrong folder name, such as image instead of images.',
          'The file extension is missing or incorrect, such as logo.jpg when the real file is logo.png.',
          'The project works locally but breaks online because file names use inconsistent capitalization.',
        ],
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Find the HTML file that is asking for the resource.',
          'Find the resource file in your project folder.',
          'Trace the path from the HTML file to the resource file.',
          'Check spelling, capitalization, folder names, and file extensions.',
          'Open browser developer tools and look for 404 errors in the Console or Network tab.',
        ],
      },
      {
        title: 'Resources',
        resources: [
          {
            label: 'MDN: Creating hyperlinks',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links',
          },
          {
            label: 'MDN: HTML images',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images',
          },
        ],
      },
    ],
    practice: [
      'Create index.html, styles.css, script.js, and an images folder.',
      'Draw your project folder structure.',
      'Link one CSS file, one JavaScript file, one image, and one internal page from index.html.',
    ],
  },
  {
    slug: 'basic-html-structure-and-elements',
    number: '04',
    title: 'HTML Structure and Elements',
    eyebrow: 'HTML',
    summary:
      'Learn the fundamental building blocks of an HTML document and the elements used to create simple web pages.',
    goals: [
      'Write the basic structure of an HTML document',
      'Understand tags, content, elements, attributes, nesting, and void elements',
      'Use headings, paragraphs, images, lists, links, and common page elements',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "In the previous lesson, we learned how to link external resources like CSS and JavaScript to our HTML pages. Now, let's delve into the fundamental building blocks of an HTML document itself.",
        ],
      },
      {
        title: 'The DOCTYPE Declaration',
        body: [
          "Every HTML document should begin with a DOCTYPE declaration. This declaration specifies the document type and helps browsers correctly render the content. Here's the basic syntax:",
        ],
        code: `<!DOCTYPE html>`,
      },
      {
        title: 'The html Element',
        body: [
          'Every HTML document starts with the html element, which acts as the root container for all other elements on the page. It has two main sections: head and body.',
        ],
        code: `<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>`,
      },
      {
        title: 'The head Element',
        body: [
          'The head element contains meta-information about the HTML document, which is not displayed directly on the page.',
        ],
        bullets: [
          'title: Sets the title that appears in the browser tab.',
          'meta: Provides metadata about the page, such as character set and description.',
          'link: Links to external stylesheets.',
          'script: Links to external scripts.',
        ],
        code: `<head>
  <title>My Website</title>
  <meta charset="UTF-8">
  <meta name="description" content="A brief description of my website.">
  <link rel="stylesheet" href="styles.css">
</head>`,
        note:
          "While it's best to put stylesheet links in the head, script links should usually live at the bottom of the body.",
      },
      {
        title: 'Script Links at the Bottom of the Body',
        code: `<body>
  ...
  <script src="script.js"></script>
</body>`,
      },
      {
        title: 'The body Element',
        body: [
          'The body contains the visible content of the page, what users will see when they open the document. This includes elements like headings, paragraphs, images, lists, and links.',
        ],
      },
      {
        title: 'HTML Syntax: The Building Blocks',
        body: [
          'HTML is built from tags, content, elements, attributes, nesting, and void elements.',
        ],
      },
      {
        title: 'Tags',
        body: [
          'HTML elements are defined by opening and closing tags. Opening tags typically start with < and end with >, while closing tags start with </ and end with >.',
          'For example, <h1> is an opening tag for a heading element, and </h1> is its closing tag.',
        ],
      },
      {
        title: 'Content',
        body: [
          "The content between the opening and closing tags defines the element's purpose and what's displayed on the page. Text, images, lists, and other elements all have content.",
        ],
      },
      {
        title: 'Elements',
        body: [
          'Elements are the building blocks of HTML documents. They represent content or functionality and can be nested within other elements to create complex structures.',
          'For example, the h1 element would be <h1>Page Title</h1>.',
        ],
      },
      {
        title: 'Attributes',
        body: [
          "Attributes provide additional information about an element. They're specified within the opening tag and consist of a name-value pair separated by an equal sign.",
          'For example, the img element has a src attribute that specifies the image source.',
        ],
      },
      {
        title: 'Nesting',
        body: [
          'Elements can contain other elements, forming a hierarchical structure.',
          'The inner element, or child, must be opened and closed inside of the outer element, or parent. If the order of nested tags is wrong, the browser will try to fix the issue. This can lead to unexpected results.',
        ],
      },
      {
        title: 'Void Elements',
        body: [
          "Some HTML elements, like img and br, don't require a closing tag. They represent standalone content and are often referred to as void elements.",
        ],
        code: `<img src="image.png" alt="" />
<br />`,
      },
      {
        title: 'Headings',
        body: [
          "Headings, from h1 to h6, structure your content and define its importance. They're not just for displaying large text; they indicate hierarchy, like a book's title, chapters, and subheadings.",
        ],
        code: `<h1>Welcome to My Website</h1>
<h2>About Us</h2>
<h3>Our Mission</h3>`,
      },
      {
        title: 'Paragraphs',
        body: [
          'The p element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines or first-line indentation.',
          'HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
        ],
        code: `<p>This is a paragraph of text.</p>`,
      },
      {
        title: 'Images',
        body: [
          'The img element is used to embed images in your HTML document.',
        ],
        bullets: [
          'src: Specifies the URL or path to the image file.',
          'alt: Provides alternative text for the image. This text is displayed if the image cannot be loaded and is crucial for accessibility.',
        ],
        code: `<img src="images/logo.png" alt="My Website Logo">`,
        note:
          'Use descriptive alt text. For decorative images, use an empty alt attribute, such as alt="".',
      },
      {
        title: 'Lists',
        body: [
          "Unordered lists are used for items that don't have a specific order. Each item is wrapped in an li element.",
        ],
        code: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`,
      },
      {
        title: 'Ordered Lists',
        body: [
          'Ordered lists are used for items with a specific order. Each item is wrapped in an li element. Browsers typically render ordered lists with numbering.',
        ],
        code: `<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>`,
      },
      {
        title: 'Links',
        body: [
          'The a element creates hyperlinks that allow users to navigate to other web pages or sections within the same page.',
        ],
        bullets: [
          'href: Specifies the URL of the linked resource.',
          'text: The visible text displayed for the link.',
        ],
        code: `<a href="https://www.example.com">Visit Example Website</a>`,
      },
      {
        title: 'Types of Links',
        bullets: [
          'Internal Links: Point to another page within the same website.',
          'External Links: Point to a webpage on a different website.',
          'Relative Links: Use a path relative to the current page location.',
          'Anchor Links: Create links to specific sections within the same webpage.',
          'Telephone Links: Initiate a phone call when clicked.',
          'Email Links: Create a clickable email address.',
        ],
      },
      {
        title: 'Link Examples',
        code: `<a href="about.html">About Us</a>
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example Website</a>
<a href="images/logo.png">View Logo</a>
<a href="#contact">Contact Us</a>
<h2 id="contact">Contact Information</h2>
<a href="tel:+15551234567">Call Us</a>
<a href="mailto:contact@example.com">Contact Us</a>`,
        note:
          'External links can use target="_blank". When you do that, include rel="noopener noreferrer".',
      },
      {
        title: 'Other Elements',
        code: `<table><tr><td>Cell</td></tr></table>
<form><input type="text"></form>`,
      },
      {
        title: 'Key Points',
        body: [
          'The html, head, and body elements form the basic structure of every HTML document.',
          'The head element contains meta-information about the page. The body element contains the visible content that users will see.',
          'By combining these elements, you can start creating simple web pages with text, images, and links.',
        ],
      },
      {
        title: 'Exercise: Simple Page',
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`,
      },
      {
        title: 'Exercise: About Me Page',
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>About Me</title>
  </head>
  <body>
    <h2>John Doe</h2>
    <p>I enjoy coding, reading, and playing guitar.</p>
    <ul>
      <li>Coding</li>
      <li>Reading</li>
      <li>Playing Guitar</li>
    </ul>
  </body>
</html>`,
      },
      {
        title: 'Exercise: Contact Page',
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
  </head>
  <body>
    <h1>Contact Information</h1>
    <p>
      <a href="mailto:john.doe@example.com">Email: john.doe@example.com</a>
      <a href="tel:555-123-4567">555-123-4567</a>
    </p>
  </body>
</html>`,
      },
      {
        title: 'Next Steps',
        bullets: [
          "Use your browser's Developer Tools, also called Inspect.",
          'Run your code through an accessibility checker like WAVE.',
          'Check for color contrast using a contrast checker. Use 4.5:1 minimum for normal text.',
        ],
      },
      {
        title: 'Safari Note',
        body: [
          'To enable developer tools in Safari, click Safari -> Settings -> Advanced, then check "Show features for web developers."',
        ],
      },
    ],
    practice: [
      'Build a simple page with headings, paragraphs, images, lists, and links.',
      'Build an About Me page.',
      'Build a Contact page with email and telephone links.',
    ],
  },
  {
    slug: 'intro-to-css',
    number: '05',
    title: 'CSS Basics',
    eyebrow: 'CSS',
    summary:
      'Learn how CSS works with HTML and JavaScript, where styles can live, and how selectors, declarations, the cascade, and inheritance shape a site.',
    goals: [
      'Explain the relationship between HTML, CSS, and JavaScript',
      'Compare inline styles, internal stylesheets, and external stylesheets',
      'Use selectors, common CSS properties, the cascade, and inheritance',
    ],
    sections: [
      {
        title: 'What This Teaches',
        body: [
          'This lesson introduces CSS as the language that controls how HTML looks.',
          'You will learn where CSS can live, how selectors target HTML, how declarations change appearance, and why the cascade matters.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          'HTML gives a page structure, but CSS gives that structure visual hierarchy, spacing, rhythm, color, and layout.',
          'Good CSS makes a site easier to read, easier to use, and easier to maintain.',
          'The goal is not just to make a page pretty. The goal is to make visual decisions clearly and consistently.',
        ],
      },
      {
        title: 'Core Concept: Site Layers',
        body: [
          'CSS works with HTML and JavaScript to build web pages. Each layer has a different job.',
        ],
        bullets: [
          'HTML: Defines the content and structure of the page. This includes elements such as headings, paragraphs, images, lists, and forms.',
          'CSS: Controls the presentation and appearance of the HTML content. This includes colors, fonts, layout, spacing, and visual effects.',
          'JavaScript: Adds behavior to the page, making it interactive. This includes animations, dynamic content updates, and user input handling.',
        ],
      },
      {
        title: 'Core Concept: Where CSS Can Live',
        body: [
          'CSS can be applied directly to an element, written inside an HTML document, or placed in an external stylesheet.',
          'In class projects, external stylesheets should usually be your default because they keep structure and presentation separated.',
        ],
      },
      {
        title: 'Inline Styles',
        body: [
          'Styles are applied directly to an HTML element using the style attribute within the opening tag.',
        ],
        code: `<h1 style="color: blue; font-size: 2em;">Welcome!</h1>`,
        note:
          'Note: Inline styles are discouraged because they can reduce readability and maintainability, especially in larger projects.',
      },
      {
        title: 'Internal Stylesheets',
        body: [
          'Styles are defined within the head section using the style tag.',
        ],
        code: `<head>
  <style>
    h1 {
      color: red;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Welcome!</h1>
</body>`,
      },
      {
        title: 'External Stylesheets',
        body: [
          'Styles are placed in a separate file, such as styles.css, and linked using the link tag.',
        ],
        code: `<head>
  <link rel="stylesheet" href="styles.css">
</head>`,
        note:
          'Recommended: External stylesheets improve code organization and reuse.',
      },
      {
        title: 'Code Example: External Stylesheet Rule',
        code: `h1 {
  color: green;
  font-family: Arial, sans-serif;
}`,
      },
      {
        title: 'Core Concept: Selectors and Declarations',
        body: [
          'CSS syntax uses selectors and declarations. The selector chooses what to style. The declarations say how it should look.',
        ],
        bullets: [
          'Selector: Defines the elements to be styled.',
          'Declaration: A set of property-value pairs inside curly braces.',
          'Property: The style to be applied, such as color.',
          'Value: The setting for the property, such as red.',
        ],
        code: `selector {
  property: value;
}`,
      },
      {
        title: 'Code Example: Type Selector',
        body: [
          'Targets all elements of a given type. For example, targeting all h1 tags.',
        ],
        code: `h1 {
  color: blue;
}`,
      },
      {
        title: 'Code Example: ID Selector',
        body: [
          'Targets a single element with a specific ID, defined using the # symbol.',
        ],
        code: `#myDiv {
  background-color: lightgray;
}`,
      },
      {
        title: 'Code Example: Class Selector',
        body: [
          'Targets any elements that use a given class, defined using the . symbol.',
        ],
        code: `.container {
  padding: 20px;
  background-color: #efefef;
}`,
      },
      {
        title: 'Code Example: Descendant Selector',
        body: [
          'Targets elements that are nested within another element. This example targets only paragraphs inside div elements.',
        ],
        code: `div p {
  color: green;
}`,
      },
      {
        title: 'Code Example: Pseudo-Class',
        body: [
          'Targets elements in a particular state, like when a user hovers over a link.',
        ],
        code: `a {
  color: green;
}

a:hover {
  color: blue;
}`,
      },
      {
        title: 'CSS Comments',
        body: [
          'Comments in CSS are used to leave notes and are not rendered on the page.',
        ],
        code: `body {
  color: blue;
  /* Multi-line comment
  border: 1px solid black;
  background-color: #efefef; */
}`,
        note:
          'CSS uses /* */ for comments. The // single-line comment style is common in some languages, but it is not valid standard CSS.',
      },
      {
        title: 'Core Concept: Common CSS Properties',
        body: [
          'These are frequently used CSS properties to control layout, text, and element appearance.',
        ],
        code: `p {
  color: blue;
}

body {
  background-color: lightgray;
}

h1 {
  font-size: 2em;
}

p {
  font-family: Arial, sans-serif;
}

div {
  width: 500px;
}

img {
  height: 200px;
}

p {
  margin: 20px;
  padding: 10px;
}

div {
  border: 1px solid black;
}`,
      },
      {
        title: 'Code Example: Container / Wrapper',
        body: [
          'Used to center content and limit maximum width for layout consistency.',
        ],
        code: `div {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}`,
      },
      {
        title: 'Code Example: Centering in CSS',
        body: [
          'Text can be centered with text-align. Block elements can be centered using auto margins.',
        ],
        code: `p {
  text-align: center;
}

div {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}`,
      },
      {
        title: 'Core Concept: The Cascade',
        body: [
          'The cascade is how the browser decides which CSS rule wins when more than one rule applies to the same element.',
          'When CSS feels confusing, the issue is often order, specificity, or inheritance.',
        ],
        bullets: [
          'Last Rule: Later rules override earlier ones if selectors match.',
          'Specificity: More specific selectors take precedence.',
          '!important: Overrides all other rules but should be used sparingly.',
        ],
      },
      {
        title: 'Core Concept: Inheritance',
        body: [
          'Some properties, like color and font-family, are inherited by child elements.',
          'Inheritance lets you set broad defaults on the body, then override them when needed.',
        ],
        code: `body {
  color: red;
}

p {
  color: blue;
}`,
      },
      {
        title: 'Common Mistakes',
        bullets: [
          'Forgetting to link the CSS file in the HTML.',
          'Writing a selector that does not match the HTML.',
          'Using an ID selector when a reusable class would be better.',
          'Forgetting a semicolon between declarations.',
          'Expecting an earlier rule to win when a later rule overrides it.',
          'Using !important instead of understanding the cascade.',
        ],
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Confirm the CSS file path is correct in the link tag.',
          'Open browser developer tools and inspect the element.',
          'Check whether the selector matches the element you are trying to style.',
          'Look for crossed-out styles in developer tools to see which rules are being overridden.',
          'Check spelling, punctuation, braces, colons, and semicolons.',
          'Simplify the selector and test one property at a time.',
        ],
      },
      {
        title: 'Resources',
        resources: [
          {
            label: 'MDN: CSS basics',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics',
          },
          {
            label: 'MDN: CSS selectors',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors',
          },
          {
            label: 'CSS-Tricks',
            href: 'https://css-tricks.com/',
          },
          {
            label: 'W3Schools CSS',
            href: 'https://www.w3schools.com/css/',
          },
        ],
      },
    ],
    practice: [
      'Move styles out of HTML and into an external stylesheet.',
      'Create type, class, and pseudo-class selectors.',
    ],
  },
  {
    slug: 'styling-text-with-css',
    number: '06',
    title: 'CSS Text Styling',
    eyebrow: 'Typography',
    summary:
      'Use CSS font and text layout properties to control the appearance, spacing, and alignment of text.',
    goals: [
      'Use font style properties like color, font-family, font-size, font-style, and font-weight',
      'Use text properties like transform, decoration, shadow, alignment, line-height, letter-spacing, and word-spacing',
      'Connect text styling decisions to readability and visual hierarchy',
    ],
    sections: [
      {
        title: 'Font Styles',
        body: [
          'Font styles affect the appearance of text within your HTML elements. Here are some key properties:',
        ],
      },
      {
        title: 'color',
        body: [
          'Updates the foreground color of the text. It also affects the color of any associated underlines included with text-decoration.',
        ],
        code: `p {
  color: #1f2937;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color' },
          'Demo',
        ],
      },
      {
        title: 'font-family',
        body: [
          'Used to set a different font for your text. Use web-safe fonts to ensure consistent display across different devices and browsers.',
          'The font stack is a list of fonts, from left to right, that the browser will try to load.',
        ],
        code: `body {
  font-family: Arial, Helvetica, sans-serif;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-family' },
          'Demo',
        ],
      },
      {
        title: 'font-size',
        body: [
          'Sets the size of the text. Common units include:',
        ],
        bullets: [
          'px: Fixed size',
          'em: Relative to the parent',
          'rem: Relative to the root',
        ],
        code: `h1 {
  font-size: 2rem;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size' },
          'Demo',
        ],
      },
      {
        title: 'font-style',
        body: ['Used to toggle italics.'],
        code: `em {
  font-style: italic;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style' },
          'Demo',
        ],
      },
      {
        title: 'font-weight',
        body: [
          'Controls the boldness of text using keywords or numeric values from 100 to 900.',
        ],
        code: `strong {
  font-weight: 700;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight' },
          'Demo',
        ],
      },
      {
        title: 'text-transform',
        body: ['Applies casing transformations to text.'],
        code: `.eyebrow {
  text-transform: uppercase;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform' },
          'Demo',
        ],
      },
      {
        title: 'text-decoration',
        body: [
          'Used for underlines and other text lines. Often used to style or remove link underlines.',
        ],
        code: `a {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration' },
          'Demo',
        ],
      },
      {
        title: 'text-shadow',
        body: [
          'Applies shadow to text with horizontal offset, vertical offset, blur, and color.',
        ],
        code: `h1 {
  text-shadow: 1px 1px 2px rgb(0 0 0 / 0.25);
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow' },
          'Demo',
        ],
      },
      {
        title: 'Text Layout',
        body: [
          'These properties affect spacing and alignment of text:',
        ],
      },
      {
        title: 'text-align',
        body: ['Aligns text left, right, center, or justify.'],
        code: `p {
  text-align: center;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align' },
          'Demo',
        ],
      },
      {
        title: 'line-height',
        body: [
          'Controls spacing between lines. Use unitless values like 1.5 for better scalability.',
        ],
        code: `p {
  line-height: 1.5;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height' },
          'Demo',
        ],
      },
      {
        title: 'letter-spacing',
        body: ['Controls spacing between letters.'],
        code: `.label {
  letter-spacing: 0.08em;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing' },
          'Demo',
        ],
      },
      {
        title: 'word-spacing',
        body: ['Controls spacing between words.'],
        code: `p {
  word-spacing: 0.1em;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing' },
          'Demo',
        ],
      },
    ],
    practice: [
      'Style headings, paragraphs, and links on an existing page.',
      'Create a simple form and use CSS to improve readability and spacing.',
    ],
  },
  {
    slug: 'css-working-with-fonts',
    number: '07',
    title: 'CSS Fonts',
    eyebrow: 'Typography',
    summary:
      'Use fonts effectively in CSS, understand their design and performance impact, and apply best practices for selection and implementation.',
    goals: [
      'Understand web-safe fonts, system fonts, font stacks, and generic font families',
      'Import custom fonts with @font-face and Google Fonts',
      'Choose font formats and performance strategies that support readability and speed',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "Fonts play a central role in web design. They influence how a website looks and feels, and affect how easily users can read your content.",
          "In this lesson, you'll explore how to use fonts effectively in CSS, understand their impact on design and performance, and learn best practices for font selection and implementation.",
        ],
      },
      {
        title: 'Web-Safe Fonts and System Fonts',
        body: [
          'Key Point: Fonts vary across devices. Some are more likely to be present, but none are truly universal.',
        ],
        bullets: [
          '"Web-safe" fonts are just widely available fonts, not guaranteed to be present on every device.',
          'System fonts are defaults from the operating system. Your site may appear differently on various platforms if these are used as fallbacks.',
        ],
      },
      {
        title: 'Using Font Stacks',
        code: `body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}`,
        body: [
          'The browser will try each font in order. If one is unavailable, it moves to the next. The generic family ensures a fallback display.',
        ],
      },
      {
        title: 'Generic Families',
        bullets: [
          'serif: with decorative strokes',
          'sans-serif: without strokes, often cleaner',
          'monospace: all characters take up the same space',
          'cursive: handwriting-style',
          'fantasy: decorative or stylized',
        ],
      },
      {
        title: 'Importing Custom Fonts with @font-face',
        code: `@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff'),
       url('myfont.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}`,
        note:
          'font-display: swap helps pages load faster by showing fallback fonts until the custom font is ready.',
      },
      {
        title: 'Google Fonts Integration',
        code: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">`,
      },
      {
        title: 'Using the Google Font in CSS',
        code: `body {
  font-family: 'Open Sans', sans-serif;
}`,
        note: 'Always include a fallback font.',
      },
      {
        title: 'Font File Formats',
        bullets: [
          '.woff2: Best compression, most recommended',
          '.woff: For older browsers',
          '.ttf: Used on older Android devices',
          '.eot: Obsolete, used for legacy Internet Explorer',
        ],
      },
      {
        title: 'Finding Fonts',
        bullets: [
          'Google Fonts: free and popular',
          'Adobe Fonts: subscription-based',
          'Font Squirrel: curated, often commercially licensed',
          'DaFont: check usage rights carefully',
        ],
        note:
          "Always check the license terms before using a font, even if it's free.",
      },
      {
        title: 'Styling with Fonts',
        code: `h1 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 2em;
}

p {
  font-family: 'Lora', serif;
  font-style: italic;
  line-height: 1.5;
}`,
      },
      {
        title: 'Performance Tips',
        bullets: [
          'Use .woff2 when possible.',
          'Only include needed font weights and styles.',
          'Subset fonts to reduce file size.',
          'Use font-display: swap to improve perceived load speed.',
        ],
      },
      {
        title: 'Accessibility Considerations',
        bullets: [
          'Choose legible fonts with strong contrast.',
          'Use relative units like em or rem.',
          'Use tools to check contrast ratios to ensure readability for all users.',
        ],
        code: `body {
  font-size: 1rem;
}

p {
  font-size: 1.2rem;
}`,
      },
      {
        title: 'Activity: Try It Yourself',
        body: [
          'Add the following to a practice HTML file:',
        ],
        bullets: [
          'Import a Google Font of your choice.',
          'Create a font stack using that font and at least two fallbacks.',
          'Style headings and paragraphs using different weights and styles.',
          'Test how your page looks in different browsers or operating systems.',
        ],
      },
    ],
    practice: [
      'Import a Google Font of your choice.',
      'Create a font stack with at least two fallbacks.',
      'Style headings and paragraphs with different weights and styles.',
      'Test the page in different browsers or operating systems.',
    ],
  },
  {
    slug: 'html-forms-building-interactive-user-interfaces',
    number: '08',
    title: 'HTML Forms',
    eyebrow: 'Forms',
    summary:
      'Use HTML form elements, input types, attributes, and accessibility practices to create user-friendly interactive interfaces.',
    goals: [
      'Understand the form element as the container for form controls',
      'Use input, textarea, select, option, label, and common form attributes',
      'Create accessible forms with labels, instructions, keyboard support, and clear submission behavior',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'Forms are essential for creating interactive web experiences, allowing users to input data, submit information, and engage with your website.',
          'This lesson delves into HTML form elements, exploring their various types, attributes, and best practices for creating user-friendly and accessible forms.',
        ],
      },
      {
        title: 'The form Element: The Container',
        body: [
          'The form element acts as a container for all form elements. It defines how the data entered by the user will be submitted to a server for processing.',
        ],
        code: `<form action="/submit_form" method="post">
</form>`,
      },
      {
        title: 'Form Attributes',
        bullets: [
          'action: Specifies the URL where the form data will be sent.',
          'method: Defines the HTTP method used to send the data, such as get or post.',
          'enctype: Specifies how the form data should be encoded when submitted.',
          'target: Specifies where to display the response after form submission.',
        ],
      },
      {
        title: 'Input Elements: Gathering User Data',
        body: [
          'The input element is the most versatile form element, used for various types of user input.',
        ],
      },
      {
        title: 'Text Input',
        code: `<label for="firstName">First Name:</label>
<input type="text" id="firstName" name="firstName" required placeholder="Enter your first name" autocomplete="given-name" autofocus>`,
      },
      {
        title: 'Password Input',
        code: `<label for="password">Password:</label>
<input type="password" id="password" name="password" required placeholder="Enter your password">`,
      },
      {
        title: 'Email Input',
        code: `<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required placeholder="Enter your email" autocomplete="email">`,
      },
      {
        title: 'Checkbox Input',
        code: `<input type="checkbox" id="terms" name="terms" required>
<label for="terms">I agree to the terms and conditions.</label>`,
      },
      {
        title: 'Other Form Elements',
        code: `<label for="comments">Comments:</label><br>
<textarea id="comments" name="comments" rows="5" cols="40" placeholder="Enter your comments here"></textarea>

<label for="country">Country:</label>
<select id="country" name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>`,
      },
      {
        title: 'Accessibility Considerations',
        bullets: [
          'Use label elements for every form field.',
          'Provide clear instructions and error messages.',
          'Use ARIA attributes to enhance accessibility.',
          'Ensure keyboard navigation and focus management.',
        ],
      },
      {
        title: 'Form Submission',
        body: [
          "When a form is submitted, data is sent to the server. Since this class doesn't cover server-side languages, forms should point to a confirmation page like thank-you.html.",
        ],
      },
      {
        title: 'Demos',
        bullets: [
          'Demo 1: User Registration Form',
          'Demo 2: Product Feedback Form',
        ],
      },
    ],
    practice: [
      'Build a user registration form with text, password, email, and checkbox inputs.',
      'Build a product feedback form with a textarea and select menu.',
      'Point your form action to a thank-you.html confirmation page.',
      'Check that every form field has a label.',
    ],
  },
  {
    slug: 'box-model-and-layout',
    number: '09',
    title: 'Box Model and Layout',
    eyebrow: 'Layout',
    summary:
      'Understand how elements are visually rendered, how their dimensions are calculated, and how display, float, flexbox, and grid affect layout.',
    goals: [
      'Explain content, padding, border, margin, and box-sizing',
      'Compare block-level and inline element behavior',
      'Identify common CSS layout techniques',
    ],
    sections: [
      {
        title: 'What This Teaches',
        body: [
          'This lesson teaches how every visible element on a webpage is drawn as a box.',
          'You will learn how content, padding, border, margin, and box-sizing affect the space an element takes up.',
          'You will also learn how basic layout techniques like display, float, flexbox, and grid change how elements arrange themselves.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          'Most layout problems are box model problems first.',
          'When spacing looks strange, elements overflow, columns do not line up, or a card is wider than expected, the answer is often padding, margin, border, or box-sizing.',
          'Understanding the box model gives you a reliable way to debug layout instead of guessing at random CSS properties.',
        ],
      },
      {
        title: 'Core Concept: Block vs. Inline Behavior',
        body: [
          'HTML elements are broadly categorized as either block-level or inline elements, each with distinct behaviors.',
        ],
      },
      {
        title: 'Block-level elements',
        bullets: [
          'Occupy the full width available to them by default.',
          'Create line breaks before and after the element, stacking vertically.',
          'Respect width and height properties.',
          'Padding, margins, and borders apply and affect the layout of surrounding elements.',
          'Examples: h1, p, div, ul, form, table',
        ],
      },
      {
        title: 'Inline elements',
        bullets: [
          'Only occupy the space needed for their content.',
          'Flow within a line of text, not creating line breaks.',
          'Ignore width and height properties.',
          "Vertical padding, margins, and borders apply but don't affect the positioning of other inline elements.",
          'Horizontal padding, margins, and borders apply and affect the positioning of other inline elements.',
          'Examples: span, a, img, strong, em',
        ],
      },
      {
        title: 'Core Concept: The CSS Box Model',
        body: [
          'Every element on a web page is treated as a rectangular box, composed of content, padding, border, and margin.',
        ],
      },
      {
        title: 'Box Layer: Content',
        body: [
          "The actual content of the element, such as text, images, or other media. The height and width of the content area determine the element's natural size.",
        ],
      },
      {
        title: 'Box Layer: Padding',
        body: [
          'The space between the content and the border. Padding is transparent and expands the background color of the element.',
        ],
        code: `p {
  background-color: lightblue;
  padding: 20px;
}`,
      },
      {
        title: 'Box Layer: Border',
        body: [
          'A visual boundary surrounding the padding and content. Borders can have different styles, colors, and thicknesses.',
        ],
        code: `div {
  border: 2px solid black;
}`,
      },
      {
        title: 'Box Layer: Margin',
        body: [
          'The space outside the border, creating separation between elements. Margins are transparent and collapse with adjacent margins.',
        ],
        code: `h1 {
  margin-bottom: 1em;
}`,
      },
      {
        title: 'Core Concept: box-sizing',
        body: [
          'The box-sizing property determines how the width and height of an element are calculated.',
          'Many developers prefer border-box because it makes element sizing easier to predict.',
        ],
        bullets: [
          'content-box: The default. Width and height include only the content area.',
          'border-box: Width and height include content, padding, and border, but not margin.',
        ],
        code: `div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box; /* Total width will still be 200px */
}`,
      },
      {
        title: 'Core Concept: Layout Techniques',
        body: [
          'CSS includes several layout techniques for controlling how elements are displayed and arranged.',
          'Different layout tools solve different layout problems. The trick is choosing the right one.',
        ],
      },
      {
        title: 'Code Example: display Property',
        bullets: [
          'display: none; hides the element completely.',
          'display: block; makes the element a block-level element.',
          'display: inline; makes the element inline.',
          'display: inline-block; combines block and inline behaviors.',
        ],
        code: `.hidden {
  display: none;
}

.button-like-link {
  display: inline-block;
  padding: 0.5rem 1rem;
}`,
      },
      {
        title: 'Float',
        body: [
          'float: left; or float: right; allows content to wrap around the floated element. Use sparingly due to complexity.',
        ],
      },
      {
        title: 'Flexbox',
        body: [
          'display: flex; enables the Flexbox layout model for one-dimensional layouts.',
        ],
        code: `.card-row {
  display: flex;
  gap: 1rem;
}`,
      },
      {
        title: 'Grid',
        body: [
          'display: grid; allows for two-dimensional layouts with rows and columns.',
        ],
        code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`,
      },
      {
        title: 'Common Mistakes',
        bullets: [
          'Forgetting that padding and border can increase the final size of an element when using content-box.',
          'Using margin when padding would better create internal space.',
          'Using padding when margin would better separate two elements.',
          'Trying to set width or height on inline elements and expecting it to work like a block.',
          'Using float for modern page layout when flexbox or grid would be simpler.',
          'Not accounting for margin collapse between vertical block elements.',
        ],
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Inspect the element in browser developer tools and look at the box model diagram.',
          'Check whether the element is block, inline, inline-block, flex, or grid.',
          'Temporarily add a border or background color to see the real size of the element.',
          'Check whether spacing is coming from padding, margin, gap, or line-height.',
          'Set box-sizing: border-box when sizing feels unpredictable.',
          'Remove layout rules one at a time to find which property is creating the issue.',
        ],
      },
      {
        title: 'Resources',
        resources: [
          {
            label: 'MDN: The box model',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model',
          },
          {
            label: 'MDN: display',
            href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
          },
          {
            label: 'CSS-Tricks: box-sizing',
            href: 'https://css-tricks.com/box-sizing/',
          },
        ],
      },
    ],
    practice: [
      'Build a content card using padding, border, margin, and box-sizing.',
      'Create a simple two-column layout.',
    ],
  },
  {
    slug: 'flexbox',
    number: '10',
    title: 'Flexbox',
    eyebrow: 'Layout',
    summary:
      'Use CSS Flexbox to arrange items flexibly within a container for responsive, one-dimensional layouts.',
    goals: [
      'Understand flex containers, flex items, axes, wrapping, alignment, and ordering',
      'Create a basic flex container and control item direction, wrapping, and spacing',
      'Use advanced Flexbox properties like grow, shrink, basis, align-content, and order',
    ],
    sections: [
      {
        title: 'What This Teaches',
        body: [
          'This lesson teaches how to use CSS Flexbox to arrange items inside a container.',
          'You will learn how flex containers, flex items, axes, wrapping, spacing, alignment, and ordering work together.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          'Flexbox is one of the most useful layout tools for everyday interface work.',
          'It is especially good for navigation bars, button rows, card layouts, media objects, and centering content.',
          'Unlike CSS Grid, Flexbox is primarily used for one-dimensional layouts, meaning a row or a column.',
        ],
      },
      {
        title: 'Core Concept: Flexbox Vocabulary',
        bullets: [
          'Flex Container: The parent element that contains flex items.',
          'Flex Item: The child elements within the flex container.',
          'Flex Direction: Determines the main axis of the container, row or column.',
          'Flex Wrap: Controls whether items wrap to the next line.',
          'Justify Content: Aligns items along the main axis.',
          'Align Items: Aligns items along the cross axis.',
          'Align Content: Aligns multiple lines of items within the container.',
          'Flex Grow: Defines how much a flex item should grow relative to other items.',
          'Flex Shrink: Defines how much a flex item should shrink relative to other items.',
          'Flex Basis: Sets the initial size of a flex item.',
          'Order: Controls the order of flex items.',
        ],
      },
      {
        title: 'Core Concept: Container and Items',
        body: [
          'To begin using Flexbox, set the display property of a container to flex. All direct child elements will become flex items.',
        ],
        code: `.flex-container {
  display: flex;
}`,
      },
      {
        title: 'Code Example: Flex Direction',
        body: [
          'The flex-direction property sets the direction of the main axis, defining how flex items are placed in the flex container.',
        ],
        code: `.flex-container {
  display: flex;
  flex-direction: row; /* Default value */
  /* or flex-direction: column; */
}`,
      },
      {
        title: 'Code Example: Flex Wrap',
        body: [
          'Use flex-wrap to specify whether the flex items should wrap onto multiple lines or stay on a single line.',
        ],
        code: `.flex-container {
  display: flex;
  flex-wrap: wrap;
}`,
      },
      {
        title: 'Code Example: Justify Content',
        body: [
          'justify-content aligns flex items along the main axis. It controls the alignment and spacing between items.',
        ],
        code: `.flex-container {
  display: flex;
  justify-content: space-between;
}`,
      },
      {
        title: 'Code Example: Align Items',
        body: [
          'The align-items property aligns items along the cross axis, perpendicular to the main axis.',
        ],
        code: `.flex-container {
  display: flex;
  align-items: center;
}`,
      },
      {
        title: 'Practical Example: Responsive Navigation Bar',
        code: `.site-nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
}`,
      },
      {
        title: 'Practical Example: Flexible Card Layout',
        code: `.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 16rem;
}`,
      },
      {
        title: 'Core Concept: Advanced Item Control',
        body: [
          'Flexbox also includes properties for controlling how individual items grow, shrink, and appear within a container.',
        ],
      },
      {
        title: 'Flex Grow, Shrink, and Basis',
        bullets: [
          'Flex Grow: Controls how much a flex item should grow relative to other items.',
          'Flex Shrink: Controls how much a flex item should shrink relative to other items.',
          'Flex Basis: Sets the initial size of a flex item.',
        ],
        code: `.item {
  flex: 1 1 12rem;
}`,
      },
      {
        title: 'Core Concept: Align Content',
        body: [
          'align-content controls the spacing between multiple flex lines.',
          'It only has a visible effect when flex items wrap onto more than one line.',
        ],
        bullets: [
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'stretch',
        ],
      },
      {
        title: 'Core Concept: Order Property',
        body: [
          'The order property controls the order in which flex items appear within the container, regardless of their source order.',
          'Use this carefully. Visual order and source order can become different, which can confuse keyboard and screen reader users.',
        ],
        code: `.featured-item {
  order: -1;
}`,
      },
      {
        title: 'Common Mistakes',
        bullets: [
          'Putting display: flex on the wrong element.',
          'Forgetting that only direct children become flex items.',
          'Using justify-content when the issue is actually cross-axis alignment.',
          'Using align-items when there are multiple wrapped lines and align-content is needed.',
          'Expecting gap to work on older browser versions without checking support.',
          'Using order to fix visual layout while creating confusing keyboard or reading order.',
        ],
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Inspect the parent and confirm it has display: flex.',
          'Check which elements are direct children of the flex container.',
          'Identify the main axis from flex-direction.',
          'Use justify-content for the main axis and align-items for the cross axis.',
          'Check whether items are wrapping before using align-content.',
          'Temporarily add outlines or background colors to see each flex item.',
        ],
      },
      {
        title: 'Resources',
        resources: [
          { label: 'Flexbox Froggy', href: 'https://flexboxfroggy.com/' },
          { label: 'MDN Web Docs: CSS Flexbox', href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox' },
          { label: 'CSS-Tricks Flexbox Guide', href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
        ],
      },
    ],
    practice: [
      'Build a responsive navigation bar using flexbox.',
      'Create a row of cards with aligned buttons.',
    ],
  },
  {
    slug: 'responsive-web-design',
    number: '11',
    title: 'Responsive Web Design',
    eyebrow: 'Responsive',
    summary:
      'Build websites that adapt gracefully to different screen sizes and devices for a consistent user experience.',
    goals: [
      'Understand why responsive design matters across devices',
      'Use fluid grids, flexible images, media queries, and breakpoints',
      'Apply responsive typography, responsive images, and accessible navigation patterns',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'Responsive web design is the practice of building websites that adapt gracefully to different screen sizes and devices.',
          'This ensures a consistent and optimal user experience across desktops, laptops, tablets, and smartphones.',
          'This lesson explores the core concepts of responsive design and demonstrates techniques for creating flexible and adaptable layouts.',
        ],
      },
      {
        title: 'The Importance of Responsive Design',
        body: [
          "In today's multi-device world, users access websites from a variety of screens. Responsive design is crucial for the following reasons:",
        ],
        bullets: [
          'Improved User Experience: Provides a consistent and usable experience across all devices.',
          'Increased Reach: Reaches a wider audience by accommodating different devices.',
          'SEO Benefits: Google favors mobile-friendly websites in search rankings.',
          'Easier Maintenance: Manages a single website instead of separate versions for different devices.',
        ],
      },
      {
        title: 'Core Techniques',
        body: [
          'Responsive design relies on a few foundational techniques that work together to make layouts flexible and adaptable.',
        ],
        bullets: [
          'Fluid Grids: Use relative units like percentages for widths instead of fixed units like pixels. This allows elements to scale proportionally to the screen size.',
          'Flexible Images: Prevent images from overflowing their containers by setting max-width: 100%; and height: auto;.',
          'Media Queries: Apply different CSS styles based on device characteristics like screen size, orientation, and resolution.',
        ],
      },
      {
        title: 'Media Queries: The Foundation of Responsive Design',
        body: [
          'Media queries allow you to define CSS rules that only apply when certain conditions are met, such as screen width or orientation.',
        ],
        code: `@media (condition) {
  /* CSS rules to apply when the condition is true */
}`,
      },
      {
        title: 'Common Conditions',
        bullets: [
          'min-width: Applies styles when the screen width is at least the specified value.',
          'max-width: Applies styles when the screen width is at most the specified value.',
          'orientation: Applies styles based on screen orientation, portrait or landscape.',
        ],
      },
      {
        title: 'Breakpoints',
        body: [
          'Breakpoints are specific screen widths that define the points at which your layout or content should change.',
        ],
        bullets: [
          'Mobile: Around 320px - 480px',
          'Tablet: Around 768px - 1024px',
          'Desktop: Around 1280px and above',
        ],
      },
      {
        title: 'Media Query Example',
        code: `/* Default styles for larger screens */
.container {
  width: 960px;
  margin: 0 auto;
}

/* Styles for smaller screens */
@media (max-width: 768px) {
  .container {
    width: 90%;
  }
}`,
      },
      {
        title: 'Combining Conditions',
        body: [
          'You can combine multiple conditions using logical operators like and, or, and not.',
        ],
        code: `@media (min-width: 768px) and (orientation: landscape) {
  /* Styles for landscape tablets */
}

@media (max-width: 768px) or (orientation: portrait) {
  /* Styles for smaller screens or portrait orientation */
}`,
      },
      {
        title: 'Other Media Features',
        bullets: [
          'aspect-ratio: Target devices with specific aspect ratios.',
          'resolution: Apply styles for high-DPI screens.',
          'color: Target devices with different color capabilities.',
          'hover: Distinguish between touch and mouse interactions.',
        ],
      },
      {
        title: 'Mobile-First vs. Desktop-First',
        bullets: [
          'Mobile-First: Start with styles for the smallest screen and progressively add styles for larger screens using min-width media queries. This approach is generally favored for performance and maintainability.',
          'Desktop-First: Start with styles for the largest screen and progressively add styles for smaller screens using max-width media queries.',
        ],
      },
      {
        title: 'Viewport Meta Tag',
        body: [
          'The viewport meta tag is essential for controlling how a web page is scaled and displayed on mobile devices.',
        ],
        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        bullets: [
          "width=device-width: Sets the viewport width to the device's screen width.",
          'initial-scale=1.0: Sets the initial zoom level to 1.0, no zoom.',
        ],
      },
      {
        title: 'Responsive Images',
        body: [
          'Responsive images ensure that images display properly and efficiently on different screen sizes and resolutions.',
        ],
        code: `img {
  max-width: 100%;
  height: auto;
}`,
      },
      {
        title: 'Using srcset and sizes',
        code: `<img src="image.jpg"
     srcset="image-small.jpg 300w, image-medium.jpg 600w, image-large.jpg 1200w"
     sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw">`,
        note:
          'This setup lets the browser choose the best image source based on the screen size and resolution.',
      },
      {
        title: 'Using the picture Element',
        code: `<picture>
  <source media="(max-width: 600px)" srcset="image-small.jpg">
  <source media="(max-width: 1000px)" srcset="image-medium.jpg">
  <img src="image-large.jpg" alt="Description">
</picture>`,
        note:
          'This allows different image sources to be served based on screen size, optimizing quality and performance.',
      },
      {
        title: 'Modern Image Formats',
        body: [
          'Consider using formats like WebP for better compression and quality. The picture element can help serve WebP to browsers that support it.',
        ],
      },
      {
        title: 'Responsive Typography',
        body: [
          'Ensure that text remains readable and attractive on all screen sizes.',
        ],
        code: `body {
  font-size: 16px;
}

h1 {
  font-size: 2rem;
}

p {
  font-size: 1.2em;
}`,
      },
      {
        title: 'Viewport Units',
        code: `h1 {
  font-size: 4vw;
}`,
      },
      {
        title: 'Using Media Queries for Typography',
        code: `@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  p {
    line-height: 1.5;
  }
}`,
      },
      {
        title: 'Other Tips',
        bullets: [
          'Use heavier font weights for small screens.',
          'Adjust line length with max-width.',
        ],
      },
      {
        title: 'Responsive Navigation Examples',
        body: [
          'Navigation often needs special attention to ensure usability on smaller screens. Below are two popular mobile navigation patterns.',
        ],
        bullets: [
          'Hamburger Menu: A collapsible menu that reveals items when the button is clicked. Useful for conserving space.',
          'Off-Canvas Menu: A side-sliding menu that appears from the edge of the screen. Good for more complex navigations.',
        ],
      },
      {
        title: 'Accessibility',
        body: [
          'Make sure navigation menus and other components are usable by everyone.',
        ],
        bullets: [
          'Use ARIA attributes like aria-expanded and aria-controls.',
          'Ensure keyboard operability.',
        ],
      },
      {
        title: 'Testing and Debugging',
        bullets: [
          'Browser DevTools: Use to simulate screen sizes and debug styles.',
          'Real Devices: Always verify on physical devices when possible.',
        ],
      },
      {
        title: 'Additional Resources',
        resources: [
          { label: 'Responsive Web Design Basics', href: 'https://web.dev/learn/design/' },
          { label: 'Media Queries', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries' },
          { label: 'Responsive Images', href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images#responsive_images' },
        ],
      },
    ],
    practice: [
      'Create a responsive container using relative widths.',
      'Add a media query that changes layout below 768px.',
      'Make images flexible with max-width and height auto.',
      'Test the page in browser DevTools and on a real device if possible.',
    ],
  },
  {
    slug: 'javascript-in-the-dom',
    number: '12',
    title: 'JavaScript in the DOM',
    eyebrow: 'JavaScript',
    summary:
      'Use JavaScript and the Document Object Model to select elements, change content, respond to events, and create dynamic interfaces.',
    goals: [
      'Explain the DOM as a living representation of an HTML document',
      'Modify DOM element content, attributes, styles, and classes',
      'Use event listeners and the event object to respond to user actions',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "As front-end developers, we're not just concerned with static web pages. We want to create interactive and dynamic experiences that respond to user actions and provide engaging feedback.",
          "That's where JavaScript and the Document Object Model, or DOM, come in. Think of the DOM as a living, breathing representation of your HTML document.",
          'JavaScript allows you to access and manipulate this DOM, changing the content, structure, and style of your web page in real time.',
          "In this chapter, we'll learn how to select and manipulate DOM elements, respond to user events, and create dynamic effects that bring your web pages to life.",
        ],
      },
      {
        title: 'Adding JavaScript to Your Web Page',
        body: [
          'You can include JavaScript in your HTML document in three ways.',
        ],
      },
      {
        title: 'Inline',
        body: [
          'JavaScript code can be embedded directly in an HTML element using an event attribute like onclick, but this is mostly useful to recognize in older examples.',
          'For class projects, prefer external JavaScript files and addEventListener so behavior stays separate from markup.',
        ],
        code: `<button onclick="alert('Hello!')">Click me</button>`,
      },
      {
        title: 'Internal',
        body: [
          'JavaScript can be written inside script tags in the HTML file itself.',
        ],
        code: `<head>
  <script>
    // Your JavaScript code here
  </script>
</head>`,
      },
      {
        title: 'External',
        body: [
          'JavaScript can be placed in a separate file and linked with the src attribute.',
        ],
        code: `<body>
  ...
  <script src="script.js"></script>
</body>`,
        note:
          'This last approach is preferred for better organization and maintainability.',
      },
      {
        title: "The DOM: Your Webpage's Blueprint",
        body: [
          'The DOM is a tree-like structure that represents all elements, attributes, and text in your HTML. Each element becomes a node, and JavaScript can interact with these nodes.',
        ],
      },
      {
        title: 'Modifying DOM Elements',
        body: [
          "Once you've selected an element, you can modify its content, attributes, or style using JavaScript.",
        ],
      },
      {
        title: 'Modifying Content',
        code: `element.textContent = 'New content'; // Updates the text content
element.innerHTML = '<p>New HTML content</p>'; // Updates the HTML content`,
        note:
          'Use textContent when inserting plain text. Use innerHTML carefully because inserting untrusted content can create security and accessibility problems.',
      },
      {
        title: 'Modifying Attributes',
        code: `element.setAttribute('class', 'newClass');
element.href = 'https://www.example.com';`,
      },
      {
        title: 'Modifying Styles',
        code: `element.style.color = 'red';
element.style.display = 'none';`,
      },
      {
        title: 'Working with classList',
        body: [
          "The classList API provides a more convenient way to work with an element's classes.",
        ],
        bullets: [
          'add(className): Adds a class to the element.',
          'remove(className): Removes a class from the element.',
          'toggle(className): Toggles a class on or off.',
          'contains(className): Checks if the element has a specific class.',
        ],
        code: `<div class="my-class">Element content</div>

const element = document.querySelector('.my-class');
element.classList.add('active');

if (element.classList.contains('active')) {
  // Do something
}`,
      },
      {
        title: 'Traversing the DOM',
        body: [
          'Being able to traverse the DOM is useful when you need to move between related elements. You can navigate the DOM tree using these properties.',
        ],
        bullets: [
          'parentNode: The parent of the element.',
          "childNodes: A collection of the element's child nodes.",
          "firstChild: The element's first child node.",
          "lastChild: The element's last child node.",
          'nextSibling: The next sibling of the element.',
          'previousSibling: The previous sibling of the element.',
        ],
        code: `<div id="parent">
  <div id="child">First child</div>
  <div>Second child</div>
</div>

const child = document.getElementById('child');
const parent = child.parentNode;
const nextSibling = child.nextSibling;`,
      },
      {
        title: 'Creating and Inserting Elements',
        body: [
          'JavaScript allows you to dynamically create new elements and insert them into the DOM.',
        ],
        code: `const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';

const parent = document.getElementById('parent');
parent.appendChild(newParagraph);`,
      },
      {
        title: 'Event Listeners: Responding to User Actions',
        body: [
          'Event listeners allow you to execute JavaScript code when a specific event occurs on an element, such as a click, hover, or form submission.',
        ],
        code: `element.addEventListener('click', () => {
  // Code to execute when the element is clicked
});`,
      },
      {
        title: 'Using the Event Object',
        body: [
          'When an event occurs, an event object is passed to the event listener callback function. It contains information such as the event target, type, and methods like preventDefault().',
        ],
        code: `<a id="myLink" href="https://www.lsu.edu/">Link to LSU</a>

const link = document.getElementById('myLink');

link.addEventListener('click', (event) => {
  event.preventDefault();
  // Custom code here
});`,
      },
      {
        title: 'Creating a Navigation Menu Toggle (Revisited)',
        body: [
          'This example revisits the use of DOM manipulation to control visibility of a navigation menu using JavaScript, often used in mobile layouts.',
        ],
      },
      {
        title: 'Off-Canvas Menu',
        body: [
          'This pattern shows a navigation menu that slides in from the side, typically used on mobile devices.',
        ],
      },
      {
        title: 'Additional Resources',
        resources: [
          { label: 'classList API - MDN', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/classList' },
          { label: 'Events Documentation - MDN', href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events' },
        ],
      },
    ],
    practice: [
      'Create a button that toggles a menu class.',
      'Update text on the page after a click.',
    ],
  },
  {
    slug: 'crafting-captivating-hero-sections',
    number: '13',
    title: 'Hero Sections',
    eyebrow: 'Design',
    summary:
      'Design responsive hero sections that make a strong first impression, communicate a clear message, and guide users toward action.',
    goals: [
      'Understand why above-the-fold content still matters',
      'Identify the key elements of a compelling hero section',
      'Build a responsive hero section with fluid layout and adaptable typography',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "The hero section of a website is like the opening scene of a movie. It's your chance to make a powerful first impression and draw users into your narrative.",
          'A well-designed hero section can be the key to capturing attention, communicating your message, and driving user engagement.',
          'Like a movie that must look good on both a phone and a theater screen, your hero section needs to be responsive and visually strong on any device.',
          'In this chapter, we explore the art of crafting captivating hero sections that grab attention and adapt seamlessly to different screens.',
        ],
      },
      {
        title: 'Above the Fold: Making a Strong First Impression',
        body: [
          'Before we dive into the specific elements of a hero section, let us talk about a crucial concept in web design: the fold.',
          'The fold refers to the portion of a web page that is visible to users without scrolling. It is the first thing they see when they land on your site, and it plays a critical role in capturing their attention and encouraging them to explore further.',
          "In the early days of the web, the fold was considered a rigid and limited space because screen resolutions were much smaller. With today's diverse range of devices and screen sizes, the concept of the fold has become more fluid and nuanced.",
        ],
      },
      {
        title: 'Why the Fold Still Matters',
        bullets: [
          'First Impressions: The content above the fold is the first thing users see, so it needs to make a strong and positive impression.',
          "Attention Span: Users often have short attention spans, and if they don't see something engaging above the fold, they might quickly leave your site.",
          'Setting Expectations: The content above the fold sets the tone and expectations for the rest of the website.',
        ],
      },
      {
        title: 'Designing for the Fold',
        bullets: [
          'Prioritize key content like headlines and CTAs.',
          'Optimize layout for different devices and screen sizes.',
          "Keep it clean. Don't overload this space.",
        ],
      },
      {
        title: "The Hero's Journey: Elements of a Captivating Hero Section",
        body: [
          'A hero section is typically the first thing users see when they land on your website. It is a prime piece of digital real estate, and it needs to work hard to achieve its goals.',
        ],
        bullets: [
          'Hero Image or Video: A visually striking image or video that captures the essence of your brand or message.',
          'Accessibility: Always provide appropriate alt text for hero images. For videos, consider captions or transcripts.',
          'Performance: Optimize large images or videos with lazy loading, compression, and modern formats like WebP.',
          'Headline: A concise and impactful headline that clearly communicates your value proposition or main purpose.',
          'Supporting Text: A brief paragraph or bullet points that elaborate on your headline.',
          'Call to Action: A clear and compelling action that encourages users to take the next step.',
        ],
        note:
          'Use action-oriented CTA language like "Get Started," "Shop Now," or "Sign Up Free," and make your CTA visually prominent using color, size, contrast, and whitespace.',
      },
      {
        title: 'Responsive Design for Hero Sections',
        body: [
          'Now, let us look at how to make a hero section responsive and ensure it looks strong on any device.',
        ],
      },
      {
        title: 'Fluid Grids',
        body: [
          'This example demonstrates a basic fluid grid setup for a hero section. The hero container takes up the full width of its parent but has a maximum width to keep it from getting too wide on large screens. The content is centered and adjusts based on screen size.',
        ],
        code: `<div class="hero">
  <div class="hero-content">
    <h1>Welcome to Our Website</h1>
    <p>Discover amazing things and explore our services.</p>
    <button>Learn More</button>
  </div>
</div>`,
      },
      {
        title: 'Fluid Grid CSS',
        code: `.hero {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero-content {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 768px) {
  .hero-content {
    width: 100%;
  }
}`,
      },
      {
        title: 'Responsive Typography',
        body: [
          'This example shows how to scale font size for headings in the hero section, ensuring readability on all screen sizes.',
        ],
        code: `.hero h1 {
  font-size: 2.5rem;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
}`,
      },
      {
        title: 'Real-World Examples: Hero Sections that Shine',
        body: [
          'Studying well-executed examples can inspire your own designs. These sites showcase engaging, responsive hero sections with compelling visuals and CTAs.',
        ],
        bullets: [
          'Stripe',
          'Samsung',
          'Apple',
          'Nike',
          'Nickelodeon',
          'Tekken 8',
        ],
      },
      {
        title: 'Code Challenge: Build Your Own Responsive Hero Section',
        body: [
          'Create a hero section for a fictional website or a website of your choice. Include a hero image, headline, supporting text, and a call to action.',
          "Use the principles and code examples we've discussed to ensure your hero section is visually appealing, informative, and adapts seamlessly to different screen sizes.",
        ],
        bullets: [
          'Use a fluid grid to structure the layout.',
          'Make sure the hero image is flexible and scales properly.',
          'Adjust typography for different screen sizes.',
          'Prioritize content and hide less important elements on smaller screens.',
          'Use a mobile-first navigation pattern if needed.',
        ],
      },
    ],
    practice: [
      'Build a responsive hero section with a hero image, headline, supporting text, and CTA.',
      'Use a fluid layout with a max-width.',
      'Adjust typography for smaller screens.',
      'Test the hero on mobile and desktop widths.',
    ],
  },
  {
    slug: 'css-positioning',
    number: '14',
    title: 'CSS Positioning',
    eyebrow: 'Layout',
    summary:
      'Use CSS positioning to precisely control element placement, stacking, sticky headers, and layered components.',
    goals: [
      'Understand static, relative, absolute, and fixed positioning',
      'Use top, right, bottom, left, and positioned ancestors correctly',
      'Use z-index and positioning to control layer order and avoid common layout issues',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'CSS Positioning allows you to precisely control the placement of elements on a web page.',
          'By understanding the different positioning techniques, you can create complex layouts and dynamic effects.',
        ],
      },
      {
        title: 'Understanding the Basics: Static Positioning',
        body: [
          'Imagine your website as a bustling city. Each element, like a building or a tree, has its own designated spot.',
          'By default, elements are placed in this natural order, one after the other. This is known as static positioning.',
        ],
        code: `.element {
  position: static;
}`,
      },
      {
        title: 'Beyond the Ordinary: Relative Positioning',
        body: [
          'With relative positioning, you can nudge elements around from their original positions using top, right, bottom, and left.',
          'This technique keeps the element in the document flow while adjusting its visual position.',
        ],
        code: `.element {
  position: relative;
  top: 10px;
  left: 20px;
}`,
      },
      {
        title: 'Absolute Positioning: Taking Control',
        body: [
          'Absolute positioning removes an element from the document flow and places it exactly where specified, relative to its closest positioned ancestor.',
        ],
        code: `.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
}`,
      },
      {
        title: 'Fixed Positioning: Locking Elements in Place',
        body: [
          'Fixed positioning locks an element in place relative to the browser window. It does not move when the user scrolls.',
        ],
        code: `.site-alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}`,
      },
      {
        title: 'Advanced Techniques',
        body: [
          'Once you understand positioning basics, you can control layers, fixed UI, sticky headers, and overlapping visual components.',
        ],
      },
      {
        title: 'Z-index: Controlling the Layer Order',
        body: [
          'The z-index property determines the stacking order of elements. Elements with higher z-index values appear on top of those with lower values.',
          'In this example, .element-2 appears above .element-1, and .element-3 is beneath both.',
        ],
        code: `.element-1 {
  position: relative;
  z-index: 1;
}

.element-2 {
  position: relative;
  z-index: 2;
}

.element-3 {
  position: relative;
  z-index: 0;
}`,
      },
      {
        title: 'Practical Examples',
        body: [
          'Positioning is useful for navigation, layered cards, badges, overlays, alerts, and scroll-based interface patterns.',
        ],
      },
      {
        title: 'Example: The Sticky Header',
        body: [
          'A sticky header stays fixed at the top of the viewport as you scroll.',
        ],
        code: `.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
}`,
      },
      {
        title: 'Example: Card Component',
        body: [
          'A card component can use layered content and a background image.',
        ],
        code: `.card {
  position: relative;
  overflow: hidden;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,
      },
      {
        title: 'Common Pitfalls and Troubleshooting',
        bullets: [
          'Overlapping Elements: Use proper z-index and positioning to manage layers.',
          "Relative Positioning Confusion: Remember it's relative to the element's original position.",
          'Cross-Browser Differences: Always test your layout on different browsers.',
          'Complex Layouts: Combine positioning with CSS Grid or Flexbox when needed.',
        ],
      },
    ],
    practice: [
      'Create one relatively positioned element.',
      'Add an absolutely positioned badge inside a card.',
      'Build a sticky header.',
      'Use z-index to control overlapping layers.',
    ],
  },
  {
    slug: 'transforms-filters-and-transitions',
    number: '15',
    title: 'CSS Transforms',
    eyebrow: 'Motion',
    summary:
      'Use CSS transforms and filters to create dynamic visual effects without disrupting page layout.',
    goals: [
      'Explain how transforms change the visual rendering of an element',
      'Use translate, rotate, scale, skew, matrix, and 3D transforms',
      'Apply filters with accessibility and performance in mind',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'CSS Transforms offer a powerful way to manipulate the appearance and positioning of elements on a web page without affecting their layout.',
          'By applying transformations, you can create dynamic and engaging effects that enhance the user experience.',
        ],
      },
      {
        title: 'Understanding CSS Transforms',
        body: [
          'The transform property is used to apply transformations to elements.',
          'Transform functions manipulate how an element is rendered visually.',
        ],
        bullets: [
          'translate: Moves an element to a new position relative to its current location.',
          'rotate: Rotates an element around a specified point.',
          'scale: Resizes an element to a new width and height.',
          'skew: Skews an element along the X or Y axis.',
          'matrix: Applies a 2D transformation matrix to an element.',
        ],
      },
      {
        title: 'Applying Transforms to Elements',
        body: [
          'To apply a transform to an element, use the transform property and specify the desired transform function and its parameters.',
        ],
        code: `.element {
  transform: translate(50px, 100px) rotate(45deg) scale(2);
}`,
      },
      {
        title: 'Hardware Acceleration',
        body: [
          'Using translate3d(x, y, 0) can trigger GPU compositing in many browsers, which may improve performance for animations and transitions.',
          'Use this carefully. Hardware acceleration is useful, but it is not a magic fix for every animation problem.',
        ],
        code: `.element {
  transform: translate3d(50px, 100px, 0);
}`,
      },
      {
        title: 'Moving Elements',
        body: [
          'You can use translate to move elements in pixels or percentages relative to their current position.',
          'The first value moves the element on the X axis. The second value moves it on the Y axis.',
        ],
        code: `.element {
  transform: translate(50px, 100px);
}

.element-percent {
  transform: translate(50%, 20%);
}`,
      },
      {
        title: 'Rotating Elements',
        body: [
          'Use rotate to rotate an element clockwise or counterclockwise. This is especially useful for creating interactive effects or rotating icons.',
          'The transform-origin property changes the point an element rotates around.',
        ],
        code: `.element {
  transform: rotate(45deg);
}

.corner-rotate {
  transform-origin: top left;
  transform: rotate(45deg) translate(20px, 20px);
}`,
      },
      {
        title: 'Scaling Elements',
        body: [
          'Scaling allows you to resize elements proportionally or along specific axes. This is useful for responsive design and hover effects.',
        ],
        code: `.element {
  transform: scale(1.2);
}

.wide-short {
  transform: scale(1.5, 0.8);
}`,
      },
      {
        title: 'Skewing Elements',
        body: [
          'Skew transformations tilt elements along the X or Y axis, adding a dynamic visual twist.',
        ],
        code: `.element {
  transform: skew(15deg, 5deg);
}`,
      },
      {
        title: '3D Transforms',
        body: [
          '3D transforms let you manipulate elements in three-dimensional space. Combine perspective, rotation, and positioning to create immersive interfaces.',
        ],
        code: `.scene {
  perspective: 500px;
}

.element {
  transform-style: preserve-3d;
  transform: rotateY(30deg);
}`,
      },
      {
        title: 'Demo: Card Flip',
        body: [
          'A card flip uses perspective on the parent, transform-style on the inner card, and rotateY to reveal the back side.',
        ],
        code: `.card-scene {
  perspective: 800px;
}

.card {
  transform-style: preserve-3d;
  transition: transform 400ms ease;
}

.card:hover {
  transform: rotateY(180deg);
}

.card-face {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}`,
      },
      {
        title: '3D Cube',
        body: [
          'A 3D cube is built by positioning six faces in 3D space and rotating the parent container.',
        ],
        code: `.cube {
  position: relative;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(35deg);
}

.cube-face {
  position: absolute;
  inset: 0;
}

.cube-front {
  transform: translateZ(75px);
}

.cube-back {
  transform: rotateY(180deg) translateZ(75px);
}`,
      },
      {
        title: 'CSS Filters',
        body: [
          'CSS filters apply visual effects to elements. These can include blur, grayscale, contrast adjustments, and more.',
          'Filters can enhance visual design and interaction, but they should not make content harder to read.',
        ],
        code: `.image {
  filter: blur(5px) grayscale(50%);
}`,
      },
      {
        title: 'Accessibility and Performance',
        bullets: [
          'Ensure color contrast is maintained when applying filters.',
          'Allow users to disable motion-heavy effects when needed.',
          'Use translate3d carefully for better performance.',
          'Avoid animating layout-affecting properties such as width, height, top, left, and margin.',
          'Prefer transform and opacity for smoother interface motion.',
        ],
        code: `.transition-example {
  transition: transform 200ms ease, opacity 200ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .transition-example {
    transition: none;
  }
}`,
      },
    ],
    practice: [
      'Move an element with translate.',
      'Rotate an icon or small graphic.',
      'Create a hover state that uses scale and transition.',
      'Build a simple card flip.',
      'Add a reduced-motion fallback for animated transform effects.',
    ],
  },
  {
    slug: 'css-transitions',
    number: '16',
    title: 'CSS Transitions',
    eyebrow: 'Motion',
    summary:
      'Use CSS transitions to create smooth state changes, hover effects, menu movement, and polished interface feedback.',
    goals: [
      'Explain the core properties that make a CSS transition work',
      'Create transitions with shorthand and individual properties',
      'Apply transitions in ways that respect accessibility and performance',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'CSS transitions provide a smooth and visually appealing way to change the properties of elements over time.',
          'By understanding the fundamentals of transitions, you can create dynamic and interactive user interfaces.',
          'This guide explores the key concepts of CSS transitions, provides practical examples, and offers strategies for creating effective and polished effects.',
        ],
      },
      {
        title: 'Benefits of Using CSS Transitions',
        bullets: [
          'Improved aesthetics: A button that subtly changes color on hover provides instant feedback and enhances design.',
          'Enhanced user experience: A navigation menu that slides into view feels more intuitive than an abrupt appearance.',
          'Improved perceived performance: Smooth fade-ins and fade-outs for loading indicators can make interactions feel faster.',
        ],
      },
      {
        title: 'Understanding CSS Transitions',
        body: [
          'Transitions rely on several properties that define what changes, how long the change takes, how it moves, and when it begins.',
        ],
        bullets: [
          'transition-property: Specifies the CSS property to transition.',
          'transition-duration: Sets how long the transition takes.',
          'transition-timing-function: Defines the speed curve of the transition, such as ease-in-out.',
          'transition-delay: Adds a delay before the transition begins.',
        ],
      },
      {
        title: 'Creating Transitions',
        body: [
          'The transition shorthand is the most common way to define a transition.',
        ],
        code: `.transition-example {
  transition: opacity 2s ease-in-out;
}`,
      },
      {
        title: 'Individual Properties',
        body: [
          'You can also write each transition property separately when you want the pieces to be more explicit.',
        ],
        code: `.transition-example {
  transition-property: opacity;
  transition-duration: 2s;
  transition-timing-function: ease-in-out;
}`,
      },
      {
        title: 'Fading In and Out an Element',
        body: [
          'Opacity transitions are useful for showing and hiding interface elements without an abrupt visual jump.',
        ],
        code: `.fade {
  opacity: 0;
  transition: opacity 200ms ease;
}

.fade.is-visible {
  opacity: 1;
}`,
      },
      {
        title: 'Hover Effects',
        body: [
          'Hover transitions can make links, buttons, and cards feel responsive. Keep them quick and focused.',
        ],
        code: `.button {
  background-color: #2f9e44;
  transform: translateY(0);
  transition: background-color 180ms ease, transform 180ms ease;
}

.button:hover {
  background-color: #237a35;
  transform: translateY(-2px);
}`,
      },
      {
        title: 'Menu Animations',
        body: [
          'Menus can use transform and opacity to slide or fade into view while avoiding expensive layout changes.',
        ],
        code: `.menu {
  opacity: 0;
  transform: translateY(-0.5rem);
  transition: opacity 200ms ease, transform 200ms ease;
}

.menu.is-open {
  opacity: 1;
  transform: translateY(0);
}`,
      },
      {
        title: 'Accordion Effects',
        body: [
          'Accordions are common UI patterns for revealing content. Transitions can help the change feel connected to the user action.',
        ],
        code: `.accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 240ms ease;
}

.accordion-panel.is-open {
  grid-template-rows: 1fr;
}

.accordion-content {
  overflow: hidden;
}`,
      },
      {
        title: 'Advanced Techniques',
        body: [
          'Transitions can be applied to multiple properties, used with JavaScript, or managed using transition groups in frameworks.',
        ],
        code: `.element {
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.element:hover {
  transform: scale(1.2);
  background-color: #f0f0f0;
}`,
      },
      {
        title: 'Transitions with JavaScript',
        body: [
          'JavaScript can change classes or inline styles that trigger CSS transitions. In most projects, toggling a class is easier to maintain than writing many inline styles.',
        ],
        code: `const element = document.getElementById('myElement');

element.addEventListener('click', () => {
  element.style.transform = 'scale(1.2)';
  element.style.transition = 'transform 0.2s ease-in-out';
});

element.addEventListener('mouseout', () => {
  element.style.transform = 'scale(1)';
});`,
      },
      {
        title: 'Accessibility and Performance',
        body: [
          'Use @media (prefers-reduced-motion: reduce) to respect user motion preferences.',
          'Limit transition use for performance, favoring properties like opacity and transform.',
        ],
        code: `@media (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}`,
      },
      {
        title: 'Custom Timing Functions',
        body: [
          'Custom timing functions using cubic-bezier() provide control over transition speed curves.',
          'Use online tools to create and visualize Bezier curves.',
        ],
        code: `.hover-element {
  transition: background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.element {
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}`,
      },
      {
        title: 'CSS Transition Libraries',
        bullets: [
          'Hover.css: Pre-built hover effects using transitions.',
          'Animate.css: A wide range of animation classes, many of which include transitions.',
          'Animista: Visual tool for generating custom CSS animations and transitions.',
        ],
      },
      {
        title: 'Conclusion',
        body: [
          'CSS transitions offer a powerful tool for enhancing user experience.',
          'By understanding their mechanics and thoughtfully applying them, you can craft responsive and engaging interfaces that delight users without sacrificing performance or accessibility.',
        ],
      },
    ],
    practice: [
      'Create a button hover state using color and transform transitions.',
      'Build a menu or accordion that opens with a transition.',
      'Add a prefers-reduced-motion fallback.',
      'Try one custom cubic-bezier timing function and explain how it changes the feel of the interaction.',
    ],
    resources: ['MDN CSS Transitions Web Docs', 'W3Schools CSS transitions'],
  },
  {
    slug: 'css-animation',
    number: '17',
    title: 'CSS Animation',
    eyebrow: 'Motion',
    summary:
      'Use keyframes and animation properties to create smooth visual effects without JavaScript.',
    goals: [
      'Identify the key properties that control CSS animations',
      'Create animations with @keyframes',
      'Apply animations to elements and trigger them through interaction',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'CSS animations offer a powerful way to bring your web pages to life by adding dynamic and engaging effects.',
          'By gradually changing the CSS properties of elements over time, you can create visually appealing and interactive experiences.',
          'This guide explores the fundamentals of CSS animations, providing essential knowledge and tools to enhance your web projects.',
        ],
      },
      {
        title: 'Key Components of Animations',
        bullets: [
          'Animation name: Unique identifier for the animation.',
          'Animation duration: Total time the animation takes to complete.',
          'Animation timing function: Defines the speed curve, such as linear or ease-in-out.',
          'Animation delay: Wait time before the animation starts.',
          'Animation iteration count: Number of times the animation repeats.',
          'Animation direction: Direction of animation play, such as normal, reverse, or alternate.',
          'Animation fill mode: Styles applied before and after the animation.',
        ],
      },
      {
        title: 'Creating Animations with @keyframes',
        body: [
          'The @keyframes rule defines the animation sequence. Set the percentage marks and apply style changes for each keyframe.',
        ],
        code: `@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}`,
      },
      {
        title: 'Applying Animations to Elements',
        body: [
          'Use the animation shorthand or its individual properties to attach animations to HTML elements.',
        ],
        code: `.animated-element {
  animation: fadeIn 2s ease-in-out infinite;
}`,
      },
      {
        title: 'Interactive Examples',
        bullets: [
          'Fading element',
          'Bouncing ball',
          'Bouncing text with rotation',
          'Progress bar',
          'Loading spinner',
        ],
      },
      {
        title: 'Fading Element',
        body: [
          'Use Case: Reveal hidden content or subtle transitions.',
        ],
        code: `@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 600ms ease both;
}`,
      },
      {
        title: 'Bouncing Ball',
        body: [
          'Use Case: Simulate physical motion or draw attention.',
        ],
        code: `@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-40px);
  }
}

.ball {
  animation: bounce 700ms ease-in-out infinite;
}`,
      },
      {
        title: 'Bouncing Text with Rotation',
        code: `@keyframes bounceRotate {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-1rem) rotate(8deg);
  }
}

.animated-text {
  animation: bounceRotate 900ms ease-in-out infinite;
}`,
      },
      {
        title: 'Progress Bar',
        code: `@keyframes progress {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

.progress-bar {
  transform-origin: left;
  animation: progress 2s ease forwards;
}`,
      },
      {
        title: 'Loading Spinner',
        code: `@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  inline-size: 2rem;
  block-size: 2rem;
  border: 4px solid #ddd;
  border-top-color: #2f9e44;
  border-radius: 50%;
  animation: spin 800ms linear infinite;
}`,
      },
      {
        title: 'Advanced Techniques',
        body: [
          'CSS animations can be combined with transforms, 3D space, and JavaScript to create more interactive designs.',
        ],
      },
      {
        title: '3D Transformations and Animations',
        body: [
          'By combining 3D transforms with animations, you can create immersive and visually striking effects.',
        ],
      },
      {
        title: 'Example: 3D Card Flip',
        body: [
          'This setup enables a smooth card flipping effect when hovered, simulating a 3D transformation using perspective and preserve-3d.',
        ],
        code: `.card-scene {
  perspective: 800px;
}

.card {
  transform-style: preserve-3d;
  transition: transform 400ms ease;
}

.card:hover {
  transform: rotateY(180deg);
}

.card-face {
  backface-visibility: hidden;
}`,
      },
      {
        title: 'Keyframe Animations with JavaScript',
        body: [
          'JavaScript can be used to dynamically control CSS animations, allowing for more interactive designs.',
        ],
      },
      {
        title: 'Example: Dynamically Triggering Animations',
        body: [
          'This method allows for animations that are triggered by user interactions, adding an extra layer of interactivity to your site.',
        ],
        code: `const button = document.querySelector('.animation-button');
const box = document.querySelector('.animated-box');

button.addEventListener('click', () => {
  box.classList.remove('is-animating');

  requestAnimationFrame(() => {
    box.classList.add('is-animating');
  });
});`,
      },
      {
        title: 'Conclusion',
        body: [
          'CSS animations allow developers to create smooth, interactive visual effects without using JavaScript.',
          'Mastering animations opens up a wide range of creative possibilities in user interface design.',
        ],
      },
    ],
    practice: [
      'Build one fading animation with @keyframes.',
      'Create one looping animation such as a spinner or bouncing object.',
      'Trigger an animation with a class change.',
      'Explain what user feedback the animation provides.',
    ],
  },
  {
    slug: 'gsap-web-animation',
    number: '18',
    title: 'GSAP Web Animation',
    eyebrow: 'GSAP',
    summary:
      'Use GSAP for performant tweens, timelines, easing, plugins, and more sophisticated web animation.',
    goals: [
      'Explain why GSAP is useful for complex web animation',
      'Create tweens and sequence them with timelines',
      'Use easing, callbacks, repeat, yoyo, and staggered animations',
      'Optimize animations with transform-based movement',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "As UX developers, we know that animation isn't just about flashy effects. It's about bringing our websites to life, creating engaging user experiences, and adding that extra touch of polish that captivates our audience.",
          'When it comes to web animation, GSAP is a powerful tool of choice.',
          'Think of GSAP as your animation playground, a place where you can unleash your creativity and bring complex animation ideas to reality.',
          'With its intuitive syntax, powerful features, and strong performance, GSAP helps create smooth, sophisticated, and performant animations.',
        ],
      },
      {
        title: 'Why GSAP Rocks',
        bullets: [
          'Unmatched Performance: GSAP is known for smooth and fluid animations, even on complex projects.',
          'Cross-Browser Compatibility: GSAP works across major browsers, reducing browser inconsistency headaches.',
          "Intuitive Syntax: GSAP's syntax is clean, concise, and easy to learn.",
          'Powerful Features: GSAP offers timelines, easing functions, plugins, and more.',
          'Active Community: GSAP has a supportive community with resources, tutorials, and inspiration.',
        ],
      },
      {
        title: 'Getting Started with GSAP',
        body: [
          'Include GSAP in your project by downloading it from the GSAP website or using a CDN.',
          'Use CSS selectors to target the elements you want to animate.',
          'Create a tween. A tween is the core animation unit in GSAP. It defines the properties you want to animate and the duration of the animation.',
        ],
        code: `<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>

<div class="my-element">Animate me</div>

<script>
  gsap.to('.my-element', {
    duration: 1,
    x: 100,
    rotation: 360,
  });
</script>`,
        note:
          'This animates the element with the class "my-element" to move 100 pixels to the right and rotate 360 degrees over 1 second.',
      },
      {
        title: 'Core concepts',
        bullets: [
          'Tweens: The basic animation unit in GSAP.',
          'Timelines: A powerful tool for sequencing and controlling multiple tweens.',
          'Easing Functions: Control the speed and acceleration of animations.',
          "Plugins: Extend GSAP's functionality with features like scroll triggering and morphing.",
        ],
      },
      {
        title: 'Timelines: Orchestrating Animations',
        body: [
          'Timelines allow you to sequence and control multiple tweens, creating complex animation sequences.',
        ],
        code: `const timeline = gsap.timeline();

timeline
  .to('.box', { duration: 0.5, x: 100 })
  .to('.box', { duration: 0.5, rotation: 180 })
  .to('.box', { duration: 0.5, scale: 1.2 });`,
      },
      {
        title: 'Easing Functions: Adding Personality',
        body: [
          'Easing functions control the speed and acceleration of animations, adding personality and realism.',
          'Use the GSAP Ease Visualizer for precise ease functions.',
        ],
        code: `gsap.to('.my-element', {
  duration: 1,
  x: 100,
  ease: 'elastic.out(1, 0.3)',
});`,
      },
      {
        title: "Plugins: Expanding GSAP's Capabilities",
        bullets: [
          'ScrollTrigger: Animate elements based on scroll position.',
          'MorphSVG: Morph SVG shapes into other shapes.',
          'SplitText: Break text into individual div elements.',
          'DrawSVG: Reveal SVG strokes progressively.',
          'Visit the GSAP Plugins Page for more.',
        ],
      },
      {
        title: 'Real-World Examples',
        bullets: [
          'Interactive Hero Sections',
          'Smooth Page Transitions',
          'Interactive Data Visualizations',
          'Micro-Interactions',
        ],
      },
      {
        title: 'Code Challenge',
        body: [
          'Create a simple animation that moves an element across the screen, changes its color, and rotates it using GSAP.',
          'Use a timeline and different easing functions.',
        ],
      },
      {
        title: 'Advanced Tweening',
        body: [
          "Sometimes, you want an animation to start from a state that's different from the element's current state. That's where gsap.from() and gsap.fromTo() come in.",
        ],
      },
      {
        title: 'From Tweens',
        bullets: [
          'gsap.from(): Animates an element from a specified state to its current state.',
          'gsap.fromTo(): Animates an element from one specified state to another specified state.',
        ],
        code: `gsap.from('.card', {
  duration: 0.6,
  opacity: 0,
  y: 30,
});

gsap.fromTo(
  '.button',
  { scale: 0.8, opacity: 0 },
  { duration: 0.4, scale: 1, opacity: 1 }
);`,
      },
      {
        title: 'Staggered Tweens',
        body: [
          'Staggered tweens allow you to animate multiple elements with a delay between each animation, creating visually appealing sequenced effects.',
        ],
        code: `gsap.to('.gallery-item', {
  duration: 0.4,
  opacity: 1,
  y: 0,
  stagger: 0.1,
});`,
      },
      {
        title: 'Callback Tweens',
        body: [
          'Callbacks allow you to trigger functions at different stages of an animation, such as when it starts, updates, or completes.',
        ],
        code: `gsap.to('.notification', {
  duration: 0.3,
  y: 0,
  opacity: 1,
  onStart: () => console.log('Animation started'),
  onComplete: () => console.log('Animation complete'),
});`,
      },
      {
        title: 'Repeat and Yoyo',
        body: [
          'The repeat and yoyo properties allow you to create looping and back-and-forth animations.',
        ],
        bullets: [
          'repeat: Specifies the number of times the animation should repeat.',
          'yoyo: Makes the animation play in reverse on alternate repeats.',
        ],
        code: `gsap.to('.pulse', {
  duration: 0.8,
  scale: 1.15,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});`,
      },
      {
        title: 'Overwrite Manager',
        body: [
          "The overwrite manager handles conflicting tweens, ensuring that only the most recent tween affects an element's properties.",
        ],
        code: `gsap.to('.box', {
  duration: 1,
  x: 200,
  overwrite: 'auto',
});`,
      },
      {
        title: 'Performance Optimization',
        body: [
          'When animating elements, prioritize using transform properties such as translateX, translateY, scale, and rotate over top, left, bottom, and right.',
          'Transform properties are handled more efficiently by browsers and often result in smoother animations.',
          'Animating top, left, and similar layout properties can trigger layout recalculations, which can be expensive and lead to janky animations.',
        ],
        code: `// Good: using transform
gsap.to('.element', { duration: 1, x: 100 });

// Avoid: animating layout position
gsap.to('.element', { duration: 1, left: 100 });`,
      },
      {
        title: 'Force3D: Encouraging GPU Rendering',
        body: [
          'In some cases, the browser may not automatically use hardware acceleration for transform properties. You can encourage GPU rendering by setting force3D: true in your tween.',
        ],
        code: `gsap.to('.element', {
  duration: 1,
  x: 100,
  force3D: true,
});`,
        note:
          'Use force3D sparingly. It can sometimes have the opposite effect and hurt performance.',
      },
      {
        title: 'Will-Change: Informing the Browser of Upcoming Changes',
        body: [
          "The will-change CSS property informs the browser that an element's properties are about to change.",
          'This allows the browser to optimize the element for animation, improving performance.',
        ],
        code: `.element {
  will-change: transform;
}`,
        note:
          'Use will-change carefully. It can consume memory and degrade performance if overused. Remove will-change after the animation is complete.',
      },
    ],
    practice: [
      'Move an element across the screen with GSAP.',
      'Change its color and rotate it during the same sequence.',
      'Use a timeline with at least three tweens.',
      'Try different easing functions and explain the difference.',
    ],
    resources: ['GSAP CDN', 'GSAP Ease Visualizer', 'GSAP Plugins Page'],
  },
  {
    slug: 'image-optimization',
    number: '19',
    title: 'Image Optimization',
    eyebrow: 'Performance',
    summary:
      'Optimize image formats, sizes, compression, responsive delivery, and lazy loading for faster websites.',
    goals: [
      'Identify problematic images',
      'Choose appropriate formats and compression',
      'Resize images to match their display dimensions',
      'Use responsive image techniques and lazy loading',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "Image optimization is a critical aspect of web performance.",
          'By optimizing images, you can significantly reduce page load times, improve user experience, and support stronger search engine performance.',
        ],
      },
      {
        title: 'Key Concepts',
        bullets: [
          'Identifying Problematic Images',
          'Image Format',
          'Image Size',
          'Image Compression',
          'Image Optimization Tools',
          'Responsive Images',
          'Lazy Loading',
        ],
      },
      {
        title: 'Identifying Problematic Images',
        body: [
          'Use browser developer tools and performance testing tools to find large and poorly optimized images.',
        ],
        bullets: [
          'Browser Developer Tools: Network and Performance tabs can locate large files and load bottlenecks.',
          'Website Speed Testing Tools: WebPageTest and Google PageSpeed Insights can reveal performance issues.',
          'Lighthouse: Audits image size issues, missing alt text, and other performance concerns.',
        ],
      },
      {
        title: 'Common Issues',
        bullets: [
          'Large file sizes',
          'Unoptimized formats',
          'Lack of compression',
          'Missing or incorrect alt text',
        ],
      },
      {
        title: 'Choosing the Right Image Format',
        body: [
          'Each format serves specific needs. Choosing the right one helps balance quality, file size, transparency, and animation support.',
        ],
        bullets: [
          'JPEG: Great for photos. Uses lossy compression.',
          'PNG: Ideal for images with sharp edges or transparency. Uses lossless compression.',
          'GIF: Use for simple animations. Limited color palette.',
          'WebP: Strong compression with transparency and animation support. Modern browser support required.',
        ],
      },
      {
        title: 'Resizing Images',
        body: [
          'Resize images to match their display dimensions.',
          'Avoid upscaling and use tools like Photoshop, GIMP, TinyPNG, or Squoosh.',
        ],
      },
      {
        title: 'Compressing Images',
        body: [
          'Compression reduces image file size. The right compression method depends on the type of image and how much quality loss is acceptable.',
        ],
      },
      {
        title: 'Lossy Compression',
        body: [
          'Find the balance between quality and file size. Use progressive JPEG when appropriate.',
        ],
        code: `// Photoshop: Save for Web, choose JPEG, adjust quality`,
      },
      {
        title: 'Lossless Compression',
        body: [
          'Lossless compression is ideal for text, line art, and graphics with solid colors.',
        ],
        code: `// Photoshop: Save for Web, choose PNG, adjust compression`,
      },
      {
        title: 'Image Optimization Tools',
        bullets: [
          'Online: TinyPNG, Squoosh',
          'Desktop: Photoshop, Photoshop Express',
          'CLI: ImageMagick, OptiPNG',
        ],
      },
      {
        title: 'Advanced Techniques',
        body: [
          'Responsive images and lazy loading help deliver the right image at the right time.',
        ],
      },
      {
        title: 'Responsive Images: Adapting to Different Screens',
        body: [
          "Responsive images are a fundamental part of building performance-optimized, device-agnostic websites.",
          "By tailoring image delivery based on the screen size and resolution of the user's device, you can ensure faster load times and improved visual quality without wasting bandwidth.",
        ],
      },
      {
        title: 'Key Techniques for Responsive Images',
        bullets: [
          'srcset Attribute',
          'sizes Attribute',
          'Picture Element',
        ],
      },
      {
        title: 'srcset Attribute',
        body: [
          "The srcset attribute allows developers to define multiple image sources for a single image element.",
          "This enables the browser to choose the most appropriate image based on the device's screen width and resolution.",
        ],
        code: `<img
  src="image-small.jpg"
  srcset="image-small.jpg 400w, image-medium.jpg 800w, image-large.jpg 1200w"
  sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
  alt="Image description"
>`,
      },
      {
        title: 'sizes Attribute',
        body: [
          'The sizes attribute complements srcset by describing the display width of the image in different layout scenarios.',
          'This allows the browser to better anticipate which image to download.',
        ],
      },
      {
        title: 'Picture Element',
        body: [
          'The picture element offers even more control, enabling developers to supply different image formats and resolutions based on media queries.',
          'This is especially useful when combining modern formats like WebP with fallbacks.',
        ],
        code: `<picture>
  <source media="(min-width: 768px)" srcset="image-large.jpg">
  <source media="(min-width: 480px)" srcset="image-medium.jpg">
  <img src="image-small.jpg" alt="Image description">
</picture>`,
      },
      {
        title: 'Best Practices for Responsive Images',
        bullets: [
          'Optimize images for each screen size by resizing and compressing them appropriately.',
          'Maintain a consistent naming scheme to keep your assets organized and manageable.',
          'Regularly test responsive images on a range of devices to ensure visual quality and performance.',
        ],
      },
      {
        title: 'Lazy Loading Images: A Performance Boost',
        body: [
          'Lazy loading defers the loading of non-visible images until the user is likely to see them.',
          'This conserves bandwidth, reduces initial page load time, and improves the overall experience, especially on long-scroll pages or mobile networks.',
        ],
      },
      {
        title: 'How Lazy Loading Works',
        bullets: [
          'A placeholder or empty space is initially shown in place of the full image.',
          'As the user scrolls and the image nears the viewport, the actual image begins loading.',
          'Once loaded, the placeholder is replaced, often using a fade-in or similar transition.',
        ],
      },
      {
        title: 'JavaScript-Based Lazy Loading',
        body: [
          'For greater customization or compatibility, JavaScript can be used to implement lazy loading.',
          'This example uses the Intersection Observer API.',
        ],
        code: `const images = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => observer.observe(img));`,
      },
      {
        title: 'Browser-Native Lazy Loading',
        body: [
          'Modern browsers support native lazy loading with the loading="lazy" attribute on img tags.',
        ],
        code: `<img src="image.jpg" alt="Image description" loading="lazy">`,
      },
      {
        title: 'Benefits of Lazy Loading',
        bullets: [
          'Faster initial page rendering and perceived performance.',
          'Reduced bandwidth usage and server load.',
          'Enhanced user experience on slow or mobile networks.',
        ],
        note:
          'To avoid layout shifts, use placeholder images or dimensions that match the aspect ratio of the final image. Test across devices and browsers to ensure consistency and performance.',
      },
      {
        title: 'Conclusion',
        body: [
          "By following these image optimization techniques, you can significantly improve your website's performance and user experience.",
        ],
        bullets: [
          'Image Format: Choose the right format based on content and quality needs.',
          'Image Size: Match display dimensions and avoid upscaling.',
          'Compression: Use lossy or lossless techniques as appropriate.',
          'Responsive Images: Adapt to different screen sizes and resolutions.',
          'Lazy Loading: Improve load times by deferring off-screen images.',
          'WebP: Leverage modern formats for optimal compression.',
        ],
      },
    ],
    practice: [
      'Optimize three images for the web.',
      'Add responsive image attributes to one image.',
      'Use loading="lazy" where appropriate.',
    ],
    resources: [
      'Adobe Photoshop optimizing images',
      'Adobe Photoshop optimizing images for JPEG format',
      'Adobe Photoshop optimizing images for PNG format',
      'MDN - Responsive Images',
      'MDN - Lazy Loading',
    ],
  },
  {
    slug: 'page-types-templates-and-navigation',
    number: '20',
    title: 'Page Types and Templates',
    eyebrow: 'Structure',
    summary:
      'Understand common page types and how templates create consistent, efficient web experiences.',
    goals: [
      'Identify common page types and user journeys',
      'Use templates for consistency and efficiency',
      'Decide when a page should use a template and when it needs a custom layout',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'In our quest to craft intuitive and engaging web experiences, understanding page types and how to leverage templates is crucial.',
          'Think of it as having a well-organized toolkit. Knowing which tool to use for which job makes the entire process smoother and more effective.',
          'This chapter explores common page types, their purposes, and how templates help create consistent and efficient web designs.',
        ],
      },
      {
        title: "Why Page Types Matter: A User's Journey",
        body: [
          'Imagine navigating a website where every page felt completely different, with navigation in different places, unpredictable layouts, and inconsistent information presentation.',
          'It would be disorienting and frustrating. Page types provide predictable structure and functionality to help users.',
        ],
        bullets: [
          'Navigate Efficiently: Quickly find elements like navigation menus, search bars, and footers.',
          'Understand Functionality: Recognize how different pages behave, such as product pages versus article pages.',
          'Complete Tasks Easily: Consistent layouts support user goals like making purchases or finding information.',
        ],
      },
      {
        title: 'Common Page Types: Your Web Design Toolkit',
        body: [
          'Common page types give designers and developers reusable structures for recurring user needs.',
        ],
      },
      {
        title: '1. Home Page',
        body: [
          'Purpose: Introduces your brand, highlights key content, guides navigation, and establishes visual identity.',
          'UX Focus: Value proposition, compelling visuals, intuitive navigation, and strong calls to action.',
        ],
      },
      {
        title: '2. Item Listing Page',
        body: [
          'Purpose: Displays lists or grids of products, articles, or search results.',
          'UX Focus: Filtering and sorting options, item summaries, thumbnails, pagination, or infinite scrolling.',
        ],
      },
      {
        title: '3. Item Details Page',
        body: [
          'Purpose: Provides detailed information about a specific item.',
          'UX Focus: Organized information, high-resolution media, clear calls to action, and related content.',
        ],
      },
      {
        title: '4. About Page',
        body: [
          "Purpose: Shares your brand or individual's story.",
          'UX Focus: Engaging narrative, visuals, contact information, and credibility elements.',
        ],
      },
      {
        title: '5. Contact Page',
        body: [
          'Purpose: Offers contact methods and location details.',
          'UX Focus: Concise information, user-friendly form, maps, and response expectations.',
        ],
      },
      {
        title: '6. Form Page',
        body: [
          'Purpose: Guides users through data submission processes such as sign-up or checkout.',
          'UX Focus: Clear labels, intuitive fields, error handling, step indicators, and trust signals.',
        ],
      },
      {
        title: '7. Search Results Page',
        body: [
          'Purpose: Displays results based on user queries.',
          'UX Focus: Relevant results, filters, sorting, and term highlighting.',
        ],
      },
      {
        title: 'The Template Power: Efficiency and Consistency',
        body: [
          'Templates are reusable layouts for specific page types.',
          "Think of a book. You don't design every page from scratch. You use chapter and index templates. Web design follows the same principle.",
        ],
        bullets: [
          'Consistency: Unified look and feel reinforcing branding and usability.',
          'Efficiency: Quicker development and easier updates site-wide.',
          'Scalability: Easily add new pages using existing design structures.',
        ],
      },
      {
        title: 'Example: The Product Page Template',
        body: [
          'A template for an e-commerce product page might include a consistent set of content areas.',
        ],
        bullets: [
          'Product Name',
          'Images',
          'Description',
          'Price',
          'Add to Cart Button',
          'Related Products',
          'Customer Reviews',
        ],
        note:
          'This ensures a consistent, user-friendly experience across all product pages.',
      },
      {
        title: 'Customization: When to Break the Mold',
        body: [
          'Templates are essential, but some pages may require custom layouts.',
          'Balance consistency with flexibility. Templates form a strong foundation, and thoughtful customization enhances user experience when needed.',
        ],
        bullets: [
          'Landing Pages: Designed uniquely for campaigns with specific calls to action.',
          'Visual About Pages: May use storytelling and imagery over text.',
        ],
      },
    ],
    practice: [
      'Identify the page type for three pages on a website you use often.',
      'Sketch a product or article page template.',
      'Choose one page that should follow a template and one that may need a custom layout.',
    ],
  },
  {
    slug: 'building-effective-site-navigation',
    number: '21',
    title: 'Site Navigation',
    eyebrow: 'Navigation',
    summary:
      'Design clear, consistent, accessible navigation systems that help users move through a website with confidence.',
    goals: [
      'Explain the principles of effective website navigation',
      'Identify common navigation patterns',
      'Build semantic navigation markup with responsive and accessible behavior',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "Site navigation is the backbone of your website. It guides users through your content, ensuring they can easily find what they're looking for.",
          'A well-designed navigation system enhances user experience, improves SEO, and increases user engagement.',
        ],
      },
      {
        title: 'Key Principles of Effective Navigation',
        bullets: [
          'Simplicity: Keep your navigation simple and easy to understand.',
          'Clarity: Use clear and concise language for menu items.',
          'Consistency: Maintain a consistent navigation structure throughout your website.',
          'Accessibility: Ensure your navigation is accessible to users with disabilities.',
          'Responsiveness: Design your navigation to adapt to different screen sizes.',
        ],
      },
      {
        title: 'Common Navigation Patterns',
        bullets: [
          'Horizontal Navigation: A bar at the top of the page, common in desktop layouts.',
          'Vertical Navigation: A side menu, often used for mobile or detailed dashboards.',
          'Mega Menu: An expandable menu with categories and subcategories.',
          'Hamburger Menu: A mobile-friendly menu accessible via an icon.',
        ],
      },
      {
        title: 'Building a Navigation Structure',
        body: [
          'Identify your core pages and organize them hierarchically.',
          'Consider user needs and create intuitive pathways through your content.',
        ],
      },
      {
        title: 'HTML Structure for Navigation',
        code: `<nav aria-label="Main menu">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li>
      <a href="/products">Products</a>
      <ul>
        <li><a href="/products/category1">Category 1</a></li>
        <li><a href="/products/category2">Category 2</a></li>
      </ul>
    </li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
      },
      {
        title: 'CSS Styling',
        body: [
          'Use CSS to enhance visibility, indicate active states, and support responsive layouts with media queries.',
        ],
        code: `.site-nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.site-nav a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.site-nav a[aria-current="page"] {
  font-weight: 700;
}`,
      },
      {
        title: 'JavaScript for Advanced Interactions',
        bullets: [
          'Accordion Menus',
          'Sticky Navigation',
          'Dropdown Menus',
        ],
      },
      {
        title: 'Creating a Responsive Navigation Bar',
        body: [
          'A responsive navigation bar should work with semantic HTML first, CSS layout second, and JavaScript enhancement only when needed.',
        ],
        code: `<button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">
  Menu
</button>

<nav id="main-nav" class="site-nav" aria-label="Main menu">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/work">Work</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
      },
      {
        title: 'Additional Tips',
        bullets: [
          'Use clear labels.',
          'Prioritize important links.',
          'Include a search bar for large sites.',
          'Test across devices.',
          'Ensure accessibility.',
        ],
      },
      {
        title: 'Advanced Techniques',
        body: [
          'Advanced navigation patterns can improve movement through larger sites, but they should be used carefully and tested with real users.',
        ],
      },
      {
        title: 'Smooth Scrolling',
        code: `html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}`,
      },
      {
        title: 'Sticky Navigation',
        code: `nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}`,
      },
      {
        title: 'Off-Canvas Navigation',
        code: `const toggleButton = document.querySelector('.nav-toggle');
const navbarMenu = document.querySelector('.site-nav');

toggleButton.addEventListener('click', () => {
  const isOpen = navbarMenu.classList.toggle('active');
  toggleButton.setAttribute('aria-expanded', String(isOpen));
});`,
      },
      {
        title: 'Mega Menu',
        body: [
          'Mega menus can help organize large sets of links into categories and subcategories.',
          'They work best when labels are clear and the menu remains keyboard accessible.',
        ],
      },
      {
        title: 'Accessibility in Navigation',
        body: [
          'Ensure keyboard navigation, use helpful ARIA attributes, and test tab flow to enhance usability for all users.',
        ],
        code: `<nav aria-label="Main menu">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>`,
        note:
          'The nav element already has navigation semantics. Use aria-label when the page has more than one navigation region, such as main navigation and footer navigation.',
      },
    ],
    practice: [
      'Create a semantic nav with at least four links.',
      'Add an active state for the current page.',
      'Build a responsive menu toggle with aria-expanded.',
      'Test the navigation with only the keyboard.',
    ],
  },
  {
    slug: 'item-listing-and-details',
    number: '22',
    title: 'Item Listing and Details',
    eyebrow: 'Page Types',
    summary:
      'Design item listing pages and detail pages that help users compare, evaluate, and act.',
    goals: [
      'Identify the key components of an item listing page',
      'Compare grid and list layout patterns',
      'Explain what belongs on a strong item detail page',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'Item listings are the digital storefronts of your website, showcasing products or services in an organized and visually appealing manner.',
          'A well-designed item listing page can significantly impact user engagement and conversions.',
        ],
      },
      {
        title: 'Key Components of an Item Listing',
        bullets: [
          'Thumbnail Image: A visually appealing image that represents the item.',
          "Product Title: A concise and informative title.",
          "Brief Description: A brief overview of the product's features and benefits.",
          'Price: The price of the product or service.',
          'Call to Action: A button or link that encourages users to learn more or make a purchase.',
        ],
      },
      {
        title: 'Common Layout Patterns',
        body: [
          'Item listings usually use either a grid layout or a list layout. The right choice depends on how users need to scan and compare content.',
        ],
      },
      {
        title: 'Grid Layout',
        body: [
          'This pattern arranges items in a structured grid, making efficient use of space and visual hierarchy.',
        ],
        code: `<ul class="item-grid">
  <li class="item-card">
    <a href="project-detail.html">
      <img src="project1.jpg" alt="Project 1">
      <h4>Project 1: Website Design</h4>
      <p>A modern, responsive website design for a tech startup.</p>
    </a>
  </li>
</ul>`,
      },
      {
        title: 'Grid Layout CSS',
        code: `.item-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.item-card img {
  aspect-ratio: 4 / 3;
  width: 100%;
  object-fit: cover;
}`,
      },
      {
        title: 'List Layout',
        body: [
          'This layout displays items vertically, which is useful for detailed reading or mobile views.',
        ],
        code: `<ul class="project-list">
  <li>
    <a href="project-detail.html">
      <img src="project1.jpg" alt="Project 1">
      <h4>Project 1: Website Design</h4>
      <p>A modern, responsive website design for a tech startup.</p>
    </a>
  </li>
</ul>`,
      },
      {
        title: 'List Layout CSS',
        code: `.project-list {
  list-style-type: none;
  padding: 0;
}

.project-list li {
  margin-bottom: 20px;
}`,
      },
      {
        title: 'Additional Considerations',
        bullets: [
          'Responsive Design: Use media queries to adjust the grid layout for different screen sizes.',
          'Image Aspect Ratios: Consider using aspect ratio boxes to maintain consistent proportions of images within the grid.',
          'JavaScript Libraries: For more complex masonry layouts, you can use libraries like Masonry or Isotope.',
          'Accessibility: Ensure that your masonry layout is accessible to users with disabilities by using appropriate ARIA attributes and keyboard navigation.',
        ],
      },
      {
        title: 'The Product Detail Page',
        body: [
          'The product detail page provides a more in-depth look at a specific item.',
          'It should help users evaluate the item, understand its value, and decide what to do next.',
        ],
        bullets: [
          'High-Quality Images',
          'Detailed Description',
          'Pricing and Availability',
          'Customer Reviews',
          'Related Products',
          'Call to Action',
        ],
      },
    ],
    practice: [
      'Build one item listing using a responsive grid.',
      'Build the same content as a vertical list layout.',
      'Sketch the information hierarchy for a product or project detail page.',
    ],
  },
  {
    slug: 'mastering-carousels',
    number: '23',
    title: 'Carousels',
    eyebrow: 'Components',
    summary:
      'Understand carousel structure, Slick setup, fading transitions, and a simple vanilla JavaScript carousel.',
    goals: [
      'Identify the key parts of a carousel',
      'Set up a carousel with Slick',
      'Explain how a basic carousel works with vanilla JavaScript',
      'Consider responsive and accessible carousel behavior',
    ],
    sections: [
      {
        title: 'What are Carousels?',
        body: [
          'Carousels are dynamic elements that showcase multiple images or content items in a limited space.',
          'They are commonly used on websites to feature product highlights, testimonials, or rotating content.',
        ],
      },
      {
        title: 'Key Components of a Carousel',
        body: [
          'Understanding these foundational elements will help you customize and implement carousels that are functional and user-friendly.',
        ],
        bullets: [
          'Carousel Container: Holds all slides, typically with a fixed width and height.',
          'Slides: Individual items displayed, which may contain images, text, or HTML elements.',
          'Navigation Controls: Includes previous/next buttons and pagination dots for manual navigation.',
          'Autoplay: Optional feature for automatic slide transitions with pause/play controls.',
          'Responsive Design: Adapts layout to various screen sizes and devices.',
          'Accessibility: Includes keyboard navigation and ARIA attributes for screen readers.',
        ],
      },
      {
        title: 'Building a Carousel with Slick',
        body: [
          'This section demonstrates how to create a carousel using the Slick library, a popular jQuery plugin known for its ease of use and flexibility.',
          'It is suitable for beginners who want a plug-and-play solution.',
          'Visit the Slick documentation for full usage details.',
        ],
      },
      {
        title: 'Basic HTML Structure',
        body: [
          'The following HTML sets up a simple carousel container. You can replace the placeholder content with your actual items.',
        ],
        code: `<div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>`,
      },
      {
        title: 'Linking Slick and jQuery',
        body: [
          'Include the necessary CSS and JavaScript files to get Slick working properly.',
        ],
        code: `<link rel="stylesheet" type="text/css" href="slick.css">
<link rel="stylesheet" type="text/css" href="slick-theme.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="slick.min.js"></script>`,
      },
      {
        title: 'Implementing Slick with JavaScript',
        body: [
          'This script initializes the Slick carousel with basic configuration options like navigation dots and smooth transitions.',
        ],
        code: `$(document).ready(function() {
  $('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
  });
});`,
      },
      {
        title: 'Creating a Fading Carousel',
        body: [
          'You can enhance the carousel with a fade transition by adding one line of configuration.',
        ],
        code: `$(document).ready(function() {
  $('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
});`,
      },
      {
        title: 'Building Your Own Carousel with Vanilla JavaScript',
        body: [
          'This section walks through building a custom carousel without relying on libraries.',
          'It is ideal for learning the underlying mechanics and gaining full control over behavior and design.',
        ],
        code: `<div class="work-slideshow">
  <div class="slide active">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</div>`,
      },
      {
        title: 'Vanilla JavaScript Carousel Logic',
        code: `const carousel = document.querySelector('.work-slideshow');
const slides = carousel.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function autoplay() {
  nextSlide();
  setInterval(nextSlide, 3000);
}

autoplay();`,
      },
      {
        title: 'Key Considerations',
        body: [
          'To ensure a polished user experience, be mindful of layout consistency, responsiveness, and accessibility.',
        ],
        bullets: [
          'Use consistent image dimensions to prevent layout issues.',
          'Apply media queries for responsive design.',
          'Ensure accessibility with keyboard support and alt text for images.',
        ],
      },
    ],
    practice: [
      'Create a basic carousel structure with three slides.',
      'Initialize a carousel with Slick.',
      'Build the vanilla JavaScript autoplay example.',
      'Add alt text, keyboard support, or pause controls to improve accessibility.',
    ],
    resources: [
      {
        label: 'Slick documentation',
        href: 'https://kenwheeler.github.io/slick/',
      },
    ],
  },
  {
    slug: 'web-accessibility',
    number: '24',
    title: 'Web Accessibility',
    eyebrow: 'Accessibility',
    summary:
      'Apply accessibility principles, semantic HTML, keyboard support, contrast, ARIA, and testing practices to build inclusive websites.',
    goals: [
      'Explain why accessibility matters',
      'Describe the POUR principles',
      'Apply an accessibility checklist to student projects',
      'Test a project with keyboard, contrast, and audit tools',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'This section explores the essential principles and practices of making web content accessible to all users, including those with disabilities.',
          "You'll learn why accessibility matters, how to apply the POUR principles, and how to test and refine your project for accessibility compliance.",
          'It covers semantic HTML, keyboard navigation, form accessibility, color contrast, ARIA, and more, ensuring you can build inclusive, user-friendly websites.',
        ],
      },
      {
        title: 'The Why: The Core Principles of Accessibility',
        body: [
          'At its core, web accessibility is guided by a few key principles.',
          'These principles form the foundation of accessible design, encapsulated in the acronym POUR.',
        ],
        bullets: [
          'Perceivable: Information and UI components must be presented in ways users can perceive, including text alternatives and adaptable content.',
          'Operable: Navigation and interactions must be keyboard-accessible and user-friendly.',
          'Understandable: Content and interface behavior should be easy to comprehend and predict.',
          'Robust: Content should work reliably across various technologies, including assistive tools.',
        ],
      },
      {
        title: 'The How: Navigating the Accessibility Guidelines',
        body: [
          'WCAG is the international standard for web accessibility.',
          'For student projects, Level AA of WCAG 2.1 is the recommended goal.',
        ],
        bullets: [
          'Guidelines: Broad principles for accessibility.',
          'Success Criteria: Specific, testable requirements categorized into levels A, AA, and AAA.',
        ],
      },
      {
        title: 'Key Areas of Focus: Your Accessibility Checklist',
        bullets: [
          'Semantic HTML: Use elements like nav, article, and correct heading hierarchy.',
          'Alternative Text: Provide descriptive alt attributes for images.',
          'Keyboard Navigation: Ensure all interactive elements can be accessed via keyboard with visible focus.',
          'Form Accessibility: Use properly linked label elements, ARIA where needed, and clear instructions.',
          'Color Contrast: Maintain at least 4.5:1 contrast ratio for normal text and avoid relying solely on color.',
          "ARIA: Use ARIA roles and attributes only when native HTML isn't sufficient.",
          'Language: Set the lang attribute correctly on the html tag and within content.',
          'Time-Based Media: Include captions, transcripts, and controls for media.',
          'Readability: Write clearly, use accessible fonts and spacing.',
        ],
      },
      {
        title: 'Semantic HTML Example',
        code: `<header>
  <nav aria-label="Main menu">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h1>Accessible Page Title</h1>
    <p>Page content goes here.</p>
  </article>
</main>`,
      },
      {
        title: 'Form Accessibility Example',
        code: `<label for="email">Email address</label>
<input
  id="email"
  name="email"
  type="email"
  autocomplete="email"
  aria-describedby="email-help"
>
<p id="email-help">Use the email address you check most often.</p>`,
      },
      {
        title: 'Testing Your Project for Accessibility',
        bullets: [
          'Test with only the keyboard.',
          'Try using a screen reader.',
          'Check color contrast with online tools.',
          'Run browser accessibility audits, such as Lighthouse.',
          'Use WCAG checklists for structured review.',
        ],
      },
      {
        title: 'The Final Push: Making Accessibility a Priority',
        body: [
          'Accessibility should be baked into your process from the start.',
          'Making it a habit demonstrates professionalism and care in your work, creating digital experiences that are truly inclusive.',
        ],
      },
    ],
    practice: [
      'Navigate your project using only the keyboard.',
      'Check the contrast of your body text, links, and buttons.',
      'Review every image for useful alt text.',
      'Run Lighthouse and fix at least one accessibility issue.',
    ],
    resources: [
      {
        label: 'MDN ARIA Reference',
        href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA',
      },
      {
        label: 'WebAIM Resources List',
        href: 'https://webaim.org/resources/',
      },
    ],
  },
];
