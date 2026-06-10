export type LessonSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  note?: string;
  code?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  table?: {
    headers: string[];
    rows: string[][];
  };
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
          'This guide walks you through setting up a professional-grade developer environment using [GitHub](https://github.com/), [GitHub Desktop](https://desktop.github.com/), and [Visual Studio Code](https://code.visualstudio.com/download).',
          'By the end of the lesson, you will be prepared to manage code collaboratively and deploy websites.',
        ],
      },
      {
        title: '1. Create a GitHub Account',
        body: [
          'Visit [GitHub](https://github.com/) and click "Sign Up" to create your account.',
        ],
      },
      {
        title: '2. Download and Install GitHub Desktop',
        body: [
          'Visit [GitHub Desktop](https://desktop.github.com/) to download the app.',
          'After installation, open Settings, go to the Accounts tab, and sign in with your GitHub credentials.',
        ],
      },
      {
        title: '3. Download Visual Studio Code',
        body: [
          'Visit the [Visual Studio Code download page](https://code.visualstudio.com/download) to download and install the editor.',
        ],
      },
      {
        title: '4. Access Class Demo Repositories',
        body: [
          'Navigate to the [LSU Web Design GitHub organization](https://github.com/LSUWebDesign) to browse class demos.',
        ],
      },
      {
        title: '5. Download the Starter Repository',
        body: [
          'Go to the [starter-site-22 repository](https://github.com/LSUWebDesign/starter-site-22).',
          'Click the "Code" button, then "Download ZIP." Extract the ZIP file and remember its location.',
        ],
        image: {
          src: '/images/lessons/developer-environment-setup/repo.jpg',
          alt: 'GitHub repository page for starter-site-22 with the Code button open and Download ZIP highlighted.',
          caption:
            'Use the Code menu on the starter repository to download the ZIP file for the class starter site.',
        },
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
          'Open [GitHub Desktop](https://desktop.github.com/).',
          'Click File -> New Repository.',
          'Name your site using dashes instead of spaces, such as my-website.',
          'Click "Create Repository."',
        ],
        images: [
          {
            src: '/images/lessons/developer-environment-setup/fileNewRepo.jpg',
            alt: 'GitHub Desktop File menu with New Repository highlighted.',
            caption:
              'Start a new local repository from File -> New Repository in GitHub Desktop.',
          },
          {
            src: '/images/lessons/developer-environment-setup/newrepo.jpg',
            alt: 'GitHub Desktop Create a New Repository dialog with my-website entered as the repository name.',
            caption:
              'Use a simple dashed name, choose the local path carefully, and create the repository.',
          },
        ],
      },
      {
        title: '8. Publish Your Repository',
        body: [
          'Click "Publish Repository" to make it accessible on GitHub online.',
        ],
        image: {
          src: '/images/lessons/developer-environment-setup/ghdpublish.jpg',
          alt: 'GitHub Desktop showing the Publish repository button in the toolbar and panel.',
          caption:
            'Publishing sends the local repository to GitHub so it can be shared and later deployed with GitHub Pages.',
        },
      },
      {
        title: '9. Understanding the GitHub Desktop Interface',
        bullets: [
          'Open in Visual Studio Code: opens the project in [VS Code](https://code.visualstudio.com/download).',
          'Show in Finder: opens the local folder.',
          'View on GitHub: opens the GitHub page in the browser.',
        ],
        images: [
          {
            src: '/images/lessons/developer-environment-setup/ghdesktop.jpg',
            alt: 'GitHub Desktop interface with labels for the code editor, project folder, GitHub page, commit summary, and commit button.',
            caption:
              'GitHub Desktop connects your editor, project folder, GitHub page, and commit workflow in one interface.',
          },
          {
            src: '/images/lessons/developer-environment-setup/findfinder.jpg',
            alt: 'GitHub Desktop empty changes screen with the Show in Finder button highlighted.',
            caption:
              'The Show in Finder button is a fast way to locate the exact project folder on your computer.',
          },
          {
            src: '/images/lessons/developer-environment-setup/showinfinder.jpg',
            alt: 'GitHub Desktop Repository menu with Show in Finder highlighted.',
            caption:
              'You can also use Repository -> Show in Finder from the menu bar.',
          },
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
        image: {
          src: '/images/lessons/developer-environment-setup/ghsettings.jpg',
          alt: 'GitHub repository settings page showing the Pages section and branch dropdown set to main.',
          caption:
            'In GitHub repository settings, open Pages and choose the main branch as the publishing source.',
        },
      },
      {
        title: '13. Launch Your Website',
        body: [
          'Wait a few minutes, then refresh the Pages settings.',
          'A public URL to your live website will appear.',
          'Click "Visit Site" to see your published work.',
          'Congratulations. You now have a fully functioning developer setup and a live website hosted with GitHub Pages.',
        ],
        image: {
          src: '/images/lessons/developer-environment-setup/ghpages.jpg',
          alt: 'GitHub Pages settings showing a live published site URL and a Visit site button.',
          caption:
            'After GitHub Pages finishes deploying, the published site URL appears in the Pages settings.',
        },
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
      'A practical planning process that helps you define the audience, goals, content, structure, and first build steps for a website.',
    goals: [
      'Understand the essential stages in the web design process',
      'Connect each step to building an effective, user-centered site',
      'Move from audience and goals through content, structure, design, code, launch, and iteration',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          "A successful website starts before you write code. You need to know who the site is for, what those visitors need, what content belongs on the site, and how the pages should connect.",
          'Use this process before starting a class project so your HTML, CSS, and design decisions support a clear purpose instead of becoming random decoration.',
        ],
      },
      {
        title: 'Understanding the Target Audience',
        body: [
          'Every website is for someone. Identifying who will visit the site helps you decide what content matters, what language to use, and what should be easy to find first.',
        ],
        bullets: [
          'Who is most likely to visit this site?',
          'What are they trying to learn, compare, buy, book, view, or submit?',
          'What questions will they have when they arrive?',
          'What might frustrate or confuse them?',
        ],
        note:
          'Output: write 2-3 audience notes in plain language. Example: "Visitors to a coffee shop site need hours, location, menu options, and a way to decide whether to visit."',
      },
      {
        title: 'Defining Goals and Objectives',
        body: [
          'With your audience in mind, define what the site needs to help them do. Goals keep the project focused when you start making design and content decisions.',
        ],
        bullets: [
          'Choose 1-2 primary goals for the site.',
          'Write goals as user actions, such as "find class work," "contact the artist," or "compare menu items."',
          'Decide what action the visitor should take next on the homepage.',
        ],
        note:
          'Output: write two user goals and one site goal. A user goal might be "I need to see examples of this designer\'s work." A site goal might be "Encourage visitors to contact me."',
      },
      {
        title: 'Creating and Organizing Content',
        body: [
          'Content is the material the site is built from: text, images, links, captions, forms, downloads, videos, and project details. Before designing the page, list what content the site needs.',
        ],
        bullets: [
          'List the content needed to answer the audience\'s most important questions.',
          'Group related content together before deciding what page it belongs on.',
          'Remove content that does not support a user goal or project requirement.',
          'Write short, useful labels for pages, buttons, links, and sections.',
        ],
        note:
          'Output: create a rough content inventory. For a portfolio, that might include a short bio, project images, project descriptions, contact information, and social links.',
      },
      {
        title: 'Designing a Site Map',
        body: [
          'A site map shows what pages exist and how they connect. It is about structure, not visual layout.',
        ],
        bullets: [
          'List every page the site needs.',
          'Group pages by importance and relationship.',
          'Decide which pages belong in the main navigation.',
          'Check whether users can reach important content in a predictable way.',
        ],
        note:
          'Output: draw or write a simple page list. Example: Home, About, Menu, Location, Contact. Site map = what pages exist and how they connect.',
        image: {
          src: '/images/lessons/website-process/sitemap.jpg',
          alt: 'A sample site map showing a home page connected to main navigation groups and nested subpages.',
          caption:
            'A site map shows page relationships and navigation structure before you start designing individual page layouts.',
        },
      },
      {
        title: 'Wireframing the Layout',
        body: [
          'A wireframe shows what goes on a page and where it sits. It is a low-detail layout plan, not a finished design.',
        ],
        bullets: [
          'Place the most important content near the top.',
          'Show major sections such as header, navigation, hero, content blocks, forms, and footer.',
          'Focus on hierarchy, order, and user flow before choosing colors or fonts.',
          'Sketch mobile and desktop differences when the layout needs to change.',
        ],
        note:
          'Output: sketch one homepage wireframe before writing code. Wireframe = what content appears on a page and where it sits.',
        image: {
          src: '/images/lessons/website-process/wireframes.jpg',
          alt: 'Several grayscale website wireframes showing page layout blocks, image placeholders, navigation, content areas, and footer sections.',
          caption:
            'Wireframes help you plan layout, hierarchy, and content placement without getting distracted by final colors or imagery.',
        },
      },
      {
        title: 'Developing the Visual Design',
        body: [
          'Once the structure is clear, visual design choices can support the site\'s purpose. Design should make the content easier to understand, not just make the page look busy.',
        ],
        bullets: [
          'Choose colors that fit the tone and maintain readable contrast.',
          'Choose typography that supports hierarchy and readability.',
          'Select imagery that helps users understand the subject.',
          'Keep spacing, alignment, and repeated components consistent.',
        ],
        note:
          'Output: define a simple visual direction: colors, type choices, image style, and 2-3 interface patterns you will repeat.',
        image: {
          src: '/images/lessons/website-process/low-to-high.jpg',
          alt: 'A progression from a hand-drawn wireframe to a digital wireframe to a finished high-fidelity website design.',
          caption:
            'A design can move from rough sketch, to structured wireframe, to high-fidelity visual direction as decisions become clearer.',
        },
      },
      {
        title: 'Coding and Testing',
        body: [
          'After the plan is clear, begin building the site in code. Your file structure, HTML, CSS, and assets should reflect the pages and content you planned.',
        ],
        bullets: [
          'Create the HTML files from your site map.',
          'Use folders for assets such as CSS, JavaScript, and images.',
          'Build the page structure first, then layer in styling.',
          'Test links, images, forms, responsive layout, keyboard access, and published paths.',
        ],
        note:
          'Output: a working local site that you can open in the browser, test, commit, push, and publish.',
      },
      {
        title: 'Launch and Iteration',
        body: [
          "Launching your site is not the end of the process. Publishing helps you find issues that were not obvious in the editor or local browser.",
        ],
        bullets: [
          'Open the published URL and test every main page.',
          'Check that images, CSS, links, and navigation still work after publishing.',
          'Ask someone else to use the site and note where they hesitate.',
          'Make improvements in small, focused updates.',
        ],
        note:
          'Output: a published site plus a short fix list for the next round of improvements.',
      },
      {
        title: 'Conclusion',
        body: [
          'A website process helps you make better decisions before the page becomes complicated. Audience, goals, content, site maps, wireframes, visual design, code, and testing all support each other.',
          'Before you start coding a class project, use this lesson to decide what pages you need, what content belongs on each page, and what users should be able to do.',
        ],
      },
    ],
    practice: [
      'Write 2-3 sentences describing the audience for your class site.',
      'List three things that audience needs from the site.',
      'Write two user goals and one site goal.',
      'Create a simple site map with the pages your project needs.',
      'List the content that belongs on the homepage.',
      'Sketch one homepage wireframe before writing code.',
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
          'A path tells the browser the location of the file relative to the current file. Always start from the HTML file that contains the path, then trace your way to the target file.',
        ],
        note:
          'The most important question is: where is the resource from the perspective of the file asking for it?',
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
        title: 'Path Diagram: Start From the Current File',
        body: [
          'When you write a path, pretend you are standing inside the current HTML file. From there, move through the folders until you reach the file you need.',
        ],
        code: `my-website/
|-- index.html               current file
|-- images/
|   |-- logo.png             target file

Path from index.html to logo.png:
images/logo.png`,
        note:
          'Do not start from the whole computer. Start from the file that contains the `href` or `src` attribute.',
      },
      {
        title: 'What Each File Does',
        bullets: [
          '`index.html`: This is the main page of your website. Your home page.',
          '`about.html`: This is another page on your website.',
          '`styles.css`: This file contains the CSS styles for your website.',
          '`script.js`: This file contains JavaScript code for your website.',
          '`img/gizmo.jpg`: This is an image file located within the `img` subfolder.',
          '`images/logo.png`: This is an image file located within the `images` subfolder.',
          '`icon.png`: This is an image file that will serve as our favicon, located within the root directory.',
        ],
      },
      {
        title: 'Code Example: Link a CSS File',
        body: [
          'If `styles.css` sits next to `index.html`, the path is just the file name.',
        ],
        code: `<link rel="stylesheet" href="styles.css">`,
        bullets: [
          '`rel="stylesheet"`: Tells the browser this file is a stylesheet.',
          '`href="styles.css"`: Tells the browser where the CSS file is located.',
        ],
      },
      {
        title: 'Current Folder and Parent Folder Paths',
        body: [
          'Sometimes you will see paths that start with `./` or `../`. These are relative path shortcuts.',
        ],
        bullets: [
          '`./` means the current folder.',
          '`../` means go up one folder.',
          '`../../` means go up two folders.',
          'Use these only when they make the path clearer. For simple files beside each other, the file name alone is usually enough.',
        ],
        code: `./styles.css
../images/logo.png
../../index.html`,
      },
      {
        title: 'Code Example: Link an Image',
        body: [
          'If an image is inside a folder, include the folder name in the path.',
        ],
        code: `<img src="images/logo.png" alt="My Website Logo">`,
        bullets: [
          '`src="images/logo.png"`: Tells the browser to look inside the `images` folder for `logo.png`.',
          '`alt="My Website Logo"`: Describes the image for screen readers and browsers that cannot display it.',
        ],
      },
      {
        title: 'Code Example: Link to Another Page',
        body: [
          'If `about.html` sits next to `index.html`, link to it by file name.',
        ],
        code: `<a href="about.html">Link to About page</a>`,
      },
      {
        title: 'Code Example: Link From a Nested Page',
        body: [
          'Paths change when the current HTML file is inside a folder. In this example, `about.html` lives inside the `pages` folder.',
        ],
        code: `my-website/
|-- index.html
|-- images/
|   |-- logo.png
|-- pages/
|   |-- about.html`,
        bullets: [
          'From `pages/about.html` to `images/logo.png`, go up one folder, then into `images`.',
          'From `pages/about.html` back to `index.html`, go up one folder, then choose `index.html`.',
        ],
      },
      {
        title: 'Nested Page HTML Example',
        body: [
          'Inside `pages/about.html`, the paths would look like this:',
        ],
        code: `<img src="../images/logo.png" alt="My Website Logo">
<a href="../index.html">Home</a>`,
      },
      {
        title: 'Relative vs. Absolute Paths',
        body: [
          'Most class projects will use relative paths. A relative path describes where a file is located compared with the current HTML file.',
          'An absolute path uses the complete URL to a file or page.',
        ],
        bullets: [
          'Relative path: `images/logo.png`',
          'Relative path: `about.html`',
          'Absolute path: `https://www.example.com/images/logo.png`',
        ],
        note:
          'Use relative paths for files inside your own project. Use absolute URLs when linking to outside websites or hosted resources.',
      },
      {
        title: 'Root-Relative Paths',
        body: [
          'A root-relative path starts with a slash, such as `/images/logo.png`. This tells the browser to start from the root of the current website.',
          'Root-relative paths can be useful, but they can also surprise you on GitHub Pages project sites because the project may be published inside a repository path.',
        ],
        bullets: [
          'Root-relative path: `/images/logo.png`',
          'Course recommendation: use relative paths like `images/logo.png` or `../images/logo.png` for project files.',
          'Use root-relative paths only when you understand where the site root will be after publishing.',
        ],
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
          '`src="script.js"`: Tells the browser where the JavaScript file is located.',
        ],
      },
      {
        title: 'Complete HTML Example',
        body: [
          'Here is how `index.html` might connect a stylesheet, image, internal page, and JavaScript file.',
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
          'The path uses the wrong folder name, such as `image` instead of `images`.',
          'The file extension is missing or incorrect, such as `logo.jpg` when the real file is `logo.png`.',
          'The project works locally but breaks online because file names use inconsistent capitalization.',
          'The file name uses spaces or special characters that make paths harder to write and debug.',
        ],
        note:
          'GitHub Pages is case-sensitive. A path to `Logo.png` will not find a file named `logo.png`. Use lowercase file names with dashes, such as `about-page.html`.',
      },
      {
        title: 'Broken Path Examples',
        body: [
          'Use this table when something does not load. Most path bugs are spelling, folder, extension, or location problems.',
        ],
        table: {
          headers: ['Broken path', 'Why it breaks', 'Possible fix'],
          rows: [
            ['`image/logo.png`', 'The folder is named `images`, not `image`.', '`images/logo.png`'],
            ['`images/Logo.png`', 'The real file is lowercase: `logo.png`.', '`images/logo.png`'],
            ['`images/logo`', 'The file extension is missing.', '`images/logo.png`'],
            ['`logo.png`', 'The image is inside the `images` folder.', '`images/logo.png`'],
            ['`images/my logo.png`', 'Spaces make paths awkward and easy to mistype.', '`images/my-logo.png`'],
            ['`/images/logo.png`', 'Root-relative paths may point to the wrong place on GitHub Pages project sites.', '`images/logo.png`'],
          ],
        },
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
      'Create `index.html` and `about.html`.',
      'Create folders named `css`, `js`, and `images`.',
      'Create `css/styles.css` and link it from `index.html`.',
      'Create `js/script.js` and link it from `index.html`.',
      'Add one image to the `images` folder and display it from `index.html`.',
      'Move `about.html` into a `pages` folder and link from `pages/about.html` back to `index.html`.',
      'Draw your project folder structure and label the current file and target file for each path.',
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
          'This lesson teaches the required structure of every HTML page and the common elements used inside the visible page content.',
          'By the end, you should be able to create a complete HTML document with a clear `head`, a visible `body`, readable content, links, images, and lists.',
        ],
      },
      {
        title: 'Full HTML Page Anatomy',
        body: [
          'A complete HTML page has a document type, one root `html` element, a `head` for page information, and a `body` for visible content.',
        ],
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is the visible page content.</p>
    <script src="script.js"></script>
  </body>
</html>`,
        bullets: [
          '`<!DOCTYPE html>` tells the browser to use modern HTML.',
          '`<html lang="en">` wraps the entire page and identifies the page language.',
          '`<head>` contains information about the page, including metadata, title, and CSS links.',
          '`<body>` contains the content people see and interact with.',
        ],
      },
      {
        title: 'The DOCTYPE Declaration',
        body: [
          'Every HTML document should begin with a `DOCTYPE` declaration. This tells the browser to render the page using modern HTML rules.',
        ],
        code: `<!DOCTYPE html>`,
      },
      {
        title: 'The html Element',
        body: [
          'Every HTML document has one `html` element. It acts as the root container for everything else on the page.',
          'The `lang` attribute tells browsers, search engines, and assistive technologies what language the page uses.',
        ],
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
  </body>
</html>`,
      },
      {
        title: 'The head Element',
        body: [
          'The `head` element contains information about the HTML document. This information is not displayed directly as page content.',
        ],
        bullets: [
          '`title`: Sets the title that appears in the browser tab.',
          '`meta`: Provides metadata about the page, such as character set, viewport, and description.',
          '`link`: Links to external files, most often stylesheets.',
          '`script`: Links to JavaScript files when needed.',
        ],
        code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A brief description of my website.">
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
</head>`,
        note:
          "Stylesheet links usually belong in the `head`. JavaScript links usually live near the bottom of the `body` so the HTML can load before the script runs.",
      },
      {
        title: 'Script Links at the Bottom of the Body',
        body: [
          'A common beginner-friendly pattern is to place the `script` element right before the closing `</body>` tag.',
        ],
        code: `<body>
  <h1>Welcome</h1>
  <script src="script.js"></script>
</body>`,
      },
      {
        title: 'The body Element',
        body: [
          'The `body` contains the visible content of the page. This includes elements like headings, paragraphs, images, lists, links, navigation, and page sections.',
        ],
      },
      {
        title: 'HTML Syntax: Elements and Attributes',
        body: [
          'HTML is built from elements. Most elements have an opening tag, content, and a closing tag.',
        ],
        code: `<p class="intro">This is a paragraph.</p>`,
        bullets: [
          '`<p>` is the opening tag.',
          '`class="intro"` is an attribute.',
          '`This is a paragraph.` is the content.',
          '`</p>` is the closing tag.',
        ],
      },
      {
        title: 'Tags',
        body: [
          'HTML elements are defined by opening and closing tags. Opening tags start with `<` and end with `>`. Closing tags start with `</` and end with `>`.',
          'For example, `<h1>` is an opening tag for a heading element, and `</h1>` is its closing tag.',
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
          'For example, the `h1` element would be `<h1>Page Title</h1>`.',
        ],
      },
      {
        title: 'Attributes',
        body: [
          "Attributes provide additional information about an element. They're specified within the opening tag and consist of a name-value pair separated by an equal sign.",
          'For example, the `img` element has a `src` attribute that specifies the image source.',
        ],
        code: `<img src="images/logo.png" alt="My Website Logo">`,
      },
      {
        title: 'Nesting',
        body: [
          'Elements can contain other elements, forming a hierarchical structure.',
          'The inner element, or child, must be opened and closed inside of the outer element, or parent. If the order of nested tags is wrong, the browser will try to fix the issue. This can lead to unexpected results.',
        ],
      },
      {
        title: 'Good vs. Broken Nesting',
        body: [
          'When one element is inside another element, close the inner element before closing the outer element.',
        ],
        table: {
          headers: ['Pattern', 'Example', 'Why'],
          rows: [
            ['Correct', '`<p><strong>Important text</strong></p>`', 'The `strong` element opens and closes inside the `p` element.'],
            ['Broken', '`<p><strong>Important text</p></strong>`', 'The `p` element closes before its child element closes.'],
          ],
        },
      },
      {
        title: 'Void Elements',
        body: [
          "Some HTML elements, like `img` and `br`, don't have a separate closing tag. They represent standalone content and are often referred to as void elements.",
        ],
        code: `<img src="image.png" alt="">
<br>`,
      },
      {
        title: 'Common Page Structure Elements',
        body: [
          'Semantic HTML elements describe the role of different parts of a page. They make pages easier to read, style, navigate, and maintain.',
        ],
        code: `<header>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
  </nav>
</header>
<main>
  <section>
    <h1>Page Title</h1>
    <p>Main page content goes here.</p>
  </section>
</main>
<footer>
  <p>&copy; 2026 My Website</p>
</footer>`,
        bullets: [
          '`header` usually contains introductory content or site navigation.',
          '`nav` contains important navigation links.',
          '`main` contains the primary content of the page.',
          '`section` groups related content.',
          '`footer` usually contains closing information, credits, or secondary links.',
        ],
      },
      {
        title: 'Headings',
        body: [
          "Headings, from `h1` to `h6`, structure your content and define its importance. They're not just for displaying large text; they indicate hierarchy, like a book's title, chapters, and subheadings.",
        ],
        code: `<h1>Welcome to My Website</h1>
<h2>About Us</h2>
<h3>Our Mission</h3>`,
        note:
          'Most beginner pages should start with one clear `h1`, then use `h2` and `h3` for subsections.',
      },
      {
        title: 'Paragraphs',
        body: [
          'The `p` element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines or first-line indentation.',
          'HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
        ],
        code: `<p>This is a paragraph of text.</p>`,
      },
      {
        title: 'Images',
        body: [
          'The `img` element is used to embed images in your HTML document.',
        ],
        bullets: [
          '`src`: Specifies the URL or path to the image file.',
          '`alt`: Provides alternative text for the image. This text is displayed if the image cannot be loaded and is crucial for accessibility.',
        ],
        code: `<img src="images/logo.png" alt="My Website Logo">`,
        note:
          'Use descriptive `alt` text for meaningful images. For decorative images, use an empty `alt` attribute, such as `alt=""`.',
      },
      {
        title: 'Meaningful vs. Decorative Image Alt Text',
        table: {
          headers: ['Image type', 'Example', 'Why'],
          rows: [
            ['Meaningful image', '`alt="Quinton Jason speaking at a design event"`', 'The image communicates information, so the `alt` text should describe it.'],
            ['Decorative image', '`alt=""`', 'The image is only visual decoration, so screen readers can skip it.'],
          ],
        },
      },
      {
        title: 'Lists',
        body: [
          "Unordered lists are used for items that don't have a specific order. Each item is wrapped in an `li` element.",
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
          'Ordered lists are used for items with a specific order. Each item is wrapped in an `li` element. Browsers typically render ordered lists with numbering.',
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
          'The `a` element creates hyperlinks that allow users to navigate to other web pages or sections within the same page.',
        ],
        bullets: [
          '`href`: Specifies the URL or path of the linked resource.',
          'Link text: The visible text displayed for the link.',
        ],
        code: `<a href="https://www.example.com">Visit Example Website</a>`,
      },
      {
        title: 'Types of Links',
        bullets: [
          'Internal links point to another page within the same website.',
          'External links point to a webpage on a different website.',
          'Relative links use a path relative to the current page location.',
          'Anchor links use an `id` to jump to a specific section within the same webpage.',
          'Telephone links use `tel:` to start a phone call on supported devices.',
          'Email links use `mailto:` to create a clickable email address.',
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
          'External links can use `target="_blank"`. When you do that, include `rel="noopener noreferrer"`.',
      },
      {
        title: 'Elements Covered Later',
        body: [
          'Some HTML elements need more time because they have their own structure and accessibility patterns. We will cover these in later lessons.',
        ],
        bullets: [
          '`table` is used for tabular data.',
          '`form` is used to collect user input.',
          '`input`, `label`, `textarea`, and `button` are common form elements.',
        ],
      },
      {
        title: 'Common Mistakes',
        body: [
          'When an HTML page looks strange, check the document structure first. Most beginner bugs are small syntax or organization issues.',
        ],
        table: {
          headers: ['Mistake', 'Why it matters', 'Fix'],
          rows: [
            ['Missing closing tag', 'The browser may guess where the element should end.', 'Close non-void elements, such as `</p>` and `</li>`.'],
            ['Visible content inside `head`', 'Content in the `head` will not behave like normal page content.', 'Put visible content inside the `body`.'],
            ['Image missing `alt`', 'The image may not be understandable to screen reader users.', 'Add meaningful `alt` text or use `alt=""` for decorative images.'],
            ['Link missing `href`', 'The link cannot go anywhere.', 'Add an `href` with the target page, URL, or section id.'],
            ['Broken nesting', 'The page structure can become unpredictable.', 'Close child elements before parent elements.'],
            ['Heading levels skipped for appearance', 'The page outline becomes harder to understand.', 'Choose headings by structure first, then style them with CSS.'],
          ],
        },
      },
      {
        title: 'Key Points',
        body: [
          'The `html`, `head`, and `body` elements form the basic structure of every HTML document.',
          'The `head` element contains information about the page. The `body` element contains the visible content that users will see.',
          'By combining semantic structure and common content elements, you can start creating simple web pages with text, images, lists, and links.',
        ],
      },
      {
        title: 'Exercise: Simple Page',
        body: [
          'Create a starter page that has a title, one main heading, and one paragraph.',
        ],
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        body: [
          'Create an About Me page with a clear heading, a short paragraph, and an unordered list.',
        ],
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
  </head>
  <body>
    <h1>John Doe</h1>
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
        body: [
          'Create a contact page with email and telephone links. Put each link in its own paragraph or list item so the links have clear spacing.',
        ],
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
  </head>
  <body>
    <h1>Contact Information</h1>
    <ul>
      <li><a href="mailto:john.doe@example.com">john.doe@example.com</a></li>
      <li><a href="tel:+15551234567">555-123-4567</a></li>
    </ul>
  </body>
</html>`,
      },
      {
        title: 'Check Your Page',
        bullets: [
          'Make sure the page has one `DOCTYPE`, one `html` element, one `head`, and one `body`.',
          'Make sure visible content is inside the `body`.',
          'Check that images include useful `alt` text.',
          'Click every link to make sure each `href` works.',
          "Use your browser's Developer Tools, also called Inspect, to look for errors.",
          'Run your code through an accessibility checker like WAVE.',
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
      'Build a complete `index.html` page with `DOCTYPE`, `html`, `head`, and `body`.',
      'Add one `header`, one `main`, and one `footer`.',
      'Add headings, paragraphs, one image, one unordered list, and one ordered list.',
      'Add one internal link, one external link, one email link, and one telephone link.',
      'Check the page for missing closing tags, broken nesting, missing `alt` text, and links without `href`.',
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
          '`HTML`: Defines the content and structure of the page. This includes elements such as headings, paragraphs, images, lists, and forms.',
          '`CSS`: Controls the presentation and appearance of the HTML content. This includes colors, fonts, layout, spacing, and visual effects.',
          '`JavaScript`: Adds behavior to the page, making it interactive. This includes animations, dynamic content updates, and user input handling.',
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
          'Styles are applied directly to an HTML element using the `style` attribute within the opening tag.',
        ],
        code: `<h1 style="color: blue; font-size: 2em;">Welcome!</h1>`,
        note:
          'Note: Inline styles are discouraged because they can reduce readability and maintainability, especially in larger projects.',
      },
      {
        title: 'Internal Stylesheets',
        body: [
          'Styles are defined within the `head` section using the `style` tag.',
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
          'Styles are placed in a separate file, such as `styles.css`, and linked using the `link` tag.',
        ],
        code: `<head>
  <link rel="stylesheet" href="styles.css">
</head>`,
        note:
          'Recommended: External stylesheets improve code organization and reuse.',
      },
      {
        title: 'Full HTML and CSS Connection',
        body: [
          'Most class projects should use an `index.html` file for structure and a `styles.css` file for presentation.',
          'The HTML file connects to the CSS file with a `link` element in the `head`.',
        ],
        code: `<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

<!-- styles.css -->
body {
  font-family: Arial, sans-serif;
  color: #222;
}`,
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
          '`Selector`: Defines the elements to be styled.',
          '`Declaration block`: The curly braces that contain one or more declarations.',
          '`Declaration`: A property and value pair, such as `color: blue;`.',
          '`Property`: The style to be applied, such as `color`.',
          '`Value`: The setting for the property, such as `blue`.',
        ],
        code: `selector {
  property: value;
}`,
      },
      {
        title: 'CSS Rule Anatomy',
        body: [
          'A CSS rule starts with a selector, then uses declarations to change the selected elements.',
        ],
        code: `p {
  color: blue;
}`,
        bullets: [
          '`p` is the selector.',
          '`color: blue;` is the declaration.',
          '`color` is the property.',
          '`blue` is the value.',
        ],
      },
      {
        title: 'Code Example: Type Selector',
        body: [
          'Targets all elements of a given type. For example, targeting all `h1` tags.',
          'Use type selectors for broad defaults, such as styling all paragraphs or all headings.',
        ],
        code: `h1 {
  color: blue;
}`,
      },
      {
        title: 'Code Example: ID Selector',
        body: [
          'Targets a single element with a specific ID, defined using the `#` symbol.',
          'ID selectors are very specific. For styling, classes are usually easier to reuse and maintain.',
        ],
        code: `#myDiv {
  background-color: lightgray;
}`,
      },
      {
        title: 'Code Example: Class Selector',
        body: [
          'Targets any elements that use a given class, defined using the `.` symbol.',
          'Use class selectors for reusable styling patterns.',
        ],
        code: `.container {
  padding: 20px;
  background-color: #efefef;
}`,
      },
      {
        title: 'Code Example: Descendant Selector',
        body: [
          'Targets elements that are nested within another element. This example targets only paragraphs inside `div` elements.',
          'Use descendant selectors when location in the HTML structure matters.',
        ],
        code: `div p {
  color: green;
}`,
      },
      {
        title: 'Code Example: Pseudo-Class',
        body: [
          'Targets elements in a particular state, like when a user hovers over a link.',
          'Use pseudo-classes for interaction states such as `:hover`, `:focus`, and `:visited`.',
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
          'CSS uses `/* */` for comments. The `//` single-line comment style is common in some languages, but it is not valid standard CSS.',
      },
      {
        title: 'Core Concept: Common CSS Properties',
        body: [
          'These are frequently used CSS properties to control layout, text, and element appearance.',
        ],
        table: {
          headers: ['Group', 'Properties', 'What they control'],
          rows: [
            ['Text', '`color`, `font-size`, `font-family`', 'Text color, size, and typeface.'],
            ['Page surface', '`background-color`', 'The background color behind an element.'],
            ['Size', '`width`, `height`, `max-width`', 'How wide or tall an element can be.'],
            ['Box spacing', '`margin`, `padding`', 'Space outside and inside an element.'],
            ['Borders', '`border`, `border-radius`', 'Edges and corner shape.'],
          ],
        },
      },
      {
        title: 'Code Example: Container / Wrapper',
        body: [
          'Used to center content and limit maximum width for layout consistency.',
          'A reusable class is better than styling every `div` the same way.',
        ],
        code: `.container {
  max-width: 800px;
  margin-inline: auto;
  padding-inline: 20px;
}`,
      },
      {
        title: 'Code Example: Centering in CSS',
        body: [
          'Text can be centered with `text-align`. Block elements can be centered using auto margins.',
        ],
        code: `p {
  text-align: center;
}

.container {
  max-width: 800px;
  margin-inline: auto;
}`,
      },
      {
        title: 'Core Concept: The Cascade',
        body: [
          'The cascade is how the browser decides which CSS rule wins when more than one rule applies to the same element.',
          'When CSS feels confusing, the issue is often order, specificity, or inheritance.',
        ],
        bullets: [
          '`Last rule`: Later rules override earlier ones if selectors match and have the same specificity.',
          '`Specificity`: More specific selectors take precedence.',
          '`!important`: Overrides normal cascade rules but should be used sparingly.',
        ],
      },
      {
        title: 'Cascade Example: Later Rule Wins',
        body: [
          'When two matching selectors have the same specificity, the later rule wins.',
        ],
        code: `p {
  color: green;
}

p {
  color: blue;
}`,
        note:
          'The paragraph text will be blue because the second `p` rule comes later.',
      },
      {
        title: 'Specificity Example: Class Beats Type',
        body: [
          'A class selector is more specific than a type selector. If the HTML paragraph has `class="intro"`, the class rule wins.',
        ],
        code: `p {
  color: green;
}

.intro {
  color: blue;
}`,
      },
      {
        title: 'Core Concept: Inheritance',
        body: [
          'Some properties, like `color` and `font-family`, are inherited by child elements.',
          'Inheritance lets you set broad defaults on the `body`, then override them when needed.',
        ],
        code: `body {
  font-family: Arial, sans-serif;
  color: #222;
}

a {
  color: green;
}`,
        note:
          'Most text will inherit the `body` font and color. Links use the `a` rule because it overrides the inherited color.',
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why it breaks', 'Fix'],
          rows: [
            ['CSS file not linked', 'The browser never loads `styles.css`.', 'Add `<link rel="stylesheet" href="styles.css">` inside the `head`.'],
            ['Selector does not match HTML', 'The rule exists, but no element is selected.', 'Compare the selector with the actual element, class, or ID in the HTML.'],
            ['Missing semicolon', 'The next declaration may not be read correctly.', 'End declarations with a semicolon, such as `color: blue;`.'],
            ['Missing closing brace', 'The browser may treat later rules as part of the same rule.', 'Close every rule with `}`.'],
            ['Class selector missing `.`', '`container` selects an element named container, not `class="container"`.', 'Use `.container` for classes.'],
            ['ID selector missing `#`', '`hero` selects an element named hero, not `id="hero"`.', 'Use `#hero` for IDs.'],
            ['Earlier rule expected to win', 'Later rules can override earlier rules.', 'Check rule order and specificity in developer tools.'],
            ['Using `!important` too quickly', 'It makes future overrides harder.', 'Inspect the cascade and adjust selector or rule order first.'],
          ],
        },
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Confirm the CSS file path is correct in the `link` tag.',
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
      'Create a `styles.css` file.',
      'Link `styles.css` from `index.html` using a `link` element in the `head`.',
      'Style the `body` with a font family, text color, background color, and margin.',
      'Create a reusable `.container` class with `max-width`, `margin-inline: auto`, and padding.',
      'Style headings and paragraphs with type selectors.',
      'Create at least one reusable class selector.',
      'Add a hover state with a pseudo-class, such as `a:hover`.',
      'Inspect one styled element in developer tools and find where the winning rule comes from.',
      'Intentionally break one selector, then fix it after checking the page in the browser.',
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
        title: 'Why Text Styling Matters',
        body: [
          'Text styling affects how quickly people can read, scan, and understand a page.',
          'Good typography creates hierarchy, supports the tone of the site, and keeps content accessible across screen sizes and devices.',
        ],
      },
      {
        title: 'Typography System Starter',
        body: [
          'A typography system gives your site consistent defaults for body text, headings, links, and small labels.',
        ],
        code: `body {
  font-family: Arial, Helvetica, sans-serif;
  color: #1f2937;
  line-height: 1.6;
}

h1 {
  font-size: 2.5rem;
  line-height: 1.1;
}

h2 {
  font-size: 1.75rem;
}

a {
  color: #0b55b7;
  text-decoration: underline;
  text-underline-offset: 0.2em;
}`,
      },
      {
        title: 'Text Styling Property Groups',
        body: [
          'Text properties are easier to learn when you group them by purpose.',
        ],
        table: {
          headers: ['Purpose', 'Properties', 'What to ask'],
          rows: [
            ['Color and contrast', '`color`', 'Is the text easy to read against the background?'],
            ['Font choice', '`font-family`', 'Does the font match the tone and stay readable?'],
            ['Size and scale', '`font-size`', 'Can people scan headings and read body text comfortably?'],
            ['Weight and emphasis', '`font-weight`, `font-style`', 'What needs emphasis, and is it used consistently?'],
            ['Links and decoration', '`text-decoration`, `text-underline-offset`', 'Can users tell what is clickable?'],
            ['Spacing and rhythm', '`line-height`, `letter-spacing`, `word-spacing`', 'Does the text have enough breathing room?'],
            ['Alignment', '`text-align`', 'Does the alignment support reading, especially for long text?'],
          ],
        },
      },
      {
        title: 'Font Styles',
        body: [
          'Font styles affect the appearance of text within your HTML elements. Start with readable defaults, then adjust headings, links, and special labels.',
        ],
      },
      {
        title: 'color',
        body: [
          '`color` updates the foreground color of the text. It also affects the color of associated underlines included with `text-decoration`.',
          'Choose colors with enough contrast against the background. Text color is not just decoration; it directly affects readability.',
        ],
        code: `p {
  color: #1f2937;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color' },
        ],
      },
      {
        title: 'font-family',
        body: [
          '`font-family` sets the font for your text. Use readable fonts and always end the font stack with a generic family.',
          'The font stack is a list of fonts, from left to right, that the browser will try to load.',
          'Common generic families include `sans-serif`, `serif`, and `monospace`.',
        ],
        code: `body {
  font-family: Arial, Helvetica, sans-serif;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-family' },
        ],
      },
      {
        title: 'font-size',
        body: [
          '`font-size` sets the size of text. For most project typography, `rem` is a flexible default because it responds to the root text size.',
          'Avoid setting body text too small. A common starting point is `1rem` for paragraphs.',
        ],
        bullets: [
          '`px`: Fixed size. Useful for small details, but less flexible for type systems.',
          '`em`: Relative to the parent element.',
          '`rem`: Relative to the root element. Usually a good choice for font sizing.',
        ],
        code: `h1 {
  font-size: 2rem;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size' },
        ],
      },
      {
        title: 'font-style',
        body: ['`font-style` is often used to toggle italics for emphasis or citations.'],
        code: `em {
  font-style: italic;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style' },
        ],
      },
      {
        title: 'font-weight',
        body: [
          '`font-weight` controls the boldness of text using keywords or numeric values from `100` to `900`.',
          'Use a small set of weights consistently. Too many weights can make a page feel noisy.',
        ],
        code: `strong {
  font-weight: 700;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight' },
        ],
      },
      {
        title: 'Heading Hierarchy Example',
        body: [
          'Use size, weight, and line height to make headings feel related but clearly ranked.',
        ],
        code: `h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
}

