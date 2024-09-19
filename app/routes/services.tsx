import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Services',
    },
  ];
};

const Services = () => (
  <Layout>
    <Container className="mt-16 sm:mt-32">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Services
      </h1>
      <div className="mt-6 space-y-7">
        <p>
          I am available for contract software development, fractional CTO
          engagements, and technical consulting. Check out the{' '}
          <Link
            to="/projects"
            className="underline text-zinc-800 dark:text-zinc-100 decoration-cyan-400"
          >
            projects
          </Link>{' '}
          that I have done. I have experience in many stages of companies and in
          many different industries.
        </p>
        <p>Reach out if you would like to work together!</p>
      </div>
    </Container>
  </Layout>
);

export default Services;
