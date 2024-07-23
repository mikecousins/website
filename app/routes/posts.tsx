import { json } from '@remix-run/node';
import { Link, type MetaFunction, useLoaderData } from '@remix-run/react';
import { compareAsc, format, parseISO } from 'date-fns';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';
import { getPosts } from '~/utilities/post.server';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Cancer Posts',
    },
  ];
};

export async function loader() {
  const postList = await getPosts();

  return json(
    postList.sort((a, b) =>
      compareAsc(a.frontmatter.meta.date, b.frontmatter.meta.date)
    )
  );
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <Layout>
      <Container>
        <h1 className="text-4xl font-bold font-serif my-8">Cancer Journey</h1>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link
                to={post.slug}
                className="hover:underline decoration-orange-500 underline-offset-4"
              >
                <span>{post.frontmatter.meta.title}</span>
                <span className="float-right text-gray-600 italic">
                  {format(
                    parseISO(post.frontmatter.meta.date),
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
