export const SITE = {
  url: 'https://mikecousins.com',
  name: 'Mike Cousins',
  // Shown for the home page and used as the suffix on every other page.
  homeTitle: 'Mike Cousins — Architect, Developer & Fractional CTO in Calgary',
  description:
    'Mike Cousins is a Calgary-based software architect, developer, and fractional CTO with 20+ years of experience helping companies start and scale.',
  author: 'Mike Cousins',
  email: 'mike@cousins.ai',
  locale: 'en_CA',
  defaultOgImage: '/og-default.png',
  sameAs: [
    'https://github.com/mikecousins',
    'https://www.linkedin.com/in/mikecousins',
  ],
} as const;

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export const personJsonLd = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE.author,
  url: `${SITE.url}/`,
  email: `mailto:${SITE.email}`,
  jobTitle: 'Software Architect, Developer & Fractional CTO',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  sameAs: SITE.sameAs,
};

export const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE.name,
  url: `${SITE.url}/`,
  publisher: { '@id': PERSON_ID },
};

/** Compose a full <title>. Pass no pageTitle for the home page. */
export function pageTitle(title?: string): string {
  return title ? `${title} — ${SITE.name}` : SITE.homeTitle;
}

/**
 * Canonical URL for a pathname. Netlify 301s bare paths to the
 * trailing-slash form, so canonicals use trailing slashes (except for
 * file-like paths such as /rss.xml).
 */
export function canonicalUrl(pathname: string): string {
  let path = pathname;
  const isFile = /\.[a-z0-9]+$/i.test(path);
  if (!isFile && !path.endsWith('/')) path += '/';
  return new URL(path, SITE.url).href;
}

/**
 * Derive a plain-text description from markdown body text.
 * Strips common markdown syntax and truncates at a word boundary.
 */
export function excerpt(markdown: string, maxLength = 160): string {
  const text = markdown
    // MDX import/export statements
    .replace(/^(import|export)\s.*$/gm, ' ')
    // code blocks and inline code
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]*)`/g, '$1')
    // images, then links (keep link text)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // headings, blockquotes, list markers
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    // emphasis
    .replace(/(\*\*|__|\*|_)(.*?)\1/g, '$2')
    // html tags
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}
