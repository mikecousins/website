import { useMemo } from 'react';
import { json, useLoaderData } from '@remix-run/react';
import { getMDXComponent } from 'mdx-bundler/client/index.js';
import type { LoaderFunctionArgs } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getProject } from '~/utilities/project.server';
import { ArticleLayout } from '~/components/ArticleLayout';
import { Layout } from '~/components/Layout';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  invariant(slug, 'Slug is required');

  const post = await getProject(slug);
  invariant(post, 'Post not found');

  const { frontmatter, code } = post;
  return json({ frontmatter, code });
};

const Project = () => {
  const { code, frontmatter } = useLoaderData<typeof loader>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <ArticleLayout article={frontmatter} back="/projects">
        <Component />
      </ArticleLayout>
    </Layout>
  );
};

export default Project;
