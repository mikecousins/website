import { json } from '@remix-run/node'; // or cloudflare/deno
import { Link, useLoaderData } from '@remix-run/react';
import { compareAsc, parseISO } from 'date-fns';
import fs from 'fs/promises';
import matter from 'gray-matter';

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
    <ul>
      {posts
        .sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)))
        .map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? <p>{post.description}</p> : null}
          </li>
        ))}
    </ul>
  );
}
