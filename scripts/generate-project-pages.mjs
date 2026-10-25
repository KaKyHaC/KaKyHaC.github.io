import {readFile,mkdir,writeFile,unlink} from 'node:fs/promises';
import {resolve} from 'node:path';
import projects from '../locales/en/projects.js';

const root = resolve(import.meta.dirname, '..');
const template = await readFile(resolve(root, 'dist/project.html'), 'utf8');
const attr = value => String(value ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const today = new Date().toISOString().split('T')[0];

const sitemapUrls = [
  `  <url>
    <loc>https://dvbarannik.github.io/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
];

for (const project of projects) {
  const dir = resolve(root, 'dist/projects', project.id);
  await mkdir(dir, { recursive: true });

  const canonicalUrl = `https://dvbarannik.github.io/projects/${project.id}/`;
  const image = project.banner
    ? `https://dvbarannik.github.io/${project.banner}`
    : project.icon
      ? `https://dvbarannik.github.io/${project.icon}`
      : 'https://dvbarannik.github.io/images/profile_photo.jpg';

  let schemaType = 'SoftwareApplication';
  let appCategory = 'DeveloperApplication';
  let os = undefined;

  if (project.domain === 'mobile' || project.playStoreLink) {
    appCategory = 'MobileApplication';
    os = 'Android';
  } else if (project.domain === 'web' || project.liveLink) {
    schemaType = 'WebApplication';
    appCategory = 'WebApplication';
  }

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: project.title,
    description: project.description,
    url: canonicalUrl,
    image,
    author: {
      '@type': 'Person',
      name: 'Dmytro Barannik',
      url: 'https://dvbarannik.github.io/'
    },
    applicationCategory: appCategory
  };

  if (os) projectSchema.operatingSystem = os;
  if (project.technologies?.length) projectSchema.keywords = project.technologies.join(', ');
  if (project.playStoreLink) projectSchema.installUrl = project.playStoreLink;
  if (project.githubLink) projectSchema.codeRepository = project.githubLink;
  if (project.liveLink) projectSchema.sameAs = project.liveLink;

  const schemaTag = `<script type="application/ld+json">\n${JSON.stringify(projectSchema, null, 2)}\n  </script>`;

  const html = template
    .replaceAll('__PROJECT_TITLE__', attr(project.title))
    .replaceAll('__PROJECT_DESCRIPTION__', attr(project.description))
    .replaceAll('__PROJECT_IMAGE__', attr(image))
    .replaceAll('__PROJECT_CANONICAL__', canonicalUrl)
    .replaceAll('<!-- __PROJECT_SCHEMA__ -->', schemaTag)
    .replaceAll('__PROJECT_SCHEMA__', schemaTag);

  await writeFile(resolve(dir, 'index.html'), html);

  sitemapUrls.push(`  <url>
    <loc>${canonicalUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
}

await unlink(resolve(root, 'dist/project.html'));

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\n')}
</urlset>
`;

await writeFile(resolve(root, 'dist/sitemap.xml'), sitemapXml, 'utf8');
await writeFile(resolve(root, 'public/sitemap.xml'), sitemapXml, 'utf8');

console.log(`Generated ${projects.length} project pages and sitemap.xml.`);
