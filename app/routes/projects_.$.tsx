import { useMemo } from 'react';
import { json, useLoaderData } from '@remix-run/react';
import { getMDXComponent } from 'mdx-bundler/client/index.js';
import { getProject, type Frontmatter } from '~/utilities/project.server';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { ArticleLayout } from '~/components/ArticleLayout';
import { Layout } from '~/components/Layout';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params['*'];
  if (!slug) throw new Response('Not found', { status: 404 });

  const post = await getProject(slug);
  if (post) {
    const { frontmatter, code } = post;

    console.log(post);
    return json({ frontmatter, code });
  } else {
    throw new Response('Not found', { status: 404 });
  }
};

function PostHeader(props: { frontmatter: Frontmatter }) {
  const { frontmatter } = props;

  // We can implement whatever we want here
  return <>{JSON.stringify(frontmatter, null, 2)}</>;
}

export default function Project() {
  const { code, frontmatter } = useLoaderData<typeof loader>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <ArticleLayout article={frontmatter}>
        <Component />
      </ArticleLayout>
    </Layout>
  );
}
