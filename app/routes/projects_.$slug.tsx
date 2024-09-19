import { useMemo } from 'react';
import { json, useLoaderData, type MetaFunction } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getMDXComponent } from 'mdx-bundler/client';
import { getProject, type Frontmatter } from '~/utilities/project.server';
import { Layout } from '~/components/Layout';
import { ProjectLayout } from '~/components/ProjectLayout';

type Project = Frontmatter & {
  startDate: string;
  endDate?: string;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: `Mike Cousins - ${data?.frontmatter.meta.company}`,
    },
  ];
};

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
      <ProjectLayout project={frontmatter} back="/projects">
        <Component />
      </ProjectLayout>
    </Layout>
  );
};

export default Project;
