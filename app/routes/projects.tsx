import { compareAsc, format } from 'date-fns';
import { Badge } from '~/components/catalyst/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/catalyst/table';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';
import { getProjects } from '~/utilities/project.server';
import type { Route } from './+types/projects';

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Projects',
    },
  ];
};

export const loader = async () => {
  const projectList = await getProjects();

  return projectList.sort((a, b) =>
    compareAsc(a.frontmatter.meta.startDate, b.frontmatter.meta.startDate)
  );
};

const Projects = ({ loaderData }: Route.ComponentProps) => {
  const posts = loaderData;

  return (
    <Layout>
      <Container className="mt-16 sm:mt-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Projects
        </h1>
        <Table className="mt-8">
          <TableHead>
            <TableRow>
              <TableHeader>Company</TableHeader>
              <TableHeader>Role</TableHeader>
              <TableHeader>Tags</TableHeader>
              <TableHeader>Date</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts
              .sort((a, b) =>
                a.frontmatter.meta.startDate < b.frontmatter.meta.startDate
                  ? 1
                  : -1
              )
              .map((post) => (
                <TableRow key={post.slug} href={post.slug}>
                  <TableCell className="font-medium">
                    {post.frontmatter.meta.company}
                  </TableCell>
                  <TableCell className="font-medium">
                    {post.frontmatter.meta.role}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {post.frontmatter.meta.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-500">
                    {format(post.frontmatter.meta.startDate,
                      'MMMM do, yyyy'
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Container>
    </Layout>
  );
};

export default Projects;