h2 {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}`,
      },
      {
        title: 'text-transform',
        body: [
          '`text-transform` applies casing transformations to text.',
          'It works well for short labels, eyebrows, or buttons. Avoid using all caps for long paragraphs because it becomes harder to read.',
        ],
        code: `.eyebrow {
  text-transform: uppercase;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform' },
        ],
      },
      {
        title: 'text-decoration',
        body: [
          '`text-decoration` controls underlines and other text lines. It is often used to style link underlines.',
          'Links should remain visually identifiable. If you remove an underline, replace it with another strong cue such as color, weight, or a clear hover/focus style.',
        ],
        code: `a {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration' },
        ],
      },
      {
        title: 'text-shadow',
        body: [
          '`text-shadow` applies shadow to text with horizontal offset, vertical offset, blur, and color.',
          'Use text shadows sparingly. Heavy shadows can make text harder to read.',
        ],
        code: `h1 {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow' },
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
        body: [
          '`text-align` aligns text left, right, center, or justify.',
          'Centered text can work for short headings, but long centered paragraphs are harder to read.',
        ],
        code: `p {
  text-align: center;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align' },
        ],
      },
      {
        title: 'line-height',
        body: [
          '`line-height` controls spacing between lines. Use unitless values like `1.5` or `1.6` for better scalability.',
          'Comfortable line height is one of the quickest ways to make paragraphs easier to read.',
        ],
        code: `p {
  line-height: 1.5;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height' },
        ],
      },
      {
        title: 'letter-spacing',
        body: [
          '`letter-spacing` controls spacing between letters.',
          'It is useful for short uppercase labels, but too much spacing in paragraphs can harm readability.',
        ],
        code: `.label {
  letter-spacing: 0.08em;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing' },
        ],
      },
      {
        title: 'word-spacing',
        body: [
          '`word-spacing` controls spacing between words.',
          'It is rarely needed in everyday typography. Use it carefully and test readability.',
        ],
        code: `p {
  word-spacing: 0.1em;
}`,
        resources: [
          { label: 'MDN Link', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing' },
        ],
      },
      {
        title: 'Good vs. Risky Text Styling',
        table: {
          headers: ['Pattern', 'Example', 'Why'],
          rows: [
            ['Good', '`line-height: 1.5;`', 'Unitless line height scales well and improves readability.'],
            ['Risky', '`letter-spacing: 0.2em;` on paragraphs', 'Large letter spacing makes long text harder to read.'],
            ['Good', 'Underlined links', 'Users can quickly identify clickable text.'],
            ['Risky', '`text-decoration: none;` with no replacement cue', 'Links may look like normal text.'],
            ['Good', '`font-size: 1rem;` for body text', 'Body text starts at a readable default size.'],
            ['Risky', '`font-size: 12px;` for paragraphs', 'Small text can be hard to read, especially on mobile.'],
            ['Good', 'One or two font weights', 'The page feels consistent and intentional.'],
            ['Risky', 'Many unrelated weights and styles', 'The visual hierarchy becomes noisy.'],
          ],
        },
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why it matters', 'Better approach'],
          rows: [
            ['Body text is too small', 'Small text slows reading and can create accessibility problems.', 'Start body text around `1rem` and adjust carefully.'],
            ['Low contrast text', 'People may struggle to read the content.', 'Choose colors with strong contrast against the background.'],
            ['Too many font weights', 'The page can feel inconsistent.', 'Use a limited set, such as `400`, `700`, and maybe `800`.'],
            ['Centered long paragraphs', 'The eye has to search for the start of each line.', 'Use left-aligned paragraphs for longer reading.'],
            ['All caps paragraphs', 'Long uppercase text is harder to read.', 'Reserve `uppercase` for short labels.'],
            ['Removed link underlines', 'Clickable text may become hard to identify.', 'Keep underlines or add another clear cue.'],
            ['Heavy text shadow', 'Decorative effects can reduce readability.', 'Use subtle shadows only when they improve contrast or style.'],
          ],
        },
      },
    ],
    practice: [
      'Style `body`, `h1`, `h2`, `p`, `a`, and `.eyebrow` on an existing page.',
      'Create a readable type scale using `rem` values.',
      'Set comfortable paragraph `line-height`.',
      'Style links with visible underline, hover, and focus states.',
      'Use `text-transform` and `letter-spacing` on a short label only.',
      'Compare one low-contrast text color with a more readable color.',
      'Check that long paragraphs are left-aligned and easy to scan.',
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
          "Fonts play a central role in web design. They influence how a website looks and feels, and they affect how easily users can read your content.",
          'The previous lesson focused on styling text. This lesson focuses on choosing fonts, building font stacks, loading custom fonts, checking licenses, and managing performance.',
        ],
      },
      {
        title: 'Font Decision Checklist',
        body: [
          'Before importing a font, decide whether it helps the project enough to justify the extra file request.',
        ],
        bullets: [
          'Is the font readable at small and large sizes?',
          'Does the font match the tone of the site?',
          'Do you need multiple weights, or would one or two be enough?',
          'Is the font licensed for your project?',
          'Will the font slow down the page?',
          'Does the page still work if the custom font fails to load?',
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
        title: 'Modern System Font Stack',
        body: [
          "A system font stack uses fonts that already exist on the user's device. This is fast, readable, and often a strong default.",
        ],
        code: `body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
      },
      {
        title: 'Using Font Stacks',
        code: `body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}`,
        body: [
          'The browser will try each font in order. If one is unavailable, it moves to the next. The generic family, such as `sans-serif`, ensures a fallback display.',
        ],
      },
      {
        title: 'Generic Families',
        bullets: [
          '`serif`: with decorative strokes',
          '`sans-serif`: without strokes, often cleaner',
          '`monospace`: all characters take up the same space',
          '`cursive`: handwriting-style',
          '`fantasy`: decorative or stylized',
        ],
        note:
          'In most class projects, `serif`, `sans-serif`, and `monospace` are the most practical generic families.',
      },
      {
        title: 'Importing Custom Fonts with @font-face',
        body: [
          'Use `@font-face` when you are self-hosting a font file in your project.',
          'A beginner-friendly modern setup can start with `woff2`, which is the recommended format for current browsers.',
        ],
        code: `@font-face {
  font-family: "MyFont";
  src: url("fonts/myfont.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}`,
        note:
          '`font-display: swap` helps pages load faster by showing fallback fonts until the custom font is ready.',
      },
      {
        title: 'How @font-face Works',
        table: {
          headers: ['Part', 'Purpose', 'Example'],
          rows: [
            ['`font-family`', 'Names the custom font so you can use it later in CSS.', '`font-family: "MyFont";`'],
            ['`src`', 'Points to the font file.', '`src: url("fonts/myfont.woff2") format("woff2");`'],
            ['`font-weight`', 'Defines which weight this font file represents.', '`font-weight: 400;`'],
            ['`font-style`', 'Defines whether the file is normal, italic, or another style.', '`font-style: normal;`'],
            ['`font-display`', 'Controls what happens while the font is loading.', '`font-display: swap;`'],
          ],
        },
      },
      {
        title: 'Older Font Formats',
        body: [
          'Most modern projects should prefer `woff2`. Older formats are useful to recognize, but you usually do not need all of them for class projects.',
        ],
        table: {
          headers: ['Format', 'Use'],
          rows: [
            ['`.woff2`', 'Best compression and most recommended.'],
            ['`.woff`', 'Older fallback format.'],
            ['`.ttf`', 'Older format that may appear in font downloads.'],
            ['`.eot`', 'Legacy Internet Explorer format. Usually obsolete.'],
          ],
        },
      },
      {
        title: 'Google Fonts Integration',
        body: [
          'Google Fonts gives you the HTML `link` elements and the CSS `font-family` value to use.',
          'Only select the weights and styles you actually need. Loading every weight makes the page heavier.',
        ],
        code: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">`,
      },
      {
        title: 'Using the Google Font in CSS',
        code: `body {
  font-family: "Open Sans", sans-serif;
}`,
        note: 'Always include a fallback font, such as `sans-serif`, `serif`, or `monospace`.',
      },
      {
        title: 'Hosted vs. Self-Hosted Fonts',
        body: [
          'Hosted font services like Google Fonts are convenient because they provide the files and embed code.',
          'Self-hosted fonts give you more control over files, privacy, caching, and performance, but they require more setup.',
        ],
      },
      {
        title: 'Font Pairing',
        body: [
          'A font pairing is the combination of fonts used across a site. Keep pairings simple while you are learning.',
        ],
        bullets: [
          'One font for everything is often enough.',
          'One heading font plus one body font can create contrast without getting messy.',
          'Avoid using three or more fonts early. It usually makes the design harder to control.',
        ],
      },
      {
        title: 'Finding Fonts',
        bullets: [
          '[Google Fonts](https://fonts.google.com/): free and popular',
          '[Adobe Fonts](https://fonts.adobe.com/): subscription-based',
          '[Font Squirrel](https://www.fontsquirrel.com/): curated, often commercially licensed',
          '[DaFont](https://www.dafont.com/): check usage rights carefully',
        ],
        note:
          "Always check the license terms before using a font, even if it's free.",
      },
      {
        title: 'Styling with Fonts',
        code: `h1 {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 2em;
}

p {
  font-family: "Lora", serif;
  font-style: italic;
  line-height: 1.5;
}`,
      },
      {
        title: 'Performance Tips',
        table: {
          headers: ['Action', 'Why it helps'],
          rows: [
            ['Prefer `.woff2`', 'It usually gives the best compression.'],
            ['Load only needed weights and styles', 'Every extra weight can add another file request.'],
            ['Avoid unused fonts', 'Do not load fonts that never get applied in CSS.'],
            ['Use `font-display: swap`', 'Fallback text appears while the custom font loads.'],
            ['Test fallback fonts', 'The layout should still work if the custom font fails.'],
          ],
        },
      },
      {
        title: 'Accessibility Considerations',
        bullets: [
          'Avoid overly decorative fonts for body text.',
          'Check readability at small sizes.',
          'Use relative units like `em` or `rem`.',
          'Avoid relying only on font weight or style to communicate meaning.',
          'Make sure fallback fonts still keep the page readable.',
          'Use tools to check contrast ratios when choosing text and background colors.',
        ],
        code: `body {
  font-size: 1rem;
}

p {
  font-size: 1.2rem;
}`,
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why it matters', 'Fix'],
          rows: [
            ['Missing fallback font', 'The browser may choose an unpredictable fallback.', 'End the stack with a generic family like `sans-serif`.'],
            ['Importing too many weights', 'The page becomes heavier than necessary.', 'Load only the weights you actually use.'],
            ['Decorative font for paragraphs', 'Long text becomes harder to read.', 'Save decorative fonts for short display text.'],
            ['License not checked', 'The font may not be allowed for your use.', 'Read the license before publishing.'],
            ['`@font-face` name mismatch', 'The custom font loads but is never applied.', 'Match the `font-family` name exactly.'],
            ['Loaded but unused font', 'The site pays a performance cost for no visual benefit.', 'Remove unused font imports or apply the font intentionally.'],
            ['No `font-display` setting', 'Users may see invisible text while the font loads.', 'Use `font-display: swap`.'],
          ],
        },
      },
      {
        title: 'Activity: Try It Yourself',
        body: [
          'Use this activity to test font loading, fallback behavior, and font choice.',
        ],
        bullets: [
          'Create a system font stack.',
          'Import a Google Font of your choice.',
          'Apply the imported font to headings or body text.',
          'Limit the import to two weights or fewer.',
          'Open developer tools and inspect the font network requests.',
          'Temporarily remove the import and check whether the fallback still looks acceptable.',
          'Document the font source and license.',
        ],
      },
    ],
    practice: [
      'Create a system font stack for `body`.',
      'Import one Google Font and apply it to headings or body text.',
      'Limit the imported font to two weights or fewer.',
      'Create a font stack with at least one named font and one generic fallback.',
      'Inspect the font request in developer tools.',
      'Temporarily remove the font import and test the fallback.',
      'Document the font source and license in a project note or comment.',
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
          'This lesson introduces the HTML elements, attributes, labels, validation patterns, and accessibility practices that make forms usable.',
        ],
      },
      {
        title: 'Form Anatomy',
        body: [
          'A form needs a `form` element, labeled fields, useful `name` values, and a submit button.',
          'For class projects without a backend, point the `action` to a confirmation page such as `thank-you.html`.',
        ],
        code: `<form action="thank-you.html" method="get">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Submit</button>
</form>`,
      },
      {
        title: 'The form Element: The Container',
        body: [
          'The `form` element acts as a container for form controls. It defines where the data goes and how it is sent.',
        ],
        code: `<form action="thank-you.html" method="get">
</form>`,
      },
      {
        title: 'Form Attributes',
        bullets: [
          '`action`: Specifies the URL or page where the form data will be sent.',
          '`method`: Defines how the data is sent, usually `get` or `post`.',
          '`enctype`: Specifies how form data should be encoded when submitted.',
          '`target`: Specifies where to display the response after submission.',
        ],
        note:
          'For static class projects, use `action="thank-you.html"` so the form leads to a confirmation page.',
      },
      {
        title: 'Labels, for, and id',
        body: [
          'Every form control should have a visible `label`.',
          'The label connects to the input when the label `for` value matches the input `id` value.',
        ],
        code: `<label for="firstName">First Name</label>
<input type="text" id="firstName" name="firstName">`,
        bullets: [
          '`for="firstName"` points to the field with `id="firstName"`.',
          'Connected labels help screen reader users and make the label clickable.',
        ],
      },
      {
        title: 'id vs. name',
        body: [
          '`id` and `name` do different jobs. Students often mix them up, so check both.',
        ],
        table: {
          headers: ['Attribute', 'What it does', 'Example'],
          rows: [
            ['`id`', 'Connects the control to a label and can be used by CSS or JavaScript.', '`id="email"`'],
            ['`name`', 'Becomes the key sent with the form data when the form submits.', '`name="email"`'],
          ],
        },
      },
      {
        title: 'Input Elements: Gathering User Data',
        body: [
          'The `input` element is the most versatile form element. Its behavior changes based on the `type` attribute.',
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
        title: 'Radio Buttons',
        body: [
          'Radio buttons let users choose one option from a group. Inputs in the same radio group share the same `name`.',
        ],
        code: `<fieldset>
  <legend>Preferred contact method</legend>

  <input type="radio" id="contactEmail" name="contactMethod" value="email">
  <label for="contactEmail">Email</label>

  <input type="radio" id="contactPhone" name="contactMethod" value="phone">
  <label for="contactPhone">Phone</label>
</fieldset>`,
      },
      {
        title: 'Grouped Controls with fieldset and legend',
        body: [
          'Use `fieldset` and `legend` to group related controls, especially checkbox and radio groups.',
        ],
        code: `<fieldset>
  <legend>Interests</legend>

  <input type="checkbox" id="design" name="interests" value="design">
  <label for="design">Design</label>

  <input type="checkbox" id="code" name="interests" value="code">
  <label for="code">Code</label>
</fieldset>`,
      },
      {
        title: 'textarea',
        body: [
          'Use `textarea` when the user needs to enter multiple lines of text.',
        ],
        code: `<label for="comments">Comments</label>
<textarea id="comments" name="comments" rows="5" placeholder="Enter your comments here"></textarea>`,
        note:
          'Avoid using `<br>` to space form fields. Use CSS for spacing instead.',
      },
      {
        title: 'select and option',
        body: [
          'Use `select` and `option` when the user should choose from a defined list.',
        ],
        code: `<label for="country">Country</label>
<select id="country" name="country">
  <option value="">Choose a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>`,
      },
      {
        title: 'Other Input Types',
        body: [
          'HTML includes input types that give browsers more information about the expected data.',
        ],
        table: {
          headers: ['Type', 'Use'],
          rows: [
            ['`tel`', 'Telephone numbers.'],
            ['`url`', 'Website URLs.'],
            ['`number`', 'Numeric values.'],
            ['`date`', 'Date picking.'],
            ['`file`', 'File uploads.'],
            ['`search`', 'Search fields.'],
          ],
        },
      },
      {
        title: 'Submit Buttons',
        body: [
          'A form needs a way to submit. Use a `button` with `type="submit"` for normal form submission.',
        ],
        code: `<button type="submit">Send</button>
<button type="button">Open menu</button>`,
        bullets: [
          '`type="submit"` submits the form.',
          '`type="button"` creates a button that does not submit unless JavaScript gives it behavior.',
        ],
      },
      {
        title: 'Placeholders Are Not Labels',
        body: [
          '`placeholder` text can give an example, but it should not replace a visible `label`.',
          'Placeholder text disappears when users type and can be harder to read.',
        ],
        code: `<label for="email">Email</label>
<input type="email" id="email" name="email" placeholder="name@example.com">`,
      },
      {
        title: 'Autocomplete',
        body: [
          '`autocomplete` helps browsers fill common information faster and more accurately.',
        ],
        code: `<label for="email">Email</label>
<input type="email" id="email" name="email" autocomplete="email">

<label for="firstName">First Name</label>
<input type="text" id="firstName" name="firstName" autocomplete="given-name">`,
      },
      {
        title: 'HTML Validation',
        body: [
          'HTML can provide basic validation before a form submits.',
        ],
        table: {
          headers: ['Attribute', 'Use'],
          rows: [
            ['`required`', 'Requires a value before submission.'],
            ['`type="email"`', 'Checks for an email-like format.'],
            ['`minlength` and `maxlength`', 'Sets text length limits.'],
            ['`min` and `max`', 'Sets number or date limits.'],
            ['`pattern`', 'Matches a custom pattern. Use carefully because it can be hard to write and explain.'],
          ],
        },
      },
      {
        title: 'Helper Text with aria-describedby',
        body: [
          'Use helper text when a field needs instructions. Connect the helper text to the field with `aria-describedby`.',
        ],
        code: `<label for="email">Email</label>
<p id="email-help">Use your school email address.</p>
<input id="email" name="email" type="email" aria-describedby="email-help">`,
      },
      {
        title: 'Accessibility Considerations',
        bullets: [
          'Use `label` elements for every form field.',
          'Provide clear instructions and error messages.',
          'Use native HTML first. Add ARIA only when it provides information HTML does not.',
          'Ensure keyboard navigation and focus management.',
          'Make sure focus states are visible.',
        ],
      },
      {
        title: 'Form Submission',
        body: [
          "When a form is submitted, data is sent to the location in the `action` attribute. Since this class doesn't cover server-side languages, forms should point to a confirmation page like `thank-you.html`.",
          'If you use `method="get"`, you can inspect the submitted values in the URL query string after submission.',
        ],
      },
      {
        title: 'Example: Contact Form',
        code: `<form action="thank-you.html" method="get">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" autocomplete="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" autocomplete="email" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <button type="submit">Send message</button>
</form>`,
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why it matters', 'Fix'],
          rows: [
            ['Input missing `label`', 'The field may be unclear, especially for assistive technology users.', 'Add a visible `label`.'],
            ['`for` does not match `id`', 'The label is not connected to the input.', 'Make the values match exactly.'],
            ['Missing `name`', 'The value may not be included when the form submits.', 'Add a useful `name` to every submitted control.'],
            ['Placeholder used as the only label', 'The instruction disappears when typing begins.', 'Use a visible `label`; keep placeholder text optional.'],
            ['Checkbox or radio group missing `fieldset`', 'The group question may be unclear.', 'Wrap related options in `fieldset` with a `legend`.'],
            ['Submit button missing', 'Users may not know how to send the form.', 'Add `<button type="submit">Submit</button>`.'],
            ['Form `action` points nowhere', 'Submitting creates a confusing result.', 'Use `action="thank-you.html"` for class projects.'],
            ['Using `autofocus` too casually', 'Focus may jump unexpectedly when the page loads.', 'Use `autofocus` only when it truly improves the experience.'],
          ],
        },
      },
    ],
    practice: [
      'Build a contact form with `text`, `email`, `textarea`, and `select` controls.',
      'Add one checkbox or radio group using `fieldset` and `legend`.',
      'Add a submit button with `type="submit"`.',
      'Set `action="thank-you.html"` and use `method="get"`.',
      'Check that every form control has a visible `label`.',
      'Check that every label `for` value matches an input `id`.',
      'Check that every submitted control has a `name`.',
      'Test the form with keyboard only.',
      'Submit the form and inspect the query string in the browser URL.',
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
          'You will learn how `content`, `padding`, `border`, `margin`, and `box-sizing` affect the space an element takes up.',
          'You will also learn how basic layout techniques like `display`, `float`, `flexbox`, and `grid` change how elements arrange themselves.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          'Most layout problems are box model problems first.',
          'When spacing looks strange, elements overflow, columns do not line up, or a card is wider than expected, the answer is often `padding`, `margin`, `border`, or `box-sizing`.',
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
          'Respect `width` and `height` properties.',
          '`padding`, `margin`, and `border` apply and affect the layout of surrounding elements.',
          'Examples: `h1`, `p`, `div`, `ul`, `form`, `table`.',
        ],
      },
      {
        title: 'Inline elements',
        bullets: [
          'Only occupy the space needed for their content.',
          'Flow within a line of text, not creating line breaks.',
          'Ignore `width` and `height` properties.',
          "Vertical `padding`, `margin`, and `border` apply but don't affect the positioning of other inline elements.",
          'Horizontal `padding`, `margin`, and `border` apply and affect the positioning of other inline elements.',
          'Examples: `span`, `a`, `img`, `strong`, `em`.',
        ],
      },
      {
        title: 'Block, Inline, and Inline-block Example',
        body: [
          '`inline-block` is useful for links that should look like buttons because the element still flows inline but accepts padding, width, and height.',
        ],
        code: `<div>Block element</div>
<p>Another block element</p>
<span>Inline element</span>
<a href="#">Inline link</a>`,
      },
      {
        title: 'Core Concept: The CSS Box Model',
        body: [
          'Every element on a web page is treated as a rectangular box, composed of content, padding, border, and margin.',
        ],
      },
      {
        title: 'Box Model Anatomy',
        body: [
          'The box model has layers. Start from the content and move outward.',
        ],
        image: {
          src: '/images/lessons/box-model-and-layout/box-model-diagram.jpg',
          alt: 'Diagram of the CSS box model with margin surrounding border, padding, and content.',
          caption: 'The CSS box model layers move outward from content to padding, border, and margin.',
        },
      },
      {
        title: 'Complete Card Example',
        body: [
          'This example combines the main box model properties in one reusable card.',
        ],
        code: `.card {
  box-sizing: border-box;
  width: 320px;
  padding: 1rem;
  border: 2px solid #1f2937;
  margin: 1rem;
  background-color: #f4faf5;
}`,
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
          'The space between the `content` and the `border`. Padding is transparent and expands the background color of the element.',
        ],
        code: `p {
  background-color: lightblue;
  padding: 20px;
}`,
      },
      {
        title: 'Box Layer: Border',
        body: [
          'A visual boundary surrounding the `padding` and `content`. Borders can have different styles, colors, and thicknesses.',
        ],
        code: `div {
  border: 2px solid black;
}`,
      },
      {
        title: 'Box Layer: Margin',
        body: [
          'The space outside the `border`, creating separation between elements. Margins are transparent and can collapse with adjacent vertical margins.',
        ],
        code: `h1 {
  margin-bottom: 1em;
}`,
      },
      {
        title: 'Core Concept: box-sizing',
        body: [
          'The `box-sizing` property determines how the `width` and `height` of an element are calculated.',
          'Many developers prefer `border-box` because it makes element sizing easier to predict.',
        ],
        bullets: [
          '`content-box`: The default. `width` and `height` include only the content area.',
          '`border-box`: `width` and `height` include content, padding, and border, but not margin.',
        ],
        code: `div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box; /* Total width will still be 200px */
}`,
      },
      {
        title: 'content-box vs. border-box',
        table: {
          headers: ['Value', 'How size is calculated', 'What to expect'],
          rows: [
            ['`content-box`', '`width` includes only the content area.', 'The final rendered size grows when `padding` or `border` is added.'],
            ['`border-box`', '`width` includes content, `padding`, and `border`.', 'The final rendered size is easier to predict.'],
          ],
        },
      },
      {
        title: 'Global box-sizing Reset',
        body: [
          'Many projects set every element to `border-box` so sizing is more predictable across the site.',
        ],
        code: `*,
*::before,
*::after {
  box-sizing: border-box;
}`,
      },
      {
        title: 'Margin Collapse',
        body: [
          'Vertical margins between block elements can collapse. That means two vertical margins may combine instead of adding together.',
          'If spacing feels smaller than expected, inspect the element and check whether vertical margins are collapsing.',
        ],
        code: `h1 {
  margin-bottom: 2rem;
}

p {
  margin-top: 1rem;
}`,
        note:
          'The space between the `h1` and `p` may be `2rem`, not `3rem`, because the vertical margins can collapse.',
      },
      {
        title: 'Which Spacing Should I Use?',
        table: {
          headers: ['Need', 'Use'],
          rows: [
            ['Space inside a box', '`padding`'],
            ['Space between separate boxes', '`margin`'],
            ['Space between flex or grid children', '`gap`'],
            ['Space between text lines', '`line-height`'],
          ],
        },
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
          '`display: none;` hides the element completely.',
          '`display: block;` makes the element a block-level element.',
          '`display: inline;` makes the element inline.',
          '`display: inline-block;` combines block and inline behaviors.',
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
          '`float: left;` or `float: right;` allows content to wrap around the floated element.',
          'Today, `float` is mostly useful for wrapping text around images. Avoid using it for modern page layout when `flexbox` or `grid` would be simpler.',
        ],
      },
      {
        title: 'Flexbox',
        body: [
          '`display: flex;` enables the Flexbox layout model for one-dimensional layouts.',
          'Use `gap` to create spacing between flex children instead of adding margins to every child.',
        ],
        code: `.card-row {
  display: flex;
  gap: 1rem;
}`,
      },
      {
        title: 'Grid',
        body: [
          '`display: grid;` allows for two-dimensional layouts with rows and columns.',
          'Use `gap` to create consistent spacing between grid rows and columns.',
        ],
        code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`,
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why it happens', 'Fix'],
          rows: [
            ['Card is wider than expected', '`content-box` adds `padding` and `border` outside the declared width.', 'Use `box-sizing: border-box`.'],
            ['Using `margin` for internal space', '`margin` creates space outside the element.', 'Use `padding` for space inside the box.'],
            ['Using `padding` between separate boxes', '`padding` increases internal space instead of separating siblings.', 'Use `margin` or `gap`.'],
            ['Inline element ignores `width` or `height`', 'Inline elements do not respect width and height like blocks.', 'Use `display: inline-block` or `display: block`.'],
            ['Using `float` for modern layout', '`float` was not designed for page layout systems.', 'Use `flexbox` or `grid` for layout.'],
            ['Vertical spacing is smaller than expected', 'Adjacent vertical margins may collapse.', 'Inspect margins or use `padding`/`gap` where appropriate.'],
          ],
        },
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Inspect the element in browser developer tools and look at the box model diagram.',
          'Hover the DevTools box model diagram to see `margin`, `border`, `padding`, and `content` on the page.',
          'Check whether the element is `block`, `inline`, `inline-block`, `flex`, or `grid`.',
          'Check the computed `box-sizing` value.',
          'Toggle `padding`, `margin`, and `border` rules on and off.',
          'Temporarily add a border or background color to see the real size of the element.',
          'Check whether spacing is coming from `padding`, `margin`, `gap`, or `line-height`.',
          'Set `box-sizing: border-box` when sizing feels unpredictable.',
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
      'Build a content card using `padding`, `border`, `margin`, and `box-sizing`.',
      'Apply a global `border-box` reset.',
      'Create internal card spacing with `padding`.',
      'Create separation between cards with `margin` or `gap`.',
      'Create a row of cards with `display: flex` and `gap`.',
      'Inspect the card in DevTools and identify `content`, `padding`, `border`, and `margin`.',
      'Intentionally switch the card to `content-box` and observe how the final size changes.',
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
          'You will learn how `display: flex`, flex containers, flex items, axes, wrapping, spacing, alignment, and ordering work together.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          'Flexbox is one of the most useful CSS layout tools for everyday interface work.',
          'It is especially good for navigation bars, button rows, card layouts, media objects, and centering content.',
          'Unlike CSS Grid, Flexbox is primarily used for one-dimensional layouts, meaning one row or one column at a time.',
        ],
      },
      {
        title: 'Core Concept: Flexbox Vocabulary',
        bullets: [
          '`Flex container`: The parent element with `display: flex`.',
          '`Flex item`: A direct child of the flex container.',
          '`flex-direction`: Sets the main axis, such as `row` or `column`.',
          '`flex-wrap`: Controls whether items stay on one line or wrap onto multiple lines.',
          '`justify-content`: Aligns or distributes items along the main axis.',
          '`align-items`: Aligns items along the cross axis.',
          '`align-content`: Distributes multiple wrapped lines within the container.',
          '`flex-grow`: Defines how much a flex item can grow relative to other items.',
          '`flex-shrink`: Defines how much a flex item can shrink relative to other items.',
          '`flex-basis`: Sets the starting size of a flex item.',
          '`order`: Changes the visual order of flex items.',
        ],
      },
      {
        title: 'Core Concept: Container and Items',
        body: [
          'To begin using Flexbox, set the parent element to `display: flex`. All direct child elements become flex items.',
          'Flex properties like `justify-content`, `align-items`, `flex-wrap`, and `gap` usually belong on the container. Properties like `flex`, `flex-grow`, and `order` belong on individual items.',
        ],
        code: `.flex-container {
  display: flex;
}`,
      },
      {
        title: 'Main Axis and Cross Axis',
        body: [
          'Flexbox is controlled by two axes. The main axis is the direction items flow. The cross axis runs perpendicular to it.',
          'When `flex-direction` changes, the meaning of `justify-content` and `align-items` changes too.',
        ],
        table: {
          headers: ['Direction', 'Main Axis', 'Cross Axis'],
          rows: [
            ['`row`', 'Left to right in normal writing modes', 'Top to bottom'],
            ['`row-reverse`', 'Right to left in normal writing modes', 'Top to bottom'],
            ['`column`', 'Top to bottom', 'Left to right'],
            ['`column-reverse`', 'Bottom to top', 'Left to right'],
          ],
        },
      },
      {
        title: 'Code Example: Flex Direction',
        body: [
          '`flex-direction` sets the direction of the main axis, defining how flex items are placed in the flex container.',
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
          'Use `flex-wrap` to decide whether flex items should stay on one line or wrap onto multiple lines.',
          '`flex-wrap: wrap` is useful for responsive card rows, tag lists, galleries, and navigation that needs to survive smaller screens.',
        ],
        code: `.flex-container {
  display: flex;
  flex-wrap: wrap;
}`,
      },
      {
        title: 'Code Example: Gap',
        body: [
          '`gap` creates consistent spacing between flex items without adding margins to each child.',
          'Use `gap` for space inside a flex row or column. Use `margin` when an element needs space outside the whole group.',
        ],
        code: `.flex-container {
  display: flex;
  gap: 1rem;
}`,
      },
      {
        title: 'Alignment Properties',
        body: [
          'The alignment properties are easier to remember when you connect each one to an axis.',
        ],
        table: {
          headers: ['Property', 'Axis', 'Use For'],
          rows: [
            ['`justify-content`', 'Main axis', 'Moving or distributing items across the direction they flow.'],
            ['`align-items`', 'Cross axis', 'Aligning items perpendicular to the direction they flow.'],
            ['`align-content`', 'Cross axis, multiple lines only', 'Spacing wrapped rows or columns inside the container.'],
          ],
        },
      },
      {
        title: 'Code Example: Justify Content',
        body: [
          '`justify-content` aligns flex items along the main axis. It controls how free space is distributed in the direction items flow.',
        ],
        code: `.flex-container {
  display: flex;
  justify-content: space-between;
}`,
      },
      {
        title: 'Code Example: Align Items',
        body: [
          '`align-items` aligns items along the cross axis, perpendicular to the main axis.',
        ],
        code: `.flex-container {
  display: flex;
  align-items: center;
}`,
      },
      {
        title: 'Interactive Practice: Flexbox Playground',
        body: [
          'Use the Flexbox Playground above to test `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, and `gap`.',
          'Before changing a control, predict whether the items will move on the main axis or the cross axis. Then compare your prediction to the result.',
        ],
      },
      {
        title: 'Common Flex Patterns',
        table: {
          headers: ['Pattern', 'Useful CSS'],
          rows: [
            ['Center one item both ways', '`display: flex; justify-content: center; align-items: center;`'],
            ['Horizontal button row', '`display: flex; gap: 0.75rem; align-items: center;`'],
            ['Responsive navigation', '`display: flex; flex-wrap: wrap; gap: 1rem; justify-content: flex-end;`'],
            ['Wrapping card row', '`display: flex; flex-wrap: wrap; gap: 1.5rem;`'],
            ['Equal-width flexible cards', '`flex: 1 1 16rem;` on each card'],
            ['Image and text media object', '`display: flex; gap: 1rem; align-items: flex-start;`'],
          ],
        },
      },
      {
        title: 'Practical Example: Responsive Navigation Bar',
        body: [
          'This pattern keeps navigation items in a row when space allows, then wraps them instead of forcing overflow.',
        ],
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
        body: [
          'This pattern lets cards share a row, wrap when they run out of space, and start from a readable minimum size.',
        ],
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
          'Flexbox also includes properties for controlling how individual flex items grow, shrink, and appear within a container.',
        ],
      },
      {
        title: 'Flex Grow, Shrink, and Basis',
        body: [
          'The `flex` shorthand combines `flex-grow`, `flex-shrink`, and `flex-basis` in that order.',
        ],
        bullets: [
          'First value: `flex-grow`. `1` means the item is allowed to grow.',
          'Second value: `flex-shrink`. `1` means the item is allowed to shrink.',
          'Third value: `flex-basis`. `12rem` means the item starts at about `12rem` before space is distributed.',
        ],
        code: `.item {
  flex: 1 1 12rem;
}`,
      },
      {
        title: 'Flex Shorthand Examples',
        table: {
          headers: ['Value', 'Meaning'],
          rows: [
            ['`flex: 0 0 auto;`', 'Do not grow, do not shrink, use natural size.'],
            ['`flex: 1 1 auto;`', 'Grow and shrink from the natural size.'],
            ['`flex: 1 1 16rem;`', 'Grow and shrink from a starting size of `16rem`. Useful for cards.'],
            ['`flex: 1;`', 'A common shortcut for flexible equal-width items, but less explicit for beginners.'],
          ],
        },
      },
      {
        title: 'Core Concept: Align Content',
        body: [
          '`align-content` controls the spacing between multiple flex lines.',
          'It only has a visible effect when flex items wrap onto more than one line.',
        ],
        bullets: [
          '`flex-start`',
          '`flex-end`',
          '`center`',
          '`space-between`',
          '`space-around`',
          '`stretch`',
        ],
      },
      {
        title: 'Core Concept: Order Property',
        body: [
          'The `order` property controls the visual order in which flex items appear within the container.',
          'Use `order` carefully. It changes visual order, but it does not change the HTML source order, keyboard order, or screen reader reading order.',
          'Use `order` for small visual adjustments, not for rewriting the actual reading order of important page content.',
        ],
        code: `.featured-item {
  order: -1;
}`,
      },
      {
        title: 'When Not to Use Flexbox',
        table: {
          headers: ['Layout Need', 'Better Choice'],
          rows: [
            ['Simple stacked content', 'Normal block flow is often enough.'],
            ['Rows and columns controlled together', 'Use CSS Grid.'],
            ['Page-level two-dimensional layout', 'Use CSS Grid, then Flexbox inside smaller pieces.'],
            ['Changing source order for meaning', 'Change the HTML structure instead of relying on `order`.'],
          ],
        },
      },
      {
        title: 'Common Mistakes',
        bullets: [
          'Putting `display: flex` on the wrong element.',
          'Forgetting that only direct children become flex items.',
          'Using `justify-content` when the issue is actually cross-axis alignment.',
          'Using `align-items` when there are multiple wrapped lines and `align-content` is needed.',
          'Using margin hacks when `gap` would be cleaner.',
          'Using `order` to fix visual layout while creating confusing keyboard or reading order.',
          'Reaching for Flexbox when CSS Grid would handle rows and columns more clearly.',
        ],
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Inspect the parent and confirm it has `display: flex`.',
          'Check which elements are direct children of the flex container.',
          'Identify the main axis from `flex-direction`.',
          'Use `justify-content` for the main axis and `align-items` for the cross axis.',
          'Check whether items are wrapping before using `align-content`.',
          'Use `gap` before adding margins to every child.',
          'Check whether an item has a `flex` shorthand, `flex-grow`, `flex-shrink`, or `flex-basis` rule.',
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
      'Use the Flexbox Playground to test every `flex-direction` value.',
      'Center one item horizontally and vertically with `justify-content` and `align-items`.',
      'Build a responsive navigation bar using `display: flex`, `flex-wrap`, and `gap`.',
      'Create a row of cards with `flex-wrap: wrap` and `flex: 1 1 16rem`.',
      'Create a row of cards with aligned buttons.',
      'Build a media object with an image on one side and text on the other.',
      'Change a layout from `row` to `column` and explain which axis changed.',
      'Use DevTools to confirm which element is the flex container and which elements are flex items.',
      'Avoid `order` for meaningful content. Reorder the HTML instead when reading order matters.',
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
        title: 'What This Teaches',
        body: [
          'Responsive web design is the practice of building websites that adapt gracefully to different screen sizes, input types, and viewing contexts.',
          'This lesson focuses on a mobile-first workflow: start with the smallest layout, then add complexity when the content has enough room.',
          'You will use flexible containers, fluid images, media queries, responsive typography, and testing habits that catch layout problems early.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          "Users do not experience a website on one perfect screen. They resize windows, zoom text, rotate phones, use touch, use keyboards, and browse on devices you cannot predict.",
        ],
        bullets: [
          'Better user experience: Content stays readable, reachable, and usable across screen sizes.',
          'Better maintainability: One flexible website is easier to manage than separate mobile and desktop versions.',
          'Better accessibility: Responsive layouts support zoom, larger text, touch targets, and different input methods.',
          'Better performance: Mobile-first CSS encourages simpler default layouts before adding heavier desktop enhancements.',
        ],
      },
      {
        title: 'Core Techniques',
        body: [
          'Responsive design relies on a few foundational techniques that work together to make layouts flexible and adaptable.',
        ],
        bullets: [
          'Fluid containers: Use flexible widths, `max-width`, and modern functions like `min()` instead of fixed page widths.',
          'Flexible media: Prevent images and videos from overflowing with `max-width: 100%` and `height: auto`.',
          'Responsive layout systems: Use `grid`, `flexbox`, `gap`, and wrapping patterns that adapt to available space.',
          'Media queries: Add CSS when conditions like `min-width`, `orientation`, or `hover` are true.',
          'Responsive typography: Use `rem`, `line-height`, readable line lengths, and controlled scaling with `clamp()`.',
        ],
      },
      {
        title: 'Mobile-First Workflow',
        body: [
          'A mobile-first workflow starts with the simplest layout as the default. Those base styles apply everywhere.',
          'Then use `@media (min-width: ...)` to enhance the layout when more space is available.',
        ],
        code: `.cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
      },
      {
        title: 'Media Queries: The Foundation of Responsive Design',
        body: [
          'Media queries allow you to define CSS rules that only apply when certain conditions are met, such as screen width, orientation, input type, or display capability.',
        ],
        code: `@media (condition) {
  /* CSS rules to apply when the condition is true */
}`,
      },
      {
        title: 'Common Conditions',
        bullets: [
          '`min-width`: Applies styles when the viewport is at least the specified width. Common in mobile-first CSS.',
          '`max-width`: Applies styles when the viewport is at most the specified width. Common in desktop-first CSS.',
          '`orientation`: Applies styles based on `portrait` or `landscape` orientation.',
          '`hover`: Detects whether the primary input can hover, useful for avoiding hover-only interactions on touch screens.',
          '`prefers-reduced-motion`: Responds to a user motion preference.',
        ],
      },
      {
        title: 'Choosing Breakpoints',
        body: [
          'Breakpoints are specific viewport widths where your layout changes. Choose them based on content, not device names.',
          'Resize the page slowly. When something becomes cramped, too wide, too hard to read, or awkwardly spaced, that is a good breakpoint candidate.',
        ],
        table: {
          headers: ['When this happens', 'Responsive response'],
          rows: [
            ['Line length gets too wide', 'Constrain the content with `max-width`.'],
            ['Cards feel cramped', 'Change the number of columns or let cards wrap.'],
            ['Navigation no longer fits', 'Switch to a stacked or collapsible pattern.'],
            ['Images crop awkwardly', 'Adjust the image ratio, crop, or art direction.'],
            ['Buttons become hard to tap', 'Increase spacing and target size.'],
          ],
        },
      },
      {
        title: 'Responsive Container Example',
        body: [
          'Avoid starting with a fixed desktop width. A flexible container can fill small screens while staying readable on large screens.',
        ],
        code: `.container {
  width: 90%;
  max-width: 960px;
  margin-inline: auto;
}`,
      },
      {
        title: 'Avoid This Fixed Container Pattern',
        body: [
          'A fixed width can create horizontal scrolling on small screens. Use flexible widths unless the fixed size is truly required.',
        ],
        code: `/* Avoid this as a default page container */
.container {
  width: 960px;
  margin-inline: auto;
}`,
      },
      {
        title: 'Combining Conditions',
        body: [
          'You can combine conditions with `and`. For beginner-friendly broad support, use a comma when either condition should match.',
        ],
        code: `@media (min-width: 768px) and (orientation: landscape) {
  /* Styles for landscape tablets */
}

@media (max-width: 768px), (orientation: portrait) {
  /* Styles for smaller screens or portrait orientation */
}`,
      },
      {
        title: 'Other Media Features',
        bullets: [
          '`aspect-ratio`: Target viewports with specific width-to-height relationships.',
          '`resolution`: Apply styles for high-DPI screens.',
          '`color`: Target devices with different color capabilities.',
          '`hover`: Distinguish between touch and mouse interactions.',
          '`prefers-color-scheme`: Respond to light or dark mode preference.',
        ],
      },
      {
        title: 'Mobile-First vs. Desktop-First',
        table: {
          headers: ['Approach', 'How it works', 'Best for'],
          rows: [
            ['Mobile-first', 'Start with small-screen defaults, then add layout complexity with `min-width`.', 'Most student projects and modern responsive builds.'],
            ['Desktop-first', 'Start with large-screen layout, then override down with `max-width`.', 'Existing desktop-heavy sites that are being retrofitted.'],
          ],
        },
      },
      {
        title: 'Viewport Meta Tag',
        body: [
          'The viewport meta tag is essential for controlling how a web page is scaled on mobile devices.',
        ],
        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        bullets: [
          '`width=device-width`: Sets the viewport width to the device screen width.',
          '`initial-scale=1.0`: Sets the initial zoom level to `1.0`.',
        ],
      },
      {
        title: 'Responsive Layout Patterns',
        table: {
          headers: ['Pattern', 'Useful CSS'],
          rows: [
            ['Centered page container', '`width: 90%; max-width: 960px; margin-inline: auto;`'],
            ['Wrapping flex row', '`display: flex; flex-wrap: wrap; gap: 1rem;`'],
            ['Responsive card grid', '`grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));`'],
            ['Single column to multi-column', 'Base: `1fr`; larger screen: `repeat(2, 1fr)` or `repeat(3, 1fr)`.'],
            ['Flexible media', '`max-width: 100%; height: auto;`'],
          ],
        },
      },
      {
        title: 'Interactive Practice: Responsive Layout Visualizer',
        body: [
          'Use the Responsive Layout Visualizer above to resize a layout from `320px` to `1200px`.',
          'Watch when the card layout changes from one column to two columns to three columns. The HTML stays the same; the CSS changes the presentation.',
        ],
      },
      {
        title: 'Responsive Images',
        body: [
          'Responsive images should fit their containers, load efficiently, and preserve meaning.',
          '`max-width: 100%` prevents overflow. `height: auto` preserves the image proportions.',
        ],
        code: `img {
  max-width: 100%;
  height: auto;
}`,
      },
      {
        title: 'Using srcset and sizes',
        body: [
          'Use `srcset` and `sizes` when the browser should choose the best image file for the available layout size and device resolution.',
        ],
        code: `<img src="image.jpg"
     srcset="image-small.jpg 300w, image-medium.jpg 600w, image-large.jpg 1200w"
     sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
     alt="Description">`,
        note:
          '`srcset` lists the available image files. `sizes` tells the browser how much layout space the image will occupy.',
      },
      {
        title: 'Using the picture Element',
        body: [
          'Use the `picture` element for art direction or format switching, such as serving a different crop on small screens.',
        ],
        code: `<picture>
  <source media="(max-width: 600px)" srcset="image-small.jpg">
  <source media="(max-width: 1000px)" srcset="image-medium.jpg">
  <img src="image-large.jpg" alt="Description">
