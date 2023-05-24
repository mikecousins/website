import { json } from '@remix-run/node'; // or cloudflare/deno
import { Link, V2_MetaFunction, useLoaderData } from '@remix-run/react';
import { compareAsc, format, parseISO } from 'date-fns';
import fs from 'fs/promises';
import matter from 'gray-matter';
import Layout from '~/layouts';

// import all of the markkdown files so they are included in the build
/* eslint-disable @typescript-eslint/no-unused-vars */
import twoDown from './data/posts/2-down.md';
import twoYears from './data/posts/2-years.md';
import threeMonths from './data/posts/3-months.md';
import fiveYearsCured from './data/posts/5-years-cured.md';
import sixMonths from './data/posts/6-months.md';
import cancerFree from './data/posts/cancer-free.md';
import catScan from './data/posts/cat-scan.md';
import chemo from './data/posts/chemo-1.md';
import confirmation from './data/posts/confirmation.md';
/* eslint-enable @typescript-eslint/no-unused-vars */

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Posts',
    },
  ];
};

export async function loader() {
  const postFolder = await fs.readdir('./app/data/posts');
  const posts = await Promise.all(
    postFolder.map(async (file) => {
      const post = await fs.readFile(`./app/data/posts/${file}`);
      const parsed = matter(post);
      return { ...parsed.data.meta };
    })
  );

  return json(posts);
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <Layout>
      <h1 className="text-4xl font-bold font-serif my-8">Cancer Journey</h1>
      <div className="flex flex-col gap-4">
        {posts
          .sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)))
          .map((post) => (
            <div key={post.slug}>
              <Link
                to={post.slug}
                className="hover:underline decoration-orange-500 underline-offset-4"
              >
                <span>{post.title}</span>
                <span className="float-right text-gray-600 italic">
                  {format(parseISO(post.date), 'yyyy-MM-dd')}
                </span>
              </Link>
              {post.description ? <p>{post.description}</p> : null}
            </div>
          ))}
      </div>
    </Layout>
  );
}
