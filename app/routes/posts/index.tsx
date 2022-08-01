import { json } from '@remix-run/node'; // or cloudflare/deno
import { Link, useLoaderData } from '@remix-run/react';
import { compareAsc, parseISO } from 'date-fns';

import * as twoDown from './2-down.md';
import * as twoYears from './2-years.md';
import * as threeMonths from './3-months.md';
import * as drGillis1 from './dr-gillis-1.md';
import * as drGillis2 from './dr-gillis-2.md';
import * as fasting from './fasting.md';
import * as finished from './finished-but-crying.md';
import * as firstVisit from './first-visit-to-tom-baker.md';

type Meta = {
  title: string;
  slug: string;
  description: string;
  date: Date;
};

type Attributes = {
  meta: Meta;
};

type Module = {
  attributes: Attributes;
};

const postFromModule = (mod: Module): Meta => {
  return {
    ...mod.attributes.meta,
  };
};

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([
    postFromModule(twoDown),
    postFromModule(twoYears),
    postFromModule(threeMonths),
    postFromModule(drGillis1),
    postFromModule(drGillis2),
    postFromModule(fasting),
    postFromModule(finished),
    postFromModule(firstVisit),
  ]);
}

export default function Index() {
  const posts = useLoaderData<Meta[]>();

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
