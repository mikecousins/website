import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { Layout } from '~/components/Layout';
import { Container } from '~/components/Container';
import { GitHubIcon, LinkedInIcon } from '~/components/SocialIcons';
import image1 from '../images/elkvtc.jpg';
import image2 from '../images/jaspersunset.jpg';
import image3 from '../images/frostleaf.jpg';
import image4 from '../images/goldstreamfalls.jpg';
import image5 from '../images/glass.jpg';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        to={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length]
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins',
    },
    { name: 'description', content: 'The personal site of Mike Cousins' },
  ];
};

const Index = () => (
  <Layout>
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Technology leader, architect and developer.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Software professional specializing in front end development, UX,
          architecture and team leadership. Early-stage startup junkie.
          Fractional CTO. Contract mercenary. React, Typescript, Remix, and
          Tailwind. Crafting modern, simple, user-focused software.
        </p>
        <div className="mt-6 flex gap-6">
          <SocialLink
            href="https://github.com/mikecousins"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="https://www.linkedin.com/in/mikecousins/"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </Container>
    <Photos />
  </Layout>
);

export default Index;