</picture>`,
        note:
          'Keep the `alt` text on the fallback `img`. The meaning belongs to the image, not the individual sources.',
      },
      {
        title: 'Modern Image Formats',
        body: [
          'Consider formats like `WebP` and `AVIF` for better compression and quality.',
          'Use `picture` when you need to provide multiple formats with a fallback.',
        ],
      },
      {
        title: 'Responsive Typography',
        body: [
          'Responsive typography should stay readable at small sizes and avoid becoming oversized on wide screens.',
          'Use `rem` for stable type scale decisions, readable `line-height`, and `max-width` to control line length.',
        ],
        code: `body {
  font-size: 1rem;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
}

p {
  font-size: 1.2em;
}`,
      },
      {
        title: 'Controlled Fluid Type with clamp',
        body: [
          'Avoid using `vw` by itself for important text. It can become too tiny on small screens or too huge on wide screens.',
          '`clamp()` gives a minimum, preferred fluid value, and maximum.',
        ],
        code: `h1 {
  font-size: clamp(2rem, 6vw, 4.5rem);
}`,
      },
      {
        title: 'Using Media Queries for Typography',
        code: `@media (min-width: 768px) {
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
          'Use `max-width` to prevent long lines of text.',
          'Keep comfortable `line-height`, especially for paragraphs.',
          'Test text zoom. The layout should still work when text is larger.',
          'Avoid viewport-only type like `font-size: 4vw` for body text.',
        ],
      },
      {
        title: 'Responsive Navigation Examples',
        body: [
          'Navigation often needs special attention because links can run out of space quickly.',
          'Start with usable HTML, then choose a responsive pattern based on the amount of navigation.',
        ],
        bullets: [
          'Wrapping links: Useful for short nav lists that can wrap onto another line.',
          'Stacked navigation: Useful when a vertical menu is acceptable on small screens.',
          'Hamburger menu: A collapsible menu revealed by a real `button`. Useful for conserving space.',
          'Off-canvas menu: A side-sliding menu. Useful for more complex navigation, but it needs careful focus and keyboard handling.',
        ],
      },
      {
        title: 'Accessibility',
        body: [
          'Make sure navigation menus and other components are usable by everyone.',
        ],
        bullets: [
          'Use a real `button` for menu toggles.',
          'Update `aria-expanded` when a collapsible menu opens or closes.',
          'Use `aria-controls` when a button controls a specific menu region.',
          'Keep keyboard focus visible.',
          'Do not hide interactive content from keyboard users.',
          'Make tap targets large enough to activate comfortably.',
          'Respect `prefers-reduced-motion` for large movement or animation.',
        ],
      },
      {
        title: 'Testing and Debugging',
        bullets: [
          'Test narrow widths such as `320px` and `360px`.',
          'Use browser DevTools responsive mode to resize slowly.',
          'Check for horizontal scrolling.',
          'Check that images and videos do not overflow.',
          'Test text zoom and browser zoom.',
          'Check touch targets and spacing on small screens.',
          'Test keyboard navigation after nav changes.',
          'Test on a real phone when possible.',
        ],
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why it hurts', 'Fix'],
          rows: [
            ['Starting with a fixed desktop width', 'Small screens can overflow horizontally.', 'Use flexible containers and mobile-first CSS.'],
            ['Choosing breakpoints only from device names', 'The layout may break between those sizes.', 'Choose breakpoints when the content needs them.'],
            ['Using `vw` alone for type', 'Text can become unreadable.', 'Use `clamp()` with minimum and maximum sizes.'],
            ['Forgetting the viewport meta tag', 'Mobile browsers may render the page as a scaled desktop layout.', 'Add the viewport meta tag in the document `head`.'],
            ['Hiding nav visually but not accessibly', 'Keyboard and screen reader users may encounter broken menus.', 'Use proper button state, focus behavior, and hidden states.'],
          ],
        },
      },
      {
        title: 'Responsive Debugging Checklist',
        bullets: [
          'Open DevTools and drag from narrow to wide slowly.',
          'Find the first width where the layout feels cramped or broken.',
          'Check whether `width`, `min-width`, fixed positioning, or large images are causing overflow.',
          'Add a breakpoint only when the content needs a different layout.',
          'Prefer `min-width` media queries for mobile-first CSS.',
          'Use `grid`, `flexbox`, `gap`, and flexible units before hard-coding widths.',
          'Retest after each breakpoint instead of waiting until the end.',
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
      'Create a responsive container using `width: 90%`, `max-width`, and `margin-inline: auto`.',
      'Convert a desktop layout into a mobile-first layout.',
      'Add a `min-width` media query that changes a card layout from one column to two columns.',
      'Create a responsive card grid with `repeat(auto-fit, minmax(16rem, 1fr))`.',
      'Make images flexible with `max-width: 100%` and `height: auto`.',
      'Use `clamp()` for a heading size.',
      'Build a responsive navigation state with a real `button` and `aria-expanded`.',
      'Find and fix an intentional horizontal overflow bug.',
      'Test the page at `320px`, around your breakpoint, and at desktop width.',
      'Document the width where each breakpoint becomes necessary.',
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
        title: 'What This Teaches',
        body: [
          'This lesson teaches how JavaScript interacts with the Document Object Model, or DOM.',
          'The browser reads your HTML and creates the DOM: a structured representation of the page that JavaScript can read and update after the page loads.',
          'You will learn a repeatable workflow: select an element, listen for an event, then change content, classes, attributes, or elements.',
        ],
      },
      {
        title: 'Core Workflow: Select, Listen, Change',
        body: [
          'Most beginner DOM interactions follow the same pattern.',
        ],
        bullets: [
          'Select an element with `document.querySelector()` or another selector method.',
          'Listen for an event with `addEventListener()`.',
          'Change something with `textContent`, `classList`, attributes, or new elements.',
        ],
        code: `const button = document.querySelector('.menu-button');

button.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});`,
      },
      {
        title: 'Adding JavaScript to Your Web Page',
        body: [
          'You can include JavaScript in your HTML document in three common ways.',
          'For class projects, an external file loaded with `defer` is the preferred approach.',
        ],
      },
      {
        title: 'Inline',
        body: [
          'Inline JavaScript is written directly in an HTML attribute like `onclick`.',
          'Recognize this pattern in older examples, but avoid it for class projects because it mixes behavior into markup.',
        ],
        code: `<button onclick="alert('Hello!')">Click me</button>`,
      },
      {
        title: 'Internal',
        body: [
          'Internal JavaScript is written inside `script` tags in the HTML file.',
          'This is acceptable for quick demos, but it becomes hard to maintain as a project grows.',
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
          'External JavaScript is placed in a separate file and linked with the `src` attribute.',
          'Use `defer` so the browser downloads the script while parsing the HTML, but runs it after the HTML is ready.',
        ],
        code: `<head>
  <script src="script.js" defer></script>
</head>`,
        note:
          '`defer` helps prevent the common error where JavaScript tries to select an element before that element exists in the DOM.',
      },
      {
        title: 'Selecting Elements',
        body: [
          'Before JavaScript can change something, it needs a reference to the element.',
        ],
        table: {
          headers: ['Method', 'Use For'],
          rows: [
            ['`document.querySelector()`', 'Selects the first element that matches a CSS selector.'],
            ['`document.querySelectorAll()`', 'Selects all matching elements as a list-like collection.'],
            ['`document.getElementById()`', 'Selects one element by its `id`.'],
          ],
        },
        code: `const button = document.querySelector('.menu-button');
const cards = document.querySelectorAll('.card');
const mainNav = document.getElementById('main-nav');`,
      },
      {
        title: 'When a Selector Finds Nothing',
        body: [
          'If a selector does not match anything, `querySelector()` returns `null`.',
          'Check that the element exists before calling methods like `addEventListener()`.',
        ],
        code: `const button = document.querySelector('.menu-button');

if (button) {
  button.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
}`,
      },
      {
        title: 'Interactive Practice: DOM Interaction Lab',
        body: [
          'Use the DOM Interaction Lab above to change text, toggle a class, update an attribute, and add a list item.',
          'Read the generated code after each action. Notice that every action starts by selecting an element before changing it.',
        ],
      },
      {
        title: 'Modifying Content Safely',
        body: [
          'Use `textContent` when inserting plain text. Use `innerHTML` only when the HTML is trusted and you understand the risk.',
        ],
        table: {
          headers: ['Property or Method', 'Use For', 'Caution'],
          rows: [
            ['`textContent`', 'Changing plain text.', 'Best default for beginner projects.'],
            ['`innerHTML`', 'Replacing HTML inside an element.', 'Do not use with user-provided content.'],
            ['`createElement()`', 'Building structured content safely.', 'Takes more steps but gives more control.'],
          ],
        },
        code: `const message = document.querySelector('.message');

message.textContent = 'Saved successfully.';`,
      },
      {
        title: 'Modifying Attributes',
        body: [
          'Attributes store extra information on HTML elements. JavaScript can read and update them.',
        ],
        code: `const link = document.querySelector('.resource-link');

link.href = 'https://developer.mozilla.org/';
link.textContent = 'Read MDN';`,
      },
      {
        title: 'Changing Classes Instead of Inline Styles',
        body: [
          'For most interface changes, toggle a class instead of writing many inline styles with JavaScript.',
          'This keeps styling in CSS and behavior in JavaScript.',
        ],
        code: `const card = document.querySelector('.card');

card.classList.toggle('is-highlighted');`,
      },
      {
        title: 'Working with classList',
        body: [
          'The `classList` API is the preferred way to work with an element\'s classes.',
        ],
        bullets: [
          '`add(className)`: Adds a class to the element.',
          '`remove(className)`: Removes a class from the element.',
          '`toggle(className)`: Toggles a class on or off.',
          '`contains(className)`: Checks whether the element has a specific class.',
        ],
        code: `const menu = document.querySelector('.site-menu');

menu.classList.toggle('is-open');

if (menu.classList.contains('is-open')) {
  console.log('Menu is open');
}`,
      },
      {
        title: 'Traversing the DOM',
        body: [
          'DOM traversal means moving between related elements after you have selected one element.',
          'For beginners, element-based properties are usually easier than node-based properties because they skip whitespace text nodes.',
        ],
        table: {
          headers: ['Property', 'Meaning'],
          rows: [
            ['`parentElement`', 'The parent element.'],
            ['`children`', 'The child elements.'],
            ['`firstElementChild`', 'The first child element.'],
            ['`nextElementSibling`', 'The next sibling element.'],
            ['`previousElementSibling`', 'The previous sibling element.'],
          ],
        },
        code: `const item = document.querySelector('.faq-item');
const parent = item.parentElement;
const nextItem = item.nextElementSibling;`,
      },
      {
        title: 'Creating and Inserting Elements',
        body: [
          'JavaScript allows you to dynamically create new elements and insert them into the DOM.',
        ],
        code: `const item = document.createElement('li');
item.textContent = 'New list item';

const list = document.querySelector('.task-list');
list.appendChild(item);`,
      },
      {
        title: 'Event Listeners: Responding to User Actions',
        body: [
          'Event listeners run JavaScript when something happens, such as a click, form submission, or text input.',
        ],
        code: `element.addEventListener('click', () => {
  // Code to execute when the element is clicked
});`,
      },
      {
        title: 'Common Event Types',
        table: {
          headers: ['Event', 'Use For'],
          rows: [
            ['`click`', 'Buttons, menu toggles, and simple interactions.'],
            ['`input`', 'Reacting while a user types or changes a control.'],
            ['`change`', 'Reacting after a form control value changes.'],
            ['`submit`', 'Handling a form submission.'],
            ['`keydown`', 'Responding to keyboard input.'],
          ],
        },
      },
      {
        title: 'Using the Event Object',
        body: [
          'When an event occurs, an event object is passed to the listener function.',
          'The event object includes information like `event.target`, `event.type`, and methods like `preventDefault()`.',
        ],
        code: `const form = document.querySelector('.signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Handle the form with JavaScript');
});`,
      },
      {
        title: 'Accessible Menu Toggle',
        body: [
          'A responsive menu toggle should use a real `button`, update `aria-expanded`, and show or hide the controlled menu.',
        ],
        code: `<button class="menu-button" aria-expanded="false" aria-controls="site-menu">
  Menu
</button>

<nav id="site-menu" hidden>
  <a href="/">Home</a>
  <a href="/projects/">Projects</a>
</nav>`,
      },
      {
        title: 'Accessible Menu Toggle JavaScript',
        code: `const button = document.querySelector('.menu-button');
const menu = document.querySelector('#site-menu');

button.addEventListener('click', () => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';

  button.setAttribute('aria-expanded', String(!isOpen));
  menu.hidden = isOpen;
});`,
      },
      {
        title: 'Working with Multiple Elements',
        body: [
          'Use `querySelectorAll()` when the page has multiple matching elements. Then loop over the collection and attach behavior to each one.',
        ],
        code: `const buttons = document.querySelectorAll('.faq-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('is-open');
  });
});`,
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why it happens', 'Fix'],
          rows: [
            ['Script runs before HTML exists', 'JavaScript executes before the element is parsed.', 'Load external scripts with `defer`.'],
            ['Selector returns `null`', 'The selector does not match the HTML.', 'Check spelling, class dots, ids, and timing.'],
            ['Forgetting the dot in `.class`', '`querySelector()` uses CSS selector syntax.', 'Use `.menu-button` for classes and `#site-menu` for ids.'],
            ['Using `innerHTML` for user input', 'Untrusted HTML can create security problems.', 'Use `textContent` or create elements manually.'],
            ['Adding one listener to many elements incorrectly', '`querySelector()` only returns the first match.', 'Use `querySelectorAll()` and loop.'],
            ['Changing many inline styles', 'CSS and JS become tangled.', 'Toggle classes and keep visual styling in CSS.'],
          ],
        },
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Open DevTools Console and read the exact error message.',
          'Check whether the selected element is `null`.',
          'Confirm the script is loaded with `defer` or placed after the HTML it uses.',
          'Log selected elements with `console.log()` to verify selectors.',
          'Confirm event names are lowercase, such as `click` and `submit`.',
          'Check whether a class is being added in the Elements panel.',
          'Prefer changing one thing at a time, then retest.',
        ],
      },
      {
        title: 'Additional Resources',
        resources: [
          { label: 'MDN: Introduction to the DOM', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' },
          { label: 'MDN: querySelector', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector' },
          { label: 'classList API - MDN', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/classList' },
          { label: 'Events Documentation - MDN', href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events' },
        ],
      },
    ],
    practice: [
      'Load an external `script.js` file with `defer`.',
      'Select one element with `document.querySelector()` and update its `textContent`.',
      'Create a button that toggles a class with `classList.toggle()`.',
      'Build a show/hide FAQ item with a real `button`.',
      'Build a menu toggle that updates `aria-expanded`.',
      'Handle a simple form `submit` event with `preventDefault()`.',
      'Use `querySelectorAll()` to attach click behavior to multiple buttons.',
      'Create a new list item with `createElement()` and add it with `appendChild()`.',
      'Use DevTools Console to debug a selector that returns `null`.',
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
        title: 'What This Teaches',
        body: [
          'A hero section is the first major section of a page. It should quickly communicate what the page is about, why it matters, and what the visitor can do next.',
          'This lesson teaches how to plan and build a responsive hero section with clear content, a meaningful visual, and a strong call to action.',
          'You will focus on structure, hierarchy, responsive layout, accessibility, and performance.',
        ],
      },
      {
        title: 'Above the Fold, Without Cramming',
        body: [
          'The fold is the part of a page visible before scrolling. It matters because it shapes the first impression, but it is not a fixed pixel line.',
          'The first viewport should establish purpose and direction. It is okay if the next section is partially visible, and it is usually better than cramming everything into one screen.',
          'Mobile screens, browser chrome, zoom settings, and device sizes all change where the fold appears.',
        ],
      },
      {
        title: 'Hero Section Anatomy',
        table: {
          headers: ['Part', 'Purpose'],
          rows: [
            ['Headline', 'Names the offer, project, product, place, or main idea clearly.'],
            ['Supporting copy', 'Adds context without repeating the headline.'],
            ['Primary `CTA`', 'Gives the visitor one obvious next action.'],
            ['Visual media', 'Shows the product, project, mood, or subject when it helps understanding.'],
            ['Secondary `CTA`', 'Offers a lower-priority alternative, such as learning more.'],
            ['Trust cue or context', 'Adds useful evidence, metadata, category, or audience context.'],
          ],
        },
      },
      {
        title: 'Designing the First Viewport',
        bullets: [
          'Make the headline specific. Avoid vague lines like "Welcome to my website."',
          'Keep supporting copy short enough to scan.',
          'Make the primary `CTA` visually obvious.',
          'Leave enough space around text so the hero does not feel cramped.',
          'Let the next section peek into view when possible so the page invites scrolling.',
        ],
      },
      {
        title: 'CTA Guidance',
        body: [
          'A `CTA`, or call to action, should say what happens next. For navigation actions, use an `a` element instead of a `button`.',
        ],
        table: {
          headers: ['Weak CTA', 'Stronger CTA'],
          rows: [
            ['Click here', 'View Projects'],
            ['Learn more', 'Explore the Case Study'],
            ['Submit', 'Request a Quote'],
            ['Go', 'Start Planning'],
          ],
        },
      },
      {
        title: 'Mobile-First Hero HTML',
        body: [
          'Start with semantic HTML. Keep important text as real text, not baked into an image.',
        ],
        code: `<section class="hero">
  <div class="hero__content">
    <p class="hero__eyebrow">Portfolio</p>
    <h1>Designing useful websites for local creative businesses</h1>
    <p>
      I build responsive sites that pair clear content with thoughtful visual design.
    </p>
    <a class="button" href="#projects">View Projects</a>
  </div>

  <img
    class="hero__image"
    src="studio-work.jpg"
    alt="Laptop showing a portfolio website layout on a desk"
  >
</section>`,
      },
      {
        title: 'Mobile-First Hero CSS',
        body: [
          'The base styles work for small screens first. The larger-screen media query adds the two-column layout.',
        ],
        code: `.hero {
  display: grid;
  gap: 2rem;
  padding-block: 4rem;
  padding-inline: 1rem;
}

.hero__content {
  max-width: 42rem;
}

.hero__image {
  border-radius: 8px;
  height: auto;
  width: 100%;
}

@media (min-width: 768px) {
  .hero {
    align-items: center;
    grid-template-columns: 1fr 1fr;
    padding-block: 6rem;
  }
}`,
      },
      {
        title: 'Hero Layout Patterns',
        table: {
          headers: ['Pattern', 'Use When'],
          rows: [
            ['Stacked hero', 'The page needs a simple headline, copy, CTA, and visual that stack naturally on mobile.'],
            ['Two-column hero', 'The visual and copy are equally important on wider screens.'],
            ['Image-background hero', 'The image is decorative and text contrast can stay readable.'],
            ['Editorial hero', 'The page needs a strong headline and supporting metadata more than a product-style CTA.'],
            ['Product hero', 'The page needs to show the product clearly in the first viewport.'],
          ],
        },
      },
      {
        title: 'Responsive Typography',
        body: [
          'Hero headlines can be larger than body text, but they still need controlled line length and readable wrapping.',
        ],
        code: `.hero h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  max-width: 12ch;
}

@media (min-width: 768px) {
  .hero h1 {
    font-size: 4rem;
  }
}`,
      },
      {
        title: 'Hero Images and Backgrounds',
        body: [
          'Choose media based on meaning. If the image communicates important content, use an `img` element with useful `alt` text.',
          'If the image is purely decorative, a CSS `background-image` can be appropriate.',
        ],
        bullets: [
          'Do not put important words inside an image.',
          'Do not rely on a background image if the user needs to understand the image content.',
          'Check text contrast when text sits over an image.',
          'Avoid distorted images by using `width: 100%`, `height: auto`, or `object-fit: cover` when cropping is intentional.',
        ],
      },
      {
        title: 'Accessibility Checklist',
        bullets: [
          'Use one clear `h1` for the page topic.',
          'Use descriptive CTA text, not "Click here."',
          'Use a real link for navigation CTAs and a real `button` for actions that happen on the page.',
          'Write meaningful `alt` text for meaningful images.',
          'Keep text contrast readable over images and color backgrounds.',
          'Do not rely only on motion, video, or color to communicate meaning.',
          'Provide captions or transcripts when video content is meaningful.',
        ],
      },
      {
        title: 'Performance Checklist',
        bullets: [
          'Compress hero images before adding them to the site.',
          'Use image dimensions close to the size needed in the layout.',
          'Consider modern formats like `WebP`.',
          'Avoid enormous images that slow down the first page load.',
          'Do not lazy-load the primary above-the-fold hero image if it is important to the first render.',
          'Avoid autoplaying heavy video unless it is essential and optimized.',
        ],
      },
      {
        title: 'Study Real Hero Sections',
        body: [
          'When studying real examples, do not just copy the look. Ask what the hero is doing.',
        ],
        images: [
          {
            src: '/images/lessons/hero-sections/stripe-hero.jpg',
            alt: 'Stripe hero section with a large headline, colorful background, payment form, and dashboard interface.',
            caption: 'Stripe pairs a specific headline with product-interface visuals that show what the service does.',
          },
          {
            src: '/images/lessons/hero-sections/samsung-hero.jpg',
            alt: 'Samsung hero section with large sale alert copy, a CTA, and promotional product imagery.',
            caption: 'Samsung uses a simple split layout: clear offer on one side, product and sale context on the other.',
          },
          {
            src: '/images/lessons/hero-sections/apple-hero.jpg',
            alt: 'Apple iPhone hero section with product closeup, compact headline, and two calls to action.',
            caption: 'Apple makes the product the visual signal and keeps the copy short, centered, and action-oriented.',
          },
          {
            src: '/images/lessons/hero-sections/nickelodeon-hero.jpg',
            alt: 'Nickelodeon games hero section with character artwork, playful typography, and a play now call to action.',
            caption: 'Nickelodeon leans into mood and audience: playful visuals, high energy, and a direct action.',
          },
          {
            src: '/images/lessons/hero-sections/tekken-hero.jpg',
            alt: 'Tekken 8 hero section with dramatic game art, review scores, and a buy now call to action.',
            caption: 'Tekken uses cinematic art, social proof, and a high-contrast CTA to create urgency.',
          },
        ],
        bullets: [
          'What is the page about?',
          'What is the main visual signal?',
          'What is the primary CTA?',
          'What changes between mobile and desktop?',
          'Is the text readable over the image or background?',
          'Does the first viewport invite scrolling?',
        ],
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why it hurts', 'Fix'],
          rows: [
            ['Vague headline', 'Visitors do not know what the page offers.', 'Name the product, project, service, or topic clearly.'],
            ['CTA looks like normal text', 'The next action is easy to miss.', 'Style the primary CTA as a clear link/button.'],
            ['Low contrast over image', 'Text becomes hard to read.', 'Add a stronger overlay, move the text, or choose a calmer image.'],
            ['Image distorts on mobile', 'The page feels unpolished.', 'Use flexible image sizing and intentional cropping.'],
            ['Hero is too tall', 'Users cannot see what comes next.', 'Reduce padding or let the next section peek into view.'],
            ['Important content hidden on mobile', 'Small-screen users miss key information.', 'Prioritize and simplify instead of removing meaning.'],
          ],
        },
      },
      {
        title: 'Code Challenge: Build Your Own Responsive Hero Section',
        body: [
          'Create a hero section for a fictional website or your own portfolio. Include a headline, supporting text, a primary CTA, and a meaningful visual.',
          'Build mobile-first, then add a larger-screen layout with `@media (min-width: ...)`.',
        ],
      },
    ],
    practice: [
      'Build a responsive hero section with a hero image, headline, supporting text, and CTA.',
      'Write three specific hero headline options before choosing one.',
      'Use an `a` element for a navigation CTA such as `View Projects`.',
      'Build the hero mobile-first, then add a two-column layout at a wider screen size.',
      'Add a responsive image with meaningful `alt` text.',
      'Check the hero at `320px`, tablet width, and desktop width.',
      'Check text contrast over any image or colored background.',
      'Make sure the hero does not hide all following content on mobile.',
      'Compress the hero image and confirm it is not oversized for the layout.',
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
      'Understand `static`, `relative`, `absolute`, `fixed`, and `sticky` positioning',
      'Use `top`, `right`, `bottom`, `left`, `inset`, and positioned ancestors correctly',
      'Use `z-index` and positioning to control layer order without breaking layout or accessibility',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'CSS positioning gives you precise control over where an element appears on the page.',
          'Use positioning for layers, badges, overlays, sticky headers, tooltips, and small visual adjustments. For the main structure of a page, use normal flow, Flexbox, or Grid first.',
        ],
        note:
          'Positioning is powerful, but it is usually not the first tool for full page layout.',
      },
      {
        title: 'How to Choose a Positioning Method',
        body: [
          'Start by asking what the element needs to do. Most elements should stay in normal document flow. Reach for `position` when something needs to be nudged, layered, attached to a parent, or attached to the viewport.',
        ],
        table: {
          headers: ['Need', 'Use', 'Common Example'],
          rows: [
            ['Normal page layout', 'No special positioning', 'Text, sections, cards, and page structure'],
            ['Nudge an element visually', '`position: relative`', 'Move an icon or label slightly'],
            ['Place something inside a parent', 'Parent `relative`, child `absolute`', 'Badge in the corner of a card'],
            ['Keep something in the viewport', '`position: fixed`', 'Cookie banner or floating button'],
            ['Stick while scrolling', '`position: sticky`', 'Header or sidebar that sticks at the top'],
          ],
        },
      },
      {
        title: 'Normal Flow and Static Positioning',
        body: [
          'Normal flow is the browser\'s default layout behavior. Block elements stack vertically, inline content flows with text, and each element takes up space in the document.',
          '`position: static` is the default value. Static elements ignore `top`, `right`, `bottom`, `left`, and `z-index`.',
        ],
        code: `.element {
  position: static;
}`,
      },
      {
        title: 'Relative Positioning',
        body: [
          '`position: relative` keeps an element in normal flow, then lets you visually move it from its original spot.',
          'The original space is still reserved, so nearby elements behave as if the element never moved.',
        ],
        code: `.element {
  position: relative;
  top: 10px;
  left: 20px;
}`,
      },
      {
        title: 'Absolute Positioning and Containing Blocks',
        body: [
          '`position: absolute` removes an element from normal flow and places it relative to its nearest positioned ancestor.',
          'A positioned ancestor is a parent or ancestor with `position` set to anything other than `static`. If no positioned ancestor exists, the element can position itself relative to the page instead, which is a common source of bugs.',
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
        title: 'Fixed Positioning',
        body: [
          '`position: fixed` locks an element to the browser viewport. It stays in the same place even when the page scrolls.',
          'Use fixed positioning carefully. Fixed elements can cover content, especially on small screens.',
        ],
        code: `.site-alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}`,
      },
      {
        title: 'Sticky Positioning',
        body: [
          '`position: sticky` starts in normal flow, then sticks when it reaches a scroll offset such as `top: 0`.',
          'Sticky elements need room to scroll. They can also stop working when a parent has certain `overflow` values, such as `overflow: hidden`.',
        ],
        code: `.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
}`,
      },
      {
        title: 'Offset Properties',
        body: [
          '`top`, `right`, `bottom`, and `left` control where positioned elements move or attach.',
          '`inset` is shorthand for setting all four sides at once. It is especially useful for overlays that need to fill a parent.',
        ],
        code: `.image-overlay {
  position: absolute;
  inset: 0;
}`,
      },
      {
        title: 'Position Types Compared',
        table: {
          headers: ['Value', 'In Normal Flow?', 'Positioned Relative To', 'Use For'],
          rows: [
            ['`static`', 'Yes', 'Normal document flow', 'Default layout'],
            ['`relative`', 'Yes', 'Its original position', 'Small visual adjustments or creating an anchor for children'],
            ['`absolute`', 'No', 'Nearest positioned ancestor', 'Badges, close buttons, overlays, and layered card pieces'],
            ['`fixed`', 'No', 'Viewport', 'Floating buttons, alerts, and persistent UI'],
            ['`sticky`', 'Yes until it sticks', 'Nearest scrolling area', 'Sticky headers, labels, and sidebars'],
          ],
        },
      },
      {
        title: 'Z-index and Layer Order',
        body: [
          '`z-index` controls which positioned elements appear in front of other elements.',
          'Use small, intentional values instead of huge numbers. A simple scale is easier to maintain than random values like `999999`.',
        ],
        code: `.card {
  position: relative;
  z-index: 0;
}

.dropdown {
  position: absolute;
  z-index: 10;
}

.modal {
  position: fixed;
  z-index: 100;
}`,
      },
      {
        title: 'Stacking Contexts',
        body: [
          'Sometimes `z-index` appears not to work because the element is inside a stacking context. A stacking context is a layer group. Children cannot always escape the layer order of their parent.',
          'Positioned elements with `z-index`, transformed elements, elements with certain opacity values, and several other CSS properties can create stacking contexts.',
        ],
        note:
          'When `z-index` is confusing, inspect the parent elements too. The problem is often higher in the HTML tree.',
      },
      {
        title: 'Example: Card Badge',
        body: [
          'This pattern places a badge in the corner of a card. The card becomes the positioning anchor, and the badge is placed inside that anchor.',
        ],
        code: `<article class="card">
  <span class="badge">New</span>
  <h2>CSS Positioning</h2>
  <p>Build layered interface pieces.</p>
</article>

.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}`,
      },
      {
        title: 'Example: Notification Dot',
        body: [
          'A notification dot uses the same parent-child pattern. The button is the anchor, and the dot is positioned inside it.',
        ],
        code: `.icon-button {
  position: relative;
}

.notification-dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}`,
      },
      {
        title: 'Example: Image Overlay',
        body: [
          'For overlay text on an image, the image can fill the card with `position: absolute` and `inset: 0`. The text stays above it with `position: relative` and `z-index`.',
        ],
        code: `.hero-card {
  position: relative;
  overflow: hidden;
}

.hero-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-card-content {
  position: relative;
  z-index: 1;
}`,
      },
      {
        title: 'Accessibility and Usability Notes',
        bullets: [
          'Do not use positioning to visually reorder meaningful content. Keep the HTML reading order logical.',
          'Make sure fixed and sticky elements do not cover headings, links, form fields, or important content.',
          'Use `scroll-padding-top` when a sticky header covers anchor links.',
          'Modal overlays need keyboard focus management and a clear way to close.',
          'Check positioned UI on small screens. A layout that works on desktop can cover content on mobile.',
        ],
        code: `html {
  scroll-padding-top: 5rem;
}`,
      },
      {
        title: 'Common Pitfalls and Troubleshooting',
        table: {
          headers: ['Problem', 'Why It Happens', 'Fix'],
          rows: [
            ['Absolute child appears in the wrong place', 'No positioned parent exists', 'Add `position: relative` to the intended parent'],
            ['`z-index` does nothing', 'The element is not participating in a stack as expected', 'Add positioning when appropriate and inspect parent stacking contexts'],
            ['Sticky element does not stick', 'There is not enough scroll room or a parent has restrictive `overflow`', 'Check parent containers and remove unnecessary `overflow: hidden`'],
            ['Fixed header covers content', 'The header is removed from normal flow', 'Add spacing, use `scroll-padding-top`, and test anchor links'],
            ['Whole page is built with positioning', 'Positioning is being used instead of layout tools', 'Use normal flow, Flexbox, or Grid for structure'],
          ],
        },
      },
      {
        title: 'Debugging Checklist',
        bullets: [
          'Inspect the element and identify its nearest positioned ancestor.',
          'Temporarily add `outline` or background colors to parent and child elements.',
          'Toggle `position` values in DevTools to see which rule changes the behavior.',
          'Check whether a parent has `overflow: hidden`, `transform`, `opacity`, or a `z-index` that creates a stacking context.',
          'Confirm whether the element should stay in normal flow or be removed from it.',
        ],
      },
    ],
    practice: [
      'Create one `relative` element and move it with `top` and `left`.',
      'Add an `absolute` badge inside a card by making the card `position: relative`.',
      'Create a notification dot inside an icon button.',
      'Build a sticky header and add `scroll-padding-top` so anchor links are not covered.',
      'Layer text over an image with `position: absolute`, `inset: 0`, and `z-index`.',
      'Debug a broken badge that is positioning itself relative to the wrong parent.',
    ],
  },
  {
    slug: 'transforms-filters-and-transitions',
    number: '15',
    title: 'CSS Transforms and Filters',
    eyebrow: 'Motion',
    summary:
      'Use CSS transforms and filters to move, rotate, scale, tilt, and visually adjust elements without disrupting page layout.',
    goals: [
      'Explain how `transform` changes visual rendering without moving surrounding layout',
      'Use `translate`, `rotate`, `scale`, `skew`, `transform-origin`, and 3D transforms intentionally',
      'Apply `filter` effects with readability, accessibility, and performance in mind',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          '`transform` changes how an element is visually rendered. It can move, rotate, scale, or tilt an element without changing the space that element occupies in the normal page layout.',
          '`filter` changes how an element looks, such as making an image blurry, grayscale, brighter, darker, or higher contrast.',
        ],
        note:
          'Lesson 16 focuses on `transition`. This lesson focuses on what transforms and filters do.',
      },
      {
        title: 'Transform vs Position',
        body: [
          '`position` changes how an element is placed in relation to the document, a parent, or the viewport.',
          '`transform` changes the visual rendering of an element after layout has already happened. Other elements still behave as if the transformed element is in its original spot.',
        ],
        table: {
          headers: ['Need', 'Better Tool', 'Why'],
          rows: [
            ['Place a badge in a card corner', '`position`', 'The badge needs to attach to a parent.'],
            ['Move a button up slightly on hover', '`transform`', 'The motion is visual and should not push other elements.'],
            ['Build the main page structure', 'Normal flow, Flexbox, or Grid', 'Transforms should not be used for page layout.'],
            ['Zoom an image on hover', '`transform`', 'The image can visually grow without recalculating layout.'],
          ],
        },
      },
      {
        title: 'Understanding CSS Transforms',
        body: [
          'The `transform` property accepts one or more transform functions. Each function changes the element visually in a specific way.',
        ],
        table: {
          headers: ['Function', 'Use For', 'Example'],
          rows: [
            ['`translate()`', 'Move an element visually', '`translateY(-0.25rem)`'],
            ['`rotate()`', 'Turn an element', '`rotate(6deg)`'],
            ['`scale()`', 'Resize an element visually', '`scale(1.05)`'],
            ['`skew()`', 'Slant an element', '`skewX(-8deg)`'],
            ['`transform-origin`', 'Change the pivot point', '`transform-origin: left center`'],
            ['`perspective`', 'Create 3D depth', '`perspective: 800px`'],
          ],
        },
      },
      {
        title: 'Applying Transforms',
        body: [
          'You can combine multiple transform functions in one `transform` declaration.',
          'The browser applies transform functions in order, so changing the order can change the final result.',
        ],
        code: `.element {
  transform: translateX(2rem) rotate(6deg) scale(1.05);
}`,
      },
      {
        title: 'Transform Order Matters',
        body: [
          '`transform: translateX(4rem) rotate(15deg)` does not behave the same as `transform: rotate(15deg) translateX(4rem)`.',
          'When a transform looks strange, check the order of the functions before changing the values.',
        ],
        code: `.first {
  transform: translateX(4rem) rotate(15deg);
}

.second {
  transform: rotate(15deg) translateX(4rem);
}`,
      },
      {
        title: 'Moving Elements with Translate',
        body: [
          '`translate` moves an element visually on the X axis, Y axis, or both. It is great for small interface movement because it does not push nearby content around.',
        ],
        code: `.button:hover {
  transform: translateY(-0.25rem);
}

.card-label {
  transform: translate(1rem, -0.5rem);
}`,
      },
      {
        title: 'Rotating Elements',
        body: [
          '`rotate` turns an element clockwise or counterclockwise. It is useful for arrows, icons, labels, stickers, and playful interface details.',
        ],
        code: `.arrow-icon {
  transform: rotate(90deg);
}

.tilted-label {
  transform: rotate(-4deg);
}`,
      },
      {
        title: 'Scaling Elements',
        body: [
          '`scale` visually resizes an element. Values above `1` make it larger, and values below `1` make it smaller.',
          'Large scale values can cause overflow, so test the surrounding layout when an element grows.',
        ],
        code: `.image-card:hover img {
  transform: scale(1.06);
}

.small-badge {
  transform: scale(0.9);
}`,
      },
      {
        title: 'Skewing Elements',
        body: [
          '`skew` slants an element on the X axis, Y axis, or both. Use it sparingly because it can make text harder to read.',
        ],
        code: `.accent-panel {
  transform: skewX(-8deg);
}`,
      },
      {
        title: 'Transform Origin',
        body: [
          '`transform-origin` changes the point an element transforms around. The default is the center of the element.',
          'This is useful when an arrow should rotate from its center, a door should swing from one edge, or a menu should grow from the top.',
        ],
        code: `.door {
  transform-origin: left center;
  transform: rotateY(-20deg);
}

.dropdown-panel {
  transform-origin: top center;
  transform: scaleY(0.95);
}`,
      },
      {
        title: 'Practical Transform Patterns',
        table: {
          headers: ['Pattern', 'Useful CSS'],
          rows: [
            ['Button lift', '`transform: translateY(-0.25rem);`'],
            ['Image zoom', '`transform: scale(1.06);`'],
            ['Rotated arrow', '`transform: rotate(90deg);`'],
            ['Card tilt', '`transform: rotate(1deg) translateY(-0.25rem);`'],
            ['Reveal panel start position', '`transform: translateY(-0.5rem);`'],
          ],
        },
      },
      {
        title: '3D Transforms',
        body: [
          '3D transforms add depth. Use `perspective` on the parent and 3D transform functions, such as `rotateY`, on the child.',
          'Start simple. 3D effects can become confusing quickly because you are working with depth as well as horizontal and vertical movement.',
        ],
        code: `.scene {
  perspective: 800px;
}

.card {
  transform-style: preserve-3d;
  transform: rotateY(12deg);
}`,
      },
      {
        title: 'Demo: Card Flip',
        body: [
          'A card flip uses `perspective` on the parent, `transform-style` on the inner card, and `rotateY` to reveal the back side.',
        ],
        code: `.card-scene {
  perspective: 800px;
}

.card {
  transform-style: preserve-3d;
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
        title: 'CSS Filters',
        body: [
          '`filter` applies visual effects to an element. Filters are especially common on images and decorative media.',
          'Filters can improve mood and hierarchy, but they should not make content harder to read.',
        ],
        code: `.image {
  filter: grayscale(50%) contrast(110%);
}`,
      },
      {
        title: 'Common Filter Functions',
        table: {
          headers: ['Filter', 'Use For', 'Caution'],
          rows: [
            ['`blur()`', 'Background depth or soft focus', 'Large blurs can be expensive and can reduce clarity.'],
            ['`grayscale()`', 'Muted or inactive imagery', 'Do not rely on grayscale alone to show state.'],
            ['`brightness()`', 'Lightening or darkening media', 'Check text contrast if text sits on top.'],
            ['`contrast()`', 'Making imagery punchier', 'Too much contrast can look harsh.'],
            ['`drop-shadow()`', 'Shadow around transparent shapes', 'Use `box-shadow` for normal rectangular boxes.'],
          ],
        },
      },
      {
        title: 'Readable Image Treatment',
        body: [
          'A darkened image can make light text easier to read, but the final contrast still needs to be checked.',
        ],
        code: `.hero-image {
  filter: brightness(65%) contrast(105%);
}`,
      },
      {
        title: 'Performance and Motion Notes',
        bullets: [
          'Prefer `transform` and `opacity` for visual movement because they usually avoid layout recalculation.',
          'Avoid using transforms to fake an entire page layout. Use layout tools for layout.',
          'Avoid heavy `blur()` on large areas unless the effect is really needed.',
          'Keep motion subtle. Large movement and dramatic scaling can distract users.',
          'Respect `prefers-reduced-motion` when transforms are used for animated effects.',
        ],
        code: `@media (prefers-reduced-motion: reduce) {
  .motion-effect {
    transform: none;
  }
}`,
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why It Happens', 'Fix'],
          rows: [
            ['Expecting transforms to move nearby layout', '`transform` changes visual rendering, not document flow', 'Use margin, padding, Flexbox, Grid, or positioning when layout should change.'],
            ['Using huge `scale()` values', 'The element can overflow its container', 'Use smaller scale values and test at mobile sizes.'],
            ['Forgetting transform order matters', 'Functions are applied in sequence', 'Reorder transform functions and compare the result.'],
            ['Making hover effects too dramatic', 'Large movement can feel jumpy', 'Keep transforms subtle and purposeful.'],
            ['Filtering text heavily', 'Effects like `blur()` or low `contrast()` hurt readability', 'Filter images and decorative media more often than body text.'],
          ],
        },
      },
    ],
    practice: [
      'Move a button visually with `translateY` and compare it to `position: relative`.',
      'Rotate an arrow icon with `rotate`.',
      'Zoom an image with `scale` while keeping the card size stable.',
      'Change `transform-origin` and observe how the same rotation behaves differently.',
      'Create a simple 3D card tilt with `perspective` and `rotateY`.',
      'Apply a readable image treatment with `brightness` or `contrast` and check text contrast.',
      'Find one transform order example where changing the order changes the result.',
    ],
  },
  {
    slug: 'css-transitions',
    number: '16',
    title: 'CSS Transitions',
    eyebrow: 'Motion',
    summary:
      'Use CSS transitions to animate changes between interface states with smooth, accessible feedback.',
    goals: [
      'Explain the CSS state change that makes a `transition` run',
      'Create transitions with shorthand and individual `transition-*` properties',
      'Choose transition-friendly properties while respecting accessibility and performance',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'A CSS transition animates the change between two CSS states. Instead of jumping instantly from one value to another, the browser draws the in-between frames for you.',
          'Transitions are useful for hover states, focus states, menus, accordions, alerts, form feedback, and small interface changes.',
        ],
      },
      {
        title: 'What Makes a Transition Happen',
        body: [
          'A transition needs a starting value, a changed value, and a transition rule that tells the browser how to animate between them.',
        ],
        bullets: [
          'The element starts with one CSS value, such as `opacity: 0`.',
          'The value changes because of `:hover`, `:focus-visible`, `.is-open`, `.is-visible`, or another state.',
          'The property can be transitioned.',
          '`transition` defines the property, duration, timing function, and optional delay.',
        ],
      },
      {
        title: 'The Transition Properties',
        body: [
          'Transitions rely on four main properties. You can write them separately or combine them with the `transition` shorthand.',
        ],
        table: {
          headers: ['Property', 'Controls', 'Example'],
          rows: [
            ['`transition-property`', 'What changes', '`opacity`'],
            ['`transition-duration`', 'How long the change takes', '`200ms`'],
            ['`transition-timing-function`', 'How the speed changes during the transition', '`ease-out`'],
            ['`transition-delay`', 'How long to wait before starting', '`100ms`'],
          ],
        },
      },
      {
        title: 'Transition Shorthand',
        body: [
          'The shorthand pattern is `transition: property duration timing-function delay`. The delay is optional.',
          'List the specific properties you want to animate. Avoid `transition: all` because it can animate unexpected properties and make debugging harder.',
        ],
        code: `.button {
  transition: background-color 180ms ease, transform 180ms ease;
}`,
      },
      {
        title: 'Individual Properties',
        body: [
          'Writing each transition property separately can be helpful when you are learning or when the timing needs to be very explicit.',
        ],
        code: `.fade {
  transition-property: opacity;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}`,
      },
      {
        title: 'Good Properties to Transition',
        body: [
          'Some properties are smoother and safer to transition than others. As a general rule, prefer properties that do not force the browser to recalculate layout.',
        ],
        table: {
          headers: ['Property Type', 'Examples', 'Guidance'],
          rows: [
            ['Best for motion', '`opacity`, `transform`', 'Usually smooth and efficient.'],
            ['Usually okay', '`background-color`, `color`, `border-color`, `box-shadow`', 'Good for visual feedback, but keep effects subtle.'],
            ['Avoid for movement', '`width`, `height`, `top`, `left`, `margin`, `padding`', 'Can trigger layout changes and feel less smooth.'],
            ['Cannot transition directly', '`display`', 'Use `opacity`, `visibility`, `transform`, or another pattern instead.'],
          ],
        },
      },
      {
        title: 'State Changes That Trigger Transitions',
        table: {
          headers: ['Trigger', 'Use For', 'Example'],
          rows: [
            ['`:hover`', 'Pointer hover feedback', 'Button lift or card highlight'],
            ['`:focus-visible`', 'Keyboard focus feedback', 'Accessible focus ring'],
            ['Class changes', 'Reusable component states', '`.is-open`, `.is-visible`, `.is-active`'],
            ['Form states', 'Validation feedback', '`.has-error`'],
            ['JavaScript class toggle', 'Interactive UI', 'Menu open and close'],
          ],
        },
      },
      {
        title: 'Button Hover Transition',
        body: [
          'Hover transitions should be quick and focused. The goal is feedback, not a big animation moment.',
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
        title: 'Focus-visible Transition',
        body: [
          '`focus-visible` helps keyboard users see where they are on the page. Do not remove focus styles without replacing them with a clear custom style.',
        ],
        code: `.button {
  outline: 2px solid transparent;
  outline-offset: 0.25rem;
  transition: outline-color 160ms ease, box-shadow 160ms ease;
}

.button:focus-visible {
  outline-color: currentColor;
  box-shadow: 0 0 0 0.25rem rgb(47 158 68 / 25%);
}`,
      },
      {
        title: 'Fade In and Out',
        body: [
          '`opacity` transitions are useful for showing and hiding interface elements without an abrupt visual jump.',
          'Remember that an element with `opacity: 0` can still take up space and may still be interactive unless you manage visibility or pointer events.',
        ],
        code: `.message {
  opacity: 0;
  visibility: hidden;
  transition: opacity 200ms ease, visibility 200ms ease;
}

.message.is-visible {
  opacity: 1;
  visibility: visible;
}`,
      },
      {
        title: 'Menu Open and Close',
        body: [
          'Menus often combine `opacity` and `transform` so the menu can fade and slide without animating layout properties.',
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
          '`height: auto` does not transition cleanly because the browser cannot animate to an unknown automatic value.',
          'One workaround is transitioning `grid-template-rows` between `0fr` and `1fr` while the inner content has `overflow: hidden`.',
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
        title: 'Transitions with JavaScript',
        body: [
          'JavaScript can trigger CSS transitions by adding or removing classes. This keeps the animation details in CSS and the interaction logic in JavaScript.',
        ],
        code: `<button class="menu-toggle">Menu</button>
<nav class="menu">...</nav>

const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});`,
      },
      {
        title: 'Timing Functions',
        body: [
          '`transition-timing-function` controls the feel of the transition. Start with built-in values before reaching for custom curves.',
        ],
        table: {
          headers: ['Timing Function', 'Feel', 'Common Use'],
          rows: [
            ['`linear`', 'Same speed the whole time', 'Progress indicators or mechanical motion'],
            ['`ease`', 'Natural default curve', 'General UI feedback'],
            ['`ease-in`', 'Starts slow, ends fast', 'Elements leaving the screen'],
            ['`ease-out`', 'Starts fast, ends slow', 'Elements entering or settling'],
            ['`cubic-bezier()`', 'Custom curve', 'Advanced custom motion'],
          ],
        },
      },
      {
        title: 'Custom Timing Functions',
        body: [
          '`cubic-bezier()` gives you custom control over the speed curve, but it can be hard to read at first. Use it only when a built-in timing function does not feel right.',
        ],
        code: `.card {
  transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
}`,
      },
      {
        title: 'Accessibility and Performance',
        body: [
          'Respect user motion preferences with `@media (prefers-reduced-motion: reduce)`. This is especially important for movement, scaling, sliding, and zooming effects.',
          'Transitions should support the interface. If a transition makes the interface feel slower or harder to use, shorten it or remove it.',
        ],
        code: `@media (prefers-reduced-motion: reduce) {
  .button,
  .menu,
  .accordion-panel {
    transition: none;
  }
}`,
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why It Hurts', 'Fix'],
          rows: [
            ['Using `transition: all`', 'Unexpected properties may animate', 'List the properties you actually want to transition.'],
            ['Trying to transition `display`', '`display` switches on or off instantly', 'Use `opacity`, `visibility`, `transform`, or a layout-specific pattern.'],
            ['Using very long durations', 'The interface can feel slow', 'Keep most UI transitions between `150ms` and `300ms`.'],
            ['Animating layout properties', 'Can cause jank or layout recalculation', 'Prefer `transform` and `opacity` for movement.'],
            ['Only designing hover states', 'Keyboard and touch users may miss feedback', 'Include `:focus-visible` and class-based states.'],
            ['Skipping reduced motion', 'Some users are sensitive to motion', 'Add a `prefers-reduced-motion` fallback.'],
          ],
        },
      },
    ],
    practice: [
      'Create a button hover transition using `background-color` and `transform`.',
      'Add a clear `:focus-visible` transition for keyboard users.',
      'Build a menu that opens and closes by toggling an `.is-open` class.',
      'Create a fade in/out pattern with `.is-visible`.',
      'Add a `prefers-reduced-motion` fallback.',
      'Compare `linear`, `ease`, and `ease-out` on the same transition.',
      'Refactor one `transition: all` example into a specific property list.',
    ],
    resources: ['MDN CSS Transitions Web Docs', 'W3Schools CSS transitions'],
  },
  {
    slug: 'css-animation',
    number: '17',
    title: 'CSS Animation',
    eyebrow: 'Motion',
    summary:
      'Use `@keyframes` and animation properties to create named motion sequences, loading states, and purposeful visual feedback.',
    goals: [
      'Explain when to use `animation` instead of `transition`',
      'Create animations with `@keyframes`, `from`, `to`, and percentage steps',
      'Control animation timing, repetition, direction, fill behavior, pause state, and reduced-motion fallbacks',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'CSS animations run named `@keyframes` over time. A keyframe animation can have multiple steps, repeat, pause, reverse, and run without waiting for a hover or class change.',
          'Use animations for loaders, progress indicators, attention cues, entrance effects, and motion sequences that need more than a simple state change.',
        ],
      },
      {
        title: 'Transition vs Animation',
        body: [
          'A `transition` animates a change between two CSS states. An `animation` runs a named `@keyframes` sequence.',
        ],
        table: {
          headers: ['Need', 'Use', 'Why'],
          rows: [
            ['Button changes on hover', '`transition`', 'The element moves between two states.'],
            ['Spinner loops forever while loading', '`animation`', 'The motion repeats without a state change.'],
            ['Progress bar fills once', '`animation`', 'The sequence has a clear start and end.'],
            ['Card lifts when hovered', '`transition`', 'The hover state controls the change.'],
            ['Attention pulse runs three times', '`animation`', 'The motion needs timing and repetition control.'],
          ],
        },
      },
      {
        title: 'Animation Properties',
        body: [
          'Animations have several properties that control what runs, how long it runs, how it moves, and what happens before and after it runs.',
        ],
        table: {
          headers: ['Property', 'Controls', 'Example'],
          rows: [
            ['`animation-name`', 'Which `@keyframes` sequence runs', '`fadeIn`'],
            ['`animation-duration`', 'How long one cycle takes', '`600ms`'],
            ['`animation-timing-function`', 'How speed changes during the cycle', '`ease-out`'],
            ['`animation-delay`', 'How long to wait before starting', '`200ms`'],
            ['`animation-iteration-count`', 'How many times it runs', '`1`, `3`, `infinite`'],
            ['`animation-direction`', 'Whether cycles run forward, reverse, or alternate', '`alternate`'],
            ['`animation-fill-mode`', 'Whether styles apply before or after the animation', '`both`'],
            ['`animation-play-state`', 'Whether the animation is running or paused', '`paused`'],
          ],
        },
      },
      {
        title: 'Creating Animations with Keyframes',
        body: [
          'The `@keyframes` rule defines the animation sequence. Use `from` and `to` for simple start/end animations, or percentages for multi-step animations.',
          '`from` is the same as `0%`. `to` is the same as `100%`.',
        ],
        code: `@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}`,
      },
      {
        title: 'Applying an Animation',
        body: [
          'Use the `animation` shorthand to attach a keyframe sequence to an element.',
          'A common shorthand pattern is `animation: name duration timing-function delay iteration-count direction fill-mode`.',
        ],
        code: `.fade-in {
  animation: fadeIn 600ms ease-out both;
}`,
      },
      {
        title: 'Individual Animation Properties',
        body: [
          'Writing the properties separately can make an animation easier to read while you are learning.',
        ],
        code: `.fade-in {
  animation-name: fadeIn;
  animation-duration: 600ms;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}`,
      },
      {
        title: 'Animation Fill Mode',
        body: [
          '`animation-fill-mode` controls whether the animated styles apply before the animation starts, after it ends, both, or neither.',
          '`both` is useful for entrance animations because the element can begin in the first keyframe state and stay in the final keyframe state.',
        ],
        table: {
          headers: ['Value', 'Meaning'],
          rows: [
            ['`none`', 'The animation styles do not apply before or after the animation.'],
            ['`forwards`', 'The element keeps the final keyframe styles after the animation ends.'],
            ['`backwards`', 'The element uses the first keyframe styles during the delay.'],
            ['`both`', 'Combines `forwards` and `backwards`.'],
          ],
        },
      },
      {
        title: 'Repeating Animations',
        body: [
          '`animation-iteration-count` controls how many times an animation runs. Use `infinite` only when repeated motion has a clear purpose, such as a loading spinner.',
        ],
        code: `.spinner {
  animation: spin 800ms linear infinite;
}`,
      },
      {
        title: 'Pausing Animations',
        body: [
          '`animation-play-state` can pause and resume an animation. This is useful for interactive demos, media-like controls, or pausing decorative motion on hover.',
        ],
        code: `.marquee {
  animation: slide 12s linear infinite;
}

