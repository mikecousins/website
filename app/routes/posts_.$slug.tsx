import { json, type LoaderFunction } from '@remix-run/node';
import { type MetaFunction, useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Post',
    },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  console.log(
    `https://github-md.com/mikecousins/website/main/app/data/posts/${params.slug}.md`
  );

  const postData = await fetch(
    `https://github-md.com/mikecousins/website/main/app/data/posts/${params.slug}.md`
  ).then((res) => res.json());
  console.log(postData);

  return json({ html: postData.html, title: postData.attributes.meta.title });
};

export default function Post() {
  const { title, html } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <Container>
        <h1 className="text-4xl font-bold font-serif my-8">{title}</h1>
        <article className="prose text-white w-full">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Container>
    </Layout>
  );
}
