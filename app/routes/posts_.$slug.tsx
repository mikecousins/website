import { LoaderArgs, json } from '@remix-run/node';
import { V2_MetaFunction, useLoaderData } from '@remix-run/react';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import invariant from 'tiny-invariant';
import Layout from '~/layouts';

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Post',
    },
  ];
};

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);

  const file = await fs.readFile(`./app/data/posts/${params.slug}.md`, 'utf8');
  invariant(file, `File not found: ${params.slug}`);

  const parsed = matter(file);

  const html = marked.parse(parsed.content, {
    mangle: false,
    headerIds: false,
  });

  return json({ html, title: parsed.data.meta.title });
};

export default function Post() {
  const { title, html } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <h1 className="text-4xl font-bold font-serif my-8">{title}</h1>
      <article className="prose text-white w-full">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}