.marquee:hover {
  animation-play-state: paused;
}`,
      },
      {
        title: 'Good Properties to Animate',
        body: [
          'Like transitions, animations are usually smoother when they use properties that do not force layout recalculation.',
        ],
        table: {
          headers: ['Property Type', 'Examples', 'Guidance'],
          rows: [
            ['Best', '`opacity`, `transform`', 'Use these for most movement and fading.'],
            ['Use carefully', '`box-shadow`, `filter`', 'Can be useful, but may be heavier on large elements.'],
            ['Avoid for motion', '`width`, `height`, `top`, `left`, `margin`', 'These can trigger layout recalculation and feel less smooth.'],
          ],
        },
      },
      {
        title: 'Example: One-time Fade In',
        body: [
          'A fade-in animation is useful when content enters the page or appears after loading.',
        ],
        code: `@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 600ms ease-out both;
}`,
      },
      {
        title: 'Example: Pulse Attention Cue',
        body: [
          'A pulse can draw attention, but it should stop after a few cycles unless it communicates an ongoing status.',
        ],
        code: `@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.06);
  }
}

.notice {
  animation: pulse 700ms ease-in-out 3;
}`,
      },
      {
        title: 'Example: Loading Spinner',
        body: [
          'A spinner is one of the clearest uses for an infinite animation because it communicates ongoing loading.',
        ],
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
        title: 'Example: Progress Bar',
        body: [
          'A progress bar can animate with `transform: scaleX()` from left to right. This avoids animating `width`.',
        ],
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
        title: 'Example: Skeleton Shimmer',
        body: [
          'A skeleton shimmer can suggest loading content, but avoid making it too bright, fast, or distracting.',
        ],
        code: `@keyframes shimmer {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

.skeleton::after {
  animation: shimmer 1.2s linear infinite;
}`,
      },
      {
        title: 'Triggering Animations with JavaScript',
        body: [
          'JavaScript can trigger CSS animations by adding or removing a class. This keeps the animation definition in CSS and the interaction logic in JavaScript.',
        ],
        code: `.animated-box.is-animating {
  animation: pulse 700ms ease-in-out;
}

const button = document.querySelector('.animation-button');
const box = document.querySelector('.animated-box');

button.addEventListener('click', () => {
  box.classList.remove('is-animating');

  requestAnimationFrame(() => {
    box.classList.add('is-animating');
  });
});`,
      },
      {
        title: 'Accessibility and Motion Safety',
        bullets: [
          'Avoid constant motion near long reading content.',
          'Do not make important information depend only on animation.',
          'Avoid flashing, flickering, or rapid high-contrast changes.',
          'Use `prefers-reduced-motion` to reduce or remove non-essential animations.',
          'Make infinite animations purposeful, such as showing loading or ongoing activity.',
        ],
        code: `@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .notice,
  .spinner,
  .skeleton::after {
    animation: none;
  }
}`,
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why It Hurts', 'Fix'],
          rows: [
            ['Forgetting matching `@keyframes`', 'The animation name has nothing to run', 'Make sure `animation-name` matches the `@keyframes` name.'],
            ['Using `infinite` for decorative motion', 'Constant motion can distract or bother users', 'Limit cycles or stop the animation when it has done its job.'],
            ['Animating layout properties', 'Can cause jank and layout recalculation', 'Prefer `transform` and `opacity`.'],
            ['Forgetting `animation-fill-mode`', 'The element may snap back after the animation', 'Use `forwards` or `both` when the final state should remain.'],
            ['Creating motion with no purpose', 'Animation can make the interface feel noisy', 'Use motion to give feedback, show status, or guide attention.'],
            ['Skipping reduced motion', 'Some users are sensitive to motion', 'Add a `prefers-reduced-motion` fallback.'],
          ],
        },
      },
    ],
    practice: [
      'Build a one-time fade-in animation with `@keyframes`.',
      'Create a looping spinner with `animation-iteration-count: infinite`.',
      'Build a progress bar using `transform: scaleX()` instead of `width`.',
      'Pause an animation with `animation-play-state`.',
      'Trigger an animation by toggling an `.is-animating` class.',
      'Add a `prefers-reduced-motion` fallback.',
      'Explain when you would use `animation` instead of `transition`.',
    ],
  },
  {
    slug: 'gsap-web-animation',
    number: '18',
    title: 'GSAP Web Animation',
    eyebrow: 'GSAP',
    summary:
      'Use GSAP for controlled JavaScript animation, sequenced timelines, staggered motion, and complex interaction patterns.',
    goals: [
      'Explain when GSAP is a better fit than CSS transitions or CSS animations',
      'Create tweens with `gsap.to()`, `gsap.from()`, and `gsap.fromTo()`',
      'Sequence animations with `gsap.timeline()` and stagger groups of elements',
      'Use GSAP with performance, accessibility, and reduced motion in mind',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'GSAP is a JavaScript animation library for controlling motion with code. It is useful when CSS transitions or CSS keyframes are not enough for the interaction you want to build.',
          'Use GSAP when you need precise timing, sequences, staggered groups, scroll-based motion, or animations that respond to user interaction.',
        ],
      },
      {
        title: 'When to Use GSAP',
        body: [
          'Choose the simplest tool that handles the job. CSS is still the right choice for many small interactions. GSAP becomes helpful when the timing or interaction gets more complex.',
        ],
        table: {
          headers: ['Need', 'Use', 'Why'],
          rows: [
            ['Simple hover or focus change', 'CSS `transition`', 'The element moves between two states.'],
            ['Simple repeating loader', 'CSS `animation`', 'A named `@keyframes` loop is enough.'],
            ['Animate one element with JavaScript control', 'GSAP tween', '`gsap.to()` can control timing, values, easing, and callbacks.'],
            ['Sequence several steps', 'GSAP timeline', '`gsap.timeline()` avoids manually managing delays.'],
            ['Animate a group one after another', 'GSAP stagger', '`stagger` creates a clean sequence across many elements.'],
            ['Scroll-based animation', 'GSAP `ScrollTrigger`', 'Scroll progress and animation timing need tighter control.'],
          ],
        },
      },
      {
        title: 'Getting Started with GSAP',
        body: [
          'You can load GSAP from a CDN for small demos. In larger projects, you may install it through your package manager.',
          'A tween is one animation instruction. It needs a target, properties to animate, and timing options such as `duration` and `ease`.',
        ],
        code: `<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>

