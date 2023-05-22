import { LoaderArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import fs from 'fs/promises';
import { marked } from 'marked';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);

  const file = await fs.readFile(
    './app/routes/posts/' + params.slug + '.md',
    'utf8'
  );
  invariant(file, `File not found: ${params.slug}`);

  const html = marked(file);
  return json({ html, slug: params.slug });
};

export default function Post() {
  const { slug, html } = useLoaderData<typeof loader>();
  return (
    <div>
      {slug}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
