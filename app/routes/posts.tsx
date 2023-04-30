import { json } from '@remix-run/node'; // or cloudflare/deno
import { Link, useLoaderData } from '@remix-run/react';
import { compareAsc, parseISO } from 'date-fns';

import * as twoDown from './posts/2-down.md';
import * as twoYears from './posts/2-years.md';
import * as threeMonths from './posts/3-months.md';
import * as fiveYears from './posts/5-years-cured.md';
import * as sixMonth from './posts/6-months.md';
import * as nineMonths from './posts/9-months-clean.md';
import * as sixteenMonthsDelayed from './posts/16-month-tests-delayed.md';
import * as sixteenMonths from './posts/16-months.md';
import * as fiveTwelve from './posts/512.md';
import * as sevenTwelve from './posts/712.md';
import * as aLump from './posts/a-lump.md';
import * as aWildWeekend from './posts/a-wild-weekend.md';
import * as aYearLater from './posts/a-year-later.md';
import * as afterChemo from './posts/after-chemo.md';
import * as drGillis1 from './posts/dr-gillis-1.md';
import * as drGillis2 from './posts/dr-gillis-2.md';
import * as fasting from './posts/fasting.md';
import * as finished from './posts/finished-but-crying.md';
import * as firstVisit from './posts/first-visit-to-tom-baker.md';

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
