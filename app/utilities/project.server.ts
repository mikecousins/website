import parseFrontMatter from 'front-matter';
import { readFile, readdir } from './fs.server';
import path from 'path';
import { bundleMDX } from './mdx.server';

export type Frontmatter = {
  meta: {
    title: string;
    startDate: Date;
    endDate?: Date;
    tags: string[];
    company: string;
    role: string;
  };
};

/**
 * Get the React component, and frontmatter JSON for a given slug
 * @param slug
 * @returns
 */
export async function getProject(slug: string) {
  const filePath = path.join(process.cwd(), 'app', 'data', 'projects', slug + '.mdx');

  const [source] = await Promise.all([readFile(filePath, 'utf-8')]);

  // Dyamically import all the rehype/remark plugins we are using
  const [rehypeHighlight, remarkGfm] = await Promise.all([
    import('rehype-highlight').then((mod) => mod.default),
    import('remark-gfm').then((mod) => mod.default),
  ]);

  const post = await bundleMDX<Frontmatter>({
    source,
    cwd: process.cwd(),

    esbuildOptions: (options) => {
      // Configuration to allow image loading
      // https://github.com/kentcdodds/mdx-bundler#image-bundling
      options.loader = {
        ...options.loader,
        '.png': 'dataurl',
        '.gif': 'dataurl',
      };

      return options;
    },
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
      ];
      return options;
    },
  });

  return {
    ...post,
    frontmatter: {
      ...post.frontmatter,
    },
  };
}

/**
 * Get all frontmatter for all projects
 * @returns
 */
export async function getProjects() {
  const filePath = path.join(process.cwd(), 'app', 'data', 'projects');

  const postsPath = await readdir(filePath, {
    withFileTypes: true,
  });

  const posts = await Promise.all(
    postsPath.map(async (dirent) => {
      const fPath = path.join(filePath, dirent.name);
      const [file] = await Promise.all([readFile(fPath)]);
      const frontmatter = parseFrontMatter(file.toString());
      const attributes = frontmatter.attributes as Frontmatter;

      return {
        slug: dirent.name.replace(/\.mdx/, ''),
        frontmatter: {
          ...attributes,
        },
      };
    })
  );
  return posts;
}
