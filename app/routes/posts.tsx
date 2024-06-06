import { json } from '@remix-run/node';
import { Link, type MetaFunction, useLoaderData } from '@remix-run/react';
import { compareAsc, format, parseISO } from 'date-fns';
import Layout from '~/layouts';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Posts',
    },
  ];
};

export async function loader() {
  const postList = await fetch(
    'https://github-md.com/mikecousins/website/main'
  ).then((res) => res.json());
  const posts = await Promise.all(
    postList.files
      .filter((post: any) => post.path !== 'README.md')
      .map(async (post: any) => {
        const postData = await fetch(
          'https://github-md.com/mikecousins/website/main/' + post.path
        ).then((res) => res.json());
        return {
          attributes: postData.attributes,
          html: postData.html,
        };
      })
  );
  return json(
    posts.sort((a, b) =>
      compareAsc(
        parseISO(a.attributes.meta.date),
        parseISO(b.attributes.meta.date)
      )
    )
  );
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <Layout>
      <h1 className="text-4xl font-bold font-serif my-8">Cancer Journey</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.attributes.meta.slug}>
            <Link
              to={post.attributes.meta.slug}
              className="hover:underline decoration-orange-500 underline-offset-4"
            >
              <span>{post.attributes.meta.title}</span>
              <span className="float-right text-gray-600 italic">
                {format(parseISO(post.attributes.meta.date), 'MMMM do, yyyy')}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
