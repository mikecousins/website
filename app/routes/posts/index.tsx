import { json } from "@remix-run/node"; // or cloudflare/deno
import { Link, useLoaderData } from "@remix-run/react";

import * as postA from "./dr-gillis-1.md";

function postFromModule(mod: any) {
  return {
    ...mod.attributes.meta,
  };
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([
    postFromModule(postA),
  ]);
}

export default function Index() {
  const posts = useLoaderData();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.slug}>
          <Link to={post.slug}>*{post.title}*</Link>
          {post.description ? (
            <p>{post.description}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}