<div class="box">Animate me</div>

<script>
  gsap.to('.box', {
    x: 100,
    rotation: 360,
    duration: 1,
  });
</script>`,
        note:
          'GSAP `x` and `y` use transforms. They are usually better for motion than animating layout properties such as `left` or `top`.',
      },
      {
        title: 'Tween Basics',
        table: {
          headers: ['Piece', 'Meaning', 'Example'],
          rows: [
            ['Target', 'The element or elements to animate', "'.card'"],
            ['Properties', 'The values that change', '`x`, `opacity`, `scale`'],
            ['Duration', 'How long the tween takes', '`duration: 0.6`'],
            ['Ease', 'How the motion speeds up or slows down', "`ease: 'power2.out'`"],
            ['Delay', 'How long to wait before starting', '`delay: 0.2`'],
            ['Callback', 'A function that runs during the tween lifecycle', '`onComplete`'],
          ],
        },
      },
      {
        title: 'Common GSAP Properties',
        table: {
          headers: ['Property', 'Use For'],
          rows: [
            ['`x` and `y`', 'Move an element with transforms.'],
            ['`rotation`', 'Rotate an element.'],
            ['`scale`', 'Resize an element visually.'],
            ['`opacity`', 'Fade an element in or out.'],
            ['`duration`', 'Set how long the tween takes.'],
            ['`ease`', 'Control the feel of the motion.'],
            ['`delay`', 'Wait before starting.'],
            ['`stagger`', 'Offset the start time across multiple elements.'],
          ],
        },
      },
      {
        title: '`gsap.to()`',
        body: [
          '`gsap.to()` animates from the element\'s current state to the values you provide.',
        ],
        code: `gsap.to('.box', {
  x: 120,
  opacity: 0.5,
  duration: 0.6,
  ease: 'power2.out',
});`,
      },
      {
        title: '`gsap.from()`',
        body: [
          '`gsap.from()` starts at the values you provide and animates to the element\'s current CSS state. This is useful for entrance animations.',
        ],
        code: `gsap.from('.card', {
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: 'power2.out',
});`,
      },
      {
        title: '`gsap.fromTo()`',
        body: [
          '`gsap.fromTo()` lets you define both the starting values and ending values. Use it when you need complete control over both states.',
        ],
        code: `gsap.fromTo(
  '.button',
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.4 }
);`,
      },
      {
        title: 'Timelines',
        body: [
          '`gsap.timeline()` lets you sequence multiple tweens without calculating all the delays by hand.',
          'Each tween is added to the timeline. By default, the next tween starts after the previous tween ends.',
        ],
        code: `const timeline = gsap.timeline();

