import { json } from '@remix-run/node'; // or cloudflare/deno
import { Link, useLoaderData } from '@remix-run/react';
import { compareAsc, parseISO } from 'date-fns';

import * as twoDown from '../data/posts/2-down.md';
import * as twoYears from '../data/posts/2-years.md';
import * as threeMonths from '../data/posts/3-months.md';
import * as fiveYears from '../data/posts/5-years-cured.md';
import * as sixMonth from '../data/posts/6-months.md';
import * as nineMonths from '../data/posts/9-months-clean.md';
import * as sixteenMonthsDelayed from '../data/posts/16-month-tests-delayed.md';
import * as sixteenMonths from '../data/posts/16-months.md';
import * as fiveTwelve from '../data/posts/512.md';
import * as sevenTwelve from '../data/posts/712.md';
import * as aLump from '../data/posts/a-lump.md';
import * as aWildWeekend from '../data/posts/a-wild-weekend.md';
import * as aYearLater from '../data/posts/a-year-later.md';
import * as afterChemo from '../data/posts/after-chemo.md';
import * as drGillis1 from '../data/posts/dr-gillis-1.md';
import * as drGillis2 from '../data/posts/dr-gillis-2.md';
import * as fasting from '../data/posts/fasting.md';
import * as finished from '../data/posts/finished-but-crying.md';
import * as firstVisit from '../data/posts/first-visit-to-tom-baker.md';

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
    postFromModule(fiveYears),
    postFromModule(sixMonth),
    postFromModule(nineMonths),
    postFromModule(sixteenMonthsDelayed),
    postFromModule(sixteenMonths),
    postFromModule(fiveTwelve),
    postFromModule(sevenTwelve),
    postFromModule(aLump),
    postFromModule(aWildWeekend),
    postFromModule(aYearLater),
    postFromModule(afterChemo),
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
