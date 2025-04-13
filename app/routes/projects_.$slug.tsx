import { useMemo } from 'react';
import invariant from 'tiny-invariant';
import { getMDXComponent } from 'mdx-bundler/client';
import { getProject, type Frontmatter } from '~/utilities/project.server';
import { Layout } from '~/components/Layout';
import { ProjectLayout } from '~/components/ProjectLayout';
import type { Route } from './+types/projects_.$slug';

type Project = Frontmatter & {
  startDate: string;
  endDate?: string;
}

export const meta = ({ data }: Route.MetaArgs) => {
  return [
    {
      title: `Mike Cousins - ${data?.frontmatter.meta.company}`,
    },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { slug } = params;
  invariant(slug, 'Slug is required');

  const post = await getProject(slug);
  invariant(post, 'Post not found');

  const { frontmatter, code } = post;
  return { frontmatter, code };
};

const Project = ({ loaderData }: Route.ComponentProps) => {
  const { code, frontmatter } = loaderData;
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