timeline
  .to('.box', { x: 100, duration: 0.5 })
  .to('.box', { rotation: 180, duration: 0.5 })
  .to('.box', { scale: 1.2, duration: 0.5 });`,
      },
      {
        title: 'Timeline Position Controls',
        body: [
          'Timeline position values control when a tween starts. This is one of the biggest reasons to use GSAP for sequenced motion.',
        ],
        table: {
          headers: ['Position', 'Meaning'],
          rows: [
            ['No position value', 'Start after the previous tween ends.'],
            ["`'<'`", 'Start at the same time as the previous tween.'],
            ["`'-=0.2'`", 'Start `0.2` seconds before the previous tween ends.'],
            ["`'+=0.2'`", 'Start `0.2` seconds after the previous tween ends.'],
          ],
        },
        code: `const timeline = gsap.timeline();

timeline
  .to('.card', { y: -12, duration: 0.3 })
  .to('.card', { opacity: 1, duration: 0.3 }, '<')
  .to('.badge', { scale: 1, duration: 0.2 }, '-=0.1');`,
      },
      {
        title: 'Staggered Tweens',
        body: [
          '`stagger` animates a group of elements with a delay between each element. This is great for card grids, navigation items, galleries, and lists.',
        ],
        code: `gsap.from('.gallery-card', {
  y: 24,
  opacity: 0,
  duration: 0.45,
  ease: 'power2.out',
  stagger: 0.08,
});`,
      },
      {
        title: 'Easing',
        body: [
          '`ease` changes the feel of the motion. Start with common values such as `power2.out`, `power2.inOut`, or `sine.inOut` before using more dramatic easing.',
        ],
        code: `gsap.to('.panel', {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: 'power2.out',
});`,
      },
      {
        title: 'Callbacks',
        body: [
          'Callbacks run functions at different points in a tween. Use them when animation needs to coordinate with interface state.',
        ],
        code: `gsap.to('.notification', {
  y: 0,
  opacity: 1,
  duration: 0.3,
  onStart: () => console.log('Animation started'),
  onComplete: () => console.log('Animation complete'),
});`,
      },
      {
        title: 'Repeat and Yoyo',
        body: [
          '`repeat` controls how many times a tween repeats. `yoyo` makes alternate repeats play backward.',
          'Use infinite motion carefully. Repeated motion should have a clear purpose and should respect reduced-motion preferences.',
        ],
        code: `gsap.to('.pulse', {
  scale: 1.12,
  duration: 0.8,
  repeat: 3,
  yoyo: true,
  ease: 'sine.inOut',
});`,
      },
      {
        title: 'Reduced Motion with GSAP',
        body: [
          'Check `prefers-reduced-motion` before running non-essential animation. You can skip the animation, shorten it, or set final states immediately.',
        ],
        code: `const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  gsap.set('.card', { opacity: 1, y: 0 });
} else {
  gsap.from('.card', {
    opacity: 0,
    y: 24,
    duration: 0.5,
    stagger: 0.08,
  });
}`,
      },
      {
        title: 'Plugins',
        body: [
          'GSAP plugins extend what GSAP can do. Use plugins when the core tween and timeline tools are not enough.',
        ],
        table: {
          headers: ['Plugin', 'Use For'],
          rows: [
            ['`ScrollTrigger`', 'Starting or controlling animation based on scroll position.'],
            ['`MorphSVG`', 'Morphing SVG shapes.'],
            ['`SplitText`', 'Animating words, lines, or characters.'],
            ['`DrawSVG`', 'Revealing SVG strokes progressively.'],
          ],
        },
      },
      {
        title: 'Advanced Performance Notes',
        body: [
          'For most beginner work, animate `x`, `y`, `scale`, `rotation`, and `opacity`. These map well to transform and opacity-based motion.',
          'Tools like `overwrite`, `force3D`, and CSS `will-change` can help in specific cases, but they should not be the first thing you reach for.',
        ],
        bullets: [
          '`overwrite: auto` can help when multiple tweens compete for the same properties.',
          '`force3D: true` can encourage GPU rendering, but overusing it can hurt performance.',
          '`will-change` can prepare the browser for animation, but leaving it everywhere can waste memory.',
        ],
        code: `gsap.to('.box', {
  x: 200,
  duration: 1,
  overwrite: 'auto',
});`,
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why It Hurts', 'Fix'],
          rows: [
            ['Using GSAP when CSS is enough', 'Adds complexity for a simple state change', 'Use CSS transitions or animations for simple effects.'],
            ['Animating `left` or `top`', 'Can trigger layout recalculation', 'Use GSAP `x` and `y` instead.'],
            ['Running code before elements exist', 'GSAP cannot find the target', 'Run scripts after the DOM is ready or place scripts after the HTML.'],
            ['Forgetting reduced motion', 'Some users are sensitive to motion', 'Check `prefers-reduced-motion` and simplify or skip animation.'],
            ['Overusing infinite motion', 'Constant motion can distract users', 'Use `repeat` purposefully and avoid unnecessary loops.'],
            ['Not cleaning up complex animations', 'Repeated setup can cause bugs in larger apps', 'Kill scroll triggers or repeated timelines when components are removed.'],
          ],
        },
      },
    ],
    practice: [
      'Create one `gsap.to()` tween that moves an element with `x` or `y`.',
      'Create one `gsap.from()` entrance animation using `opacity` and `y`.',
      'Build a three-step `gsap.timeline()` sequence.',
      'Stagger a group of cards or list items.',
      'Add `repeat` and `yoyo` to one purposeful effect.',
      'Add a `prefers-reduced-motion` check that skips or simplifies motion.',
      'Explain why GSAP was a better choice than CSS for one example.',
    ],
    resources: ['GSAP CDN', 'GSAP Ease Visualizer', 'GSAP Plugins Page'],
  },
  {
    slug: 'image-optimization',
    number: '19',
    title: 'Image Optimization',
    eyebrow: 'Performance',
    summary:
      'Optimize image formats, dimensions, compression, responsive delivery, accessibility, and loading behavior for faster websites.',
    goals: [
      'Choose appropriate image formats such as `JPEG`, `PNG`, `SVG`, `WebP`, and `AVIF`',
      'Resize and compress images so file size matches the design need',
      'Write useful `alt` text and reserve image space with `width` and `height`',
      'Use `srcset`, `sizes`, `picture`, and `loading="lazy"` appropriately',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'Images often make up a large part of a page\'s download size. Optimizing them can make a site feel faster, especially on mobile networks.',
          'Good image optimization balances quality, file size, layout stability, accessibility, and responsive delivery.',
        ],
      },
      {
        title: 'Image Optimization Workflow',
        body: [
          'A consistent workflow helps you avoid the most common image problems before they reach the browser.',
        ],
        bullets: [
          'Choose the right format for the image content.',
          'Crop and resize the image to the dimensions the design actually needs.',
          'Compress the image to reduce file size.',
          'Add meaningful `alt` text or empty `alt=""` for decorative images.',
          'Add `width` and `height` to reserve space and reduce layout shift.',
          'Use responsive images when the same image appears at different sizes.',
          'Lazy-load below-the-fold images with `loading="lazy"`.',
          'Test the result in `Lighthouse`, DevTools, or the Network panel.',
        ],
      },
      {
        title: 'Dimensions vs File Size',
        body: [
          'Pixel dimensions describe how many pixels are in the source file, such as `2400 x 1600`.',
          'Displayed size is how large the image appears in the layout, often controlled by CSS.',
          'File size is how much data the browser downloads, such as `85 KB` or `2.4 MB`.',
        ],
        note:
          'Avoid uploading a huge source image and shrinking it with CSS. The browser still downloads the huge file.',
      },
      {
        title: 'Choosing the Right Image Format',
        body: [
          'Different formats are good at different jobs. The right choice depends on the image content, transparency needs, browser support, and quality expectations.',
        ],
        table: {
          headers: ['Image Type', 'Good Formats', 'Why'],
          rows: [
            ['Photos', '`JPEG`, `WebP`, `AVIF`', 'Good compression for complex photographic detail.'],
            ['Transparent graphics', '`PNG`, `WebP`, `AVIF`', 'Supports transparency when needed.'],
            ['Logos and icons', '`SVG`', 'Scales cleanly and usually stays small for simple vector art.'],
            ['Screenshots or UI images', '`PNG`, `WebP`', 'Preserves sharp edges and interface detail.'],
            ['Simple animation', 'Animated `WebP` or video before `GIF`', '`GIF` files are often large and limited in color.'],
          ],
        },
      },
      {
        title: 'Format Notes',
        bullets: [
          '`JPEG` is useful for photos, but it does not support transparency.',
          '`PNG` is useful for sharp edges and transparency, but large photos can become heavy.',
          '`SVG` is best for simple logos, icons, and vector graphics.',
          '`WebP` usually compresses better than `JPEG` or `PNG` and supports transparency.',
          '`AVIF` can be even smaller than `WebP`, but always check visual quality and browser needs.',
        ],
      },
      {
        title: 'Resizing Images',
        body: [
          'Resize source images before adding them to a site. If a card image displays around `600px` wide, the source image probably does not need to be `3000px` wide.',
          'Keep larger versions only when the design truly needs them, such as full-width hero images, high-density screens, or zoomable galleries.',
        ],
      },
      {
        title: 'Compressing Images',
        body: [
          'Compression reduces file size. Lossy compression removes image data to make files smaller. Lossless compression keeps the original image data but may not shrink files as much.',
        ],
        table: {
          headers: ['Compression Type', 'Use For', 'Tradeoff'],
          rows: [
            ['Lossy', 'Photos and large hero images', 'Smaller files, possible quality loss.'],
            ['Lossless', 'Logos, UI graphics, screenshots, and sharp edges', 'Better detail, larger files.'],
          ],
        },
      },
      {
        title: 'Image Optimization Tools',
        bullets: [
          '[Squoosh](https://squoosh.app/) for comparing formats, resizing, and compression settings.',
          '[TinyPNG](https://tinypng.com/) for quick `PNG`, `JPEG`, and `WebP` compression.',
          '[Adobe Photoshop](https://www.adobe.com/products/photoshop.html) or similar editors for cropping, resizing, and export settings.',
          '[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) and the [Chrome DevTools Network panel](https://developer.chrome.com/docs/devtools/network/) for checking page impact.',
        ],
      },
      {
        title: 'Image Markup Basics',
        body: [
          'A solid `img` tag includes the image path, meaningful `alt` text, and dimensions that reserve layout space while the image loads.',
        ],
        code: `<img
  src="team-photo.webp"
  width="800"
  height="533"
  alt="Design team reviewing wireframes around a table"
  decoding="async"
