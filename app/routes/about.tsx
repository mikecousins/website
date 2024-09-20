import { Link, type MetaFunction } from '@remix-run/react';
import clsx from 'clsx';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';
import {
  CalendarIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  ThreadsIcon,
  XIcon,
} from '~/components/SocialIcons';
import portraitImage from '~/images/elkvtc.jpg';

const SocialLink = ({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) => (
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

const MailIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
    />
  </svg>
);

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - About',
    },
  ];
};

const About = () => {
  return (
    <Layout>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I’m Mike Cousins. I live in Calgary, where I help companies start
              and scale.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I started my life in the shadow of my father, a career software
                developer and ravenous learner. He inspired my love of computers
                and all kinds of technology. I had a computer in my bedroom by
                the time I was 6, and I began exploring it with day and night.
              </p>
              <p>
                After school I set off on a mission to work in as many different
                industries as possible. This is one of my favourite aspects of
                technology, the ability to work in any industry. Since then I
                have worked in telecommunications, oil and gas, healthcare,
                finance, energy, and many more.
              </p>
              <p>
                I have also done many different roles at those companies from
                being a pure software developer, to architecting and tech
                leadership, all the way up to CTO/VP roles. I still don't know
                what I like best, so I keep doing them all. Maybe when I get
                older I'll figure it out.
              </p>
              <p>
                Along the way I have realized that I love small companies, as I
                find that I get the most opportunities to make a real impact. I
                usually get a widely defined role where I get to touch a lot of
                the business. True happiness for me is learning about a new
                business, a new industry, meeting new people, and getting to
                solve a fun problem.
              </p>
              <p>
                Today, I am tackling as many problems as I can get my hands on.
                I usually have a few things going on at all times to keep me
                busy.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://x.com/mikecousins" icon={XIcon}>
                Follow on X
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/mikecousins"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/mikecousins"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/mikecousins"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://www.threads.net/@mikecousins"
                icon={ThreadsIcon}
                className="mt-4"
              >
                Follow on Threads
              </SocialLink>
              <SocialLink
                href="mailto:mikecousins@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                mikecousins@gmail.com
              </SocialLink>
              <SocialLink
                href="https://cal.com/mikecousins"
                icon={CalendarIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Book a meeting with me
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default About;
