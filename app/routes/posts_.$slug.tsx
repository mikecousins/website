import { LoaderArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);

  const file = await fs.readFile(
    './app/routes/posts/' + params.slug + '.md',
    'utf8'
  );
  invariant(file, `File not found: ${params.slug}`);

  const parsed = matter(file);

  const html = marked.parse(parsed.content);

  return json({ html, title: parsed.data.meta.title });
};

export default function Post() {
  const { title, html } = useLoaderData<typeof loader>();
  return (
    <article className="prose">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