>`,
      },
      {
        title: 'Writing Alt Text',
        body: [
          '`alt` text describes the purpose or content of an image for people who cannot see it. It also helps when images fail to load.',
        ],
        table: {
          headers: ['Image Type', 'Alt Approach', 'Example'],
          rows: [
            ['Meaningful image', 'Describe the useful content', '`alt="Student portfolio homepage with a large project grid"`'],
            ['Decorative image', 'Use empty alt text', '`alt=""`'],
            ['Image link or button', 'Describe the action or destination', '`alt="View project gallery"`'],
            ['Image with text in it', 'Include the important text nearby or in `alt`', '`alt="Sale ends Friday"`'],
          ],
        },
        note:
          'Do not stuff keywords into `alt` text. Write for people first.',
      },
      {
        title: 'Responsive Images with Srcset and Sizes',
        body: [
          '`srcset` gives the browser multiple image file options. `sizes` tells the browser how wide the image will appear in the layout.',
          '`sizes` describes the rendered display width, not the original image width.',
        ],
        code: `<img
  src="project-800.webp"
  srcset="project-400.webp 400w, project-800.webp 800w, project-1200.webp 1200w"
  sizes="(max-width: 700px) 100vw, 700px"
  width="800"
  height="533"
  alt="Portfolio project displayed on a laptop"
  loading="lazy"
  decoding="async"
