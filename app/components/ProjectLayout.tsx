import { Container } from './Container';
import { Prose } from '~/components/Prose';
import { Link } from 'react-router';
import { formatDate } from 'date-fns';
import { Badge } from './catalyst/badge';

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectLayout({
  project,
  children,
}: {
  project: any;
  back?: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            to="/projects"
            aria-label="Go back to articles"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </Link>
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {project.meta.role} at {project.meta.company}
              </h1>
              <time
                dateTime={project.meta.startDate}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span>
                  {formatDate(project.meta.startDate, 'yyyy')}
                </span>
              </time>
              <div className="flex gap-2 mt-2">
                {project.meta.tags.map((tag: string) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
}
