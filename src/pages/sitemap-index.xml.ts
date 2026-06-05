import { lessons } from '../data/lessons';
import { projects } from '../data/projects';

const siteUrl = 'https://learn.quintonjason.com';

const staticPages = [
  '/',
  '/modules/',
  '/lessons/',
  '/projects/',
  '/debugging/',
  '/resources/',
];

const urls = [
  ...staticPages,
  ...lessons.map((lesson) => `/lessons/${lesson.slug}/`),
  ...projects.map((project) => `/projects/${project.slug}/`),
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${new URL(path, siteUrl).toString()}</loc>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