>` ,
      },
      {
        title: 'When to Use Picture',
        body: [
          'Use `picture` when the browser needs different image files for reasons beyond simple size selection.',
        ],
        table: {
          headers: ['Need', 'Why `picture` Helps'],
          rows: [
            ['Art direction or crop changes', 'Serve a different crop for mobile and desktop.'],
            ['Format fallback', 'Offer `AVIF` or `WebP` with a fallback image.'],
            ['Different image ratios', 'Use a square image on small screens and a wide image on desktop.'],
          ],
        },
        code: `<picture>
  <source type="image/avif" srcset="hero.avif">
  <source type="image/webp" srcset="hero.webp">
  <img
    src="hero.jpg"
    width="1200"
    height="675"
    alt="Finished website shown on a desktop monitor"
  >
</picture>`,
      },
      {
        title: 'Lazy Loading',
        body: [
          'Use native lazy loading for images that appear below the first viewport. This lets the browser delay downloading images until they are likely to be needed.',
          'For beginners, `loading="lazy"` is usually the right first choice. JavaScript lazy loading is only needed for more custom behavior.',
        ],
        code: `<img
  src="gallery-image.webp"
  width="600"
  height="400"
  alt="Gallery wall with student web design mockups"
  loading="lazy"
  decoding="async"
>`,
      },
      {
        title: 'Hero and LCP Images',
        body: [
          'The main above-the-fold image often affects Largest Contentful Paint, or `LCP`. This is usually a hero image, feature image, or large first-screen visual.',
          'Do not lazy-load the main hero image. The browser should discover and load it early.',
        ],
        code: `<img
  src="hero.webp"
  width="1400"
  height="800"
  alt="Student portfolio homepage displayed on a laptop"
  fetchpriority="high"
  decoding="async"
>`,
        note:
          'Use `fetchpriority="high"` only for the most important above-the-fold image. Do not add it to every image.',
      },
      {
        title: 'Testing Image Performance',
        bullets: [
          'Use the [Chrome DevTools Network panel](https://developer.chrome.com/docs/devtools/network/) to sort images by file size.',
          'Use [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) to check image sizing, modern formats, lazy loading, and layout shift warnings.',
          'Test on mobile viewport sizes, not just desktop.',
          'Compare visual quality after compression. Smaller is not better if the image looks broken.',
        ],
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why It Hurts', 'Fix'],
          rows: [
            ['Missing `alt` text', 'The image may be inaccessible', 'Write meaningful `alt` text or use `alt=""` for decorative images.'],
            ['Missing `width` and `height`', 'The page may shift while images load', 'Add dimensions that match the image aspect ratio.'],
            ['Lazy-loading the hero image', 'The most important image may load too late', 'Load the hero image normally and consider `fetchpriority="high"`.'],
            ['Using `PNG` for large photos', 'File size can be much larger than needed', 'Use `JPEG`, `WebP`, or `AVIF` for photos.'],
            ['Uploading huge source images', 'Users download unnecessary pixels', 'Resize images before publishing.'],
            ['Using `srcset` without correct `sizes`', 'The browser may choose the wrong file', 'Make `sizes` match the rendered layout width.'],
            ['Using `GIF` for large animations', 'Files can be very heavy', 'Use video or animated `WebP` when appropriate.'],
          ],
        },
      },
    ],
    practice: [
      'Optimize one photo by resizing and compressing it.',
      'Choose appropriate formats for a photo, logo, and screenshot.',
      'Add `width`, `height`, and meaningful `alt` text to an image.',
      'Create one `srcset` and `sizes` example for a responsive image.',
      'Add `loading="lazy"` to below-the-fold images.',
      'Identify one image that should not be lazy-loaded because it is above the fold.',
      'Test image file sizes in [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) or the [Chrome DevTools Network panel](https://developer.chrome.com/docs/devtools/network/).',
    ],
    resources: [
      '[Squoosh image optimizer](https://squoosh.app/)',
      '[TinyPNG image compression](https://tinypng.com/)',
      '[MDN Responsive Images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/HTML/Responsive_images)',
      '[MDN Lazy Loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)',
      '[web.dev Optimize Images](https://web.dev/learn/images)',
    ],
  },
  {
    slug: 'page-types-templates-and-navigation',
    number: '20',
    title: 'Page Types and Templates',
    eyebrow: 'Structure',
    summary:
      'Plan common page types, reusable templates, and content hierarchy so websites feel consistent and purposeful.',
    goals: [
      'Identify common page types and the user goals they support',
      'Explain the difference between a `page type`, `template`, and `layout`',
      'Group a sitemap into reusable templates and decide when a custom layout is needed',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'Page types are reusable patterns for common user goals. A `home page`, `listing page`, `detail page`, `article page`, and `contact page` each have a different job.',
          'Templates help repeated pages stay consistent. Instead of designing every page from scratch, you define a structure that can be reused for similar content.',
        ],
      },
      {
        title: 'Page Type vs Template vs Layout',
        body: [
          'These terms are related, but they do not mean the same thing. Knowing the difference helps you plan a site before writing code or designing screens.',
        ],
        table: {
          headers: ['Term', 'Meaning', 'Example'],
          rows: [
            ['`Page type`', 'The purpose of the page', '`listing page`, `detail page`, `article page`'],
            ['`Template`', 'A reusable structure for one page type', 'One product detail template used by many products'],
            ['`Layout`', 'The visual arrangement of content', 'Two-column layout, grid layout, full-width hero layout'],
          ],
        },
      },
      {
        title: 'Why Page Types Matter',
        body: [
          'Page types make websites easier to understand. When similar pages behave consistently, users can focus on their task instead of relearning the interface.',
        ],
        bullets: [
          'Navigation feels predictable across the site.',
          'Users can recognize what kind of page they are on.',
          'Teams can design and build faster with reusable structures.',
          'Content stays easier to maintain as the site grows.',
        ],
      },
      {
        title: 'Common Page Types',
        table: {
          headers: ['Page Type', 'Purpose', 'User Goal', 'Common Sections'],
          rows: [
            ['`Home page`', 'Introduce the site and route users onward', 'Understand what the site offers', 'Hero, key links, featured content, calls to action'],
            ['`Landing page`', 'Support one campaign or offer', 'Decide whether to act', 'Value proposition, proof, benefits, CTA, FAQ'],
            ['`Listing page`', 'Show many related items', 'Browse, compare, filter, or search', 'Title, filters, sort, item cards, pagination'],
            ['`Detail page`', 'Explain one item in depth', 'Evaluate one product, project, article, or service', 'Media, description, specs, CTA, related items'],
            ['`Article page`', 'Present long-form content', 'Read and understand a topic', 'Title, byline, body, media, related articles'],
            ['`Portfolio project page`', 'Show process and outcomes', 'Evaluate the work and decision-making', 'Problem, role, process, visuals, result'],
            ['`Contact page`', 'Help users reach out', 'Find contact options or submit a message', 'Form, email, location, expectations'],
            ['`Search results page`', 'Show results for a query', 'Find the best matching content', 'Search field, filters, results, empty state'],
            ['`Dashboard or account page`', 'Support repeat tasks and status checking', 'Manage information or complete tasks', 'Summary, navigation, data, actions'],
            ['`Error or empty state page`', 'Recover from a dead end', 'Understand what happened and where to go next', 'Message, helpful link, search, CTA'],
          ],
        },
      },
      {
        title: 'Template Anatomy',
        body: [
          'Most templates combine shared site structure with page-specific content areas. The exact pieces change by page type, but the planning questions stay similar.',
        ],
        bullets: [
          'Shared header and `navigation`.',
          'Clear page title or primary heading.',
          'Primary content area that supports the main user goal.',
          'Supporting content such as related links, metadata, filters, or summaries.',
          'Primary call to action when the page needs one.',
          'Shared footer and secondary navigation.',
        ],
      },
      {
        title: 'Template Examples',
        table: {
          headers: ['Template', 'Core Pieces'],
          rows: [
            ['Article template', 'Title, author/date, hero image, article body, related articles'],
            ['Product detail template', 'Product name, image gallery, price, description, specs, reviews, add-to-cart CTA'],
            ['Listing template', 'Page title, filters, sort controls, item cards, pagination or load more'],
            ['Portfolio project template', 'Project title, overview, role, process, visuals, outcomes, next project'],
          ],
        },
      },
      {
        title: 'Content Hierarchy',
        body: [
          'Before designing a template, decide what the page needs to communicate first. Hierarchy is the order of importance on the page.',
        ],
        bullets: [
          'What must the user understand first?',
          'What is the main action or next step?',
          'What information supports the primary task?',
          'What can move lower on the page?',
          'What should stay consistent across this template type?',
        ],
      },
      {
        title: 'When to Use a Template',
        table: {
          headers: ['Situation', 'Why a Template Helps'],
          rows: [
            ['Many pages share the same content type', 'The structure can repeat without redesigning each page.'],
            ['Pages support the same user goal', 'Users benefit from predictable patterns.'],
            ['A site needs many similar pages', 'Templates save build time and maintenance effort.'],
            ['Content will be updated often', 'A reusable structure makes updates safer and faster.'],
          ],
        },
      },
      {
        title: 'When to Customize',
        body: [
          'Templates should create consistency, not trap every page into the same shape. Some pages need custom sections or a custom layout because their goal is different.',
        ],
        bullets: [
          '`Landing pages` for campaigns or launches may need a unique flow.',
          'A major portfolio case study may need richer storytelling than a standard detail page.',
          'A one-off event page may need schedule, speakers, registration, and venue information.',
          'A homepage often combines multiple patterns because it routes users to many areas.',
          'Custom pages should still keep shared accessibility, header, footer, and navigation patterns.',
        ],
      },
      {
        title: 'Template Inventory Activity',
        body: [
          'A template inventory helps you turn a sitemap into a build plan. List every page, then group pages that can share a template.',
        ],
        table: {
          headers: ['Sitemap Item', 'Page Type', 'Template Group'],
          rows: [
            ['`/work/`', '`listing page`', 'Project listing template'],
            ['`/work/weather-app/`', '`detail page`', 'Project detail template'],
            ['`/blog/`', '`listing page`', 'Article listing template'],
            ['`/blog/css-layout/`', '`article page`', 'Article detail template'],
            ['`/contact/`', '`contact page`', 'Custom contact template'],
          ],
        },
      },
      {
        title: 'Planning Checklist',
        bullets: [
          'Write the primary user goal for the page type.',
          'List the content sections the page needs.',
          'Decide which sections repeat across similar pages.',
          'Choose the primary call to action or next step.',
          'Sketch the mobile layout before the desktop layout.',
          'Check that page titles, navigation, and footer patterns stay consistent.',
        ],
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why It Hurts', 'Fix'],
          rows: [
            ['Making every page custom', 'The site becomes inconsistent and harder to maintain', 'Group similar pages into templates.'],
            ['Using one template for different goals', 'The page may not support the user task', 'Create different templates for different page types.'],
            ['Inconsistent navigation', 'Users lose confidence moving through the site', 'Keep shared navigation patterns stable.'],
            ['Unclear page title', 'Users may not know where they are', 'Use a clear `h1` that matches the page purpose.'],
            ['Burying the primary action', 'Users may miss the next step', 'Place the main CTA where it supports the user goal.'],
            ['Designing desktop only', 'The template may fail on small screens', 'Plan mobile structure and content priority early.'],
          ],
        },
      },
    ],
    practice: [
      'Identify the page type for five pages on a website you use often.',
      'Group a small sitemap into reusable template groups.',
      'Sketch a `listing page` template and a `detail page` template.',
      'Choose one page that deserves a custom layout and explain why.',
      'Write the primary user goal for each template you sketch.',
      'Create a content checklist for one article, product, or portfolio project template.',
    ],
  },
  {
    slug: 'building-effective-site-navigation',
    number: '21',
    title: 'Site Navigation',
    eyebrow: 'Navigation',
    summary:
      'Design clear, consistent, accessible navigation systems that help users understand where they are and where they can go next.',
    goals: [
      'Plan navigation around user goals, page priority, and site structure',
      'Build semantic navigation with `nav`, links, skip links, breadcrumbs, and current-page states',
      'Create responsive navigation behavior with accessible buttons, focus styles, and keyboard testing',
    ],
    sections: [
      {
        title: 'Introduction',
        body: [
          'Navigation helps users understand where they are, where they can go, and how to complete tasks. Good navigation makes a site feel predictable instead of confusing.',
          'Start with clear links and semantic HTML. Add CSS for layout and states. Use JavaScript only when the navigation needs interaction, such as opening a mobile menu.',
        ],
      },
      {
        title: 'What Good Navigation Answers',
        bullets: [
          'Where am I?',
          'What can I do here?',
          'Where can I go next?',
          'How do I get back to a broader section or the homepage?',
        ],
      },
      {
        title: 'Navigation Planning',
        body: [
          'Before building a menu, decide which links matter most. Not every page belongs in the main navigation.',
        ],
        table: {
          headers: ['User Goal', 'Needed Link', 'Priority', 'Best Location'],
          rows: [
            ['Understand the site', '`Home` or brand link', 'High', 'Main navigation'],
            ['Browse work or products', '`Work`, `Shop`, or `Projects`', 'High', 'Main navigation'],
            ['Learn about the person or organization', '`About`', 'Medium', 'Main or footer navigation'],
            ['Get help or contact someone', '`Contact` or `Support`', 'High', 'Main, utility, or footer navigation'],
            ['Find policies or social links', '`Privacy`, `Terms`, social links', 'Low', 'Footer navigation'],
            ['Move within a long section', 'Section links or table of contents', 'Contextual', 'Local navigation'],
          ],
        },
      },
      {
        title: 'Navigation Types',
        table: {
          headers: ['Type', 'Use For', 'Example'],
          rows: [
            ['Main navigation', 'Primary site sections', '`Home`, `Work`, `About`, `Contact`'],
            ['Footer navigation', 'Secondary links and repeated important links', '`Privacy`, `Resources`, `Social`'],
            ['Utility navigation', 'Account, search, language, or support links', '`Log in`, `Search`, `Help`'],
            ['Breadcrumb navigation', 'Showing location in a hierarchy', '`Home / Lessons / Site Navigation`'],
            ['Local navigation', 'Moving within a section or page', 'Lesson table of contents'],
            ['Pagination', 'Moving through ordered sets', '`Previous`, `Next`, page numbers'],
            ['Skip link', 'Letting keyboard users bypass repeated navigation', '`Skip to main content`'],
          ],
        },
      },
      {
        title: 'Semantic Main Navigation',
        body: [
          'Use `nav` for navigation regions, `ul` and `li` for lists of links, and `a` for destinations. Add `aria-label` when the page has more than one navigation region.',
        ],
        code: `<nav class="site-nav" aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/work/" aria-current="page">Work</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>`,
      },
      {
        title: 'Current Page State',
        body: [
          '`aria-current="page"` tells assistive technology which navigation link represents the current page. It can also be used as a styling hook.',
        ],
        code: `.site-nav a[aria-current="page"] {
  font-weight: 700;
  text-decoration-thickness: 0.18em;
}`,
      },
      {
        title: 'Link Labels',
        bullets: [
          'Use labels that match the destination.',
          'Keep main navigation labels short.',
          'Avoid vague labels such as `Click here` or `Learn more` in navigation.',
          'Do not overload the main navigation with every page on the site.',
          'Use footer, utility, and contextual navigation for lower-priority links.',
        ],
      },
      {
        title: 'Skip Links',
        body: [
          'A skip link lets keyboard users jump past repeated navigation and go straight to the main content.',
        ],
        code: `<a class="skip-link" href="#main-content">Skip to main content</a>

<main id="main-content">
  <h1>Site Navigation</h1>
</main>`,
      },
      {
        title: 'Skip Link CSS',
        code: `.skip-link {
  position: absolute;
  inset-block-start: 0.5rem;
  inset-inline-start: 0.5rem;
  transform: translateY(-150%);
  transition: transform 160ms ease;
}

.skip-link:focus {
  transform: translateY(0);
}`,
      },
      {
        title: 'Breadcrumb Navigation',
        body: [
          'Breadcrumbs help users understand where the current page lives in the site hierarchy. They are especially useful on larger sites with nested sections.',
        ],
        code: `<nav aria-label="Breadcrumb">
  <ol class="breadcrumbs">
    <li><a href="/">Home</a></li>
    <li><a href="/lessons/">Lessons</a></li>
    <li aria-current="page">Site Navigation</li>
  </ol>
</nav>`,
      },
      {
        title: 'Responsive Navigation Markup',
        body: [
          'A responsive menu toggle should be a real `button`, not a link or a clickable `div`. Use `aria-expanded` and `aria-controls` to connect the button to the menu it controls.',
        ],
        code: `<button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">
  Menu
</button>

<nav id="main-nav" class="site-nav" aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/work/">Work</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>`,
      },
      {
        title: 'Responsive Navigation CSS',
        body: [
          'The closed menu can be hidden by default on small screens, then revealed when JavaScript adds an open class.',
        ],
        code: `.site-nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-toggle {
  display: none;
}

@media (max-width: 48rem) {
  .nav-toggle {
    display: inline-flex;
  }

  .site-nav:not(.is-open) {
    display: none;
  }

  .site-nav ul {
    flex-direction: column;
  }
}`,
      },
      {
        title: 'Responsive Navigation JavaScript',
        body: [
          'JavaScript is needed only for the interactive toggle. The links themselves should remain normal links.',
        ],
        code: `const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('#main-nav');

toggleButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggleButton.setAttribute('aria-expanded', String(isOpen));
});`,
      },
      {
        title: 'Focus Styles',
        body: [
          'Visible focus styles help keyboard users see which link or button is active. Do not remove outlines without replacing them with a clear focus style.',
        ],
        code: `.site-nav a:focus-visible,
.nav-toggle:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 0.25rem;
}`,
      },
      {
        title: 'Sticky Navigation',
        body: [
          'Use `position: sticky` when the navigation should stay near the top after the user scrolls to it. It is usually easier to manage than `position: fixed` because it remains in normal flow until it sticks.',
        ],
        code: `.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
}

html {
  scroll-padding-top: 5rem;
}`,
        note:
          '`scroll-padding-top` helps anchor links avoid being hidden behind a sticky header.',
      },
      {
        title: 'Smooth Scrolling',
        body: [
          'Smooth scrolling can help same-page navigation feel connected, but it should respect reduced-motion preferences.',
        ],
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
        title: 'Dropdown and Mega Menu Accessibility',
        bullets: [
          'Do not rely only on hover. Menus must work with keyboard and touch input.',
          'Use visible `:focus-visible` styles for links and buttons.',
          'Keep labels clear and predictable.',
          'Test with `Tab`, `Shift + Tab`, `Enter`, `Space`, and `Escape` if the menu can close.',
          'Mega menus are best for large sites with clear categories, not small sites with only a few links.',
        ],
      },
      {
        title: 'Keyboard Testing Checklist',
        bullets: [
          'Can you reach every navigation link with `Tab`?',
          'Can you see where focus is at all times?',
          'Can you open and close the responsive menu with the keyboard?',
          'Does `aria-expanded` update when the menu opens and closes?',
          'Does the current page link use `aria-current="page"`?',
          'Does the skip link appear when focused?',
        ],
      },
      {
        title: 'Common Mistakes',
        table: {
          headers: ['Mistake', 'Why It Hurts', 'Fix'],
          rows: [
            ['Too many top-level links', 'The main navigation becomes hard to scan', 'Prioritize primary user goals and move secondary links elsewhere.'],
            ['Vague labels', 'Users cannot predict where links go', 'Use clear destination-based labels.'],
            ['Navigation only works on hover', 'Keyboard and touch users may be blocked', 'Support click, keyboard, and touch behavior.'],
            ['No focus styles', 'Keyboard users lose track of location', 'Add strong `:focus-visible` styles.'],
            ['Missing current page indicator', 'Users may not know where they are', 'Use `aria-current="page"` and a visible active style.'],
            ['Fixed header covers content', 'Headings and anchor targets can be hidden', 'Use `position: sticky` when possible and add `scroll-padding-top`.'],
            ['Menu toggle is not a `button`', 'Interaction semantics are wrong', 'Use a real `button` with `aria-expanded` and `aria-controls`.'],
          ],
        },
      },
    ],
    practice: [
      'Write a navigation plan for a small sitemap with main, footer, and utility links.',
      'Build a semantic `nav` with at least four links.',
      'Add `aria-current="page"` to the current page link.',
      'Add a skip link that appears on focus.',
      'Build a responsive menu toggle with `aria-expanded` and `aria-controls`.',
      'Add clear `:focus-visible` styles.',
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
