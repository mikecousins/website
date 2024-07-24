import { json, type LoaderFunction } from '@remix-run/node';
import { type MetaFunction, useLoaderData } from '@remix-run/react';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import invariant from 'tiny-invariant';
import { PostLayout } from '~/components/PostLayout';
import { Layout } from '~/components/Layout';
import { getPost } from '~/utilities/post.server';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Post',
    },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  invariant(slug, 'Slug is required');

  const post = await getPost(slug);
  invariant(post, 'Post not found');

  const { frontmatter, code } = post;
  return json({ frontmatter, code });
};

export default function Post() {
  const { code, frontmatter } = useLoaderData<typeof loader>();
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout>
      <PostLayout article={frontmatter}>
        <Component />
      </PostLayout>
    </Layout>
  );
}
