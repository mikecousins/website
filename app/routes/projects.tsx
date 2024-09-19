import { json } from '@remix-run/node';
import { Link, type MetaFunction, useLoaderData } from '@remix-run/react';
import { compareAsc, format, parseISO } from 'date-fns';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';
import { getProjects } from '~/utilities/project.server';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Projects',
    },
  ];
};

export const loader = async () => {
  const projectList = await getProjects();

  return json(
    projectList.sort((a, b) =>
      compareAsc(a.frontmatter.meta.startDate, b.frontmatter.meta.startDate)
    )
  );
}

const Projects = () => {
  const posts = useLoaderData<typeof loader>();

  return (
    <Layout>
      <Container className="mt-16 sm:mt-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Projects
        </h1>
        <div className="flex flex-col gap-4 mt-4">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link
                to={post.slug}
                className="hover:underline decoration-orange-500 underline-offset-4"
              >
                <span>{post.frontmatter.meta.company} - {post.frontmatter.meta.role}</span>
                <span className="float-right text-gray-600 italic">
                  {format(
                    parseISO(post.frontmatter.meta.startDate),
                    'MMMM do, yyyy'
                  )}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default Projects;