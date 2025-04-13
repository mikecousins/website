import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import invariant from 'tiny-invariant';
import { PostLayout } from '~/components/PostLayout';
import { Layout } from '~/components/Layout';
import { getPost } from '~/utilities/post.server';
import type { Route } from './+types/posts_.$slug';

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Post',
    },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { slug } = params;
  invariant(slug, 'Slug is required');

  const post = await getPost(slug);
  invariant(post, 'Post not found');

  const { frontmatter, code } = post;
  return { frontmatter, code };
};

export default function Post({ loaderData }: Route.ComponentProps) {
  const { code, frontmatter } = loaderData;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout>
      <PostLayout article={frontmatter}>
        <Component />
      </PostLayout>
    </Layout>
  );
}
